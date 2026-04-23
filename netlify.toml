import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Layout from '../components/Layout'
import Seo from '../components/Seo'

export default function DonePage() {
  const { orderId } = useParams()
  return (
    <Layout>
      <Seo title='ARMEEBOX – Bestellung erhalten' description='Bestellbestätigung ARMEEBOX.' />
      <section className='panel centerPanel'>
        <h1>Bestellung gespeichert</h1>
        <p>Die Bestellung wurde in Supabase gespeichert. E-Mail- und Zahlungslogik werden im nächsten Stand angeschlossen.</p>
        <p className='subtle'>Order ID: {orderId}</p>
        <div className='actionRow'><Link className='btn' to='/shop'>Zurück zum Shop</Link></div>
      </section>
    </Layout>
  )
}
