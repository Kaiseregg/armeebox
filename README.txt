import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { useApp } from '../app/state'
import { fetchBarracks, submitOrder } from '../lib/api'
import { money, ranks } from '../lib/utils'

const initialCustomer = { first_name:'', last_name:'', email:'', phone:'', street:'', house_number:'', postal_code:'', city:'', country:'Schweiz' }
const initialRecipient = { delivery_type:'barracks', military_rank:'', first_name:'', last_name:'', company_text:'', platoon_text:'', unit_text:'', barracks_id:'', address_line1:'', address_line2:'', postal_code:'', city:'', country:'Schweiz', personal_message:'', sender_visible:true }

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
    setRecipient((prev) => ({ ...prev, delivery_type:'private', first_name: customer.first_name, last_name: customer.last_name, address_line1: `${customer.street} ${customer.house_number}`.trim(), postal_code: customer.postal_code, city: customer.city }))
  }, [buyerIsRecipient, customer])

  const selectedBarracks = useMemo(() => barracks.find((b) => b.id === recipient.barracks_id), [barracks, recipient.barracks_id])

  async function onSubmit(e) {
    e.preventDefault()
    setLoading(true); setError('')
    try {
      const recipientPayload = recipient.delivery_type === 'barracks' ? {
        ...recipient,
        address_line1: selectedBarracks?.line1 || '',
        address_line2: selectedBarracks?.line2 || '',
        postal_code: selectedBarracks?.postal_code || '',
        city: selectedBarracks?.city || '',
      } : recipient
      const order = await submitOrder({
        customer,
        recipient: recipientPayload,
        order: { language:'de', subtotal_chf: cartTotal, shipping_chf: 0, total_chf: cartTotal, payment_method:'pending', payment_status:'pending', order_status:'new', buyer_is_recipient: buyerIsRecipient },
        items: cart.map((item) => ({ ...item, line_total_chf: item.unit_price_chf * item.quantity })),
      })
      clearCart()
      nav(`/done/${order.id}`)
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
          <h2>Besteller / Rechnungsadresse</h2>
          <div className='formGrid two'>{['first_name','last_name','email','phone','street','house_number','postal_code','city'].map((field) => <label key={field}><span>{field}</span><input required={['first_name','last_name','email','street','postal_code','city'].includes(field)} value={customer[field]} onChange={(e) => setCustomer({ ...customer, [field]: e.target.value })}/></label>)}</div>
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
            {selectedBarracks && <div className='addressPreview'><strong>Adressvorschau</strong><pre>{`${recipient.military_rank || ''}\n${recipient.first_name} ${recipient.last_name}\nKp: ${recipient.company_text || ''}   Zug: ${recipient.platoon_text || ''}\n${selectedBarracks.line1}\n${selectedBarracks.postal_code || ''} ${selectedBarracks.city || ''}`}</pre></div>}
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
          <div className='listRow'><strong>Total</strong><strong>{money(cartTotal)}</strong></div>
          {error && <div className='errorText'>{error}</div>}
          <button className='btn block' disabled={loading}>{loading ? 'Speichert…' : 'Bestellung abschliessen'}</button>
        </section>
      </form>
    </Layout>
  )
}
