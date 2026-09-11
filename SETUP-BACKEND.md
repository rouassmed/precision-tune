# Precision Tune — Activation du backend (base de données)

Le site est **100 % statique** (HTML/CSS/JS, hébergé gratuitement sur GitHub Pages ou Netlify).
Il n'a donc pas de serveur : pour stocker les demandes du formulaire dans une **vraie base de
données PostgreSQL gratuite**, on utilise **Supabase** (backend-as-a-service). Temps total : ~10 minutes.

---

## Étape 1 — Créer le compte Supabase (gratuit)

1. Va sur https://supabase.com → **Start your project** → inscris-toi (GitHub ou email).
2. **New project** :
   - Name : `precision-tune`
   - Database password : génère-en un fort (garde-le, tu n'en auras pas besoin pour le site)
   - Region : **Frankfurt (eu-central-1)** — le plus proche de la France (RGPD ✅)

## Étape 2 — Créer la table (2 min)

1. Dans le menu gauche : **SQL Editor** → **+ New query**.
2. Copie-colle tout le contenu du fichier [`supabase/schema.sql`](supabase/schema.sql).
3. Clique **Run**. ✅ La table `leads` est créée, sécurisée (le visiteur ne peut que déposer
   sa demande, jamais lire la base).

## Étape 3 — Récupérer les clés

1. Menu gauche : **Project Settings** (icône engrenage en bas) → **API**.
2. Copie :
   - **Project URL** (ex. `https://abcdefghijklm.supabase.co`)
   - **anon public** key (longue clé commençant par `eyJhbGciOi...`)

## Étape 4 — Me les donner (ou les mettre toi-même)

Colle ces 2 valeurs dans `js/config.js` à la place de `YOUR_SUPABASE_URL` et
`YOUR_SUPABASE_ANON_KEY`, ou envoie-les moi et je m'en charge.

```js
const SUPABASE_URL = 'https://abcdefghijklm.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOi...';
```

## Étape 5 — Pousser et vérifier

```bash
git add js/config.js && git commit -m "Config Supabase" && git push
```

Ouvre le site, envoie un message test : la demande apparaît dans **Supabase → Table Editor → leads**.

---

## Sécurité (déjà en place dans le code)

| Menace | Protection |
|---|---|
| Lecture de la base par un tiers | Politique RLS : **INSERT uniquement** pour les visiteurs, aucun SELECT |
| Spam automatisé | Champ honeypot invisible + contraintes de longueur côté base |
| Fuite de clé | Seule la clé **anon** est exposée (conçue pour ça). La clé `service_role` reste secrète |
| RGPD | Case de consentement obligatoire + hébergement UE (Francfort) + suppression possible |

## Consulter tes demandes au quotidien

- **Supabase → Table Editor → leads** : toutes les demandes, triables, avec statut
  (`new` → `contacted` → `quoted` → `done`).
- Astuce : installe l'app Supabase sur téléphone ou crée une vue filtrée `status = 'new'`.

## Fallback sans base configurée

Tant que les clés ne sont pas renseignées, le formulaire redirige automatiquement le client
vers **WhatsApp** avec son message pré-rempli → tu ne perds aucune demande.
