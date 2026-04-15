import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import Seo from '../components/Seo'

export default function IntroPage() {
  return (
    <Layout cart={false}>
      <Seo title='ARMEEBOX – Intro' description='ARMEEBOX Intro mit Einstieg in den virtuellen Automaten.' />
      <section className='introHero panel'>
        <div className='introCopy'>
          <div className='eyebrow'>Modern · Militärisch · Direkt</div>
          <h1 className='introTitle'>ARMEEBOX.CH</h1>
          <p>Bestelle Fresspäckli für Rekruten und Soldaten – elegant, schnell und ohne klassischen Webshop.</p>
          <div className='actionRow'>
            <Link className='btn' to='/shop'>Intro skippen</Link>
            <Link className='pill ghost' to='/grundidee'>Mehr erfahren</Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
