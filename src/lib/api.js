import { requireSupabase } from './supabase'

export async function fetchSiteSettings() {
  const { data, error } = await requireSupabase().from('site_settings').select('*').limit(1).maybeSingle()
  if (error) throw error
  return data
}

export async function fetchPage(slug) {
  const { data, error } = await requireSupabase().from('site_pages').select('*').eq('slug', slug).maybeSingle()
  if (error) throw error
  return data
}

export async function fetchProducts() {
  const { data, error } = await requireSupabase().from('products').select('*').eq('is_active', true).order('sort_order')
  if (error) throw error
  return data || []
}

export async function fetchSlots() {
  const { data, error } = await requireSupabase().from('slots').select('*, product:products(*)').order('slot_number')
  if (error) throw error
  return data || []
}

export async function fetchBarracks() {
  const { data, error } = await requireSupabase().from('barracks_addresses').select('*').eq('is_active', true).order('label')
  if (error) throw error
  return data || []
}

export async function submitOrder(payload) {
  const response = await fetch('/.netlify/functions/submit-order', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  const data = await response.json().catch(() => null)

  if (!response.ok || !data?.success) {
    throw new Error(data?.error || 'Bestellung konnte nicht abgeschlossen werden.')
  }

  return data
}

export async function signInAdmin(email, password) {
  const { data, error } = await requireSupabase().auth.signInWithPassword({ email, password })
  if (error) throw error
  return data
}

export async function signOutAdmin() {
  await requireSupabase().auth.signOut()
}

export async function fetchProfile() {
  const sb = requireSupabase()
  const { data: auth } = await sb.auth.getUser()
  if (!auth?.user) return null
  const { data, error } = await sb.from('profiles').select('*').eq('id', auth.user.id).maybeSingle()
  if (error) throw error
  return data
}

export async function fetchAdminOverview() {
  const sb = requireSupabase()
  const [{ data: orders }, { data: products }, { data: pages }] = await Promise.all([
    sb.from('orders').select('*').order('created_at', { ascending: false }).limit(20),
    sb.from('products').select('*').order('sort_order'),
    sb.from('site_pages').select('*').order('slug'),
  ])
  return { orders: orders || [], products: products || [], pages: pages || [] }
}
