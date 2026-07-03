# Projekt: FridgeChef
Tech-Stack: Next.js 14 App Router, Supabase (Auth+DB+Storage), Stripe, Claude API, next-intl, Capacitor (später)

## Design-Regeln
DESIGN_VARIANCE 8, MOTION_INTENSITY 6, VISUAL_DENSITY 4
Verboten: Inter-Font, generische 3-Spalten-Layouts, Neon-Glows, h-screen, Emojis im Code, AI-Copywriting-Klischees

## Datenmodell
[Exakt das Schema aus Abschnitt 3 hier einfügen]

## Wichtige Regeln
- Scan-Limit (3/Tag free) wird NUR serverseitig geprüft, nie clientseitig
- API-Keys nie im Client-Code, nur in Vercel Env Vars
- Alle Nutzer-facing Strings über next-intl (keine hartcodierten Texte)
- Bilder vor dem Senden an Claude clientseitig komprimieren (browser-image-compression, Ziel <1MB)
