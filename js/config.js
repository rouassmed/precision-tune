// ═══════════════════════════════════════════════════════════════
//  SUPABASE CONFIG — Backend de stockage des demandes clients
// ═══════════════════════════════════════════════════════════════
//  1. Crée un compte gratuit sur https://supabase.com
//  2. Crée un projet (région eu-central-1 Francfort recommandée)
//  3. Ouvre SQL Editor → colle le contenu de supabase/schema.sql → Run
//  4. Settings → API → copie l'URL et la clé "anon public"
//  5. Remplace les deux valeurs ci-dessous
//
//  SÉCURITÉ : la clé "anon" est CONÇUE pour être visible côté client.
//  Grâce à la politique RLS (INSERT seul), personne ne peut lire la
//  base. NE JAMAIS mettre la clé "service_role" ici.

const SUPABASE_URL = 'YOUR_SUPABASE_URL';        // ex: https://xyzcompany.supabase.co
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY'; // clé "anon public"
