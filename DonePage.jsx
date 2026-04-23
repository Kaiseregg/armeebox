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
  const sb = requireSupabase()
  const { data: customer, error: cErr } = await sb.from('customers').insert(payload.customer).select().single()
  if (cErr) throw cErr
  const { data: recipient, error: rErr } = await sb.from('recipients').insert(payload.recipient).select().single()
  if (rErr) throw rErr
  const orderInsert = { ...payload.order, customer_id: customer.id, recipient_id: recipient.id }
  const { data: order, error: oErr } = await sb.from('orders').insert(orderInsert).select().single()
  if (oErr) throw oErr
  const items = payload.items.map((item) => ({
    order_id: order.id,
    product_id: item.product_id || null,
    slot_number: item.slot_number,
    product_name: item.product_name,
    unit_price_chf: item.unit_price_chf,
    quantity: item.quantity,
    line_total_chf: item.line_total_chf,
  }))
  const { error: iErr } = await sb.from('order_items').insert(items)
  if (iErr) throw iErr
  return order
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
