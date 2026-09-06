/**
 * Precision Tune — Frontend Application
 * Bilingual (EN/FR), Animations, Form Handling
 */

(function() {
  'use strict';

  // ═══════════════════════════════════════════════════════════════
  //  INTERNATIONALIZATION (i18n)
  // ═══════════════════════════════════════════════════════════════

  const i18n = {
    en: {
      // Header
      'nav.services': 'Services',
      'nav.credentials': 'Credentials',
      'nav.brands': 'Brands',
      'nav.contact': 'Contact',
      'nav.cta': 'Get Tuned',
      'lang.fr': 'FR',
      'lang.en': 'EN',

      // Hero
      'hero.badge': 'Factory-Trained Engineer — Stellantis · Renault · Volkswagen',
      'hero.eyebrow': 'Professional Automotive Tuning',
      'hero.title1': 'Unleash Your',
      'hero.title2': "Engine's Power",
      'hero.desc': "ECU remapping, diagnostics, and locksmith services by a certified automotive engineer with OEM background at Stellantis, Renault, and VW. Factory-level expertise, aftermarket results. 24/7 emergency support available.",
      'hero.btn1': 'Book Your Tune',
      'hero.btn2': 'My Background',
      'hero.trust1': 'OEM-Certified Engineer',
      'hero.trust2': '24/7 Emergency Support',
      'hero.trust3': 'Stock File Preserved',

      // Stats
      'stat.cars': 'Cars Tuned',
      'stat.hp': 'Avg. HP Gain',
      'stat.support': 'Support',
      'stat.satisfaction': 'Satisfaction',

      // Credentials
      'cred.eyebrow': 'Why Trust Me',
      'cred.title': 'Engineered at OEM Level',
      'cred.subtitle': "Not a self-taught tuner. A certified automotive engineer who learned calibration inside the factories that built your car.",
      'cred.stellantis.title': 'OEM Calibration Engineer',
      'cred.stellantis.desc': 'Trained inside Stellantis powertrain development. Deep knowledge of MultiAir, PureTech, BlueHDi, and STLA platform ECUs. I know these engines from the blueprint up.',
      'cred.renault.title': 'Renault Powertrain R&D',
      'cred.renault.desc': "Worked on Renault-Nissan Alliance engine calibration. Expert in Energy TCe, dCi, and E-Tech hybrid systems. Factory diagnostic protocols — no guesswork.",
      'cred.vw.title': 'VW Group Specialist',
      'cred.vw.desc': 'OEM experience with Volkswagen AG calibration tools. VAG-COM deep protocols, MQB platform maps, DSG tuning, and EA888/EA211 engine families.',
      'cred.banner1.title': 'Automotive Engineer',
      'cred.banner1.sub': 'Degree + OEM Certs',
      'cred.banner2.title': 'Factory Trained',
      'cred.banner2.sub': '3 Major OEMs',
      'cred.banner3.title': 'Licensed Locksmith',
      'cred.banner3.sub': 'Key Programming & Immo',
      'cred.banner4.title': '24/7 Emergency',
      'cred.banner4.sub': 'Diagnostics & Recovery',

      // Services
      'svc.eyebrow': 'What We Do',
      'svc.title': 'Tuning Services',
      'svc.subtitle': 'From Stage 1 daily drivers to emergency diagnostics at 2 AM — every vehicle, every hour.',
      'svc.stage1.title': 'Stage 1 ECU Remap',
      'svc.stage1.desc': 'Optimized stock calibration for daily drivers. Safe power gains, improved throttle response, and smoother delivery — all within manufacturer safety margins.',
      'svc.stage2.title': 'Stage 2 Performance',
      'svc.stage2.desc': 'Hardware-supported tuning with upgraded intake, exhaust, and intercooler. Aggressive maps for enthusiasts who want serious power without sacrificing reliability.',
      'svc.stage3.title': 'Stage 3 Custom Map',
      'svc.stage3.desc': 'Full custom calibration on the dyno. Big turbo, forged internals, race fuel — we build the map around your hardware. Maximum power, maximum control.',
      'svc.diag.title': 'Diagnostics & Coding',
      'svc.diag.desc': 'Full-system OBD diagnostics, DTC analysis, coding activation, and module programming. Emergency diagnostic support available 24/7. Dealer-level capabilities.',
      'svc.diag.badge': '24/7',
      'svc.lock.title': 'Car Locksmith',
      'svc.lock.desc': 'Key programming, immobilizer coding, transponder cloning, remote key fob configuration, and lockout assistance. Licensed automotive locksmith with OEM-grade tools.',
      'svc.remote.title': 'Remote Tuning',
      'svc.remote.desc': "Can't visit? Ship your ECU or use our remote file service. Same OEM-grade quality, delivered digitally — anywhere in France and Europe.",
      'svc.price': 'From',

      // Process
      'proc.eyebrow': 'How It Works',
      'proc.title': 'Our Process',
      'proc.subtitle': 'Four steps from stock to beast. Transparent, professional, and built around your goals.',
      'proc.step1.title': 'Consultation & Assessment',
      'proc.step1.desc': 'We start with your goals. Daily driver efficiency? Track day dominance? Towing torque? We assess your vehicle\'s current health, hardware mods, and ECU version to build the right strategy.',
      'proc.step2.title': 'Data Reading & Backup',
      'proc.step2.desc': 'We read your ECU\'s original file via OBD or bench mode — never opening the ECU unless necessary. Every original file is cryptographically hashed and stored securely. You always get your stock file back.',
      'proc.step3.title': 'Map Development & Testing',
      'proc.step3.desc': 'Our engineers modify ignition timing, fuel maps, boost pressure, torque limits, and throttle response based on your hardware and goals. Each map is validated against thermodynamic safety margins.',
      'proc.step4.title': 'Delivery & Validation',
      'proc.step4.desc': 'The tuned file is written to your ECU. We perform live data logging, check for fault codes, and validate AFR, boost, and EGT readings. Dyno validation available on request.',

      // Why Us
      'why.eyebrow': 'Why Precision Tune',
      'why.title': 'Built Different',
      'why.subtitle': 'Not just a remap — a complete performance partnership backed by engineering rigor.',
      'why.f1.title': 'Safety First',
      'why.f1.desc': 'Every map respects thermal and mechanical limits. We monitor EGT, knock, and AFR margins to protect your engine — power without compromise.',
      'why.f2.title': 'Data-Driven',
      'why.f2.desc': 'No guesswork. We log live ECU data before, during, and after tuning. Every parameter change is justified by physics and measured results.',
      'why.f3.title': 'Full Reversibility',
      'why.f3.desc': 'Your original ECU file is always preserved. Want to go back to stock? We restore it in minutes — no trace, no hassle, no dealer trips.',
      'why.f4.title': 'All Makes & Models',
      'why.f4.desc': 'European, Japanese, Korean, American — petrol, diesel, hybrid. We support Bosch, Siemens, Delphi, Magneti Marelli, and more.',
      'why.f5.title': 'Remote Tuning',
      'why.f5.desc': 'Can\'t visit our shop? Ship us your ECU or use our remote tuning service. Same quality, delivered to your door — worldwide.',
      'why.f6.title': 'Coding & Features',
      'why.f6.desc': 'Activate hidden OEM features, retrofit modules, disable start-stop, enable video-in-motion, and more — all dealer-grade coding.',

      // Brands
      'brand.eyebrow': 'Trusted Expertise',
      'brand.title': 'Brands We Tune',
      'brand.subtitle': 'Factory-trained on these platforms. Every protocol, every ECU, every module — no learning curve.',

      // Contact
      'ct.eyebrow': 'Get Started',
      'ct.title': 'Ready to Unlock Your Power?',
      'ct.subtitle': 'Tell us about your vehicle and goals. I\'ll respond within hours — emergency support available 24/7.',
      'ct.emergency': '24/7 Emergency Line',
      'ct.email': 'Email',
      'ct.whatsapp': 'WhatsApp',
      'ct.location': 'Location',
      'ct.hours': 'Hours',
      'ct.hours.val': 'Mon – Sat: 9:00 – 19:00',
      'ct.form.name': 'Full Name',
      'ct.form.email': 'Email',
      'ct.form.phone': 'Phone',
      'ct.form.service': 'Service',
      'ct.form.msg': 'Your Message',
      'ct.form.submit': 'Send Message',
      'ct.form.placeholder.name': 'Your name',
      'ct.form.placeholder.email': 'your@email.com',
      'ct.form.placeholder.phone': '+33 6 51 00 62 18',
      'ct.form.placeholder.msg': 'Tell me about your car, symptoms, or emergency situation...',
      'ct.form.svc.default': 'Select a service',
      'ct.form.svc.stage1': 'Stage 1 ECU Remap',
      'ct.form.svc.stage2': 'Stage 2 Performance',
      'ct.form.svc.stage3': 'Stage 3 Custom Map',
      'ct.form.svc.diag': 'Diagnostics (24/7)',
      'ct.form.svc.lock': 'Car Locksmith',
      'ct.form.svc.custom': 'Other / Emergency',

      // Footer
      'foot.desc': 'Professional ECU tuning, diagnostics, and locksmith services by a certified OEM automotive engineer. Stellantis · Renault · VW factory-trained.',
      'foot.services': 'Services',
      'foot.creds': 'Credentials',
      'foot.emergency': 'Emergency Contact',
      'foot.copy': '© 2026 Precision Tune. All rights reserved.',
      'foot.tag': 'OEM-Trained Engineer · 24/7 Support · France',
    },

    fr: {
      // Header
      'nav.services': 'Services',
      'nav.credentials': 'Parcours',
      'nav.brands': 'Marques',
      'nav.contact': 'Contact',
      'nav.cta': 'Réserver',
      'lang.fr': 'FR',
      'lang.en': 'EN',

      // Hero
      'hero.badge': 'Ingénieur Formé en Usine — Stellantis · Renault · Volkswagen',
      'hero.eyebrow': 'Tuning Automobile Professionnel',
      'hero.title1': 'Libérez la',
      'hero.title2': 'Puissance',
      'hero.desc': "Remappage ECU, diagnostic et serrurerie automobile par un ingénieur automobile certifié avec expérience OEM chez Stellantis, Renault et VW. Expertise usine, résultats aftermarket. Support d'urgence 24h/24 disponible.",
      'hero.btn1': 'Réserver',
      'hero.btn2': 'Mon Parcours',
      'hero.trust1': 'Ingénieur Certifié OEM',
      'hero.trust2': "Support Urgence 24h/24",
      'hero.trust3': 'Fichier Stock Sauvegardé',

      // Stats
      'stat.cars': 'Voitures Tunées',
      'stat.hp': 'Gain Moyen CV',
      'stat.support': 'Support',
      'stat.satisfaction': 'Satisfaction',

      // Credentials
      'cred.eyebrow': 'Pourquoi Me Faire Confiance',
      'cred.title': "Conçu au Niveau de l'Usine",
      'cred.subtitle': "Pas un autodidacte. Un ingénieur automobile certifié qui a appris l'étalonnage à l'intérieur des usines qui ont construit votre voiture.",
      'cred.stellantis.title': "Ingénieur d'Étalonnage OEM",
      'cred.stellantis.desc': "Formé au sein du développement powertrain Stellantis. Connaissance approfondie des MultiAir, PureTech, BlueHDi et des ECU de plateforme STLA. Je connais ces moteurs depuis le plan.",
      'cred.renault.title': 'R&D Powertrain Renault',
      'cred.renault.desc': "A travaillé sur l'étalonnage moteur de l'Alliance Renault-Nissan. Expert en Energy TCe, dCi et systèmes hybrides E-Tech. Protocoles de diagnostic usine — pas de devinettes.",
      'cred.vw.title': 'Spécialiste Groupe VW',
      'cred.vw.desc': "Expérience OEM avec les outils d'étalonnage Volkswagen AG. Protocoles VAG-COM avancés, cartes plateforme MQB, tuning DSG et familles de moteurs EA888/EA211.",
      'cred.banner1.title': 'Ingénieur Automobile',
      'cred.banner1.sub': 'Diplôme + Certif. OEM',
      'cred.banner2.title': "Formé à l'Usine",
      'cred.banner2.sub': '3 Grands Constructeurs',
      'cred.banner3.title': 'Serrurier Agréé',
      'cred.banner3.sub': 'Programmation Clés & Immo',
      'cred.banner4.title': 'Urgence 24h/24',
      'cred.banner4.sub': 'Diagnostic & Dépannage',

      // Services
      'svc.eyebrow': 'Nos Prestations',
      'svc.title': 'Services de Tuning',
      'svc.subtitle': "Du Stage 1 au diagnostic d'urgence à 2h du matin — tous véhicules, toutes heures.",
      'svc.stage1.title': 'Remap ECU Stage 1',
      'svc.stage1.desc': "Étalonnage optimisé pour conducteurs quotidiens. Gains de puissance sécurisés, réponse d'accélérateur améliorée et livraison plus fluide — tout en respectant les marges de sécurité du constructeur.",
      'svc.stage2.title': 'Performance Stage 2',
      'svc.stage2.desc': "Tuning avec matériel supporté : admission, échappement et intercooler améliorés. Cartes agressives pour les passionnés qui veulent de la puissance sérieuse sans sacrifier la fiabilité.",
      'svc.stage3.title': 'Carte Custom Stage 3',
      'svc.stage3.desc': "Étalonnage entièrement personnalisé sur banc de puissance. Gros turbo, internes forgés, carburant racing — nous construisons la carte autour de votre matériel. Puissance maximale, contrôle maximal.",
      'svc.diag.title': 'Diagnostic & Codage',
      'svc.diag.desc': "Diagnostic OBD complet, analyse DTC, activation codage et programmation module. Support diagnostic d'urgence disponible 24h/24. Capacités niveau concessionnaire.",
      'svc.diag.badge': '24/7',
      'svc.lock.title': 'Serrurerie Automobile',
      'svc.lock.desc': "Programmation clés, codage anti-démarrage, clonage transpondeur, configuration télécommande et assistance ouverture de portes. Serrurier automobile agréé avec outils OEM.",
      'svc.remote.title': 'Tuning à Distance',
      'svc.remote.desc': "Vous ne pouvez pas venir ? Expédiez votre ECU ou utilisez notre service de fichier à distance. Même qualité OEM, livré numériquement — partout en France et en Europe.",
      'svc.price': 'À partir de',

      // Process
      'proc.eyebrow': 'Comment Ça Marche',
      'proc.title': 'Notre Processus',
      'proc.subtitle': "Quatre étapes d'origine à bête. Transparent, professionnel et construit autour de vos objectifs.",
      'proc.step1.title': 'Consultation & Évaluation',
      'proc.step1.desc': "Nous commençons par vos objectifs. Efficacité quotidienne ? Domination circuit ? Couple remorquage ? Nous évaluons la santé actuelle de votre véhicule, les modifications matérielles et la version ECU pour construire la bonne stratégie.",
      'proc.step2.title': "Lecture & Sauvegarde",
      'proc.step2.desc': "Nous lisons le fichier original de votre ECU via OBD ou mode bench — sans ouvrir l'ECU sauf nécessité. Chaque fichier original est haché cryptographiquement et stocké en sécurité. Vous récupérez toujours votre fichier stock.",
      'proc.step3.title': 'Développement & Tests',
      'proc.step3.desc': "Nos ingénieurs modifient l'avance à l'allumage, les cartes essence, la pression de suralimentation, les limites de couple et la réponse d'accélérateur selon votre matériel et vos objectifs. Chaque carte est validée contre les marges de sécurité thermodynamiques.",
      'proc.step4.title': 'Livraison & Validation',
      'proc.step4.desc': "Le fichier tuné est écrit dans votre ECU. Nous effectuons un data logging en direct, vérifions les codes défaut et validons les lectures AFR, suralimentation et EGT. Validation sur banc disponible sur demande.",

      // Why Us
      'why.eyebrow': 'Pourquoi Precision Tune',
      'why.title': 'Une Approche Différente',
      'why.subtitle': "Pas juste un remap — un partenariat performance complet soutenu par la rigueur de l'ingénierie.",
      'why.f1.title': 'Sécurité Avant Tout',
      'why.f1.desc': "Chaque carte respecte les limites thermiques et mécaniques. Nous surveillons les marges EGT, cliquetis et AFR pour protéger votre moteur — puissance sans compromis.",
      'why.f2.title': 'Guidé par les Données',
      'why.f2.desc': "Pas de devinettes. Nous enregistrons les données ECU en direct avant, pendant et après le tuning. Chaque changement de paramètre est justifié par la physique et des résultats mesurés.",
      'why.f3.title': 'Réversibilité Totale',
      'why.f3.desc': "Votre fichier ECU original est toujours préservé. Vous voulez revenir au stock ? Nous le restaurons en minutes — aucune trace, aucun tracas, aucun passage concessionnaire.",
      'why.f4.title': 'Toutes Marques & Modèles',
      'why.f4.desc': 'Européennes, japonaises, coréennes, américaines — essence, diesel, hybride. Nous supportons Bosch, Siemens, Delphi, Magneti Marelli, et plus.',
      'why.f5.title': 'Tuning à Distance',
      'why.f5.desc': "Vous ne pouvez pas visiter notre atelier ? Envoyez-nous votre ECU ou utilisez notre service de tuning à distance. Même qualité, livrée chez vous — dans le monde entier.",
      'why.f6.title': 'Codage & Fonctions',
      'why.f6.desc': "Activez les fonctions OEM cachées, rétrofit modules, désactivez start-stop, activez vidéo en mouvement, et plus — tout en codage niveau concessionnaire.",

      // Brands
      'brand.eyebrow': 'Expertise Reconnue',
      'brand.title': 'Marques Que Nous Tunons',
      'brand.subtitle': "Formé en usine sur ces plateformes. Chaque protocole, chaque ECU, chaque module — pas de courbe d'apprentissage.",

      // Contact
      'ct.eyebrow': 'Commencer',
      'ct.title': 'Prêt à Libérer Votre Puissance ?',
      'ct.subtitle': "Parlez-moi de votre véhicule et de vos objectifs. Je réponds dans l'heure — support d'urgence disponible 24h/24.",
      'ct.emergency': "Ligne d'Urgence 24h/24",
      'ct.email': 'Email',
      'ct.whatsapp': 'WhatsApp',
      'ct.location': 'Localisation',
      'ct.hours': 'Horaires',
      'ct.hours.val': 'Lun – Sam : 9h00 – 19h00',
      'ct.form.name': 'Nom Complet',
      'ct.form.email': 'Email',
      'ct.form.phone': 'Téléphone',
      'ct.form.service': 'Service',
      'ct.form.msg': 'Votre Message',
      'ct.form.submit': 'Envoyer',
      'ct.form.placeholder.name': 'Votre nom',
      'ct.form.placeholder.email': 'votre@email.com',
      'ct.form.placeholder.phone': '+33 6 51 00 62 18',
      'ct.form.placeholder.msg': "Parlez-moi de votre voiture, symptômes ou situation d'urgence...",
      'ct.form.svc.default': 'Sélectionnez un service',
      'ct.form.svc.stage1': 'Remap ECU Stage 1',
      'ct.form.svc.stage2': 'Performance Stage 2',
      'ct.form.svc.stage3': 'Carte Custom Stage 3',
      'ct.form.svc.diag': 'Diagnostic (24/7)',
      'ct.form.svc.lock': 'Serrurerie Auto',
      'ct.form.svc.custom': 'Autre / Urgence',

      // Footer
      'foot.desc': "Tuning ECU professionnel, diagnostic et serrurerie par un ingénieur automobile OEM certifié. Formé chez Stellantis · Renault · VW.",
      'foot.services': 'Services',
      'foot.creds': 'Parcours',
      'foot.emergency': "Contact d'Urgence",
      'foot.copy': '© 2026 Precision Tune. Tous droits réservés.',
      'foot.tag': 'Ingénieur Formé OEM · Support 24h/24 · France',
    }
  };

  let currentLang = 'en';

  function detectLanguage() {
    const saved = localStorage.getItem('pt-lang');
    if (saved && i18n[saved]) return saved;
    const browserLang = navigator.language || navigator.userLanguage || 'en';
    return browserLang.toLowerCase().startsWith('fr') ? 'fr' : 'en';
  }

  function setLanguage(lang) {
    if (!i18n[lang]) return;
    currentLang = lang;
    localStorage.setItem('pt-lang', lang);
    document.documentElement.lang = lang;

    // Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (i18n[lang][key] !== undefined) {
        el.textContent = i18n[lang][key];
      }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (i18n[lang][key] !== undefined) {
        el.placeholder = i18n[lang][key];
      }
    });

    // Update select options
    document.querySelectorAll('option[data-i18n]').forEach(opt => {
      const key = opt.getAttribute('data-i18n');
      if (i18n[lang][key] !== undefined) {
        opt.textContent = i18n[lang][key];
      }
    });

    // Update lang toggle button
    const toggle = document.getElementById('langToggle');
    if (toggle) {
      toggle.textContent = lang === 'fr' ? 'EN' : 'FR';
      toggle.setAttribute('aria-label', lang === 'fr' ? 'Switch to English' : 'Passer en français');
    }
  }

  function toggleLanguage() {
    setLanguage(currentLang === 'fr' ? 'en' : 'fr');
  }

  // ═══════════════════════════════════════════════════════════════
  //  DOM REFERENCES
  // ═══════════════════════════════════════════════════════════════

  const pageLoader = document.getElementById('pageLoader');
  const loaderBar = document.getElementById('loaderBar');
  const loaderPercent = document.getElementById('loaderPercent');
  const header = document.getElementById('header');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');
  const heroTitle = document.getElementById('heroTitle');
  const heroCounter = document.getElementById('heroCounter');
  const contactForm = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const formMessage = document.getElementById('formMessage');

  // ═══════════════════════════════════════════════════════════════
  //  PAGE LOADER
  // ═══════════════════════════════════════════════════════════════
  let loadProgress = 0;

  function updateLoader(progress) {
    loadProgress = Math.min(progress, 100);
    loaderBar.style.width = loadProgress + '%';
    loaderPercent.textContent = Math.round(loadProgress) + '%';
  }

  function finishLoader() {
    updateLoader(100);
    setTimeout(() => {
      pageLoader.classList.add('hidden');
      document.body.style.overflow = '';
      initHeroAnimations();
    }, 500);
  }

  document.body.style.overflow = 'hidden';
  const loadSteps = [15, 35, 55, 75, 90, 100];
  loadSteps.forEach((step, i) => {
    setTimeout(() => updateLoader(step), i * 200 + Math.random() * 300);
  });

  window.addEventListener('load', () => {
    setTimeout(finishLoader, 800);
  });

  setTimeout(() => {
    if (!pageLoader.classList.contains('hidden')) finishLoader();
  }, 5000);

  // ═══════════════════════════════════════════════════════════════
  //  LANGUAGE SETUP
  // ═══════════════════════════════════════════════════════════════
  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', toggleLanguage);
  }
  setLanguage(detectLanguage());

  // ═══════════════════════════════════════════════════════════════
  //  HEADER SCROLL EFFECT
  // ═══════════════════════════════════════════════════════════════
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    lastScroll = currentScroll;
  }, { passive: true });

  // ═══════════════════════════════════════════════════════════════
  //  MOBILE MENU
  // ═══════════════════════════════════════════════════════════════
  mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const spans = mobileMenuBtn.querySelectorAll('span');
    if (navLinks.classList.contains('active')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    }
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      const spans = mobileMenuBtn.querySelectorAll('span');
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    });
  });

  // ═══════════════════════════════════════════════════════════════
  //  SPLIT TEXT ANIMATION
  // ═══════════════════════════════════════════════════════════════
  function initSplitText(element) {
    const text = element.textContent;
    element.innerHTML = '';
    const lines = text.split('\n');
    lines.forEach((line, lineIndex) => {
      const lineEl = document.createElement('span');
      lineEl.style.display = 'block';
      const words = line.trim().split(/\s+/);
      words.forEach((word, i) => {
        const wordSpan = document.createElement('span');
        wordSpan.className = 'word';
        const inner = document.createElement('span');
        inner.className = 'word-inner';
        inner.textContent = word;
        inner.style.transitionDelay = (lineIndex * 0.15 + i * 0.05) + 's';
        wordSpan.appendChild(inner);
        lineEl.appendChild(wordSpan);
        if (i < words.length - 1) {
          lineEl.appendChild(document.createTextNode(' '));
        }
      });
      element.appendChild(lineEl);
    });
    element.classList.add('split-text');
  }

  // ═══════════════════════════════════════════════════════════════
  //  HERO ANIMATIONS
  // ═══════════════════════════════════════════════════════════════
  function initHeroAnimations() {
    if (heroTitle) {
      initSplitText(heroTitle);
      setTimeout(() => heroTitle.classList.add('visible'), 100);
    }
    if (heroCounter) {
      animateCounter(heroCounter, 0, 350, 2000);
    }
  }

  // ═══════════════════════════════════════════════════════════════
  //  COUNTER ANIMATION
  // ═══════════════════════════════════════════════════════════════
  function animateCounter(element, start, end, duration) {
    const startTime = performance.now();
    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(start + (end - start) * easeProgress);
      element.textContent = current;
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  // ═══════════════════════════════════════════════════════════════
  //  INTERSECTION OBSERVER — SCROLL REVEALS
  // ═══════════════════════════════════════════════════════════════
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        const counters = entry.target.querySelectorAll('.counter');
        counters.forEach(counter => {
          const target = parseInt(counter.dataset.target, 10);
          if (!counter.classList.contains('counted')) {
            counter.classList.add('counted');
            animateCounter(counter, 0, target, 2000);
          }
        });
        const splitTexts = entry.target.querySelectorAll('.split-text:not(.visible)');
        splitTexts.forEach(el => el.classList.add('visible'));
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal, .split-text').forEach(el => {
    revealObserver.observe(el);
  });

  // ═══════════════════════════════════════════════════════════════
  //  SMOOTH SCROLL
  // ═══════════════════════════════════════════════════════════════
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerHeight = header.offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    });
  });

  // ═══════════════════════════════════════════════════════════════
  //  TEXT SCRAMBLE
  // ═══════════════════════════════════════════════════════════════
  class TextScramble {
    constructor(el) {
      this.el = el;
      this.chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()';
      this.originalText = el.textContent;
    }
    scramble() {
      let iteration = 0;
      const interval = setInterval(() => {
        this.el.textContent = this.originalText.split('').map((char, index) => {
          if (index < iteration) return this.originalText[index];
          if (char === ' ') return ' ';
          return this.chars[Math.floor(Math.random() * this.chars.length)];
        }).join('');
        iteration += 1 / 3;
        if (iteration >= this.originalText.length) {
          clearInterval(interval);
          this.el.textContent = this.originalText;
        }
      }, 30);
    }
  }

  document.querySelectorAll('.service-title').forEach(el => {
    const scrambler = new TextScramble(el);
    el.parentElement.addEventListener('mouseenter', () => scrambler.scramble());
  });

  // ═══════════════════════════════════════════════════════════════
  //  CONTACT FORM
  // ═══════════════════════════════════════════════════════════════
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      formMessage.className = 'form-message';
      formMessage.textContent = '';

      const name = contactForm.name.value.trim();
      const email = contactForm.email.value.trim();
      const phone = contactForm.phone.value.trim();
      const service = contactForm.service.value;
      const message = contactForm.message.value.trim();

      if (!name || name.length < 2) {
        showFormError(currentLang === 'fr' ? 'Veuillez entrer un nom valide (2+ caractères).' : 'Please enter a valid name (2+ characters).');
        return;
      }
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showFormError(currentLang === 'fr' ? 'Veuillez entrer une adresse email valide.' : 'Please enter a valid email address.');
        return;
      }
      if (!service) {
        showFormError(currentLang === 'fr' ? 'Veuillez sélectionner un service.' : 'Please select a service.');
        return;
      }
      if (!message || message.length < 10) {
        showFormError(currentLang === 'fr' ? 'Veuillez entrer un message (10+ caractères).' : 'Please enter a message (10+ characters).');
        return;
      }

      submitBtn.disabled = true;
      submitBtn.textContent = currentLang === 'fr' ? 'Envoi...' : 'Sending...';

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({ name, email, phone, service, message })
        });
        const data = await response.json();
        if (data.success) {
          showFormSuccess(data.message || (currentLang === 'fr' ? 'Merci ! Nous vous contacterons sous 24h.' : 'Thank you! We will contact you within 24 hours.'));
          contactForm.reset();
        } else {
          const errorMsg = data.errors ? data.errors.map(e => e.message).join(', ') : (data.error || (currentLang === 'fr' ? "Une erreur s'est produite." : 'Something went wrong.'));
          showFormError(errorMsg);
        }
      } catch (err) {
        showFormError(currentLang === 'fr' ? 'Erreur réseau. Veuillez vérifier votre connexion.' : 'Network error. Please check your connection.');
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = currentLang === 'fr' ? 'Envoyer' : 'Send Message';
      }
    });
  }

  function showFormSuccess(msg) {
    formMessage.className = 'form-message success';
    formMessage.textContent = msg;
  }

  function showFormError(msg) {
    formMessage.className = 'form-message error';
    formMessage.textContent = msg;
  }

  // ═══════════════════════════════════════════════════════════════
  //  PARALLAX & CURSOR EFFECTS
  // ═══════════════════════════════════════════════════════════════
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero && scrollY < window.innerHeight) {
      const heroContent = hero.querySelector('.hero-content');
      const heroVisual = hero.querySelector('.hero-visual');
      if (heroContent) heroContent.style.transform = `translateY(${scrollY * 0.15}px)`;
      if (heroVisual) heroVisual.style.transform = `translateY(${scrollY * 0.08}px)`;
    }
  }, { passive: true });

  // ═══════════════════════════════════════════════════════════════
  //  CLEANUP
  // ═══════════════════════════════════════════════════════════════
  window.addEventListener('beforeunload', () => {
    revealObserver.disconnect();
  });

})();