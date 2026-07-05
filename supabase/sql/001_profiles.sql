-- Run this once in the Supabase SQL Editor (Project -> SQL Editor -> New query).
-- Creates the profiles table, enables RLS, and wires up a trigger that
-- inserts a default profile row whenever a new auth.users row is created
-- (email/password signup or Google OAuth signup both go through this).

create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  language text not null default 'en',
  dietary_prefs jsonb not null default '{}'::jsonb,
  subscription_status text not null default 'free',
  stripe_customer_id text,
  current_streak integer not null default 0,
  longest_streak integer not null default 0,
  scans_today integer not null default 0,
  last_scan_date date
);

alter table public.profiles enable row level security;

create policy "Users can view their own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can update their own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- security definer: runs with the privileges of the function owner, so it can
-- write to public.profiles even though the calling user has no insert policy.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, language, subscription_status)
  values (new.id, 'en', 'free');
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
