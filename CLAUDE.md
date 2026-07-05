# Projekt: FridgeChef
Tech-Stack: Next.js 14 App Router, Supabase (Auth+DB+Storage), Stripe,
Claude API (Vision + Text), next-intl (EN/DE), Capacitor (später für iOS/Android)

## Design-Regeln
DESIGN_VARIANCE 8, MOTION_INTENSITY 6, VISUAL_DENSITY 4
Verboten: Inter-Font, generische 3-Spalten-Layouts, Neon-Glows, h-screen,
Emojis im Code, AI-Copywriting-Klischees

## Datenmodell (Supabase/Postgres)

profiles:
- id (= auth.users.id)
- language (en/de)
- dietary_prefs (JSON: vegan/vegetarisch/keto/Allergien)
- subscription_status (free/pro)
- stripe_customer_id
- current_streak
- longest_streak
- scans_today
- last_scan_date

scans:
- id
- user_id
- image_url
- detected_ingredients (JSON)
- created_at

recipes:
- id
- scan_id
- title
- calories
- macros (JSON)
- steps (JSON)
- language

## Wichtige Regeln
- Scan-Limit (3/Tag im Free-Plan) wird NUR serverseitig geprüft, nie clientseitig
- API-Keys nie im Client-Code, nur in Vercel Env Vars
- Alle Nutzer-facing Strings über next-intl (keine hartcodierten Texte)
- Bilder vor dem Senden an Claude clientseitig komprimieren
  (browser-image-compression, Ziel unter 1MB)
- Zutatenerkennung und Rezeptgenerierung sind ZWEI getrennte Claude-API-Calls,
  nicht einer
