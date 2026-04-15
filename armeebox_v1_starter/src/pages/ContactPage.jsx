import React, { useState } from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { requireSupabase } from '../lib/supabase'

export default function ContactPage() {
  const [form, setForm] = useState({ name:'', email:'', subject:'', message:'' })
  const [status, setStatus] = useState('')
  async function submit(e) {
    e.preventDefault()
    setStatus('Sende…')
    try {
      const { error } = await requireSupabase().from('contact_messages').insert(form)
      if (error) throw error
      setStatus('Nachricht gespeichert.')
      setForm({ name:'', email:'', subject:'', message:'' })
    } catch (err) {
      setStatus(err.message || 'Fehler')
    }
  }
  return (
    <Layout>
      <Seo title='ARMEEBOX – Kontakt' description='Kontaktformular ARMEEBOX.' />
      <section className='panel stack'>
        <h1>Kontakt</h1>
        <form className='formGrid' onSubmit={submit}>
          <label><span>Name</span><input value={form.name} onChange={(e)=>setForm({ ...form, name:e.target.value })}/></label>
          <label><span>E-Mail</span><input required type='email' value={form.email} onChange={(e)=>setForm({ ...form, email:e.target.value })}/></label>
          <label><span>Betreff</span><input value={form.subject} onChange={(e)=>setForm({ ...form, subject:e.target.value })}/></label>
          <label><span>Nachricht</span><textarea rows='5' required value={form.message} onChange={(e)=>setForm({ ...form, message:e.target.value })}/></label>
          <button className='btn'>Nachricht senden</button>
          {status && <div className='subtle'>{status}</div>}
        </form>
      </section>
    </Layout>
  )
}
