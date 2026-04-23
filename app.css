import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { useApp } from '../app/state'
import { money } from '../lib/utils'

export default function CartPage() {
  const { cart, updateQty, removeFromCart, cartTotal } = useApp()
  return (
    <Layout>
      <Seo title='ARMEEBOX – Warenkorb' description='ARMEEBOX Warenkorb mit Mengenanpassung und Totalpreis.' />
      <section className='panel stack'>
        <h1>Warenkorb</h1>
        {!cart.length && <p>Dein Warenkorb ist leer.</p>}
        {cart.map((item) => <div className='miniRow' key={item.slot_number}><div><strong>#{item.slot_number} · {item.product_name}</strong><div className='subtle'>{money(item.unit_price_chf)}</div></div><div className='actionRow'><button className='pill ghost' onClick={() => updateQty(item.slot_number, item.quantity - 1)}>-</button><strong>{item.quantity}</strong><button className='pill ghost' onClick={() => updateQty(item.slot_number, item.quantity + 1)}>+</button><button className='pill danger' onClick={() => removeFromCart(item.slot_number)}>Löschen</button></div></div>)}
        <div className='listRow'><strong>Total</strong><strong>{money(cartTotal)}</strong></div>
        <div className='actionRow'><Link className='pill ghost' to='/shop'>Weiter einkaufen</Link><Link className='btn' to='/checkout'>Weiter</Link></div>
      </section>
    </Layout>
  )
}
