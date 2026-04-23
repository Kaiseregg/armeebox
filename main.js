import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AppProvider } from './state'
import IntroPage from '../pages/IntroPage'
import ShopPage from '../pages/ShopPage'
import CartPage from '../pages/CartPage'
import CheckoutPage from '../pages/CheckoutPage'
import DonePage from '../pages/DonePage'
import ContentPage from '../pages/ContentPage'
import ContactPage from '../pages/ContactPage'
import AdminLoginPage from '../pages/admin/AdminLoginPage'
import AdminDashboardPage from '../pages/admin/AdminDashboardPage'

export default function App() {
  return (
    <AppProvider>
      <Routes>
        <Route path='/' element={<IntroPage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='/done/:orderId' element={<DonePage />} />
        <Route path='/agb' element={<ContentPage slug='agb' />} />
        <Route path='/grundidee' element={<ContentPage slug='grundidee' />} />
        <Route path='/kontakt' element={<ContactPage />} />
        <Route path='/admin/login' element={<AdminLoginPage />} />
        <Route path='/admin/dashboard' element={<AdminDashboardPage />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </AppProvider>
  )
}
