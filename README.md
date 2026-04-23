import React, { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { fetchSlots } from '../lib/api'
import { money } from '../lib/utils'
import { useApp } from '../app/state'

export default function ShopPage() {
  const [slots, setSlots] = useState([])
  const [selected, setSelected] = useState(null)
  const [qty, setQty] = useState(1)
  const [error, setError] = useState('')
  const { addToCart, cartCount, cartTotal } = useApp()

  useEffect(() => {
    fetchSlots().then(setSlots).catch((err) => setError(err.message))
  }, [])

  const fullSlots = useMemo(() => Array.from({ length: 15 }, (_, i) => slots.find((s) => s.slot_number === i + 1) || { slot_number: i + 1, is_active: false, product: null }), [slots])
  const rows = [fullSlots.slice(0,3), fullSlots.slice(3,6), fullSlots.slice(6,9), fullSlots.slice(9,12), fullSlots.slice(12,15)]

  function addNow() {
    if (!selected?.product) return
    addToCart({
      slot_number: selected.slot_number,
      product_id: selected.product.id,
      product_name: selected.product.name_de,
      unit_price_chf: Number(selected.product.price_chf),
      quantity: qty,
    })
    setSelected(null)
    setQty(1)
  }

  return (
    <Layout>
      <Seo title='ARMEEBOX – Shop' description='Virtueller Automat für Fresspäckli an Soldaten und Rekruten.' />
      <section className='machineIntro panel'>
        <div><div className='eyebrow'>Virtueller Automat</div><h1>Fresspäckli bestellen</h1><p>15 Slots als klare Standardansicht. Spätere Skalierung auf 20 oder 25 Slots ist in V1 vorbereitet.</p></div>
        <div className='machineIntroStats'>
          <div className='statChip'><span>Slots</span><strong>15</strong></div>
          <div className='statChip'><span>Warenkorb</span><strong>{cartCount}</strong></div>
          <div className='statChip'><span>Total</span><strong>{money(cartTotal)}</strong></div>
        </div>
      </section>
      {error && <div className='panel errorText'>{error}</div>}
      <section className='machineWrap'>
        <div className='machineShell'>
          <div className='machineHeader'>
            <div><div className='machineBrand'>ARMEEBOX</div><div className='machineSub'>Hypermoderner Bestellautomat</div></div>
            <div className='machineDisplay'><span>Online</span><strong>{money(cartTotal)}</strong></div>
          </div>
          <div className='machineBody'>
            <div className='machineShelves'>
              {rows.map((row, rowIndex) => <div className='machineShelf' key={rowIndex}><div className='shelfRail'/><div className='shelfSlots'>{row.map((slot) => {
                const active = slot?.product && slot?.is_active
                return <button key={slot.slot_number} className={`machineSlot ${active ? 'isActive' : 'isEmpty'}`} onClick={() => active && (setSelected(slot), setQty(1))}>
                  <div className='slotBadge'>#{slot.slot_number}</div>
                  <div className='slotVisual'>{active ? <div className='slotPackshot'>{slot.product.name_de.slice(0,2).toUpperCase()}</div> : <div className='slotEmptyPlate'>Leer</div>}</div>
                  <div className='slotMeta'><strong>{active ? slot.product.name_de : 'Nicht belegt'}</strong><span>{active ? money(slot.product.price_chf) : 'inaktiv'}</span></div>
                </button>
              })}</div></div>)}
            </div>
            <aside className='machineSidePanel'>
              <div className='sideScreen'><span>Display</span><strong>{cartCount} Artikel</strong></div>
              <Link className='sideCartButton' to='/cart'><span>Zum Warenkorb</span><strong>{money(cartTotal)}</strong></Link>
              <div className='paymentStack'><div className='payChip'>TWINT</div><div className='payChip'>Debit</div><div className='payChip'>Kredit</div></div>
              <div className='machineInfoCard'><span>Lieferung</span><strong>Kaserne oder Privat</strong></div>
            </aside>
          </div>
        </div>
      </section>
      {selected && <div className='modalWrap' onClick={() => setSelected(null)}><div className='modalCard' onClick={(e)=>e.stopPropagation()}><div className='productDialogTop'><div><div className='eyebrow'>Slot #{selected.slot_number}</div><h3>{selected.product.name_de}</h3></div><div className='dialogPrice'>{money(selected.product.price_chf)}</div></div><p>{selected.product.description_de || 'Produktbeschreibung folgt.'}</p><div className='qtyLine'><button className='pill ghost' onClick={() => setQty((q)=>Math.max(1,q-1))}>–</button><strong>{qty}</strong><button className='pill ghost' onClick={() => setQty((q)=>q+1)}>+</button></div><button className='btn block' onClick={addNow}>In Warenkorb legen</button></div></div>}
    </Layout>
  )
}
