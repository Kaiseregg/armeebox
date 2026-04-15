import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { supabase } from '../lib/supabase'

const AppContext = createContext(null)
const CART_KEY = 'armeebox_cart_v1'

export function AppProvider({ children }) {
  const [cart, setCart] = useState([])
  const [authUser, setAuthUser] = useState(null)

  useEffect(() => {
    const raw = localStorage.getItem(CART_KEY)
    if (raw) setCart(JSON.parse(raw))
  }, [])

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    if (!supabase) return
    supabase.auth.getUser().then(({ data }) => setAuthUser(data.user ?? null))
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => setAuthUser(session?.user ?? null))
    return () => sub.subscription.unsubscribe()
  }, [])

  const value = useMemo(() => ({
    cart,
    authUser,
    addToCart(item) {
      setCart((prev) => {
        const found = prev.find((x) => x.slot_number === item.slot_number)
        if (found) return prev.map((x) => x.slot_number === item.slot_number ? { ...x, quantity: x.quantity + item.quantity } : x)
        return [...prev, item]
      })
    },
    updateQty(slotNumber, quantity) {
      setCart((prev) => prev.map((x) => x.slot_number === slotNumber ? { ...x, quantity: Math.max(1, quantity) } : x))
    },
    removeFromCart(slotNumber) {
      setCart((prev) => prev.filter((x) => x.slot_number !== slotNumber))
    },
    clearCart() { setCart([]) },
    cartCount: cart.reduce((sum, item) => sum + item.quantity, 0),
    cartTotal: cart.reduce((sum, item) => sum + item.unit_price_chf * item.quantity, 0),
  }), [cart, authUser])

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useApp = () => useContext(AppContext)
