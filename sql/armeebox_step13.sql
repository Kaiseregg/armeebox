create extension if not exists pgcrypto;

create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  order_number text unique,
  lang text not null default 'de',
  status text not null default 'submitted',
  shipping_method text not null,
  shipping_cost numeric(10,2) not null default 0,
  subtotal numeric(10,2) not null default 0,
  total numeric(10,2) not null default 0,
  item_count integer not null default 0,
  customer_email text not null,
  barracks_label text,
  recipient_name text,
  order_meta jsonb not null default '{}'::jsonb
);

create table if not exists public.order_items (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  order_id uuid not null references public.orders(id) on delete cascade,
  product_id bigint,
  slot_code text,
  product_name text not null,
  quantity integer not null default 1,
  unit_price numeric(10,2) not null default 0,
  total_price numeric(10,2) not null default 0
);

alter table public.orders add column if not exists order_number text;
alter table public.orders add column if not exists lang text not null default 'de';
alter table public.orders add column if not exists status text not null default 'submitted';
alter table public.orders add column if not exists shipping_method text;
alter table public.orders add column if not exists shipping_cost numeric(10,2) not null default 0;
alter table public.orders add column if not exists subtotal numeric(10,2) not null default 0;
alter table public.orders add column if not exists total numeric(10,2) not null default 0;
alter table public.orders add column if not exists item_count integer not null default 0;
alter table public.orders add column if not exists customer_email text;
alter table public.orders add column if not exists barracks_label text;
alter table public.orders add column if not exists recipient_name text;
alter table public.orders add column if not exists order_meta jsonb not null default '{}'::jsonb;

alter table public.order_items add column if not exists product_id bigint;
alter table public.order_items add column if not exists slot_code text;
alter table public.order_items add column if not exists product_name text;
alter table public.order_items add column if not exists quantity integer not null default 1;
alter table public.order_items add column if not exists unit_price numeric(10,2) not null default 0;
alter table public.order_items add column if not exists total_price numeric(10,2) not null default 0;

create index if not exists idx_orders_created_at on public.orders(created_at desc);
create index if not exists idx_order_items_order_id on public.order_items(order_id);

alter table public.orders enable row level security;
alter table public.order_items enable row level security;

-- Netlify function writes with service role, so public insert policies are not required.
-- Optional read policy for authenticated admin area later:
-- create policy "orders read for authenticated" on public.orders for select to authenticated using (true);
-- create policy "order_items read for authenticated" on public.order_items for select to authenticated using (true);
