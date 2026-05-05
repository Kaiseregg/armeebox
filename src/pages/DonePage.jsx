import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import Layout from '../components/Layout'
import Seo from '../components/Seo'

export default function DonePage() {
  const { orderId } = useParams()
  const location = useLocation()
  const orderNumber = location.state?.orderNumber || orderId

  return (
    <Layout>
      <Seo title='ARMEEBOX – Bestellung erhalten' description='Bestellbestätigung ARMEEBOX.' />
      <section className='panel centerPanel'>
        <h1>Bestellung erfolgreich</h1>
        <p>Danke. Deine Bestellung wurde gespeichert und die Bestätigung wurde per E-Mail versendet.</p>
        <p className='subtle'>Bestellnummer: {orderNumber}</p>
        <div className='actionRow'><Link className='btn' to='/shop'>Zurück zum Shop</Link></div>
      </section>
    </Layout>
  )
}
