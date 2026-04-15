import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import { fetchAdminOverview, fetchProfile, signOutAdmin } from '../../lib/api'
import { money } from '../../lib/utils'

export default function AdminDashboardPage() {
  const [profile, setProfile] = useState(undefined)
  const [overview, setOverview] = useState({ orders: [], products: [], pages: [] })
  const [error, setError] = useState('')

  useEffect(() => { fetchProfile().then(setProfile).catch((err)=>setError(err.message)) }, [])
  useEffect(() => { if (profile?.role === 'superadmin' || profile?.role === 'admin') fetchAdminOverview().then(setOverview).catch((err)=>setError(err.message)) }, [profile])

  if (profile === undefined) return <Layout cart={false}><section className='panel'>Lädt…</section></Layout>
  if (!profile || !['superadmin','admin'].includes(profile.role)) return <Navigate to='/admin/login' replace />

  return (
    <Layout cart={false}>
      <Seo title='ARMEEBOX – Admin Dashboard' description='Admin Dashboard ARMEEBOX.' />
      <section className='panel stack'>
        <div className='listRow'><div><h1>Admin Dashboard</h1><div className='subtle'>{profile.email} · {profile.role}</div></div><button className='pill ghost' onClick={signOutAdmin}>Logout</button></div>
        {error && <div className='errorText'>{error}</div>}
        <div className='statsGrid'>
          <div className='statCard'><span>Bestellungen</span><strong>{overview.orders.length}</strong></div>
          <div className='statCard'><span>Produkte</span><strong>{overview.products.length}</strong></div>
          <div className='statCard'><span>Seiten</span><strong>{overview.pages.length}</strong></div>
        </div>
        <div className='gridTwo'>
          <div className='panel nested'><h3>Letzte Bestellungen</h3>{overview.orders.length ? overview.orders.map((o) => <div className='miniRow' key={o.id}><span>{o.id.slice(0,8)} · {o.order_status}</span><strong>{money(o.total_chf)}</strong></div>) : <p className='subtle'>Noch keine Bestellungen.</p>}</div>
          <div className='panel nested'><h3>Produkte</h3>{overview.products.length ? overview.products.map((p) => <div className='miniRow' key={p.id}><span>{p.name_de}</span><strong>{money(p.price_chf)}</strong></div>) : <p className='subtle'>Noch keine Produkte hinterlegt.</p>}</div>
        </div>
      </section>
    </Layout>
  )
}
