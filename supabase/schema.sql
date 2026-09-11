-- ═══════════════════════════════════════════════════════════════
--  PRECISION TUNE — Schéma de la base de données (Supabase / PostgreSQL)
--  À coller dans : Supabase → SQL Editor → New query → Run
-- ═══════════════════════════════════════════════════════════════

-- Table des demandes clients (leads)
CREATE TABLE IF NOT EXISTS public.leads (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name        text NOT NULL CHECK (char_length(name) BETWEEN 2 AND 100),
  email       text NOT NULL CHECK (char_length(email) <= 255),
  phone       text CHECK (phone IS NULL OR char_length(phone) <= 30),
  service     text NOT NULL CHECK (service IN
              ('stage1','stage2','stage3','diagnostic','locksmith','custom')),
  message     text NOT NULL CHECK (char_length(message) BETWEEN 10 AND 2000),
  lang        char(2) DEFAULT 'fr',
  status      text NOT NULL DEFAULT 'new'
              CHECK (status IN ('new','contacted','quoted','done','spam')),
  created_at  timestamptz NOT NULL DEFAULT now()
);

-- Index pour trier vite les nouvelles demandes
CREATE INDEX IF NOT EXISTS leads_created_at_idx ON public.leads (created_at DESC);
CREATE INDEX IF NOT EXISTS leads_status_idx ON public.leads (status);

-- ═══ SÉCURITÉ (RLS) : le visiteur anonyme peut UNIQUEMENT insérer.
--     Il ne peut JAMAIS lire, modifier ou supprimer les données.
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon insert only" ON public.leads;
CREATE POLICY "anon insert only"
  ON public.leads FOR INSERT
  TO anon
  WITH CHECK (true);

-- (Aucune politique SELECT/UPDATE/DELETE pour anon = accès refusé.)

-- ═══ Pour TOI, l'admin : voir tes demandes dans Supabase → Table Editor,
--     ou active temporairement l'accès lecture via le tableau de bord
--     (authentifié) — jamais via la clé anon.

-- Nettoyage automatique des demandes marquées spam après 30 jours (optionnel)
-- SELECT cron.schedule('purge-spam', '0 3 * * *',
--   $$DELETE FROM public.leads WHERE status = 'spam' AND created_at < now() - interval '30 days'$$);
