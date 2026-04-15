import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import { signInAdmin } from '../../lib/api'

export default function AdminLoginPage() {
  const nav = useNavigate()
  const [email, setEmail] = useState('admin@armeebox.ch')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  async function submit(e) {
    e.preventDefault(); setError('')
    try { await signInAdmin(email, password); nav('/admin/dashboard') } catch (err) { setError(err.message || 'Login fehlgeschlagen') }
  }
  return (
    <Layout cart={false}>
      <Seo title='ARMEEBOX – Admin Login' description='Admin Login ARMEEBOX.' />
      <section className='panel authCard'>
        <h1>Admin Login</h1>
        <form className='formGrid' onSubmit={submit}>
          <label><span>E-Mail</span><input value={email} onChange={(e)=>setEmail(e.target.value)} /></label>
          <label><span>Passwort</span><input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} /></label>
          <button className='btn'>Einloggen</button>
          {error && <div className='errorText'>{error}</div>}
        </form>
      </section>
    </Layout>
  )
}
