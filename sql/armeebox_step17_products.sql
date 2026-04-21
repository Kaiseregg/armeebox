create extension if not exists pgcrypto;

create table if not exists public.products (
  id uuid primary key default gen_random_uuid()
);

alter table public.products
  add column if not exists slot integer;

alter table public.products
  add column if not exists name text;

alter table public.products
  add column if not exists price numeric(10,2) not null default 0;

alter table public.products
  add column if not exists active boolean not null default true;

alter table public.products
  add column if not exists image_url text;

alter table public.products
  add column if not exists created_at timestamptz not null default now();

create unique index if not exists products_slot_unique_idx on public.products(slot) where slot is not null;

insert into public.products (slot, name, price, active)
values
  (1, 'Snack Box', 8, true),
  (2, 'Power Pack', 8, true),
  (3, 'Sweet Pack', 10, true),
  (4, 'Classic Box', 12, true),
  (5, 'Snack Box', 8, true),
  (6, 'Power Pack', 8, true),
  (7, 'Energy Pack', 10, true),
  (8, 'Classic Box', 12, true),
  (9, 'Snack Box', 8, true),
  (10, 'Power Pack', 8, true),
  (11, 'Sweet Pack', 10, true),
  (12, 'Classic Box', 12, true),
  (13, 'Snack Box', 8, true),
  (14, 'Power Pack', 8, true),
  (15, 'Energy Pack', 10, true),
  (16, 'Classic Box', 12, true)
on conflict do nothing;
