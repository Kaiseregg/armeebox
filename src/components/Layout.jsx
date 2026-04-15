import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useApp } from '../app/state'
import { money } from '../lib/utils'

export default function Layout({ children, cart=true }) {
  const { cartCount, cartTotal } = useApp()
  return (
    <div className='appRoot'>
      <header className='topbar'>
        <div>
          <div className='eyebrow'>armeebox.ch</div>
          <div className='title'>ARMEEBOX</div>
          <div className='subtle'>by MuKraBi</div>
        </div>
        <nav className='topActions'>
          <NavLink className='pill ghost' to='/grundidee'>Grundidee</NavLink>
          <NavLink className='pill ghost' to='/agb'>AGB</NavLink>
          <NavLink className='pill ghost' to='/kontakt'>Kontakt</NavLink>
          <NavLink className='pill ghost' to='/admin/login'>Admin</NavLink>
          {cart && <Link className='pill' to='/cart'>Warenkorb {cartCount} · {money(cartTotal)}</Link>}
        </nav>
      </header>
      <main className='page'>{children}</main>
      <footer className='footer'><span>ARMEEBOX</span><span>Fresspäckli für Soldaten</span></footer>
    </div>
  )
}
