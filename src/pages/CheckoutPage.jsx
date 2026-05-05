import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { useApp } from '../app/state'
import { fetchBarracks, submitOrder } from '../lib/api'
import { money, ranks } from '../lib/utils'

const initialCustomer = { first_name:'', last_name:'', email:'', phone:'', street:'', house_number:'', postal_code:'', city:'', country:'Schweiz' }
const initialRecipient = { delivery_type:'barracks', military_rank:'', first_name:'', last_name:'', company_text:'', platoon_text:'', unit_text:'', barracks_id:'', address_line1:'', address_line2:'', postal_code:'', city:'', country:'Schweiz', personal_message:'', sender_visible:true }
const PRIVATE_SHIPPING_CHF = 9

function clean(value) {
  return String(value || '').trim()
}

function getBarracksAddressLines(barracks) {
  if (!barracks) return []
  return [
    barracks.label,
    barracks.line1,
    barracks.line2,
    `${barracks.postal_code || ''} ${barracks.city || ''}`.trim(),
    barracks.country,
  ].filter(Boolean)
}

export default function CheckoutPage() {
  const nav = useNavigate()
  const { cart, cartTotal, clearCart } = useApp()
  const [customer, setCustomer] = useState(initialCustomer)
  const [recipient, setRecipient] = useState(initialRecipient)
  const [buyerIsRecipient, setBuyerIsRecipient] = useState(false)
  const [barracks, setBarracks] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => { fetchBarracks().then(setBarracks).catch((err) => setError(err.message)) }, [])
  useEffect(() => {
    if (!buyerIsRecipient) return
    setRecipient((prev) => ({
      ...prev,
      delivery_type:'private',
      first_name: customer.first_name,
      last_name: customer.last_name,
      address_line1: `${customer.street} ${customer.house_number}`.trim(),
      postal_code: customer.postal_code,
      city: customer.city,
      country: customer.country || 'Schweiz',
    }))
  }, [buyerIsRecipient, customer])

  const selectedBarracks = useMemo(() => barracks.find((b) => String(b.id) === String(recipient.barracks_id)), [barracks, recipient.barracks_id])
  const shippingCost = recipient.delivery_type === 'private' ? PRIVATE_SHIPPING_CHF : 0
  const finalTotal = cartTotal + shippingCost

  async function onSubmit(e) {
    e.preventDefault()
    if (loading) return
    setLoading(true)
    setError('')

    try {
      if (!cart.length) throw new Error('Dein Warenkorb ist leer.')
      if (!clean(customer.email)) throw new Error('Bitte E-Mail-Adresse eingeben.')
      if (recipient.delivery_type === 'barracks' && !selectedBarracks) throw new Error('Bitte Kaserne auswählen.')

      const barracksAddress = getBarracksAddressLines(selectedBarracks)
      const recipientName = `${clean(recipient.first_name)} ${clean(recipient.last_name)}`.trim()
      const customerName = `${clean(customer.first_name)} ${clean(customer.last_name)}`.trim()
      const customerStreet = `${clean(customer.street)} ${clean(customer.house_number)}`.trim()

      const orderMeta = recipient.delivery_type === 'private'
        ? {
            privateName: recipientName,
            privateStreet: clean(recipient.address_line1),
            privateZip: clean(recipient.postal_code),
            privateCity: clean(recipient.city),
            privateEmail: clean(customer.email),
            privatePhone: clean(customer.phone),
          }
        : {
            soldierRank: clean(recipient.military_rank),
            soldierFirstName: clean(recipient.first_name),
            soldierLastName: clean(recipient.last_name),
            soldierKp: clean(recipient.company_text),
            soldierZug: clean(recipient.platoon_text),
            soldierUnit: clean(recipient.unit_text),
            barracksId: recipient.barracks_id,
            barracksLabel: selectedBarracks?.label || '',
            barracksAddress,
            senderName: customerName,
            senderStreet: customerStreet,
            senderZip: `${clean(customer.postal_code)} ${clean(customer.city)}`.trim(),
            senderEmail: clean(customer.email),
            senderPhone: clean(customer.phone),
            message: clean(recipient.personal_message),
          }

      const payload = {
        lang: 'de',
        customer_email: clean(customer.email),
        shipping_method: recipient.delivery_type === 'private' ? 'private' : 'barracks',
        shipping_cost: shippingCost,
        subtotal: cartTotal,
        total: finalTotal,
        item_count: cart.reduce((sum, item) => sum + Number(item.quantity || 0), 0),
        barracks_label: selectedBarracks?.label || null,
        recipient_name: recipientName || customerName,
        order_meta: orderMeta,
        items: cart.map((item) => {
          const unitPrice = Number(item.unit_price_chf ?? item.unit_price ?? item.price ?? 0)
          const quantity = Number(item.quantity || 1)
          const totalPrice = unitPrice * quantity
          return {
            product_id: item.product_id || null,
            slot_code: item.slot_code || (item.slot_number ? String(item.slot_number).padStart(2, '0') : null),
            slot_number: item.slot_number,
            product_name: item.product_name || item.name || 'Produkt',
            quantity,
            unit_price: unitPrice,
            total_price: totalPrice,
            unit_price_chf: unitPrice,
            total_price_chf: totalPrice,
            line_total_chf: totalPrice,
          }
        }),
      }

      const result = await submitOrder(payload)
      const orderNumber = result?.order?.order_number || result?.order?.id || 'ok'

      clearCart()
      setCustomer(initialCustomer)
      setRecipient(initialRecipient)
      setBuyerIsRecipient(false)
      nav(`/done/${encodeURIComponent(orderNumber)}`, { replace: true, state: { orderNumber } })
    } catch (err) {
      setError(err.message || 'Bestellung konnte nicht gespeichert werden.')
    } finally {
      setLoading(false)
    }
  }

  if (!cart.length) return <Layout><section className='panel'><p>Dein Warenkorb ist leer.</p></section></Layout>

  return (
    <Layout>
      <Seo title='ARMEEBOX – Checkout' description='Checkout mit Besteller, Empfänger, Kaserne oder Privat.' />
      <form className='checkoutGrid' onSubmit={onSubmit}>
        <section className='panel stack'>
          <h2>Besteller / Absender</h2>
          <div className='formGrid two'>{['first_name','last_name','email','phone','street','house_number','postal_code','city'].map((field) => <label key={field}><span>{field}</span><input type={field === 'email' ? 'email' : 'text'} required={['first_name','last_name','email','street','postal_code','city'].includes(field)} value={customer[field]} onChange={(e) => setCustomer({ ...customer, [field]: e.target.value })}/></label>)}</div>
          <label className='checkLine'><input type='checkbox' checked={buyerIsRecipient} onChange={(e)=>setBuyerIsRecipient(e.target.checked)} />Ich bin selbst der Empfänger</label>
        </section>
        <section className='panel stack'>
          <h2>Empfänger / Lieferadresse</h2>
          <div className='tabLine'>
            <button type='button' className={`tabButton ${recipient.delivery_type === 'barracks' ? 'active':''}`} onClick={() => setRecipient({ ...recipient, delivery_type:'barracks' })}>Kaserne</button>
            <button type='button' className={`tabButton ${recipient.delivery_type === 'private' ? 'active':''}`} onClick={() => setRecipient({ ...recipient, delivery_type:'private' })}>Privat</button>
          </div>
          {recipient.delivery_type === 'barracks' ? <>
            <label><span>Kaserne</span><select required value={recipient.barracks_id} onChange={(e)=>setRecipient({ ...recipient, barracks_id:e.target.value })}><option value=''>Bitte wählen</option>{barracks.map((b)=><option key={b.id} value={b.id}>{b.label} · {b.city}</option>)}</select></label>
            <label><span>Militärischer Rang</span><select value={recipient.military_rank} onChange={(e)=>setRecipient({ ...recipient, military_rank:e.target.value })}><option value=''>Bitte wählen</option>{ranks.map((rank)=><option key={rank} value={rank}>{rank}</option>)}</select></label>
            <div className='formGrid two'>
              <label><span>Vorname</span><input required value={recipient.first_name} onChange={(e)=>setRecipient({ ...recipient, first_name:e.target.value })}/></label>
              <label><span>Nachname</span><input required value={recipient.last_name} onChange={(e)=>setRecipient({ ...recipient, last_name:e.target.value })}/></label>
            </div>
            <div className='formGrid two'>
              <label><span>Kompanie</span><input value={recipient.company_text} onChange={(e)=>setRecipient({ ...recipient, company_text:e.target.value })}/></label>
              <label><span>Zug</span><input value={recipient.platoon_text} onChange={(e)=>setRecipient({ ...recipient, platoon_text:e.target.value })}/></label>
            </div>
            <label><span>Persönlicher Text</span><textarea rows='4' value={recipient.personal_message} onChange={(e)=>setRecipient({ ...recipient, personal_message:e.target.value })} /></label>
            {selectedBarracks && <div className='addressPreview'><strong>Adressvorschau</strong><pre>{`${recipient.military_rank || ''}\n${recipient.first_name} ${recipient.last_name}\nKp: ${recipient.company_text || ''}   Zug: ${recipient.platoon_text || ''}\n${selectedBarracks.line1 || ''}\n${selectedBarracks.postal_code || ''} ${selectedBarracks.city || ''}`}</pre></div>}
          </> : <>
            <div className='formGrid two'>
              <label><span>Vorname</span><input required value={recipient.first_name} onChange={(e)=>setRecipient({ ...recipient, first_name:e.target.value })}/></label>
              <label><span>Nachname</span><input required value={recipient.last_name} onChange={(e)=>setRecipient({ ...recipient, last_name:e.target.value })}/></label>
            </div>
            <label><span>Adresse</span><input required value={recipient.address_line1} onChange={(e)=>setRecipient({ ...recipient, address_line1:e.target.value })}/></label>
            <div className='formGrid two'>
              <label><span>PLZ</span><input required value={recipient.postal_code} onChange={(e)=>setRecipient({ ...recipient, postal_code:e.target.value })}/></label>
              <label><span>Ort</span><input required value={recipient.city} onChange={(e)=>setRecipient({ ...recipient, city:e.target.value })}/></label>
            </div>
          </>}
          <div className='machineInfoCard'><span>Zahlung vorbereitet</span><strong>TWINT · Debit · Kredit</strong></div>
          <div className='listRow'><span>Zwischentotal</span><strong>{money(cartTotal)}</strong></div>
          <div className='listRow'><span>Versand</span><strong>{shippingCost ? money(shippingCost) : 'Gratis'}</strong></div>
          <div className='listRow'><strong>Total</strong><strong>{money(finalTotal)}</strong></div>
          {error && <div className='errorText'>{error}</div>}
          <button className='btn block' disabled={loading}>{loading ? 'Bestellung wird gesendet…' : 'Bestellung abschliessen'}</button>
        </section>
      </form>
    </Layout>
  )
}
