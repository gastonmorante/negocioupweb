/**
 * NegocioUp — Multilingual (ES / EN / FR / IT) & Dynamic Interactive Engine
 * Connects Stitch Vibe Design + Official Copywriting + Live ROI Simulator + GoHighLevel/Meta/Google
 */
(function () {
  const I18N = {
    es: {
      langName: "Español",
      title: "NegocioUp | Agencia de Automatización, Ecosistemas Digitales, CRM e IA 24/7",
      nav: ["Pilares & Servicios", "Ecosistemas IA", "División Real Estate", "Filosofía & ROI", "Ubicación & Contacto"],
      ctaMain: "Agendar una Sesión de Diagnóstico Estratégico",
      waDirect: "WhatsApp Directo: +52 1 662 636 6303",
      heroBadge: "ECOSISTEMAS DE IA, CRM & AUTOMATIZACIÓN COMERCIAL 24/7",
      mapsVerified: "Google Maps Verificado · Playa del Carmen, Q.R., México",
      heroH1_1: "Desde el ADN digital hasta la venta automática: ",
      heroH1_2: "Construimos tu ecosistema virtual",
      heroH1_3: " listo para facturar.",
      heroSub: "No creamos simples páginas web. Diseñamos infraestructura comercial de alto rendimiento con Inteligencia Artificial, CRM y automatización 24/7 para transformar la captación de prospectos en ventas predecibles, medibles y escalables.",
      heroTrust: "Diagnóstico estratégico inicial e integración nativa con GoHighLevel",
      consoleActive: "PIPELINE AUTÓNOMO ACTIVO",
      consoleInstant: "99.8% RESPUESTA INSTANTÁNEA",
      nodes: [
        { tag: "01 // INGESTA DE LEADS", title: "Omnicanal Sync", desc: "WhatsApp Meta API, Google Maps, Webhooks & formularios capturados en tiempo real.", stat: "Inbound: +1,248/hr", live: "⚡ Nuevo lead capturado desde Google Maps & Meta Ads → Sincronizado en 0.1s" },
        { tag: "02 // CUALIFICACIÓN IA", title: "Inferencia LLM 24/7", desc: "Agentes IA evalúan presupuesto, urgencia y perfil de compra en 0.4 segundos.", stat: "Score Fit: 94.2%", live: "🤖 Agente IA WhatsApp calificó presupuesto y liquidez del prospecto en 8 segundos" },
        { tag: "03 // AGENDA AUTOMÁTICA", title: "Closer Hand-off", desc: "Agente de Voz o Chat agenda cita directa en GoHighLevel según disponibilidad.", stat: "Show-rate: 89.4%", live: "📅 Cita confirmada automáticamente en calendario y recordatorios activados" },
        { tag: "04 // DATA FABRIC & CRM", title: "Atribución Total", desc: "Sincronización instantánea con GoHighLevel, HubSpot o Salesforce con ROI real.", stat: "Sincronizado: 100%", live: "📈 Oportunidad asignada en CRM con trazabilidad exacta de campaña y ROI" }
      ],
      ticker: ["Pipeline Comercial Gestionado", "Latencia de Respuesta IA Promedio", "Retorno de Inversión (ROI Auditado)"],
      trustTitle: "Infraestructura de confianza para firmas tecnológicas, constructoras y fondos globales",
      // Simple 3-Step + Interactive ROI Section
      simpleBadge: "SIMPLE, RÁPIDO Y RENTABLE // CÓMO FUNCIONA",
      simpleTitle: "Entiende tu Nuevo Ecosistema en 3 Pasos Simples",
      simpleSub: "Eliminamos la complejidad técnica. Así transformamos desconocidos en clientes listos para comprar:",
      steps: [
        { num: "PASO 01", icon: "ads_click", title: "Atraemos y Capturamos", desc: "Tu nueva Arquitectura Web, Google Maps y Pauta Estratégica captan prospectos con intención real de compra." },
        { num: "PASO 02", icon: "smart_toy", title: "La IA Atiende y Filtra 24/7", desc: "En menos de 15 segundos, nuestros Agentes IA en WhatsApp y Voz responden, califican presupuesto y agendan la cita." },
        { num: "PASO 03", icon: "real_estate_agent", title: "Tu Equipo Solo Cierra Ventas", desc: "Todo queda registrado en tu CRM (GoHighLevel) con métricas reales para tomar mejores decisiones comerciales." }
      ],
      roiTitle: "Simulador Interactivo de Impacto Comercial",
      roiSub: "Mueve los controles para estimar cuánto pipeline adicional puedes recuperar respondiendo en <15s con IA 24/7 + CRM:",
      roiLeadsLbl: "Prospectos mensuales que recibe tu negocio",
      roiTicketLbl: "Valor promedio por venta / cliente (USD)",
      roiResult1Lbl: "Citas Calificadas Extra / Mes",
      roiResult2Lbl: "Facturación Adicional Estimada / Mes",
      // 4 Pillars
      pillarsBadge: "Metodología Cuatridimensional // Los 4 Pilares de NegocioUp",
      pillarsTitle: "Arquitectura Integral 360° para Escala Operativa y Facturación",
      pillarsSub: "Cada pilar opera como un módulo autónomo e interconectado desde el ADN digital hasta el cierre en tu CRM, erradicando fugas de prospectos y acelerando el ciclo comercial completo.",
      pillarTabs: ["Todos (360°)", "01. Web", "02. IA 24/7", "03. CRM", "04. Pauta"],
      pillars: [
        {
          code: "PILAR 01 // ADN DIGITAL",
          title: "Arquitectura Web & Experiencias Digitales",
          desc: "Construimos tu activo digital como una máquina de captura y conversión, no como un folleto pasivo. Desarrollamos interfaces web de alta gama en Next.js y Tailwind con tiempos de carga inferiores a 800ms, SEO técnico estructurado para dominar Google y conexión directa por Webhooks con tu ecosistema comercial.",
          barLbl: "Lighthouse Performance & SEO Técnico",
          barNote: "Servidores edge con CDN distribuida globalmente y Schema.org nativo",
          guarantee: "Garantía: TTFB < 85ms y arquitectura lista para convertir"
        },
        {
          code: "PILAR 02 // IA 24/7",
          title: "IA & Automatización 24/7 de Procesos",
          desc: "Desplegamos agentes conversacionales inteligentes multicanal (WhatsApp Business API, Instagram, Webchat) y agentes de voz hiper-realistas que responden en menos de 15 segundos, califican presupuesto, resuelven objeciones y agendan citas directamente en el calendario de tus ejecutivos sin intervención humana.",
          barLbl: "Capacidad de Atención Simultánea 24/7",
          barNote: "Zero Drop-Off por tiempo de espera en hora pico o madrugada",
          guarantee: "Garantía: Cualificación y primer contacto en < 15 segundos"
        },
        {
          code: "PILAR 03 // CONTROL CRM",
          title: "CRM Comercial & Pipelines Predictivos",
          desc: "Centralizamos toda tu operación comercial en GoHighLevel (LeadConnector), HubSpot o Salesforce. Implementamos algoritmos de lead-scoring predictivo, secuencias de seguimiento automático, reactivación de bases de datos dormidas y asignación inteligente de oportunidades para tu fuerza de ventas.",
          barLbl: "Tasa de Reactivación de Base Dormida",
          barNote: "Recuperación de ventas sin inversión publicitaria adicional",
          guarantee: "Garantía: Cero fuga de leads por descuido manual"
        },
        {
          code: "PILAR 04 // CONTENIDO & PAUTA",
          title: "Producción Audiovisual & Pauta de Alto Calibre",
          desc: "Alimentamos tu ecosistema con piezas creativas de impacto cinematográfico y estrategias de adquisición en Meta Ads, Google Ads y TikTok con atribución Server-Side (CAPI). Entrenamos a los algoritmos con las ventas reales registradas en tu CRM para comprimir el Costo de Adquisición (CAC).",
          barLbl: "Reducción Media de CAC",
          barNote: "Tracking Server-Side First-Party para Google Ads & Meta CAPI",
          guarantee: "Garantía: Auditoría y optimización diaria de rendimiento"
        }
      ],
      // Real Estate
      reBadge: "DIVISIÓN ESPECIALIZADA: NEGOCIOUP REAL ESTATE SUITE",
      reTitle: "Aceleración de Ventas para Desarrollos y Lanzamientos Inmobiliarios",
      reSub: "Convertimos inventario inmobiliario en preventa acelerada mediante showrooms virtuales interactivos, captación de inversionistas de alto patrimonio y cualificación inmediata por agentes de IA.",
      reModules: [
        { title: "Agentes Inmobiliarios IA 24/7", desc: "Respuesta y entrega de brochures interactivos personalizados, fichas técnicas y cotizaciones financieras en menos de 30 segundos vía WhatsApp." },
        { title: "Filtro Financiero Inmediato", desc: "Cualificación algorítmica de capacidad de inversión y liquidez antes de agendar la llamada o tour presencial con el broker closer humano." },
        { title: "Pauta Hyper-Targeted HNW", desc: "Captación de compradores e inversionistas High-Net-Worth en mercados estratégicos de México, Riviera Maya, EE.UU., España y LATAM." },
        { title: "Sincronización de Inventario", desc: "Actualización automática de unidades disponibles, bloqueos de enganche y listas de precios reflejadas en segundos para toda la fuerza de ventas." }
      ],
      // Philosophy
      philBadge: "Principios de Ingeniería Comercial // Filosofía NegocioUp",
      philH2_1: "No prometemos métricas vacías... ",
      philH2_2: "Construimos tecnología que produce mejores decisiones comerciales.",
      philSub: "La tecnología sin impacto en el balance general es solo gasto superfluo. En NegocioUp cada línea de código, cada integración en GoHighLevel y cada agente autónomo existe exclusivamente para generar rentabilidad demostrable.",
      philCards: [
        { tag: "01 / PRINCIPIO ANALÍTICO", title: "Decisiones Guiadas por Datos, No por Intuición", desc: "Implementamos paneles de control en tiempo real donde cada céntimo invertido en adquisición tiene trazabilidad directa hasta el depósito bancario. Monitoreo constante de CAC, LTV y ciclo de conversión." },
        { tag: "02 / PRINCIPIO OPERACIONAL", title: "Automatización que Libera Margen Operativo", desc: "Eliminamos tareas repetitivas de captura, filtrado y seguimiento manual para que tu equipo comercial dedique el 100% de su energía a cerrar prospectos calificados que ya están listos para comprar." },
        { tag: "03 / PRINCIPIO FINANCIERO", title: "Rentabilidad Predictiva (ROI Atribuido)", desc: "Antes de iniciar cualquier sprint de ingeniería, estructuramos un modelo financiero predictivo que determina los umbrales de conversión requeridos para amortizar el desarrollo y generar flujo neto positivo." }
      ],
      // Calendar
      calBadge: "CUPOS LIMITADOS // CONEXIÓN DIRECTA GOHIGHLEVEL & WHATSAPP",
      calH2_1: "¿Listo para transformar tu empresa en un ",
      calH2_2: "ecosistema autónomo",
      calH2_3: " listo para facturar?",
      calSub: "Agenda tu Sesión de Diagnóstico Estratégico de 45 minutos con nuestros arquitectos de sistemas. Analizaremos tu infraestructura actual, cuellos de botella comerciales y te presentaremos un roadmap de automatización a medida.",
      calCardTitle: "Sesión de Diagnóstico Estratégico",
      calStep1: "1. Selecciona fecha disponible",
      calStep2: "2. Horarios recomendados (Zona: México / Miami)",
      placeholders: ["Nombre y Apellido *", "Empresa o Desarrollo *", "Correo corporativo (ej: director@empresa.com) *", "WhatsApp / Teléfono directo *"]
    },

    en: {
      langName: "English",
      title: "NegocioUp | AI Automation Agency, Digital Ecosystems & 24/7 Commercial CRM",
      nav: ["Pillars & Services", "AI Ecosystems", "Real Estate Division", "Philosophy & ROI", "Location & Contact"],
      ctaMain: "Schedule a Strategic Diagnostic Session",
      waDirect: "Direct WhatsApp: +52 1 662 636 6303",
      heroBadge: "24/7 AI ECOSYSTEMS, CRM & COMMERCIAL AUTOMATION",
      mapsVerified: "Verified Google Maps · Playa del Carmen, Q.R., Mexico",
      heroH1_1: "From Digital DNA to Automated Sales: ",
      heroH1_2: "We build your virtual ecosystem",
      heroH1_3: " ready to generate revenue.",
      heroSub: "We don't build simple websites. We engineer high-performance commercial infrastructure with Artificial Intelligence, CRM, and 24/7 automation to turn lead generation into predictable, measurable, and scalable revenue.",
      heroTrust: "Initial strategic diagnostic & native GoHighLevel integration",
      consoleActive: "AUTONOMOUS PIPELINE ACTIVE",
      consoleInstant: "99.8% INSTANT RESPONSE",
      nodes: [
        { tag: "01 // LEAD INGESTION", title: "Omnichannel Sync", desc: "WhatsApp Meta API, Google Maps, Webhooks & inbound forms captured in real time.", stat: "Inbound: +1,248/hr", live: "⚡ New lead captured from Google Maps & Meta Ads → Synced in 0.1s" },
        { tag: "02 // AI QUALIFICATION", title: "24/7 LLM Inference", desc: "AI Agents evaluate budget, urgency, and transactional fit in 0.4 seconds.", stat: "Fit Score: 94.2%", live: "🤖 WhatsApp AI Agent qualified prospect budget & readiness in 8 seconds" },
        { tag: "03 // AUTO-BOOKING", title: "Closer Hand-off", desc: "Voice or Chat AI books directly into GoHighLevel according to rep availability.", stat: "Show-rate: 89.4%", live: "📅 Appointment auto-confirmed in calendar with smart reminders active" },
        { tag: "04 // DATA FABRIC & CRM", title: "Full Attribution", desc: "Instant sync with GoHighLevel, HubSpot, or Salesforce with audited ROI tracking.", stat: "Synced: 100%", live: "📈 Opportunity assigned in CRM with end-to-end ad & revenue attribution" }
      ],
      ticker: ["Managed Commercial Pipeline", "Average AI Response Latency", "Audited Return on Investment (ROI)"],
      trustTitle: "Trusted infrastructure for technology firms, developers, and global investment funds",
      simpleBadge: "SIMPLE, FAST & PROFITABLE // HOW IT WORKS",
      simpleTitle: "Understand Your New Ecosystem in 3 Simple Steps",
      simpleSub: "We remove technical complexity. Here is how we turn strangers into buyers ready to close:",
      steps: [
        { num: "STEP 01", icon: "ads_click", title: "Attract & Capture", desc: "Your high-speed Web Architecture, Google Maps, and Strategic Paid Media capture high-intent buyers." },
        { num: "STEP 02", icon: "smart_toy", title: "AI Qualifies & Books 24/7", desc: "In under 15 seconds, our WhatsApp and Voice AI Agents answer questions, qualify budget, and book meetings." },
        { num: "STEP 03", icon: "real_estate_agent", title: "Your Team Only Closes Deals", desc: "Everything is tracked in your CRM (GoHighLevel) with real metrics to drive better commercial decisions." }
      ],
      roiTitle: "Interactive Commercial Impact Simulator",
      roiSub: "Adjust the sliders to estimate how much extra pipeline you can recover by responding in <15s with 24/7 AI + CRM:",
      roiLeadsLbl: "Monthly leads your business receives",
      roiTicketLbl: "Average deal / customer value (USD)",
      roiResult1Lbl: "Extra Qualified Meetings / Month",
      roiResult2Lbl: "Estimated Additional Revenue / Month",
      pillarsBadge: "Four-Dimensional Methodology // The 4 Pillars of NegocioUp",
      pillarsTitle: "360° Full-Stack Architecture for Operational Scale & Revenue",
      pillarsSub: "Each pillar operates as an interconnected autonomous module from digital DNA to CRM closing, eliminating lead leakage and accelerating your sales cycle.",
      pillarTabs: ["All (360°)", "01. Web", "02. 24/7 AI", "03. CRM", "04. Paid Media"],
      pillars: [
        {
          code: "PILLAR 01 // DIGITAL DNA",
          title: "Web Architecture & Digital Experiences",
          desc: "We build your digital asset as a high-converting capture machine, not a passive brochure. High-end Next.js and Tailwind interfaces with sub-800ms load times, technical SEO built to dominate Google, and native Webhook connections to your sales ecosystem.",
          barLbl: "Lighthouse Performance & Technical SEO",
          barNote: "Global Edge CDN servers and native Schema.org markup",
          guarantee: "Guarantee: TTFB < 85ms & conversion-ready architecture"
        },
        {
          code: "PILLAR 02 // 24/7 AI",
          title: "AI & 24/7 Process Automation",
          desc: "We deploy intelligent multichannel conversational agents (WhatsApp Business API, Instagram, Webchat) and hyper-realistic voice bots that respond in under 15 seconds, qualify budget, handle objections, and schedule appointments directly on your reps' calendars.",
          barLbl: "24/7 Simultaneous Response Capacity",
          barNote: "Zero drop-off from wait times during peak hours or nights",
          guarantee: "Guarantee: Qualification & first response in < 15 seconds"
        },
        {
          code: "PILLAR 03 // CRM CONTROL",
          title: "Commercial CRM & Predictive Pipelines",
          desc: "We centralize your entire sales operation in GoHighLevel (LeadConnector), HubSpot, or Salesforce. Predictive lead scoring, automated follow-up sequences, dormant database reactivation, and smart opportunity routing for your sales force.",
          barLbl: "Dormant Database Reactivation Rate",
          barNote: "Recovered sales without additional ad spend",
          guarantee: "Guarantee: Zero lead leakage from manual oversight"
        },
        {
          code: "PILLAR 04 // MEDIA & ADS",
          title: "Audiovisual Production & High-Caliber Paid Media",
          desc: "We fuel your ecosystem with cinematic high-converting creatives and acquisition campaigns across Meta Ads, Google Ads, and TikTok with Server-Side Attribution (CAPI). We train ad algorithms with real CRM closed deals to compress Customer Acquisition Cost (CAC).",
          barLbl: "Average CAC Reduction",
          barNote: "First-Party Server-Side tracking for Google Ads & Meta CAPI",
          guarantee: "Guarantee: Daily performance audit and optimization"
        }
      ],
      reBadge: "SPECIALIZED DIVISION: NEGOCIOUP REAL ESTATE SUITE",
      reTitle: "Sales Acceleration for Real Estate Developments & Launches",
      reSub: "We turn real estate inventory into accelerated pre-sales through interactive virtual showrooms, HNW investor acquisition, and instant qualification via 24/7 AI agents.",
      reModules: [
        { title: "24/7 Real Estate AI Agents", desc: "Instant delivery of interactive brochures, floor plans, and financial quotes in under 30 seconds via WhatsApp." },
        { title: "Instant Financial Filtering", desc: "Algorithmic qualification of investment capacity and liquidity before booking a call or tour with your human closer." },
        { title: "Hyper-Targeted HNW Paid Media", desc: "Acquisition of High-Net-Worth buyers and investors across Mexico, Riviera Maya, USA, Spain, and LATAM." },
        { title: "Live Inventory Synchronization", desc: "Automated updates of available units, reservation locks, and price lists reflected in seconds for your entire sales team." }
      ],
      philBadge: "Commercial Engineering Principles // NegocioUp Philosophy",
      philH2_1: "We don't promise vanity metrics... ",
      philH2_2: "We build technology that drives better commercial decisions.",
      philSub: "Technology without bottom-line impact is just overhead. At NegocioUp, every line of code, every GoHighLevel workflow, and every autonomous agent exists exclusively to generate measurable profitability.",
      philCards: [
        { tag: "01 / ANALYTICAL PRINCIPLE", title: "Data-Driven Decisions, Not Guesswork", desc: "Real-time executive dashboards where every dollar invested in acquisition is traced directly to closed revenue. Continuous monitoring of CAC, LTV, and conversion velocity." },
        { tag: "02 / OPERATIONAL PRINCIPLE", title: "Automation That Frees Operating Margin", desc: "We eliminate repetitive manual data entry, filtering, and chasing so your sales team dedicates 100% of their energy to closing qualified buyers." },
        { tag: "03 / FINANCIAL PRINCIPLE", title: "Predictive Profitability (Attributed ROI)", desc: "Before starting any engineering sprint, we structure a predictive financial model that defines the conversion thresholds required for positive net cash flow." }
      ],
      calBadge: "LIMITED SLOTS // DIRECT GOHIGHLEVEL & WHATSAPP SYNC",
      calH2_1: "Ready to transform your company into an ",
      calH2_2: "autonomous ecosystem",
      calH2_3: " ready to generate revenue?",
      calSub: "Schedule your 45-minute Strategic Diagnostic Session with our systems architects. We will audit your current infrastructure, sales bottlenecks, and present a custom automation roadmap.",
      calCardTitle: "Strategic Diagnostic Session",
      calStep1: "1. Select an available date",
      calStep2: "2. Recommended times (Zone: Mexico / Miami)",
      placeholders: ["Full Name *", "Company or Development *", "Corporate Email (e.g. ceo@company.com) *", "WhatsApp / Direct Phone *"]
    },

    fr: {
      langName: "Français",
      title: "NegocioUp | Agence d'Automatisation, Écosystèmes Digitaux, CRM et IA 24/7",
      nav: ["Piliers & Services", "Écosystèmes IA", "Division Immobilier", "Philosophie & ROI", "Localisation & Contact"],
      ctaMain: "Planifier une Session de Diagnostic Stratégique",
      waDirect: "WhatsApp Direct : +52 1 662 636 6303",
      heroBadge: "ÉCOSYSTÈMES IA, CRM & AUTOMATISATION COMMERCIALE 24/7",
      mapsVerified: "Google Maps Vérifié · Playa del Carmen, Q.R., Mexique",
      heroH1_1: "De l'ADN numérique à la vente automatisée : ",
      heroH1_2: "Nous construisons votre écosystème virtuel",
      heroH1_3: " prêt à facturer.",
      heroSub: "Nous ne créons pas de simples sites web. Nous concevons des infrastructures commerciales de haute performance avec Intelligence Artificielle, CRM et automatisation 24/7 pour transformer l'acquisition de prospects en ventes prévisibles et évolutives.",
      heroTrust: "Diagnostic stratégique initial et intégration native avec GoHighLevel",
      consoleActive: "PIPELINE AUTONOME ACTIF",
      consoleInstant: "99.8% RÉPONSE INSTANTANÉE",
      nodes: [
        { tag: "01 // CAPTURE DE LEADS", title: "Sync Omnicanal", desc: "WhatsApp Meta API, Google Maps, Webhooks et formulaires capturés en temps réel.", stat: "Inbound: +1,248/h", live: "⚡ Nouveau prospect capturé via Google Maps & Meta Ads → Synchronisé en 0.1s" },
        { tag: "02 // QUALIFICATION IA", title: "Inférence LLM 24/7", desc: "Nos agents IA évaluent le budget, l'urgence et le profil d'achat en 0.4 seconde.", stat: "Score Fit: 94.2%", live: "🤖 L'agent IA WhatsApp a qualifié le budget du prospect en 8 secondes" },
        { tag: "03 // AGENDA AUTOMATIQUE", title: "Transfert Closer", desc: "L'agent vocal ou chat planifie le rendez-vous dans GoHighLevel selon vos disponibilités.", stat: "Présence: 89.4%", live: "📅 Rendez-vous confirmé automatiquement dans l'agenda avec rappels actifs" },
        { tag: "04 // DATA FABRIC & CRM", title: "Attribution Totale", desc: "Synchronisation instantanée avec GoHighLevel, HubSpot ou Salesforce avec suivi du ROI.", stat: "Synchronisé: 100%", live: "📈 Opportunité assignée dans le CRM avec traçabilité complète du ROI" }
      ],
      ticker: ["Pipeline Commercial Géré", "Latence Moyenne de Réponse IA", "Retour sur Investissement (ROI Audité)"],
      trustTitle: "Infrastructure de confiance pour entreprises technologiques, promoteurs et fonds globaux",
      simpleBadge: "SIMPLE, RAPIDE ET RENTABLE // COMMENT ÇA MARCHE",
      simpleTitle: "Comprenez Votre Nouvel Écosystème en 3 Étapes Simples",
      simpleSub: "Nous éliminons la complexité technique. Voici comment nous transformons vos visiteurs en clients prêts à signer :",
      steps: [
        { num: "ÉTAPE 01", icon: "ads_click", title: "Attirer et Capturer", desc: "Votre Architecture Web ultra-rapide, Google Maps et vos publicités ciblées captent des prospects qualifiés." },
        { num: "ÉTAPE 02", icon: "smart_toy", title: "L'IA Qualifie et Planifie 24/7", desc: "En moins de 15 secondes, nos agents IA sur WhatsApp et Voix répondent, filtrent le budget et fixent le RDV." },
        { num: "ÉTAPE 03", icon: "real_estate_agent", title: "Votre Équipe Conclut les Ventes", desc: "Tout est centralisé dans votre CRM (GoHighLevel) avec des données réelles pour de meilleures décisions." }
      ],
      roiTitle: "Simulateur Interactif d'Impact Commercial",
      roiSub: "Ajustez les curseurs pour estimer le chiffre d'affaires additionnel récupéré grâce à une réponse IA en <15s 24/7 :",
      roiLeadsLbl: "Prospects mensuels reçus par votre entreprise",
      roiTicketLbl: "Valeur moyenne par vente / client (USD)",
      roiResult1Lbl: "RDV Qualifiés Supplémentaires / Mois",
      roiResult2Lbl: "Chiffre d'Affaires Additionnel Estimé / Mois",
      pillarsBadge: "Méthodologie Quadridimensionnelle // Les 4 Piliers de NegocioUp",
      pillarsTitle: "Architecture Intégrale 360° pour l'Échelle Opérationnelle",
      pillarsSub: "Chaque pilier fonctionne comme un module autonome interconnecté, éliminant les pertes de prospects et accélérant l'ensemble du cycle commercial.",
      pillarTabs: ["Tous (360°)", "01. Web", "02. IA 24/7", "03. CRM", "04. Publicité"],
      pillars: [
        {
          code: "PILIER 01 // ADN NUMÉRIQUE",
          title: "Architecture Web & Expériences Digitales",
          desc: "Nous construisons votre actif digital comme une machine de conversion, pas comme une brochure passive. Interfaces Next.js et Tailwind avec chargement <800ms, SEO technique pour dominer Google et connexion directe par Webhooks.",
          barLbl: "Performance Lighthouse & SEO Technique",
          barNote: "Serveurs Edge CDN mondiaux et balisage Schema.org natif",
          guarantee: "Garantie : TTFB < 85ms et architecture orientée conversion"
        },
        {
          code: "PILIER 02 // IA 24/7",
          title: "IA & Automatisation 24/7 des Processus",
          desc: "Agents conversationnels intelligents multicanaux (WhatsApp Business API, Instagram, Webchat) et agents vocaux réalistes qui répondent en moins de 15 secondes, qualifient les prospects et prennent rendez-vous 24/7.",
          barLbl: "Capacité d'Attention Simultanée 24/7",
          barNote: "Zéro perte de prospect liée au temps d'attente",
          guarantee: "Garantie : Qualification et premier contact en < 15 secondes"
        },
        {
          code: "PILIER 03 // CONTRÔLE CRM",
          title: "CRM Commercial & Pipelines Prédictifs",
          desc: "Centralisation complète de vos ventes sur GoHighLevel (LeadConnector), HubSpot ou Salesforce. Lead-scoring prédictif, séquences de relance automatiques et réactivation des bases de données dormantes.",
          barLbl: "Taux de Réactivation des Contacts Dormants",
          barNote: "Récupération de ventes sans budget publicitaire supplémentaire",
          guarantee: "Garantie : Zéro fuite de prospects par oubli manuel"
        },
        {
          code: "PILIER 04 // CONTENU & ADS",
          title: "Production Audiovisuelle & Publicité Haute Performance",
          desc: "Créations vidéo cinématographiques et campagnes d'acquisition sur Meta Ads, Google Ads et TikTok avec attribution Server-Side (CAPI) connectée aux ventes réelles de votre CRM pour réduire le CAC.",
          barLbl: "Réduction Moyenne du CAC",
          barNote: "Suivi Server-Side First-Party pour Google Ads & Meta CAPI",
          guarantee: "Garantie : Audit et optimisation quotidienne des performances"
        }
      ],
      reBadge: "DIVISION SPÉCIALISÉE : NEGOCIOUP REAL ESTATE SUITE",
      reTitle: "Accélération des Ventes pour Promotions et Lancements Immobiliers",
      reSub: "Nous transformons l'inventaire immobilier en préventes accélérées grâce aux showrooms virtuels, au ciblage d'investisseurs HNW et à la qualification IA 24/7.",
      reModules: [
        { title: "Agents Immobiliers IA 24/7", desc: "Envoi instantané de brochures interactives, plans et simulations financières en moins de 30 secondes sur WhatsApp." },
        { title: "Filtre Financier Immédiat", desc: "Qualification algorithmique de la capacité d'investissement et d'apport avant de planifier l'appel avec le broker." },
        { title: "Publicité Hyper-Ciblée HNW", desc: "Acquisition d'acheteurs et d'investisseurs fortunés au Mexique, Riviera Maya, États-Unis, Espagne et Amérique Latine." },
        { title: "Synchronisation d'Inventaire", desc: "Mise à jour automatique des unités disponibles et des grilles tarifaires en quelques secondes pour toute l'équipe." }
      ],
      philBadge: "Principes d'Ingénierie Commerciale // Philosophie NegocioUp",
      philH2_1: "Nous ne promettons pas de métriques vides... ",
      philH2_2: "Nous construisons une technologie qui génère de meilleures décisions commerciales.",
      philSub: "La technologie sans impact sur le bilan n'est qu'une dépense superflue. Chez NegocioUp, chaque ligne de code et chaque agent autonome existe pour générer une rentabilité mesurable.",
      philCards: [
        { tag: "01 / PRINCIPE ANALYTIQUE", title: "Décisions Guidées par les Données", desc: "Tableaux de bord en temps réel où chaque euro ou dollar investi est tracé jusqu'à l'encaissement bancaire. Suivi continu du CAC, LTV et taux de clôture." },
        { tag: "02 / PRINCIPE OPÉRATIONNEL", title: "Automatisation qui Libère la Marge", desc: "Nous éliminons les tâches manuelles répétitives pour que vos commerciaux consacrent 100% de leur énergie à conclure des ventes qualifiées." },
        { tag: "03 / PRINCIPE FINANCIER", title: "Rentabilité Prédictive (ROI Attribué)", desc: "Avant chaque déploiement, nous structurons un modèle prédictif définissant les seuils de conversion nécessaires pour un flux net positif." }
      ],
      calBadge: "PLACES LIMITÉES // CONNEXION DIRECTE GOHIGHLEVEL & WHATSAPP",
      calH2_1: "Prêt à transformer votre entreprise en un ",
      calH2_2: "écosystème autonome",
      calH2_3: " prêt à facturer ?",
      calSub: "Planifiez votre Session de Diagnostic Stratégique de 45 minutes avec nos architectes systèmes. Nous analyserons votre infrastructure et vos opportunités d'automatisation.",
      calCardTitle: "Session de Diagnostic Stratégique",
      calStep1: "1. Sélectionnez une date disponible",
      calStep2: "2. Horaires recommandés (Fuseau : Mexique / Miami)",
      placeholders: ["Nom et Prénom *", "Entreprise ou Projet *", "Email professionnel (ex: directeur@entreprise.com) *", "WhatsApp / Téléphone direct *"]
    },

    it: {
      langName: "Italiano",
      title: "NegocioUp | Agenzia di Automazione, Ecosistemi Digitali, CRM e IA 24/7",
      nav: ["Pilastri & Servizi", "Ecosistemi IA", "Divisione Real Estate", "Filosofia & ROI", "Posizione & Contatti"],
      ctaMain: "Prenota una Sessione di Diagnosi Strategica",
      waDirect: "WhatsApp Diretto: +52 1 662 636 6303",
      heroBadge: "ECOSISTEMI IA, CRM & AUTOMAZIONE COMMERCIALE 24/7",
      mapsVerified: "Google Maps Verificato · Playa del Carmen, Q.R., Messico",
      heroH1_1: "Dal DNA digitale alla vendita automatica: ",
      heroH1_2: "Costruiamo il tuo ecosistema virtuale",
      heroH1_3: " pronto a fatturare.",
      heroSub: "Non creiamo semplici siti web. Progettiamo infrastrutture commerciali ad alte prestazioni con Intelligenza Artificiale, CRM e automazione 24/7 per trasformare l'acquisizione clienti in vendite prevedibili, misurabili e scalabili.",
      heroTrust: "Diagnosi strategica iniziale e integrazione nativa con GoHighLevel",
      consoleActive: "PIPELINE AUTONOMO ATTIVO",
      consoleInstant: "99.8% RISPOSTA ISTANTANEA",
      nodes: [
        { tag: "01 // ACQUISIZIONE LEAD", title: "Sync Omnicanale", desc: "WhatsApp Meta API, Google Maps, Webhook e moduli catturati in tempo reale.", stat: "Inbound: +1,248/ora", live: "⚡ Nuovo lead catturato da Google Maps & Meta Ads → Sincronizzato in 0.1s" },
        { tag: "02 // QUALIFICAZIONE IA", title: "Inferenza LLM 24/7", desc: "Gli agenti IA valutano budget, urgenza e profilo d'acquisto in 0.4 secondi.", stat: "Score Fit: 94.2%", live: "🤖 L'agente IA WhatsApp ha qualificato il budget del prospect in 8 secondi" },
        { tag: "03 // AGENDA AUTOMATICA", title: "Closer Hand-off", desc: "Agente vocale o chat fissa l'appuntamento su GoHighLevel secondo disponibilità.", stat: "Show-rate: 89.4%", live: "📅 Appuntamento confermato automaticamente in calendario con promemoria attivi" },
        { tag: "04 // DATA FABRIC & CRM", title: "Attribuzione Totale", desc: "Sincronizzazione istantanea con GoHighLevel, HubSpot o Salesforce con tracciamento ROI.", stat: "Sincronizzato: 100%", live: "📈 Opportunità assegnata nel CRM con tracciabilità esatta del ROI" }
      ],
      ticker: ["Pipeline Commerciale Gestita", "Latenza Media Risposta IA", "Ritorno sull'Investimento (ROI Certificato)"],
      trustTitle: "Infrastruttura di fiducia per aziende tecnologiche, costruttori e fondi globali",
      simpleBadge: "SEMPLICE, VELOCE E REDDITIZIO // COME FUNZIONA",
      simpleTitle: "Comprendi il Tuo Nuovo Ecosistema in 3 Semplici Passi",
      simpleSub: "Eliminiamo la complessità tecnica. Ecco come trasformiamo i visitatori in clienti pronti all'acquisto:",
      steps: [
        { num: "PASSO 01", icon: "ads_click", title: "Attiriamo e Catturiamo", desc: "La tua nuova Architettura Web, Google Maps e le campagne pubblicitarie catturano contatti ad alta intenzione." },
        { num: "PASSO 02", icon: "smart_toy", title: "L'IA Risponde e Filtra 24/7", desc: "In meno di 15 secondi, i nostri Agenti IA su WhatsApp e Voce rispondono, qualificano il budget e fissano l'appuntamento." },
        { num: "PASSO 03", icon: "real_estate_agent", title: "Il Tuo Team Chiude le Vendite", desc: "Tutto è tracciato nel tuo CRM (GoHighLevel) con metriche reali per prendere migliori decisioni commerciali." }
      ],
      roiTitle: "Simulatore Interattivo di Impatto Commerciale",
      roiSub: "Muovi i cursori per stimare quanto fatturato extra puoi recuperare rispondendo in <15s con IA 24/7 + CRM:",
      roiLeadsLbl: "Contatti mensili ricevuti dalla tua azienda",
      roiTicketLbl: "Valore medio per vendita / cliente (USD)",
      roiResult1Lbl: "Appuntamenti Qualificati Extra / Mese",
      roiResult2Lbl: "Fatturato Aggiuntivo Stimato / Mese",
      pillarsBadge: "Metodologia Quadridimensionale // I 4 Pilastri di NegocioUp",
      pillarsTitle: "Architettura Integrale 360° per Scala Operativa e Fatturato",
      pillarsSub: "Ogni pilastro opera come un modulo autonomo interconnesso dal DNA digitale fino alla chiusura nel CRM, eliminando perdite di lead e accelerando il ciclo di vendita.",
      pillarTabs: ["Tutti (360°)", "01. Web", "02. IA 24/7", "03. CRM", "04. Ads"],
      pillars: [
        {
          code: "PILASTRO 01 // DNA DIGITALE",
          title: "Architettura Web & Esperienze Digitali",
          desc: "Costruiamo il tuo asset digitale come una macchina di conversione, non come una brochure statica. Interfacce Next.js e Tailwind con caricamento <800ms, SEO tecnico per dominare Google e connessione nativa via Webhook.",
          barLbl: "Performance Lighthouse & SEO Tecnico",
          barNote: "Server Edge CDN globali e Schema.org nativo",
          guarantee: "Garanzia: TTFB < 85ms e architettura pronta a convertire"
        },
        {
          code: "PILASTRO 02 // IA 24/7",
          title: "IA & Automazione 24/7 dei Processi",
          desc: "Implementiamo agenti conversazionali multicanale (WhatsApp Business API, Instagram, Webchat) e voice-bot iper-realistici che rispondono in meno di 15 secondi, qualificano il budget e fissano appuntamenti 24/7 senza intervento umano.",
          barLbl: "Capacità di Attenzione Simultanea 24/7",
          barNote: "Zero perdita di contatti per tempi di attesa",
          guarantee: "Garanzia: Qualificazione e primo contatto in < 15 secondi"
        },
        {
          code: "PILASTRO 03 // CONTROLLO CRM",
          title: "CRM Commerciale & Pipeline Predittive",
          desc: "Centralizziamo tutta la tua operatività commerciale in GoHighLevel (LeadConnector), HubSpot o Salesforce. Lead-scoring predittivo, follow-up automatico e riattivazione di database dormienti.",
          barLbl: "Tasso di Riattivazione Contatti Dormienti",
          barNote: "Recupero vendite senza budget pubblicitario aggiuntivo",
          guarantee: "Garanzia: Zero fuga di lead per dimenticanza manuale"
        },
        {
          code: "PILASTRO 04 // CONTENUTI & ADS",
          title: "Produzione Audiovisiva & Advertising d'Impatto",
          desc: "Alimentiamo il tuo ecosistema con creatività cinematografiche e strategie di acquisizione su Meta Ads, Google Ads e TikTok con attribuzione Server-Side (CAPI) collegata alle vendite reali del tuo CRM per ridurre il CAC.",
          barLbl: "Riduzione Media del CAC",
          barNote: "Tracciamento Server-Side First-Party per Google Ads & Meta CAPI",
          guarantee: "Garanzia: Audit e ottimizzazione giornaliera delle performance"
        }
      ],
      reBadge: "DIVISIONE SPECIALIZZATA: NEGOCIOUP REAL ESTATE SUITE",
      reTitle: "Accelerazione Vendite per Sviluppi e Lanci Immobiliari",
      reSub: "Convertiamo l'inventario immobiliare in prevendite accelerate tramite showroom virtuali interattivi, acquisizione di investitori HNW e qualificazione immediata tramite agenti IA.",
      reModules: [
        { title: "Agenti Immobiliari IA 24/7", desc: "Risposta e invio di brochure interattive, planimetrie e preventivi finanziari in meno di 30 secondi via WhatsApp." },
        { title: "Filtro Finanziario Immediato", desc: "Qualificazione algoritmica della capacità di investimento e liquidità prima di fissare la chiamata o visita con il broker." },
        { title: "Advertising Hyper-Targeted HNW", desc: "Acquisizione di acquirenti e investitori High-Net-Worth in Messico, Riviera Maya, USA, Spagna e America Latina." },
        { title: "Sincronizzazione Inventario", desc: "Aggiornamento automatico delle unità disponibili e dei listini prezzi in pochi secondi per tutta la rete vendita." }
      ],
      philBadge: "Principi di Ingegneria Commerciale // Filosofia NegocioUp",
      philH2_1: "Non promettiamo metriche vuote... ",
      philH2_2: "Costruiamo tecnologia che produce migliori decisioni commerciali.",
      philSub: "La tecnologia senza impatto sul bilancio è solo una spesa superflua. In NegocioUp ogni riga di codice, ogni flusso GoHighLevel e ogni agente autonomo esiste esclusivamente per generare redditività dimostrabile.",
      philCards: [
        { tag: "01 / PRINCIPIO ANALITICO", title: "Decisioni Guidate dai Dati, Non dall'Intuito", desc: "Dashboard in tempo reale dove ogni centesimo investito in acquisizione è tracciato fino all'incasso. Monitoraggio costante di CAC, LTV e ciclo di conversione." },
        { tag: "02 / PRINCIPIO OPERATIVO", title: "Automazione che Libera Margine Operativo", desc: "Eliminiamo le attività ripetitive di inserimento e filtro manuale affinché il tuo team commerciale dedichi il 100% dell'energia alla chiusura." },
        { tag: "03 / PRINCIPIO FINANZIARIO", title: "Redditività Predittiva (ROI Attribuito)", desc: "Prima di ogni sviluppo strutturiamo un modello finanziario predittivo che determina le soglie di conversione richieste per un flusso netto positivo." }
      ],
      calBadge: "POSTI LIMITATI // CONNESSIONE DIRETTA GOHIGHLEVEL & WHATSAPP",
      calH2_1: "Pronto a trasformare la tua azienda in un ",
      calH2_2: "ecosistema autonomo",
      calH2_3: " pronto a fatturare?",
      calSub: "Prenota la tua Sessione di Diagnosi Strategica di 45 minuti con i nostri architetti di sistema. Analizzeremo la tua infrastruttura attuale e ti presenteremo una roadmap su misura.",
      calCardTitle: "Sessione di Diagnosi Strategica",
      calStep1: "1. Seleziona una data disponibile",
      calStep2: "2. Orari consigliati (Fuso: Messico / Miami)",
      placeholders: ["Nome e Cognome *", "Azienda o Progetto *", "Email aziendale (es: direttore@azienda.com) *", "WhatsApp / Telefono diretto *"]
    }
  };

  // Inject Dynamic Styles for Animations, Cursor Spotlight & Smooth UI
  const styleEl = document.createElement('style');
  styleEl.textContent = `
    .reveal-section {
      opacity: 0;
      transform: translateY(22px);
      transition: opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1), transform 0.65s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .reveal-section.is-visible {
      opacity: 1;
      transform: translateY(0);
    }
    .node-active-glow {
      border: 1px solid rgba(78, 222, 163, 0.65) !important;
      box-shadow: 0 0 28px -4px rgba(16, 185, 129, 0.32), inset 0 0 18px rgba(16, 185, 129, 0.08) !important;
      transform: translateY(-3px);
    }
    .kinetic-card {
      position: relative;
      transition: transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease;
      border: 1px solid rgba(255, 255, 255, 0.06);
    }
    .kinetic-card:hover {
      transform: translateY(-4px);
      border-color: rgba(78, 222, 163, 0.4);
      box-shadow: 0 18px 40px -12px rgba(0, 0, 0, 0.75), 0 0 24px -6px rgba(16, 185, 129, 0.22);
    }
    input[type="range"].negocioup-slider {
      -webkit-appearance: none;
      appearance: none;
      width: 100%;
      height: 6px;
      background: #262a35;
      border-radius: 999px;
      outline: none;
    }
    input[type="range"].negocioup-slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #4edea3;
      cursor: pointer;
      box-shadow: 0 0 12px rgba(16, 185, 129, 0.8);
    }
  `;
  document.head.appendChild(styleEl);

  // Inject SEO hreflang alternate links
  ['es', 'en', 'fr', 'it'].forEach((lng) => {
    const link = document.createElement('link');
    link.rel = 'alternate';
    link.hreflang = lng;
    link.href = `https://www.negocioup.com.mx/?lang=${lng}`;
    document.head.appendChild(link);
  });

  // 1. Build & Inject Language Switcher in Header & Mobile Menu
  const headerRight = document.querySelector('header .flex.items-center.gap-space-sm');
  const langSwitcherHtml = `
    <div id="lang-switcher" class="inline-flex items-center bg-surface-container-high/90 border border-white/10 rounded-lg p-0.5 text-[11px] font-code-badge">
      <button type="button" data-lang="es" class="lang-btn px-2 py-1 rounded-md bg-primary-container text-on-primary-container font-bold transition-all" title="Español">ES</button>
      <button type="button" data-lang="en" class="lang-btn px-2 py-1 rounded-md text-on-surface-variant hover:text-on-surface transition-all" title="English">EN</button>
      <button type="button" data-lang="fr" class="lang-btn px-2 py-1 rounded-md text-on-surface-variant hover:text-on-surface transition-all" title="Français">FR</button>
      <button type="button" data-lang="it" class="lang-btn px-2 py-1 rounded-md text-on-surface-variant hover:text-on-surface transition-all" title="Italiano">IT</button>
    </div>
  `;
  if (headerRight) {
    headerRight.insertAdjacentHTML('afterbegin', langSwitcherHtml);
  }

  // 2. Inject Live Console Status Feed inside #consola-ia
  const consoleEl = document.getElementById('consola-ia');
  const consoleNodesGrid = consoleEl ? consoleEl.querySelector('.grid.grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-4') : null;
  if (consoleNodesGrid) {
    const liveFeedBar = document.createElement('div');
    liveFeedBar.id = 'console-live-feed';
    liveFeedBar.className = 'mt-space-md bg-surface-container-lowest/90 border border-primary/30 rounded-xl px-space-md py-space-sm flex flex-col sm:flex-row sm:items-center justify-between gap-2';
    liveFeedBar.innerHTML = `
      <div class="flex items-center gap-2">
        <span class="w-2.5 h-2.5 rounded-full bg-primary animate-ping shrink-0"></span>
        <span id="console-live-text" class="font-code-badge text-code-badge text-primary">⚡ Nuevo lead capturado desde Google Maps & Meta Ads → Sincronizado en 0.1s</span>
      </div>
      <span class="font-label-sm text-label-sm text-outline uppercase">Haz clic en cualquier nodo para inspeccionar</span>
    `;
    consoleNodesGrid.insertAdjacentElement('afterend', liveFeedBar);
  }

  // 3. Inject "3 Simple Steps + Interactive ROI Calculator" Section before #pilares
  const pilaresSection = document.getElementById('pilares');
  if (pilaresSection) {
    const simpleSection = document.createElement('section');
    simpleSection.id = 'como-funciona';
    simpleSection.className = 'w-full bg-surface py-space-xl border-b border-outline-variant/20 reveal-section';
    simpleSection.innerHTML = `
      <div class="w-full px-gutter lg:px-margin">
        <!-- 3 Simple Steps Header -->
        <div class="text-center max-w-3xl mx-auto mb-space-xl">
          <div class="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-primary/10 text-primary font-code-badge text-code-badge uppercase tracking-wider mb-space-xs">
            <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span id="i18n-simple-badge">SIMPLE, RÁPIDO Y RENTABLE // CÓMO FUNCIONA</span>
          </div>
          <h2 id="i18n-simple-title" class="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface mb-space-xs">
            Entiende tu Nuevo Ecosistema en 3 Pasos Simples
          </h2>
          <p id="i18n-simple-sub" class="font-body-lg text-body-lg text-on-surface-variant">
            Eliminamos la complejidad técnica. Así transformamos desconocidos en clientes listos para comprar:
          </p>
        </div>

        <!-- 3 Visual Cards -->
        <div id="simple-steps-grid" class="grid grid-cols-1 md:grid-cols-3 gap-space-lg mb-space-xl">
          <div class="kinetic-card bg-surface-container-low p-space-lg rounded-2xl relative">
            <div class="flex items-center justify-between mb-space-md">
              <span class="step-num font-code-badge text-code-badge text-primary bg-primary/10 px-3 py-1 rounded-full font-bold">PASO 01</span>
              <span class="material-symbols-outlined text-primary text-[30px]">ads_click</span>
            </div>
            <h3 class="step-title font-headline-md text-headline-md-mobile text-on-surface mb-space-xs">Atraemos y Capturamos</h3>
            <p class="step-desc font-body-md text-on-surface-variant">Tu nueva Arquitectura Web, Google Maps y Pauta Estratégica captan prospectos con intención real de compra.</p>
          </div>
          <div class="kinetic-card bg-surface-container-low p-space-lg rounded-2xl relative">
            <div class="flex items-center justify-between mb-space-md">
              <span class="step-num font-code-badge text-code-badge text-secondary bg-secondary/10 px-3 py-1 rounded-full font-bold">PASO 02</span>
              <span class="material-symbols-outlined text-secondary text-[30px]">smart_toy</span>
            </div>
            <h3 class="step-title font-headline-md text-headline-md-mobile text-on-surface mb-space-xs">La IA Atiende y Filtra 24/7</h3>
            <p class="step-desc font-body-md text-on-surface-variant">En menos de 15 segundos, nuestros Agentes IA en WhatsApp y Voz responden, califican presupuesto y agendan la cita.</p>
          </div>
          <div class="kinetic-card bg-surface-container-low p-space-lg rounded-2xl relative">
            <div class="flex items-center justify-between mb-space-md">
              <span class="step-num font-code-badge text-code-badge text-primary bg-primary/10 px-3 py-1 rounded-full font-bold">PASO 03</span>
              <span class="material-symbols-outlined text-primary text-[30px]">real_estate_agent</span>
            </div>
            <h3 class="step-title font-headline-md text-headline-md-mobile text-on-surface mb-space-xs">Tu Equipo Solo Cierra Ventas</h3>
            <p class="step-desc font-body-md text-on-surface-variant">Todo queda registrado en tu CRM (GoHighLevel) con métricas reales para tomar mejores decisiones comerciales.</p>
          </div>
        </div>

        <!-- Interactive ROI Calculator Widget -->
        <div class="rounded-2xl bg-gradient-to-r from-surface-container-low via-surface-container to-surface-container-low border border-primary/30 p-space-lg lg:p-space-xl shadow-[0_15px_50px_rgba(0,0,0,0.6)]">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
            <div class="lg:col-span-7 flex flex-col gap-space-md">
              <h3 id="i18n-roi-title" class="font-headline-md text-headline-md-mobile lg:text-headline-md text-on-surface">
                Simulador Interactivo de Impacto Comercial
              </h3>
              <p id="i18n-roi-sub" class="font-body-md text-on-surface-variant">
                Mueve los controles para estimar cuánto pipeline adicional puedes recuperar respondiendo en &lt;15s con IA 24/7 + CRM:
              </p>

              <!-- Slider 1: Monthly Leads -->
              <div class="bg-surface-container-lowest/80 p-space-md rounded-xl">
                <div class="flex justify-between items-center mb-2">
                  <label for="roi-leads-slider" id="i18n-roi-leads-lbl" class="font-body-sm text-on-surface-variant">Prospectos mensuales que recibe tu negocio</label>
                  <span id="roi-leads-val" class="font-headline-sm text-primary font-bold">250 leads/mes</span>
                </div>
                <input id="roi-leads-slider" type="range" min="50" max="2000" step="25" value="250" class="negocioup-slider"/>
              </div>

              <!-- Slider 2: Average Ticket -->
              <div class="bg-surface-container-lowest/80 p-space-md rounded-xl">
                <div class="flex justify-between items-center mb-2">
                  <label for="roi-ticket-slider" id="i18n-roi-ticket-lbl" class="font-body-sm text-on-surface-variant">Valor promedio por venta / cliente (USD)</label>
                  <span id="roi-ticket-val" class="font-headline-sm text-secondary font-bold">$1,500 USD</span>
                </div>
                <input id="roi-ticket-slider" type="range" min="300" max="25000" step="100" value="1500" class="negocioup-slider"/>
              </div>
            </div>

            <!-- Live Calculated Results -->
            <div class="lg:col-span-5 bg-surface-container-lowest p-space-lg rounded-2xl border border-white/10 flex flex-col gap-space-md text-center">
              <div class="p-space-md rounded-xl bg-surface-container-low">
                <span id="roi-meetings-out" class="font-display-hero text-headline-lg text-secondary block">+62</span>
                <span id="i18n-roi-res1-lbl" class="font-body-sm text-on-surface-variant">Citas Calificadas Extra / Mes</span>
              </div>
              <div class="p-space-md rounded-xl bg-primary/10 border border-primary/30">
                <span id="roi-revenue-out" class="font-display-hero text-headline-lg text-primary block">+$28,125 USD</span>
                <span id="i18n-roi-res2-lbl" class="font-body-sm text-on-surface">Facturación Adicional Estimada / Mes</span>
              </div>
              <a href="#agendar" data-cta-scroll="true" class="i18n-cta-btn w-full inline-flex items-center justify-center gap-2 py-space-md px-space-md rounded-xl bg-gradient-to-r from-primary-container to-primary text-on-primary font-headline-sm text-label-md shadow-[0_0_24px_rgba(16,185,129,0.45)] hover:scale-[1.01] transition-all">
                <span class="i18n-cta-text">Agendar una Sesión de Diagnóstico Estratégico</span>
                <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
    pilaresSection.insertAdjacentElement('beforebegin', simpleSection);
  }

  // 4. Interactive ROI Calculator Logic
  const leadsSlider = document.getElementById('roi-leads-slider');
  const ticketSlider = document.getElementById('roi-ticket-slider');
  function updateRoiCalc() {
    if (!leadsSlider || !ticketSlider) return;
    const leads = Number(leadsSlider.value) || 250;
    const ticket = Number(ticketSlider.value) || 1500;
    const extraMeetings = Math.round(leads * 0.25);
    const extraClosed = Math.max(1, Math.round(extraMeetings * 0.3));
    const extraRevenue = extraClosed * ticket;

    document.getElementById('roi-leads-val').textContent = `${leads.toLocaleString()} leads`;
    document.getElementById('roi-ticket-val').textContent = `$${ticket.toLocaleString()} USD`;
    document.getElementById('roi-meetings-out').textContent = `+${extraMeetings}`;
    document.getElementById('roi-revenue-out').textContent = `+$${extraRevenue.toLocaleString()} USD`;
  }
  if (leadsSlider && ticketSlider) {
    leadsSlider.addEventListener('input', updateRoiCalc);
    ticketSlider.addEventListener('input', updateRoiCalc);
    updateRoiCalc();
  }

  // 5. Auto-Cycling Interactive Console Nodes
  let activeNodeIdx = 0;
  let currentLang = 'es';
  const consoleNodeEls = consoleNodesGrid ? Array.from(consoleNodesGrid.children) : [];

  function highlightConsoleNode(idx) {
    activeNodeIdx = idx;
    consoleNodeEls.forEach((el, i) => {
      el.classList.toggle('node-active-glow', i === idx);
      el.style.cursor = 'pointer';
    });
    const dict = I18N[currentLang] || I18N.es;
    const liveText = document.getElementById('console-live-text');
    if (liveText && dict.nodes[idx]) {
      liveText.textContent = dict.nodes[idx].live;
    }
  }

  if (consoleNodeEls.length) {
    consoleNodeEls.forEach((el, idx) => {
      el.addEventListener('click', () => highlightConsoleNode(idx));
    });
    highlightConsoleNode(0);
    setInterval(() => {
      highlightConsoleNode((activeNodeIdx + 1) % consoleNodeEls.length);
    }, 3600);
  }

  // 6. Apply Language Function (ES / EN / FR / IT)
  function applyLanguage(lang) {
    if (!I18N[lang]) lang = 'es';
    currentLang = lang;
    const t = I18N[lang];

    document.documentElement.lang = lang;
    document.title = t.title;
    try { localStorage.setItem('negocioup_lang', lang); } catch (e) {}

    // Update Language Buttons
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      const isSelected = btn.getAttribute('data-lang') === lang;
      btn.className = isSelected
        ? 'lang-btn px-2 py-1 rounded-md bg-primary-container text-on-primary-container font-bold transition-all'
        : 'lang-btn px-2 py-1 rounded-md text-on-surface-variant hover:text-on-surface transition-all';
    });

    // Desktop & Mobile Nav
    const navLinks = document.querySelectorAll('header nav a');
    t.nav.forEach((label, idx) => {
      if (navLinks[idx]) navLinks[idx].textContent = label;
    });
    const mobLinks = document.querySelectorAll('#mobile-menu .mobile-nav-link');
    t.nav.forEach((label, idx) => {
      if (mobLinks[idx]) mobLinks[idx].textContent = label;
    });

    // All main CTA buttons
    document.querySelectorAll('[data-cta-scroll="true"]').forEach((el) => {
      const span = el.querySelector('span:first-child');
      if (span && el.querySelectorAll('span').length > 1) {
        span.textContent = t.ctaMain;
      } else {
        el.textContent = t.ctaMain;
      }
    });

    // Hero Section
    const heroSection = document.querySelector('main section:first-of-type');
    if (heroSection) {
      const badgeTxt = heroSection.querySelector('.font-code-badge.text-primary');
      if (badgeTxt) badgeTxt.textContent = t.heroBadge;

      const h1 = heroSection.querySelector('h1');
      if (h1) {
        h1.innerHTML = `${t.heroH1_1}<span class="bg-gradient-to-r from-primary via-tertiary-fixed to-secondary bg-clip-text text-transparent">${t.heroH1_2}</span><span class="text-on-surface">${t.heroH1_3}</span>`;
      }
      const heroP = heroSection.querySelector('p.font-body-lg');
      if (heroP) heroP.textContent = t.heroSub;

      const waHero = heroSection.querySelector('[data-wa-cta="Hero"] span:last-child');
      if (waHero) waHero.textContent = t.waDirect;
    }

    // Console Nodes
    consoleNodeEls.forEach((nodeEl, idx) => {
      const nd = t.nodes[idx];
      if (!nd) return;
      const tagEl = nodeEl.querySelector('.font-label-sm');
      const titleEl = nodeEl.querySelector('.font-headline-sm');
      const descEl = nodeEl.querySelector('p.font-body-sm');
      const statEl = nodeEl.querySelector('.mt-space-md .font-code-badge');
      if (tagEl) tagEl.textContent = nd.tag;
      if (titleEl) titleEl.textContent = nd.title;
      if (descEl) descEl.textContent = nd.desc;
      if (statEl) statEl.textContent = nd.stat;
    });
    highlightConsoleNode(activeNodeIdx);

    // 3 Simple Steps & ROI Calculator
    const setTxt = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
    setTxt('i18n-simple-badge', t.simpleBadge);
    setTxt('i18n-simple-title', t.simpleTitle);
    setTxt('i18n-simple-sub', t.simpleSub);
    setTxt('i18n-roi-title', t.roiTitle);
    setTxt('i18n-roi-sub', t.roiSub);
    setTxt('i18n-roi-leads-lbl', t.roiLeadsLbl);
    setTxt('i18n-roi-ticket-lbl', t.roiTicketLbl);
    setTxt('i18n-roi-res1-lbl', t.roiResult1Lbl);
    setTxt('i18n-roi-res2-lbl', t.roiResult2Lbl);

    const stepCards = document.querySelectorAll('#simple-steps-grid > div');
    stepCards.forEach((card, i) => {
      if (!t.steps[i]) return;
      const num = card.querySelector('.step-num');
      const tit = card.querySelector('.step-title');
      const dsc = card.querySelector('.step-desc');
      if (num) num.textContent = t.steps[i].num;
      if (tit) tit.textContent = t.steps[i].title;
      if (dsc) dsc.textContent = t.steps[i].desc;
    });

    // 4 Pillars Section
    if (pilaresSection) {
      const pBadge = pilaresSection.querySelector('.font-label-sm.text-secondary span');
      const pH2 = pilaresSection.querySelector('h2');
      const pSub = pilaresSection.querySelector('p.font-body-lg');
      if (pBadge) pBadge.textContent = t.pillarsBadge;
      if (pH2) pH2.textContent = t.pillarsTitle;
      if (pSub) pSub.textContent = t.pillarsSub;

      const tabBtns = pilaresSection.querySelectorAll('.pillar-filter-btn');
      t.pillarTabs.forEach((lbl, i) => { if (tabBtns[i]) tabBtns[i].textContent = lbl; });

      const pCards = pilaresSection.querySelectorAll('[data-pillar-item]');
      pCards.forEach((card, i) => {
        const pd = t.pillars[i];
        if (!pd) return;
        const codeEl = card.querySelector('.font-mono');
        const h3El = card.querySelector('h3');
        const descEl = card.querySelector('p.font-body-md');
        const barLblEl = card.querySelector('.bg-surface-container-lowest .text-on-surface-variant');
        const barNoteEl = card.querySelector('.bg-surface-container-lowest .text-outline');
        const guarEl = card.querySelector('a[data-cta-scroll="true"] span:first-child');
        if (codeEl) codeEl.textContent = pd.code;
        if (h3El) h3El.textContent = pd.title;
        if (descEl) descEl.textContent = pd.desc;
        if (barLblEl) barLblEl.textContent = pd.barLbl;
        if (barNoteEl) barNoteEl.textContent = pd.barNote;
        if (guarEl) guarEl.textContent = pd.guarantee;
      });
    }

    // Real Estate Section
    const reSection = document.getElementById('real-estate');
    if (reSection) {
      const reBadge = reSection.querySelector('.font-code-badge span:last-child');
      const reH2 = reSection.querySelector('h2');
      const reSub = reSection.querySelector('.max-w-md p');
      if (reBadge) reBadge.textContent = t.reBadge;
      if (reH2) reH2.textContent = t.reTitle;
      if (reSub) reSub.textContent = t.reSub;

      const reCards = reSection.querySelectorAll('.lg\\:col-span-7 > div');
      reCards.forEach((card, i) => {
        if (!t.reModules[i]) return;
        const h4 = card.querySelector('h4');
        const p = card.querySelector('p');
        if (h4) h4.textContent = t.reModules[i].title;
        if (p) p.textContent = t.reModules[i].desc;
      });
    }

    // Philosophy Section
    const philSection = document.getElementById('filosofia');
    if (philSection) {
      const phBadge = philSection.querySelector('.font-label-sm.text-primary span:last-child');
      const phH2 = philSection.querySelector('h2');
      const phSub = philSection.querySelector('p.font-body-lg');
      if (phBadge) phBadge.textContent = t.philBadge;
      if (phH2) {
        phH2.innerHTML = `${t.philH2_1}<span class="bg-gradient-to-r from-primary via-tertiary-fixed to-secondary bg-clip-text text-transparent">${t.philH2_2}</span>`;
      }
      if (phSub) phSub.textContent = t.philSub;

      const phCards = philSection.querySelectorAll('.grid.md\\:grid-cols-3 > div');
      phCards.forEach((card, i) => {
        if (!t.philCards[i]) return;
        const tag = card.querySelector('.font-mono');
        const h3 = card.querySelector('h3');
        const p = card.querySelector('p');
        if (tag) tag.textContent = t.philCards[i].tag;
        if (h3) h3.textContent = t.philCards[i].title;
        if (p) p.textContent = t.philCards[i].desc;
      });
    }

    // Calendar Section
    const calSection = document.getElementById('agendar');
    if (calSection) {
      const cBadge = calSection.querySelector('.lg\\:col-span-7 .font-code-badge span');
      const cH2 = calSection.querySelector('.lg\\:col-span-7 h2');
      const cSub = calSection.querySelector('.lg\\:col-span-7 p.font-body-lg');
      if (cBadge) cBadge.textContent = t.calBadge;
      if (cH2) {
        cH2.innerHTML = `${t.calH2_1}<span class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">${t.calH2_2}</span>${t.calH2_3}`;
      }
      if (cSub) cSub.textContent = t.calSub;

      const formInputs = calSection.querySelectorAll('#booking-form input');
      t.placeholders.forEach((ph, i) => {
        if (formInputs[i]) formInputs[i].placeholder = ph;
      });
      const submitBtn = calSection.querySelector('#booking-form button[type="submit"]');
      if (submitBtn) submitBtn.textContent = t.ctaMain;
    }
  }

  // Bind Language Switcher Buttons
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      applyLanguage(btn.getAttribute('data-lang'));
    });
  });

  // Detect Initial Language (URL ?lang= -> localStorage -> Browser language -> 'es')
  const urlLang = new URLSearchParams(window.location.search).get('lang');
  const savedLang = (() => { try { return localStorage.getItem('negocioup_lang'); } catch (e) { return null; } })();
  const browserLang = (navigator.language || 'es').slice(0, 2).toLowerCase();
  const initialLang = urlLang && I18N[urlLang] ? urlLang : (savedLang && I18N[savedLang] ? savedLang : (I18N[browserLang] ? browserLang : 'es'));
  applyLanguage(initialLang);

  // 7. Smooth Scroll-Reveal Observer & Kinetic Card Classes
  document.querySelectorAll('main > div > section').forEach((sec, idx) => {
    if (idx > 0) sec.classList.add('reveal-section');
  });
  document.querySelectorAll('[data-pillar-item], #real-estate .lg\\:col-span-7 > div, #filosofia .grid.md\\:grid-cols-3 > div').forEach((card) => {
    card.classList.add('kinetic-card');
  });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal-section').forEach((el) => observer.observe(el));
  } else {
    document.querySelectorAll('.reveal-section').forEach((el) => el.classList.add('is-visible'));
  }
})();
