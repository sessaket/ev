window.DECK_CONFIG = {
  defaultLang: "en",
  deckTitle: {
    en: "EV Morocco Benchmark Deck",
    fr: "Deck Benchmark EV Maroc"
  },
  brandLine: {
    en: "PRESENTATION WEBSITE UI",
    fr: "INTERFACE SITE DE PRESENTATION"
  },
  ui: {
    en: {
      slideLabel: "Slide",
      sectionLabel: "PRESENTATION WEBSITE UI",
      searchSlides: "Search slides",
      searchPlaceholder: "Search by title or subtitle",
      noSlidesFound: "No matching slides",
      prev: "Prev",
      next: "Next",
      fullscreen: "Fullscreen",
      exitFullscreen: "Exit Fullscreen",
      details: "Details",
      strengths: "Strengths",
      limits: "Limits",
      whyItMatters: "Why it matters",
      sources: "Sources",
      viewSource: "View source",
      table: {
        title: "Cars Power Table",
        name: "Car Name",
        powertrain: "Powertrain",
        power: "Power",
        chargePower: "Charge Power"
      },
      officialWebsite: "Website",
      website: "Website",
      getApp: "Get the App",
      labels: {
        powertrain: "Powertrain",
        range_km: "Range (km)",
        fuel_economy_l100km: "Fuel economy (L/100km)",
        charging: "Charging",
        price_mad: "Price range (MAD)",
        availability: "Availability"
      },
      availabilityMap: {
        available_now: "Available now",
        coming_soon: "Coming soon",
        import_only: "Import only"
      },
      categoryMap: {
        EV: "EV",
        HYBRID: "HYBRID",
        PHEV: "PHEV",
        TABLE: "TABLE",
        MARKET: "MARKET",
        CHARGER: "CHARGER",
        NETWORK: "NETWORK",
        POLICY: "POLICY",
        STRATEGY: "STRATEGY"
      }
    },
    fr: {
      slideLabel: "Slide",
      sectionLabel: "INTERFACE SITE DE PRESENTATION",
      searchSlides: "Rechercher des slides",
      searchPlaceholder: "Rechercher par titre ou sous-titre",
      noSlidesFound: "Aucun slide correspondant",
      prev: "Prec.",
      next: "Suiv.",
      fullscreen: "Plein ecran",
      exitFullscreen: "Quitter plein ecran",
      details: "Details",
      strengths: "Forces",
      limits: "Limites",
      whyItMatters: "Pourquoi c est important",
      sources: "Sources",
      viewSource: "Voir la source",
      table: {
        title: "Tableau puissance des voitures",
        name: "Modele",
        powertrain: "Motorisation",
        power: "Puissance",
        chargePower: "Puissance de charge"
      },
      officialWebsite: "Site web",
      website: "Site web",
      getApp: "Telecharger l app",
      labels: {
        powertrain: "Motorisation",
        range_km: "Autonomie (km)",
        fuel_economy_l100km: "Conso (L/100km)",
        charging: "Recharge",
        price_mad: "Prix (MAD)",
        availability: "Disponibilite"
      },
      availabilityMap: {
        available_now: "Disponible maintenant",
        coming_soon: "Bientot disponible",
        import_only: "Import uniquement"
      },
      categoryMap: {
        EV: "EV",
        HYBRID: "HYBRID",
        PHEV: "PHEV",
        TABLE: "TABLEAU",
        MARKET: "MARCHE",
        CHARGER: "BORNE",
        NETWORK: "RESEAU",
        POLICY: "POLITIQUE",
        STRATEGY: "STRATEGIE"
      }
    }
  }
};

const SLIDE_ENTRIES = [
  {
    id: "dacia-spring",
    modelName: "Dacia Spring",
    category: "EV",
    heroImage: "assets/cars/car-1.jpg",
    brandLogo: "assets/brands/dacia.svg",
    details: {
      powertrain: "EV",
      power: "33 kW (45 hp)",
      range_km: 230,
      fuel_economy_l100km: null,
      charging: { ac: "6.6 kW / ~5 h", dc: "30 kW / ~56 min (20-80%)" },
      price_mad: "215,000 - 250,000",
      availability: "available_now"
    },
    links: {
      official: "https://www.dacia.ma/hybrid-and-electric-range/spring-city-car/prices-versions.html",
      dealer: "https://www.dacia.ma/hybrid-and-electric-range/spring-city-car/prices-versions.html"
    },
    t: {
      en: {
        d: { charging: "AC 6.6 kW (~5 h), DC 30 kW (~56 min)", price_mad: "215,000 - 250,000", availability: "Available now" },
        s: ["Affordable entry EV.", "Easy city parking footprint.", "Low operating cost."],
        l: ["Modest highway performance.", "Basic entry interior.", "Slow DC versus premium EVs."],
        w: ["Expands EV access.", "Matches daily urban commuting.", "Encourages home charging habits."]
      },
      fr: {
        d: { charging: "AC 6,6 kW (~5 h), DC 30 kW (~56 min)", price_mad: "215 000 - 250 000", availability: "Disponible maintenant" },
        s: ["VE abordable pour debuter.", "Format pratique en ville.", "Cout d usage faible."],
        l: ["Performance autoroute limitee.", "Interieur simple en base.", "Recharge DC modeste."],
        w: ["Elargit l acces au VE.", "Adapte aux trajets urbains.", "Habitue a la recharge domicile."]
      }
    }
  },
  {
    id: "renault-megane-e-tech",
    modelName: "Renault Megane E-Tech",
    category: "EV",
    heroImage: "assets/cars/car-2.jpg",
    brandLogo: "assets/brands/renault.svg",
    details: {
      powertrain: "EV",
      power: "160 kW (220 hp)",
      range_km: 450,
      fuel_economy_l100km: null,
      charging: { ac: "22 kW / ~3 h", dc: "130 kW / ~30 min (15-80%)" },
      price_mad: "426,000 - 520,000",
      availability: "available_now"
    },
    links: {
      official: "https://www.renault.ma/vehicules-electriques/megane-e-tech-electrique.html",
      dealer: "https://www.renault.ma/vehicules-electriques/megane-e-tech-electrique.html"
    },
    t: {
      en: {
        d: { charging: "AC 22 kW (~3 h), DC 130 kW (~30 min)", price_mad: "426,000 - 520,000", availability: "Available now" },
        s: ["Balanced long range EV.", "Modern cabin and tech.", "Good fast-charge capability."],
        l: ["Higher upfront price.", "Range drops in hot weather.", "Dealer EV readiness varies."],
        w: ["Mainstream EV benchmark.", "Bridge between low and premium tiers.", "Improves confidence for intercity EV use."]
      },
      fr: {
        d: { charging: "AC 22 kW (~3 h), DC 130 kW (~30 min)", price_mad: "426 000 - 520 000", availability: "Disponible maintenant" },
        s: ["Bonne autonomie polyvalente.", "Habitacle moderne.", "Recharge rapide efficace."],
        l: ["Prix d achat eleve.", "Autonomie en baisse forte chaleur.", "Niveau EV concession variable."],
        w: ["Reference VE generaliste.", "Lien entre budget et premium.", "Rassure pour trajets interurbains."]
      }
    }
  },
  {
    id: "hyundai-kona-electric",
    modelName: "Hyundai Kona Electric",
    category: "EV",
    heroImage: "assets/cars/car-3.jpg",
    brandLogo: "assets/brands/hyundai.svg",
    details: {
      powertrain: "EV",
      power: "150 kW (204 hp)",
      range_km: 480,
      fuel_economy_l100km: null,
      charging: { ac: "11 kW / ~6 h", dc: "100 kW / ~45 min (10-80%)" },
      price_mad: "430,000 - 560,000",
      availability: "import_only"
    },
    links: {
      official: "https://www.hyundai.com/worldwide/en/eco/kona-electric/highlights",
      dealer: "https://www.hyundai.com/ma/fr/find-a-car/the-all-new-kona/equipements"
    },
    t: {
      en: {
        d: { charging: "AC 11 kW (~6 h), DC 100 kW (~45 min)", price_mad: "430,000 - 560,000", availability: "Import only" },
        s: ["Strong real-world efficiency.", "Practical family crossover.", "Global reliability reputation."],
        l: ["Local stock is inconsistent.", "Import cost can be high.", "Limited official support channels."],
        w: ["Shows demand for efficient EV SUVs.", "Highlights import-led adoption path.", "Useful range benchmark."]
      },
      fr: {
        d: { charging: "AC 11 kW (~6 h), DC 100 kW (~45 min)", price_mad: "430 000 - 560 000", availability: "Import uniquement" },
        s: ["Efficience reelle solide.", "SUV compact familial.", "Fiabilite connue."],
        l: ["Stock local irregulier.", "Cout import parfois eleve.", "Support officiel limite."],
        w: ["Montre la demande SUV VE efficient.", "Illustre le role de l import.", "Repere autonomie utile."]
      }
    }
  },
  {
    id: "byd-atto-3",
    modelName: "BYD Atto 3",
    category: "EV",
    heroImage: "assets/cars/car-4.jpg",
    brandLogo: "assets/brands/byd.svg",
    details: {
      powertrain: "EV",
      power: "150 kW (204 hp)",
      range_km: 420,
      fuel_economy_l100km: null,
      charging: { ac: "11 kW / ~5.5 h", dc: "88 kW / ~40 min (30-80%)" },
      price_mad: "339,900 - 369,900",
      availability: "available_now"
    },
    links: {
      official: "https://www.byd.com/eu/car/atto3",
      dealer: "https://www.wandaloo.com/neuf/byd/atto-3/"
    },
    t: {
      en: {
        d: { charging: "AC 11 kW (~5.5 h), DC 88 kW (~40 min)", price_mad: "339,900 - 369,900", availability: "Available now" },
        s: ["Competitive equipment for price.", "Comfortable for daily use.", "Growing local interest."],
        l: ["Lower DC peak than some rivals.", "Brand awareness still rising.", "Resale data still early."],
        w: ["Increases EV competition.", "Expands compact SUV options.", "Pushes dealer EV capability."]
      },
      fr: {
        d: { charging: "AC 11 kW (~5,5 h), DC 88 kW (~40 min)", price_mad: "339 900 - 369 900", availability: "Disponible maintenant" },
        s: ["Bon rapport prix equipement.", "Confort quotidien correct.", "Interet local en hausse."],
        l: ["Recharge DC moins rapide.", "Notoriete encore en progression.", "Valeur revente peu documentee."],
        w: ["Renforce la concurrence VE.", "Elargit l offre SUV compact.", "Pousse le reseau EV atelier."]
      }
    }
  },
  {
    id: "tesla-model-3",
    modelName: "Tesla Model 3",
    category: "EV",
    heroImage: "assets/cars/car-5.png",
    brandLogo: "assets/brands/tesla.svg",
    details: {
      powertrain: "EV",
      power: "208 kW (283 hp)",
      range_km: 510,
      fuel_economy_l100km: null,
      charging: { ac: "11 kW / ~6 h", dc: "170 kW / ~27 min (10-80%)" },
      price_mad: "560,000 - 690,000",
      availability: "coming_soon"
    },
    links: {
      official: "https://www.tesla.com/fr_ma/event/tesla-arrives-in-morocco",
      dealer: "https://www.tesla.com/fr_ma/model3"
    },
    t: {
      en: {
        d: { charging: "AC 11 kW (~6 h), DC 170 kW (~27 min)", price_mad: "560,000 - 690,000", availability: "Coming soon" },
        s: ["High software experience.", "Efficient long-range platform.", "Strong aspirational brand."],
        l: ["Premium pricing level.", "Service network still limited.", "Parts ecosystem still building."],
        w: ["Sets premium EV reference.", "Can drive charging competition.", "Signals future official EV expansion."]
      },
      fr: {
        d: { charging: "AC 11 kW (~6 h), DC 170 kW (~27 min)", price_mad: "560 000 - 690 000", availability: "Bientot disponible" },
        s: ["Experience logicielle avancee.", "Autonomie efficiente.", "Marque tres attractive."],
        l: ["Prix premium.", "Reseau service encore limite.", "Ecosysteme pieces en construction."],
        w: ["Repere premium du VE.", "Peut accelerer la recharge rapide.", "Indique l evolution du marche."]
      }
    }
  },
  {
    id: "toyota-yaris-hybrid",
    modelName: "Toyota Yaris Hybrid",
    category: "HYBRID",
    heroImage: "assets/cars/car-6.jpg",
    brandLogo: "assets/brands/toyota.svg",
    details: {
      powertrain: "HEV",
      power: "85 kW (116 hp)",
      range_km: null,
      fuel_economy_l100km: 4.3,
      charging: null,
      price_mad: "212,000 - 262,000",
      availability: "available_now"
    },
    links: {
      official: "https://toyota.co.ma/content/yaris-hybrid-0",
      dealer: "https://toyota.co.ma/sp%C3%A9cifications-yaris-hybrid"
    },
    t: {
      en: {
        d: { price_mad: "212,000 - 262,000", availability: "Available now" },
        s: ["Very low city fuel use.", "Strong reliability image.", "No charging required."],
        l: ["Not a full EV drive.", "Performance is efficiency-first.", "Smaller interior than SUV."],
        w: ["Easy transition to electrified driving.", "Immediate fuel savings.", "Accessible to broad households."]
      },
      fr: {
        d: { price_mad: "212 000 - 262 000", availability: "Disponible maintenant" },
        s: ["Conso urbaine tres basse.", "Bonne fiabilite percue.", "Aucune recharge necessaire."],
        l: ["Pas de roulage full EV.", "Performance orientee sobriete.", "Habitacle plus compact qu un SUV."],
        w: ["Transition simple vers l electrifie.", "Economie carburant immediate.", "Option large public."]
      }
    }
  },
  {
    id: "toyota-corolla-hybrid",
    modelName: "Toyota Corolla Hybrid",
    category: "HYBRID",
    heroImage: "assets/cars/car-7.jpg",
    brandLogo: "assets/brands/toyota.svg",
    details: {
      powertrain: "HEV",
      power: "103 kW (140 hp)",
      range_km: null,
      fuel_economy_l100km: 4.8,
      charging: null,
      price_mad: "256,500 - 318,000",
      availability: "available_now"
    },
    links: {
      official: "https://toyota.co.ma/specifications-prix/Corolla%20Prestige/Dynamic",
      dealer: "https://toyota.co.ma/specifications-prix/Corolla%20Prestige/Dynamic"
    },
    t: {
      en: {
        d: { price_mad: "256,500 - 318,000", availability: "Available now" },
        s: ["Comfort plus efficiency mix.", "Proven HEV system.", "Trusted in fleet usage."],
        l: ["Costlier than pure ICE.", "Short EV-only operation.", "Sedan demand softer than SUV."],
        w: ["Useful for high-mileage users.", "Reduces fuel in fleet use.", "Scalable low-risk electrification."]
      },
      fr: {
        d: { price_mad: "256 500 - 318 000", availability: "Disponible maintenant" },
        s: ["Bon compromis confort conso.", "Systeme HEV eprouve.", "Confiance en usage flotte."],
        l: ["Plus cher qu une thermique.", "Phase EV tres courte.", "Demande berline plus faible que SUV."],
        w: ["Pertinent gros rouleurs.", "Baisse carburant en flotte.", "Electrification progressive a faible risque."]
      }
    }
  },
  {
    id: "kia-sportage-hybrid",
    modelName: "Kia Sportage Hybrid",
    category: "HYBRID",
    heroImage: "assets/cars/car-8.jpg",
    brandLogo: "assets/brands/kia.svg",
    details: {
      powertrain: "HEV",
      power: "169 kW (230 hp)",
      range_km: null,
      fuel_economy_l100km: 5.8,
      charging: null,
      price_mad: "420,000 - 515,000",
      availability: "available_now"
    },
    links: {
      official: "https://kia.ma/modeles/sportage-hybrid",
      dealer: "https://kia.ma/modeles/sportage-hybrid/specificites"
    },
    t: {
      en: {
        d: { price_mad: "420,000 - 515,000", availability: "Available now" },
        s: ["Popular SUV body style.", "Comfortable family cabin.", "Better fuel use than ICE SUV."],
        l: ["Savings lower than small HEV.", "Price can overlap entry EV.", "Launch timing may vary."],
        w: ["Tests electrified SUV demand.", "Option for EV-hesitant buyers.", "Strong comparator versus EV SUVs."]
      },
      fr: {
        d: { price_mad: "420 000 - 515 000", availability: "Disponible maintenant" },
        s: ["Format SUV tres demande.", "Habitacle familial confortable.", "Conso meilleure qu un SUV ICE."],
        l: ["Gain conso moindre qu une petite HEV.", "Prix proche de certains VE.", "Lancement potentiellement variable."],
        w: ["Mesure la demande SUV electrifie.", "Option pour clients non prets EV.", "Comparatif utile face SUV VE."]
      }
    }
  },
  {
    id: "byd-seal-u-phev",
    modelName: "BYD Seal U",
    category: "PHEV",
    heroImage: "assets/cars/car-9.jpg",
    brandLogo: "assets/brands/byd.svg",
    details: {
      powertrain: "PHEV",
      power: "160 kW (218 hp)",
      range_km: 80,
      fuel_economy_l100km: 1.4,
      charging: { ac: "7.4 kW / ~2.5 h", dc: "N/A" },
      price_mad: "359,900 - 409,900",
      availability: "available_now"
    },
    links: {
      official: "https://www.byd.com/eu/hybrid-cars/seal-u-dm-i.html",
      dealer: "https://labs.wandaloo.com/neuf/byd/seal-u-phev/"
    },
    t: {
      en: {
        d: { charging: "AC 7.4 kW (~2.5 h), DC N/A", price_mad: "359,900 - 409,900", availability: "Available now" },
        s: ["EV-like city use plus fuel backup.", "Good for mixed route profiles.", "Family-size SUV practicality."],
        l: ["Needs frequent charging discipline.", "Higher system complexity.", "Heavier platform weight."],
        w: ["Transition option where charging is uneven.", "Helps build EV habits.", "Adds depth to electrified SUV choices."]
      },
      fr: {
        d: { charging: "AC 7,4 kW (~2,5 h), DC N/A", price_mad: "359 900 - 409 900", availability: "Disponible maintenant" },
        s: ["Usage EV ville avec secours thermique.", "Polyvalent sur parcours mixtes.", "SUV familial pratique."],
        l: ["Demande recharge reguliere.", "Complexite systeme plus elevee.", "Poids important."],
        w: ["Option transition si recharge inegale.", "Aide a adopter l usage EV.", "Elargit le choix SUV electrifie."]
      }
    }
  },
  {
    id: "volvo-xc60-recharge",
    modelName: "Volvo XC60 Recharge",
    category: "PHEV",
    heroImage: "assets/cars/car-10.jpg",
    brandLogo: "assets/brands/volvo.svg",
    details: {
      powertrain: "PHEV",
      power: "335 kW (455 hp)",
      range_km: 75,
      fuel_economy_l100km: 1.8,
      charging: { ac: "6.4 kW / ~3 h", dc: "N/A" },
      price_mad: "690,000 - 860,000",
      availability: "available_now"
    },
    links: {
      official: "https://www.volvocars.com/ma/cars/xc60-hybrid/",
      dealer: "https://www.volvocars.com/ma/cars/xc60-hybrid/"
    },
    t: {
      en: {
        d: { charging: "AC 6.4 kW (~3 h), DC N/A", price_mad: "690,000 - 860,000", availability: "Available now" },
        s: ["Premium comfort and safety.", "Strong combined power.", "Daily EV-mode commute possible."],
        l: ["High acquisition cost.", "Best economy needs regular charging.", "Specialized service may be limited."],
        w: ["Premium electrified benchmark.", "Defines upper PHEV positioning.", "Useful against luxury EV alternatives."]
      },
      fr: {
        d: { charging: "AC 6,4 kW (~3 h), DC N/A", price_mad: "690 000 - 860 000", availability: "Disponible maintenant" },
        s: ["Confort et securite premium.", "Puissance combinee elevee.", "Trajets quotidiens en mode EV possibles."],
        l: ["Prix d achat eleve.", "Sobriete optimale avec recharge frequente.", "SAV specialise potentiellement limite."],
        w: ["Repere premium electrifie.", "Positionnement haut du PHEV.", "Comparatif utile face EV de luxe."]
      }
    }
  },
  {
    id: "cars-power-table",
    modelName: "Cars Power Table",
    category: "TABLE",
    tableSlide: true,
    table: {
      title: {
        en: "Cars Power Table",
        fr: "Tableau puissance des voitures"
      },
      columns: {
        en: ["Car Name", "Powertrain", "Power", "Charge Power"],
        fr: ["Modele", "Motorisation", "Puissance", "Puissance de charge"]
      },
      rowSource: "cars"
    },
    heroImage: "",
    brandLogo: "",
    details: {
      powertrain: null,
      power: null,
      range_km: null,
      fuel_economy_l100km: null,
      charging: null,
      price_mad: null,
      availability: "available_now"
    },
    links: { official: "#", dealer: "#" },
    t: {
      en: {
        d: { availability: "Available now" },
        s: [],
        l: [],
        w: []
      },
      fr: {
        d: { availability: "Disponible maintenant" },
        s: [],
        l: [],
        w: []
      }
    }
  },
  {
    id: "morocco-chargers-table",
    modelName: "Morocco Chargers by City",
    category: "TABLE",
    tableSlide: true,
    table: {
      title: {
        en: "Morocco Chargers: City | Company | Charger Type | Power | Source",
        fr: "Bornes Maroc: Ville | Entreprise | Type | Puissance | Source"
      },
      columns: {
        en: ["City", "Company", "Charger Type", "Power", "Source"],
        fr: ["Ville", "Entreprise", "Type de borne", "Puissance", "Source"]
      },
      rows: [
        ["Agadir", "Tesla", "Supercharger (CCS Type 2)", "Up to 150 kW", { label: "Tesla", url: "https://www.tesla.com/findus/location/supercharger/agadirsupercharger" }],
        ["Casablanca", "Tesla", "Supercharger (CCS Type 2)", "Up to 150 kW", { label: "Tesla", url: "https://www.tesla.com/findus/location/supercharger/casablancasupercharger" }],
        ["Fes", "Tesla", "Supercharger (CCS Type 2)", "Up to 150 kW", { label: "Tesla", url: "https://www.tesla.com/findus/location/supercharger/fessupercharger" }],
        ["Marrakech", "Tesla", "Supercharger (CCS Type 2)", "Up to 150 kW", { label: "Tesla", url: "https://www.tesla.com/findus/location/supercharger/marrakechsupercharger" }],
        ["Rabat", "Tesla", "Supercharger (CCS Type 2)", "Up to 150 kW", { label: "Tesla", url: "https://www.tesla.com/findus/location/supercharger/rabatsupercharger" }],
        ["Tangier", "Tesla", "Supercharger (CCS Type 2)", "Up to 150 kW", { label: "Tesla", url: "https://www.tesla.com/findus/location/supercharger/tangiersupercharger" }],
        ["Casablanca (Al Boustane)", "FastVolt / Afriquia", "CCS Type 2 (DC) + Type 2 tethered (AC)", "240 kW DC + 22 kW AC", { label: "Open Charge Map", url: "https://openchargemap.io/poi/details/311375" }],
        ["Morocco (multiple cities)", "Electromaps listing", "Mixed AC/DC", "Varies by station", { label: "Electromaps", url: "https://www.electromaps.com/en/charging-stations/morocco" }],
        ["Morocco (selected stations)", "TotalEnergies", "EV charging at selected sites", "Varies by station", { label: "TotalEnergies", url: "https://totalenergies.ma/en/individual/fuels/electric-recharge" }]
      ]
    },
    heroImage: "",
    brandLogo: "",
    details: {
      powertrain: null,
      power: null,
      range_km: null,
      fuel_economy_l100km: null,
      charging: null,
      price_mad: null,
      availability: "available_now"
    },
    links: { official: "#", dealer: "#" },
    t: {
      en: {
        d: { availability: "Available now" },
        s: [],
        l: [],
        w: []
      },
      fr: {
        d: { availability: "Disponible maintenant" },
        s: [],
        l: [],
        w: []
      }
    }
  },
  {
    id: "beny-ev-chargers",
    modelName: "BENY EV Charger Solutions",
    sidebarTitle: "BENY EV Chargers",
    subtitle: "Charging hardware supplier",
    category: "CHARGER",
    region: "Global / China",
    regionFr: "Global / Chine",
    heroImage: "assets/beny/beny-hero.webp",
    heroOverlay: "BENY EV Charger portfolio",
    brandLogo: "assets/beny/beny-logo.png",
    excludeFromCarsTable: true,
    details: {
      powertrain: null,
      power: null,
      range_km: null,
      fuel_economy_l100km: null,
      charging: null,
      price_mad: null,
      availability: "available_now"
    },
    links: {
      official: "https://www.beny.com/ev-charger/",
      app: "https://www.beny.com/wp-content/uploads/2021/06/AC-DC-EV-Charger-Catalogue.pdf"
    },
    ctaLabels: {
      website: "Website",
      secondary: "Catalogue"
    },
    t: {
      en: {
        sub: "Charging hardware supplier",
        sb: "BENY EV Chargers",
        ho: "BENY EV Charger solutions for AC and DC deployments",
        cta: {
          website: "Website",
          secondary: "Catalogue"
        },
        dr: [
          { label: "AC RANGE", value: "3.7 kW - 22 kW" },
          { label: "DC RANGE", value: "Up to 600 kW" },
          { label: "SMART / NETWORK", value: "OCPP support (ex: OCPP 1.6J)" },
          { label: "TECH", value: "Dynamic Load Balancing (DLB) for AC chargers" },
          { label: "CERTIFICATIONS", value: "CE / CB / UKCA / TUV / RoHS" }
        ],
        d: { availability: "Available now" },
        s: [
          "Wide AC + DC portfolio (home + commercial).",
          "Smart connectivity (App / Ethernet / 4G depending on model).",
          "Load balancing for smarter energy use (AC + DLB)."
        ],
        l: [
          "Specs differ by model (AC vs DC).",
          "DC fast chargers need higher site power + permitting.",
          "Integration depends on backend/OCPP version."
        ],
        w: [
          "Shows how Morocco can scale charging infra.",
          "Bridges EV adoption + charging availability.",
          "Benchmark partner for hardware sourcing and deployment."
        ],
        src: [
          { title: "BENY EV Charger", value: "Main page", url: "https://www.beny.com/ev-charger/" },
          { title: "Catalogue PDF", value: "AC-DC EV Charger Catalogue", url: "https://www.beny.com/wp-content/uploads/2021/06/AC-DC-EV-Charger-Catalogue.pdf" },
          { title: "OCPP Datasheet", value: "BENY OCPP charger datasheet", url: "https://www.beny.com/wp-content/uploads/2021/05/OCPP-EV-Chargers-Datasheet-BENY-2022.05.06.pdf" }
        ]
      },
      fr: {
        sub: "Fournisseur de materiel de recharge",
        sb: "BENY EV Chargers",
        ho: "Solutions BENY pour deploiements de charge AC et DC",
        cta: {
          website: "Website",
          secondary: "Catalogue"
        },
        dr: [
          { label: "PLAGE AC", value: "3.7 kW - 22 kW" },
          { label: "PLAGE DC", value: "Jusqu a 600 kW" },
          { label: "SMART / RESEAU", value: "Support OCPP (ex: OCPP 1.6J)" },
          { label: "TECH", value: "Dynamic Load Balancing (DLB) pour chargeurs AC" },
          { label: "CERTIFICATIONS", value: "CE / CB / UKCA / TUV / RoHS" }
        ],
        d: { availability: "Disponible maintenant" },
        s: [
          "Wide AC + DC portfolio (home + commercial).",
          "Smart connectivity (App / Ethernet / 4G depending on model).",
          "Load balancing for smarter energy use (AC + DLB)."
        ],
        l: [
          "Specs differ by model (AC vs DC).",
          "DC fast chargers need higher site power + permitting.",
          "Integration depends on backend/OCPP version."
        ],
        w: [
          "Shows how Morocco can scale charging infra.",
          "Bridges EV adoption + charging availability.",
          "Benchmark partner for hardware sourcing and deployment."
        ],
        src: [
          { title: "BENY EV Charger", value: "Page principale", url: "https://www.beny.com/ev-charger/" },
          { title: "Catalogue PDF", value: "AC-DC EV Charger Catalogue", url: "https://www.beny.com/wp-content/uploads/2021/06/AC-DC-EV-Charger-Catalogue.pdf" },
          { title: "OCPP Datasheet", value: "BENY OCPP charger datasheet", url: "https://www.beny.com/wp-content/uploads/2021/05/OCPP-EV-Chargers-Datasheet-BENY-2022.05.06.pdf" }
        ]
      }
    }
  },
  {
    id: "starcharge-ev-chargers",
    modelName: "StarCharge EV Charger Solutions",
    sidebarTitle: "StarCharge EV Chargers",
    subtitle: "Charging hardware supplier",
    category: "EV Charging Infrastructure",
    region: "China / Global",
    regionFr: "China / Global",
    heroImage: "assets/chargers/starcharge.png",
    heroOverlay: "StarCharge AC/DC charging portfolio",
    brandLogo: "",
    excludeFromCarsTable: true,
    details: {
      powertrain: null,
      power: null,
      range_km: null,
      fuel_economy_l100km: null,
      charging: null,
      price_mad: null,
      availability: "available_now"
    },
    links: {
      official: "https://www.starcharge.com",
      app: "https://www.starcharge.com"
    },
    ctaLabels: {
      website: "Website",
      secondary: "Datasheet"
    },
    t: {
      en: {
        sub: "Charging hardware supplier",
        sb: "StarCharge EV Chargers",
        ho: "StarCharge EV charger solutions for public and fleet infrastructure",
        cta: { website: "Website", secondary: "Datasheet" },
        dr: [
          { label: "CHARGER TYPES", value: "AC + DC" },
          { label: "POWER RANGE", value: "AC 7-22 kW | DC up to 360 kW" },
          { label: "CONNECTOR TYPES", value: "Type 2, CCS2 (model dependent)" },
          { label: "SMART / NETWORK", value: "OCPP support" },
          { label: "TYPICAL USE", value: "Public, highway, fleet, commercial" }
        ],
        d: { availability: "Available now" },
        s: [
          "Large global deployments and field experience.",
          "Broad AC and DC portfolio across site types.",
          "Scalable options for mixed urban + corridor rollout."
        ],
        l: [
          "Specifications and connector options vary by model.",
          "High-power deployments require stronger grid capacity.",
          "Backend integration depends on OCPP implementation."
        ],
        w: [
          "Supports Morocco and Africa charging scale-up.",
          "Improves EV adoption with broader charging coverage.",
          "Strong benchmark supplier for infrastructure sourcing."
        ],
        src: [{ title: "StarCharge", value: "Official website", url: "https://www.starcharge.com" }]
      },
      fr: {
        sub: "Charging hardware supplier",
        sb: "StarCharge EV Chargers",
        ho: "StarCharge EV charger solutions for public and fleet infrastructure",
        cta: { website: "Website", secondary: "Datasheet" },
        dr: [
          { label: "CHARGER TYPES", value: "AC + DC" },
          { label: "POWER RANGE", value: "AC 7-22 kW | DC up to 360 kW" },
          { label: "CONNECTOR TYPES", value: "Type 2, CCS2 (model dependent)" },
          { label: "SMART / NETWORK", value: "OCPP support" },
          { label: "TYPICAL USE", value: "Public, highway, fleet, commercial" }
        ],
        d: { availability: "Disponible maintenant" },
        s: [
          "Large global deployments and field experience.",
          "Broad AC and DC portfolio across site types.",
          "Scalable options for mixed urban + corridor rollout."
        ],
        l: [
          "Specifications and connector options vary by model.",
          "High-power deployments require stronger grid capacity.",
          "Backend integration depends on OCPP implementation."
        ],
        w: [
          "Supports Morocco and Africa charging scale-up.",
          "Improves EV adoption with broader charging coverage.",
          "Strong benchmark supplier for infrastructure sourcing."
        ],
        src: [{ title: "StarCharge", value: "Official website", url: "https://www.starcharge.com" }]
      }
    }
  },
  {
    id: "xcharge-ev-chargers",
    modelName: "XCharge EV Charger Solutions",
    sidebarTitle: "XCharge EV Chargers",
    subtitle: "Charging hardware supplier",
    category: "EV Charging Infrastructure",
    region: "China / Global",
    regionFr: "China / Global",
    heroImage: "assets/chargers/xcharge.png",
    heroOverlay: "XCharge fast charging and battery-integrated systems",
    brandLogo: "",
    excludeFromCarsTable: true,
    details: {
      powertrain: null,
      power: null,
      range_km: null,
      fuel_economy_l100km: null,
      charging: null,
      price_mad: null,
      availability: "available_now"
    },
    links: {
      official: "https://www.xcharge.com",
      app: "https://www.xcharge.com"
    },
    ctaLabels: {
      website: "Website",
      secondary: "Datasheet"
    },
    t: {
      en: {
        sub: "Charging hardware supplier",
        sb: "XCharge EV Chargers",
        ho: "XCharge solutions focused on high-power and grid-aware charging",
        cta: { website: "Website", secondary: "Datasheet" },
        dr: [
          { label: "CHARGER TYPES", value: "DC fast charging (with integrated battery options)" },
          { label: "POWER RANGE", value: "60-400 kW" },
          { label: "CONNECTOR TYPES", value: "CCS2 (model dependent)" },
          { label: "SMART / NETWORK", value: "OCPP support" },
          { label: "TYPICAL USE", value: "Highway, commercial hubs, fleet depots" }
        ],
        d: { availability: "Available now" },
        s: [
          "High-power charging options up to 400 kW.",
          "Battery-integrated architecture can reduce grid dependency.",
          "Good fit for constrained-grid fast-charge sites."
        ],
        l: [
          "Site design complexity can increase for integrated systems.",
          "Deployment economics depend on local tariff and demand charges.",
          "Connector and product variants differ by market."
        ],
        w: [
          "Can accelerate charging rollout where grid is weaker.",
          "Useful for Africa corridor and logistics use cases.",
          "Adds resilience options for fast-charge infrastructure."
        ],
        src: [{ title: "XCharge", value: "Official website", url: "https://www.xcharge.com" }]
      },
      fr: {
        sub: "Charging hardware supplier",
        sb: "XCharge EV Chargers",
        ho: "XCharge solutions focused on high-power and grid-aware charging",
        cta: { website: "Website", secondary: "Datasheet" },
        dr: [
          { label: "CHARGER TYPES", value: "DC fast charging (with integrated battery options)" },
          { label: "POWER RANGE", value: "60-400 kW" },
          { label: "CONNECTOR TYPES", value: "CCS2 (model dependent)" },
          { label: "SMART / NETWORK", value: "OCPP support" },
          { label: "TYPICAL USE", value: "Highway, commercial hubs, fleet depots" }
        ],
        d: { availability: "Disponible maintenant" },
        s: [
          "High-power charging options up to 400 kW.",
          "Battery-integrated architecture can reduce grid dependency.",
          "Good fit for constrained-grid fast-charge sites."
        ],
        l: [
          "Site design complexity can increase for integrated systems.",
          "Deployment economics depend on local tariff and demand charges.",
          "Connector and product variants differ by market."
        ],
        w: [
          "Can accelerate charging rollout where grid is weaker.",
          "Useful for Africa corridor and logistics use cases.",
          "Adds resilience options for fast-charge infrastructure."
        ],
        src: [{ title: "XCharge", value: "Official website", url: "https://www.xcharge.com" }]
      }
    }
  },
  {
    id: "autel-energy-ev-chargers",
    modelName: "Autel Energy EV Charger Solutions",
    sidebarTitle: "Autel Energy EV Chargers",
    subtitle: "Charging hardware supplier",
    category: "EV Charging Infrastructure",
    region: "China / Global",
    regionFr: "China / Global",
    heroImage: "assets/chargers/autel.png",
    heroOverlay: "Autel Energy AC/DC charging with software diagnostics focus",
    brandLogo: "",
    excludeFromCarsTable: true,
    details: {
      powertrain: null,
      power: null,
      range_km: null,
      fuel_economy_l100km: null,
      charging: null,
      price_mad: null,
      availability: "available_now"
    },
    links: {
      official: "https://autelenergy.com",
      app: "https://autelenergy.com"
    },
    ctaLabels: {
      website: "Website",
      secondary: "Datasheet"
    },
    t: {
      en: {
        sub: "Charging hardware supplier",
        sb: "Autel Energy EV Chargers",
        ho: "Autel Energy charging solutions with strong software and diagnostics",
        cta: { website: "Website", secondary: "Datasheet" },
        dr: [
          { label: "CHARGER TYPES", value: "AC + DC" },
          { label: "POWER RANGE", value: "AC 7-22 kW | DC up to 480 kW" },
          { label: "CONNECTOR TYPES", value: "Type 2, CCS2 (model dependent)" },
          { label: "SMART / NETWORK", value: "OCPP support" },
          { label: "TYPICAL USE", value: "Commercial sites, fleet, public fast charging" }
        ],
        d: { availability: "Available now" },
        s: [
          "Broad AC/DC range including high-power DC models.",
          "Strong software stack and remote diagnostics capabilities.",
          "Useful for operators needing centralized monitoring."
        ],
        l: [
          "Feature depth varies by product family.",
          "Higher-power units can increase project CAPEX.",
          "Integration scope depends on backend compatibility."
        ],
        w: [
          "Supports reliable scaling of managed charging networks.",
          "Improves operations visibility for African market rollouts.",
          "Good benchmark for software-led charging deployment."
        ],
        src: [{ title: "Autel Energy", value: "Official website", url: "https://autelenergy.com" }]
      },
      fr: {
        sub: "Charging hardware supplier",
        sb: "Autel Energy EV Chargers",
        ho: "Autel Energy charging solutions with strong software and diagnostics",
        cta: { website: "Website", secondary: "Datasheet" },
        dr: [
          { label: "CHARGER TYPES", value: "AC + DC" },
          { label: "POWER RANGE", value: "AC 7-22 kW | DC up to 480 kW" },
          { label: "CONNECTOR TYPES", value: "Type 2, CCS2 (model dependent)" },
          { label: "SMART / NETWORK", value: "OCPP support" },
          { label: "TYPICAL USE", value: "Commercial sites, fleet, public fast charging" }
        ],
        d: { availability: "Disponible maintenant" },
        s: [
          "Broad AC/DC range including high-power DC models.",
          "Strong software stack and remote diagnostics capabilities.",
          "Useful for operators needing centralized monitoring."
        ],
        l: [
          "Feature depth varies by product family.",
          "Higher-power units can increase project CAPEX.",
          "Integration scope depends on backend compatibility."
        ],
        w: [
          "Supports reliable scaling of managed charging networks.",
          "Improves operations visibility for African market rollouts.",
          "Good benchmark for software-led charging deployment."
        ],
        src: [{ title: "Autel Energy", value: "Official website", url: "https://autelenergy.com" }]
      }
    }
  },
  {
    id: "setec-power-ev-chargers",
    modelName: "Setec Power EV Charger Solutions",
    sidebarTitle: "Setec Power EV Chargers",
    subtitle: "Charging hardware supplier",
    category: "EV Charging Infrastructure",
    region: "China / Global",
    regionFr: "China / Global",
    heroImage: "assets/chargers/setec.png",
    heroOverlay: "Setec Power DC fast charging portfolio",
    brandLogo: "",
    excludeFromCarsTable: true,
    details: {
      powertrain: null,
      power: null,
      range_km: null,
      fuel_economy_l100km: null,
      charging: null,
      price_mad: null,
      availability: "available_now"
    },
    links: {
      official: "https://www.setec-power.com",
      app: "https://www.setec-power.com"
    },
    ctaLabels: {
      website: "Website",
      secondary: "Datasheet"
    },
    t: {
      en: {
        sub: "Charging hardware supplier",
        sb: "Setec Power EV Chargers",
        ho: "Setec cost-effective DC fast charging solutions",
        cta: { website: "Website", secondary: "Datasheet" },
        dr: [
          { label: "CHARGER TYPES", value: "DC fast charging" },
          { label: "POWER RANGE", value: "DC 20-240 kW" },
          { label: "CONNECTOR TYPES", value: "CCS2, CHAdeMO (model dependent)" },
          { label: "SMART / NETWORK", value: "OCPP support" },
          { label: "TYPICAL USE", value: "Public charging, fleet, commercial fast-charge sites" }
        ],
        d: { availability: "Available now" },
        s: [
          "Cost-effective DC fast charger positioning.",
          "Power range covers urban and corridor needs.",
          "Practical option for budget-sensitive deployments."
        ],
        l: [
          "DC-only focus may require separate AC supplier strategy.",
          "Site permitting and grid upgrades still apply.",
          "Exact connector/power options vary by model."
        ],
        w: [
          "Can improve affordability of fast-charge expansion.",
          "Relevant for scaling charging in Morocco and Africa.",
          "Useful benchmark for CAPEX-constrained rollouts."
        ],
        src: [{ title: "Setec Power", value: "Official website", url: "https://www.setec-power.com" }]
      },
      fr: {
        sub: "Charging hardware supplier",
        sb: "Setec Power EV Chargers",
        ho: "Setec cost-effective DC fast charging solutions",
        cta: { website: "Website", secondary: "Datasheet" },
        dr: [
          { label: "CHARGER TYPES", value: "DC fast charging" },
          { label: "POWER RANGE", value: "DC 20-240 kW" },
          { label: "CONNECTOR TYPES", value: "CCS2, CHAdeMO (model dependent)" },
          { label: "SMART / NETWORK", value: "OCPP support" },
          { label: "TYPICAL USE", value: "Public charging, fleet, commercial fast-charge sites" }
        ],
        d: { availability: "Disponible maintenant" },
        s: [
          "Cost-effective DC fast charger positioning.",
          "Power range covers urban and corridor needs.",
          "Practical option for budget-sensitive deployments."
        ],
        l: [
          "DC-only focus may require separate AC supplier strategy.",
          "Site permitting and grid upgrades still apply.",
          "Exact connector/power options vary by model."
        ],
        w: [
          "Can improve affordability of fast-charge expansion.",
          "Relevant for scaling charging in Morocco and Africa.",
          "Useful benchmark for CAPEX-constrained rollouts."
        ],
        src: [{ title: "Setec Power", value: "Official website", url: "https://www.setec-power.com" }]
      }
    }
  },
  {
    id: "sinexcel-ev-chargers",
    modelName: "Sinexcel EV Charger Solutions",
    sidebarTitle: "Sinexcel EV Chargers",
    subtitle: "Charging hardware supplier",
    category: "EV Charging Infrastructure",
    region: "China / Global",
    regionFr: "China / Global",
    heroImage: "assets/chargers/sinexcel.png",
    heroOverlay: "Sinexcel high-power charging and energy storage integration",
    brandLogo: "",
    excludeFromCarsTable: true,
    details: {
      powertrain: null,
      power: null,
      range_km: null,
      fuel_economy_l100km: null,
      charging: null,
      price_mad: null,
      availability: "available_now"
    },
    links: {
      official: "https://www.sinexcel.com",
      app: "https://www.sinexcel.com"
    },
    ctaLabels: {
      website: "Website",
      secondary: "Datasheet"
    },
    t: {
      en: {
        sub: "Charging hardware supplier",
        sb: "Sinexcel EV Chargers",
        ho: "Sinexcel charging solutions with charger + storage integration",
        cta: { website: "Website", secondary: "Datasheet" },
        dr: [
          { label: "CHARGER TYPES", value: "DC fast charging" },
          { label: "POWER RANGE", value: "150-450 kW" },
          { label: "CONNECTOR TYPES", value: "CCS2 (model dependent)" },
          { label: "SMART / NETWORK", value: "OCPP support" },
          { label: "TYPICAL USE", value: "Highway hubs, public networks, energy-integrated sites" }
        ],
        d: { availability: "Available now" },
        s: [
          "High-power charging range for demanding corridors.",
          "Charger + energy storage integration capability.",
          "Useful for peak-shaving and resilient site design."
        ],
        l: [
          "Advanced integrated systems can raise project complexity.",
          "High-power infrastructure requires careful grid planning.",
          "Project ROI depends on utilization and tariff structure."
        ],
        w: [
          "Supports scalable fast-charge corridors in Morocco.",
          "Helps Africa deployments where grid optimization matters.",
          "Strong benchmark for future-ready charging architecture."
        ],
        src: [{ title: "Sinexcel", value: "Official website", url: "https://www.sinexcel.com" }]
      },
      fr: {
        sub: "Charging hardware supplier",
        sb: "Sinexcel EV Chargers",
        ho: "Sinexcel charging solutions with charger + storage integration",
        cta: { website: "Website", secondary: "Datasheet" },
        dr: [
          { label: "CHARGER TYPES", value: "DC fast charging" },
          { label: "POWER RANGE", value: "150-450 kW" },
          { label: "CONNECTOR TYPES", value: "CCS2 (model dependent)" },
          { label: "SMART / NETWORK", value: "OCPP support" },
          { label: "TYPICAL USE", value: "Highway hubs, public networks, energy-integrated sites" }
        ],
        d: { availability: "Disponible maintenant" },
        s: [
          "High-power charging range for demanding corridors.",
          "Charger + energy storage integration capability.",
          "Useful for peak-shaving and resilient site design."
        ],
        l: [
          "Advanced integrated systems can raise project complexity.",
          "High-power infrastructure requires careful grid planning.",
          "Project ROI depends on utilization and tariff structure."
        ],
        w: [
          "Supports scalable fast-charge corridors in Morocco.",
          "Helps Africa deployments where grid optimization matters.",
          "Strong benchmark for future-ready charging architecture."
        ],
        src: [{ title: "Sinexcel", value: "Official website", url: "https://www.sinexcel.com" }]
      }
    }
  },
  {
    id: "ev-chargers-table",
    modelName: "EV Chargers Comparison Table",
    subtitle: "Charging table",
    category: "TABLE",
    tableSlide: true,
    table: {
      title: {
        en: "EV Chargers Comparison Table",
        fr: "Tableau comparatif des chargeurs EV"
      },
      columns: {
        en: ["Brand", "Charger Types", "Power Range", "Connector Types", "OCPP", "Typical Use", "Source"],
        fr: ["Marque", "Types de chargeurs", "Plage de puissance", "Types de connecteurs", "OCPP", "Usage typique", "Source"]
      },
      rows: [
        [{ label: "BENY", slideId: "beny-ev-chargers" }, "AC + DC", "AC 3.7-22 kW | DC up to 600 kW", "Type 2, CCS2/GB-T (model dependent)", "Yes (ex: OCPP 1.6J)", "Public, commercial, fleet", { label: "BENY", url: "https://www.beny.com/ev-charger/" }],
        [{ label: "StarCharge", slideId: "starcharge-ev-chargers" }, "AC + DC", "AC 7-22 kW | DC up to 360 kW", "Type 2, CCS2 (model dependent)", "Yes", "Public, highway, fleet", { label: "StarCharge", url: "https://www.starcharge.com" }],
        [{ label: "XCharge", slideId: "xcharge-ev-chargers" }, "DC (battery-integrated options)", "60-400 kW", "CCS2 (model dependent)", "Yes", "Highway, commercial, fleet", { label: "XCharge", url: "https://www.xcharge.com" }],
        [{ label: "Autel Energy", slideId: "autel-energy-ev-chargers" }, "AC + DC", "AC 7-22 kW | DC up to 480 kW", "Type 2, CCS2 (model dependent)", "Yes", "Commercial, fleet, public fast charge", { label: "Autel", url: "https://autelenergy.com" }],
        [{ label: "Setec Power", slideId: "setec-power-ev-chargers" }, "DC", "20-240 kW", "CCS2, CHAdeMO (model dependent)", "Yes", "Public fast charge, fleet", { label: "Setec", url: "https://www.setec-power.com" }],
        [{ label: "Sinexcel", slideId: "sinexcel-ev-chargers" }, "DC", "150-450 kW", "CCS2 (model dependent)", "Yes", "Highway hubs, energy-integrated sites", { label: "Sinexcel", url: "https://www.sinexcel.com" }]
      ]
    },
    heroImage: "",
    brandLogo: "",
    details: {
      powertrain: null,
      power: null,
      range_km: null,
      fuel_economy_l100km: null,
      charging: null,
      price_mad: null,
      availability: "available_now"
    },
    links: { official: "#", app: "#" },
    t: {
      en: {
        sub: "Charging table",
        d: { availability: "Available now" },
        s: [],
        l: [],
        w: []
      },
      fr: {
        sub: "Tableau recharge",
        d: { availability: "Disponible maintenant" },
        s: [],
        l: [],
        w: []
      }
    }
  },
  {
    id: "evmh-cover",
    modelName: "Morocco EV + Hybrid & Charging Benchmark",
    subtitle: "Cover",
    category: "MARKET",
    heroImage: "assets/slides/ev-slide-13.svg",
    heroOverlay: "Morocco EV + Hybrid Market + Charging Ecosystem Benchmark",
    brandLogo: "",
    excludeFromCarsTable: true,
    details: {
      powertrain: null,
      power: null,
      range_km: null,
      fuel_economy_l100km: null,
      charging: null,
      price_mad: null,
      availability: "available_now"
    },
    links: {
      official: "https://www.electromaps.com/en/charging-stations/morocco",
      app: "#"
    },
    t: {
      en: {
        sub: "Cover",
        ho: "Morocco EV + Hybrid Market + Charging Ecosystem Benchmark",
        dr: [
          { label: "CATEGORY", value: "EV + Hybrid + Charging ecosystem" },
          { label: "KEY METRIC", value: "2026 benchmark baseline (placeholder)" },
          { label: "BUSINESS MODEL", value: "Importer | Distributor | Network operator" },
          { label: "WHY IT MATTERS", value: "One benchmark for aligned decisions." }
        ],
        d: { availability: "Available now" },
        s: ["Single view of market + charging.", "EN/FR board-ready format.", "Easy monthly refresh model."],
        l: ["Some values are placeholders.", "Needs source updates each month.", "Dependent on source quality."],
        w: ["Creates shared strategic baseline.", "Improves rollout planning.", "Helps partner alignment."],
        src: [{ title: "Scope", value: "Benchmark framework", url: "#" }]
      },
      fr: {
        sub: "Couverture",
        ho: "Benchmark marche EV + hybride + recharge au Maroc",
        dr: [
          { label: "CATEGORIE", value: "EV + hybride + ecosysteme recharge" },
          { label: "INDICATEUR CLE", value: "Base benchmark 2026 (provisoire)" },
          { label: "MODELE BUSINESS", value: "Importateur | Distributeur | Operateur reseau" },
          { label: "POURQUOI C EST IMPORTANT", value: "Un benchmark commun pour decider." }
        ],
        d: { availability: "Disponible maintenant" },
        s: ["Vue unique marche + recharge.", "Format EN/FR pret decision.", "Modele facile a mettre a jour."],
        l: ["Certaines valeurs sont provisoires.", "Mise a jour mensuelle necessaire.", "Depend de la qualite des sources."],
        w: ["Base strategique partagee.", "Ameliore le plan de deploiement.", "Aide l alignement partenaires."],
        src: [{ title: "Perimetre", value: "Cadre benchmark", url: "#" }]
      }
    }
  },
  {
    id: "evmh-market-snapshot",
    modelName: "Market Snapshot (Placeholders)",
    subtitle: "Market",
    category: "MARKET",
    heroImage: "assets/slides/ev-slide-14.svg",
    heroOverlay: "Key market numbers and citations area",
    brandLogo: "",
    excludeFromCarsTable: true,
    details: {
      powertrain: null,
      power: null,
      range_km: null,
      fuel_economy_l100km: null,
      charging: null,
      price_mad: null,
      availability: "available_now"
    },
    links: {
      official: "https://www.micepp.gov.ma/",
      app: "#"
    },
    t: {
      en: {
        sub: "Market",
        ho: "Market snapshot: EV, Hybrid, Charging",
        dr: [
          { label: "CATEGORY", value: "Market baseline" },
          { label: "KEY METRIC", value: "Registrations + CAGR + charger count (fill latest)" },
          { label: "BUSINESS MODEL", value: "OEM distribution + import + charge operators" },
          { label: "WHY IT MATTERS", value: "Guides where to invest first." }
        ],
        d: { availability: "Available now" },
        s: ["Clear top-line direction.", "Links demand to infrastructure.", "Dedicated citations block."],
        l: ["Requires latest official data.", "Private import may be incomplete.", "Regional granularity varies."],
        w: ["Improves timing decisions.", "Supports board sizing.", "Avoids isolated assumptions."],
        src: [
          { title: "Citation placeholder", value: "Official registration source", url: "#" },
          { title: "Citation placeholder", value: "Charging inventory source", url: "#" },
          { title: "Citation placeholder", value: "Energy pricing source", url: "#" }
        ]
      },
      fr: {
        sub: "Marche",
        ho: "Vue marche: EV, hybride, recharge",
        dr: [
          { label: "CATEGORIE", value: "Base marche" },
          { label: "INDICATEUR CLE", value: "Immatriculations + CAGR + bornes (a completer)" },
          { label: "MODELE BUSINESS", value: "Distribution OEM + import + operateurs" },
          { label: "POURQUOI C EST IMPORTANT", value: "Oriente les priorites investissement." }
        ],
        d: { availability: "Disponible maintenant" },
        s: ["Direction generale claire.", "Relie demande et infrastructure.", "Bloc citations dedie."],
        l: ["Besoin des dernieres donnees officielles.", "Import prive parfois incomplet.", "Detail regional variable."],
        w: ["Ameliore le timing de decision.", "Aide le sizing direction.", "Evite les hypotheses isolees."],
        src: [
          { title: "Citation provisoire", value: "Source officielle immatriculations", url: "#" },
          { title: "Citation provisoire", value: "Source inventaire bornes", url: "#" },
          { title: "Citation provisoire", value: "Source prix energie", url: "#" }
        ]
      }
    }
  },
  {
    id: "evmh-bev-models",
    modelName: "BEV Models in Morocco (Examples)",
    subtitle: "Brands",
    category: "EV",
    heroImage: "assets/slides/ev-slide-15.svg",
    heroOverlay: "Dacia, Renault, BYD, MG4, IONIQ 5, EV6, EQA/EQB",
    brandLogo: "",
    excludeFromCarsTable: true,
    details: {
      powertrain: null,
      power: null,
      range_km: null,
      fuel_economy_l100km: null,
      charging: null,
      price_mad: null,
      availability: "available_now"
    },
    links: {
      official: "https://www.renault.ma/vehicules-electriques/megane-e-tech-electrique.html",
      app: "#"
    },
    t: {
      en: {
        sub: "Brands",
        ho: "BEV benchmark set for Morocco",
        dr: [
          { label: "CATEGORY", value: "BEV product landscape" },
          { label: "KEY METRIC", value: "7+ benchmarked nameplates" },
          { label: "BUSINESS MODEL", value: "Official channels + importer channels" },
          { label: "WHY IT MATTERS", value: "Shows depth of customer choice." }
        ],
        d: { availability: "Available now" },
        s: ["Includes Dacia Spring and Megane E-Tech.", "Includes BYD Seagull/Atto3/Seal + MG4 placeholder.", "Includes IONIQ 5, EV6, Mercedes EQA/EQB."],
        l: ["Trim availability changes quickly.", "Import models may have support gaps.", "Final prices depend on options/tax."],
        w: ["Clarifies competitive map.", "Supports launch planning.", "Defines entry/mid/premium options."],
        src: [
          { title: "Renault MA", value: "Megane E-Tech", url: "https://www.renault.ma/vehicules-electriques/megane-e-tech-electrique.html" },
          { title: "BYD EV", value: "EV lineup", url: "https://www.byd.com/eu/electric-cars" }
        ]
      },
      fr: {
        sub: "Marques",
        ho: "Base comparative BEV pour le Maroc",
        dr: [
          { label: "CATEGORIE", value: "Paysage produits BEV" },
          { label: "INDICATEUR CLE", value: "7+ modeles benchmarks" },
          { label: "MODELE BUSINESS", value: "Canaux officiels + importateurs" },
          { label: "POURQUOI C EST IMPORTANT", value: "Montre la profondeur de choix client." }
        ],
        d: { availability: "Disponible maintenant" },
        s: ["Inclut Dacia Spring et Megane E-Tech.", "Inclut BYD Seagull/Atto3/Seal + placeholder MG4.", "Inclut IONIQ 5, EV6, Mercedes EQA/EQB."],
        l: ["Disponibilite des finitions variable.", "Support parfois limite pour import.", "Prix final selon options/fiscalite."],
        w: ["Clarifie la concurrence.", "Aide la planification lancement.", "Structure l offre par gamme de prix."],
        src: [
          { title: "Renault MA", value: "Megane E-Tech", url: "https://www.renault.ma/vehicules-electriques/megane-e-tech-electrique.html" },
          { title: "BYD EV", value: "Gamme EV", url: "https://www.byd.com/eu/electric-cars" }
        ]
      }
    }
  },
  {
    id: "evmh-hybrid-phev-models",
    modelName: "Hybrid & PHEV in Morocco (Examples)",
    subtitle: "Hybrid",
    category: "HYBRID",
    heroImage: "assets/slides/ev-slide-16.svg",
    heroOverlay: "Yaris Cross Hybrid, BYD Seal 5 PHEV, and others",
    brandLogo: "",
    excludeFromCarsTable: true,
    details: {
      powertrain: null,
      power: null,
      range_km: null,
      fuel_economy_l100km: null,
      charging: null,
      price_mad: null,
      availability: "available_now"
    },
    links: {
      official: "https://toyota.co.ma/content/yaris-hybrid-0",
      app: "#"
    },
    t: {
      en: {
        sub: "Hybrid",
        ho: "Hybrid and PHEV transition options",
        dr: [
          { label: "CATEGORY", value: "Hybrid and PHEV portfolio" },
          { label: "KEY METRIC", value: "Yaris Cross Hybrid + Seal 5 PHEV + others" },
          { label: "BUSINESS MODEL", value: "Dealer-led hybrids plus selective imports" },
          { label: "WHY IT MATTERS", value: "Bridges EV hesitation with fuel savings." }
        ],
        d: { availability: "Available now" },
        s: ["Lower behavior change than full BEV.", "Works where charging access is uneven.", "Strong fit for mixed city/highway."],
        l: ["Savings depend on driving profile.", "PHEV needs regular charging to deliver value.", "Messaging can confuse buyers vs BEV."],
        w: ["Keeps electrification momentum.", "Provides transition path for fleets.", "Expands practical options for buyers."],
        src: [
          { title: "Toyota MA", value: "Hybrid portfolio", url: "https://toyota.co.ma/content/yaris-hybrid-0" },
          { title: "BYD Hybrid", value: "Hybrid lineup", url: "https://www.byd.com/eu/hybrid-cars" }
        ]
      },
      fr: {
        sub: "Hybride",
        ho: "Options de transition hybride et PHEV",
        dr: [
          { label: "CATEGORIE", value: "Portefeuille hybride et PHEV" },
          { label: "INDICATEUR CLE", value: "Yaris Cross Hybrid + Seal 5 PHEV + autres" },
          { label: "MODELE BUSINESS", value: "Hybrides via concession + import selectif" },
          { label: "POURQUOI C EST IMPORTANT", value: "Pont vers l EV avec economie carburant." }
        ],
        d: { availability: "Disponible maintenant" },
        s: ["Moins de rupture d usage que BEV.", "Utile si acces recharge inegal.", "Pertinent pour trajets mixtes."],
        l: ["Le gain depend du style de conduite.", "Le PHEV exige une recharge reguliere.", "Message parfois confus face au BEV."],
        w: ["Maintient la dynamique d electrification.", "Etape intermediaire utile aux flottes.", "Elargit les options pratiques."],
        src: [
          { title: "Toyota MA", value: "Portefeuille hybride", url: "https://toyota.co.ma/content/yaris-hybrid-0" },
          { title: "BYD Hybrid", value: "Gamme hybride", url: "https://www.byd.com/eu/hybrid-cars" }
        ]
      }
    }
  },
  {
    id: "evmh-price-bands",
    modelName: "Price Bands (Entry / Mid / Premium)",
    subtitle: "Pricing",
    category: "MARKET",
    heroImage: "assets/slides/ev-slide-17.svg",
    heroOverlay: "Entry, Mid, and Premium pricing bands",
    brandLogo: "",
    excludeFromCarsTable: true,
    details: {
      powertrain: null,
      power: null,
      range_km: null,
      fuel_economy_l100km: null,
      charging: null,
      price_mad: null,
      availability: "available_now"
    },
    links: {
      official: "https://www.wandaloo.com/",
      app: "#"
    },
    t: {
      en: {
        sub: "Pricing",
        ho: "Price benchmark by customer budget tier",
        dr: [
          { label: "CATEGORY", value: "Price band benchmark" },
          { label: "KEY METRIC", value: "Entry <300k | Mid 300k-500k | Premium >500k MAD" },
          { label: "BUSINESS MODEL", value: "Retail margin + finance + aftersales package" },
          { label: "WHY IT MATTERS", value: "Defines product and financing fit." }
        ],
        d: { availability: "Available now" },
        s: ["Simple cross-brand view.", "Works across EV, Hybrid, PHEV.", "Supports campaign segmentation."],
        l: ["Bands need frequent updates.", "Import volatility can shift prices.", "Options can move models across bands."],
        w: ["Improves SKU strategy.", "Supports sales script by budget.", "Helps forecast conversion."],
        src: [{ title: "Listing reference", value: "Market listings", url: "https://www.wandaloo.com/" }]
      },
      fr: {
        sub: "Prix",
        ho: "Benchmark prix par segment budget",
        dr: [
          { label: "CATEGORIE", value: "Benchmark bandes de prix" },
          { label: "INDICATEUR CLE", value: "Entree <300k | Milieu 300k-500k | Premium >500k MAD" },
          { label: "MODELE BUSINESS", value: "Marge retail + financement + SAV" },
          { label: "POURQUOI C EST IMPORTANT", value: "Calibre offre et financement." }
        ],
        d: { availability: "Disponible maintenant" },
        s: ["Lecture simple entre marques.", "Applicable EV, hybride, PHEV.", "Aide la segmentation campagne."],
        l: ["Bandes a actualiser regulierement.", "Volatilite import sur le prix.", "Options qui changent la tranche."],
        w: ["Ameliore la strategie SKU.", "Aide argumentaire commercial.", "Facilite la prevision conversion."],
        src: [{ title: "Reference annonces", value: "Listings marche", url: "https://www.wandaloo.com/" }]
      }
    }
  },
  {
    id: "evmh-charging-ecosystem",
    modelName: "Charging Ecosystem in Morocco",
    subtitle: "Charging",
    category: "NETWORK",
    heroImage: "assets/slides/ev-slide-18.svg",
    heroOverlay: "Operators, cities, connector types, and power levels",
    brandLogo: "",
    excludeFromCarsTable: true,
    details: {
      powertrain: null,
      power: null,
      range_km: null,
      fuel_economy_l100km: null,
      charging: null,
      price_mad: null,
      availability: "available_now"
    },
    links: {
      official: "https://openchargemap.io/",
      app: "https://www.electromaps.com/en/charging-stations/morocco"
    },
    t: {
      en: {
        sub: "Charging",
        ho: "Charging ecosystem operators and station mix",
        dr: [
          { label: "CATEGORY", value: "Public charging network" },
          { label: "KEY METRIC", value: "Operator count + connector mix + AC/DC split" },
          { label: "BUSINESS MODEL", value: "Charging-as-a-service + site partnerships" },
          { label: "WHY IT MATTERS", value: "Network density drives EV confidence." }
        ],
        d: { availability: "Available now" },
        s: ["Maps operator coverage quickly.", "Shows connector compatibility.", "Supports phased rollout priorities."],
        l: ["Live station status changes quickly.", "Crowdsourced data can have gaps.", "Power tags are not always normalized."],
        w: ["Improves route reliability planning.", "Guides connector standard choices.", "Aligns launches with charging reality."],
        src: [
          { title: "Open Charge Map", value: "Public charging dataset", url: "https://openchargemap.io/" },
          { title: "Electromaps", value: "Morocco charging list", url: "https://www.electromaps.com/en/charging-stations/morocco" }
        ]
      },
      fr: {
        sub: "Recharge",
        ho: "Operateurs, villes, connecteurs et puissances",
        dr: [
          { label: "CATEGORIE", value: "Reseau de recharge public" },
          { label: "INDICATEUR CLE", value: "Nb operateurs + mix connecteurs + part AC/DC" },
          { label: "MODELE BUSINESS", value: "Charging-as-a-service + partenariats sites" },
          { label: "POURQUOI C EST IMPORTANT", value: "La densite reseau rassure l achat EV." }
        ],
        d: { availability: "Disponible maintenant" },
        s: ["Cartographie rapide de couverture.", "Montre la compatibilite connecteurs.", "Aide la priorisation par phase."],
        l: ["Statut bornes evolue vite.", "Donnees communautaires avec trous possibles.", "Etiquettes puissance pas toujours homogenes."],
        w: ["Aide la fiabilite des trajets.", "Guide les choix de standards.", "Aligne lancement et reseau reel."],
        src: [
          { title: "Open Charge Map", value: "Dataset recharge public", url: "https://openchargemap.io/" },
          { title: "Electromaps", value: "Liste bornes Maroc", url: "https://www.electromaps.com/en/charging-stations/morocco" }
        ]
      }
    }
  },
  {
    id: "evmh-beny-overview",
    modelName: "BENY Chargers Overview",
    subtitle: "BENY",
    category: "CHARGER",
    heroImage: "assets/slides/ev-slide-19.svg",
    heroOverlay: "AC 3.7-22kW and DC up to 600kW",
    brandLogo: "",
    excludeFromCarsTable: true,
    details: {
      powertrain: null,
      power: null,
      range_km: null,
      fuel_economy_l100km: null,
      charging: null,
      price_mad: null,
      availability: "available_now"
    },
    links: {
      official: "https://www.beny.com/ev-charger/",
      app: "#"
    },
    t: {
      en: {
        sub: "BENY",
        ho: "BENY AC/DC charger portfolio",
        dr: [
          { label: "CATEGORY", value: "Charger OEM overview" },
          { label: "KEY METRIC", value: "AC 3.7-22kW, DC up to 600kW" },
          { label: "BUSINESS MODEL", value: "OEM hardware + local integrator projects" },
          { label: "WHY IT MATTERS", value: "One supplier can cover home to highway." }
        ],
        d: { availability: "Available now" },
        s: ["Wide AC/DC product range.", "Example DC 60-120kW with OCPP 1.6J.", "CCS2 or GB/T options and IP55."],
        l: ["Local certification path must be checked.", "Economics depend on import/logistics.", "After-sales structure must be localized."],
        w: ["Enables scalable rollout design.", "Reduces supplier fragmentation early.", "Improves interoperability planning."],
        src: [{ title: "BENY official", value: "EV charger portfolio", url: "https://www.beny.com/ev-charger/" }]
      },
      fr: {
        sub: "BENY",
        ho: "Portfolio BENY de chargeurs AC/DC",
        dr: [
          { label: "CATEGORIE", value: "Vue OEM bornes" },
          { label: "INDICATEUR CLE", value: "AC 3,7-22kW, DC jusqu a 600kW" },
          { label: "MODELE BUSINESS", value: "Hardware OEM + integration locale" },
          { label: "POURQUOI C EST IMPORTANT", value: "Un fournisseur couvre domicile a autoroute." }
        ],
        d: { availability: "Disponible maintenant" },
        s: ["Large gamme AC/DC.", "Exemple DC 60-120kW avec OCPP 1.6J.", "Options CCS2 ou GB/T et IP55."],
        l: ["Verifier le chemin de certification locale.", "Economie selon import/logistique.", "SAV a localiser."],
        w: ["Facilite un deploiement evolutif.", "Limite fragmentation fournisseur.", "Aide la planification interoperabilite."],
        src: [{ title: "BENY officiel", value: "Portfolio chargeurs EV", url: "https://www.beny.com/ev-charger/" }]
      }
    }
  },
  {
    id: "evmh-tonhe-solutions",
    modelName: "Tonhe Charger Solutions (Brochure)",
    subtitle: "Tonhe",
    category: "CHARGER",
    heroImage: "assets/slides/ev-slide-20.svg",
    heroOverlay: "Models G51/G45/G101/G102/G64/G53/Z13/Z14",
    brandLogo: "",
    excludeFromCarsTable: true,
    details: {
      powertrain: null,
      power: null,
      range_km: null,
      fuel_economy_l100km: null,
      charging: null,
      price_mad: null,
      availability: "available_now"
    },
    links: {
      official: "assets/pdf/tonhe-brochure-badge.svg",
      app: "#"
    },
    t: {
      en: {
        sub: "Tonhe",
        ho: "Tonhe charger families and core parameters",
        dr: [
          { label: "CATEGORY", value: "DC charger solution set" },
          { label: "KEY METRIC", value: "G51/G45/G101/G102/G64/G53/Z13/Z14 series" },
          { label: "BUSINESS MODEL", value: "Station hardware + module integration" },
          { label: "WHY IT MATTERS", value: "Model breadth helps tender fit." }
        ],
        d: { availability: "Available now" },
        s: ["Covers multiple station formats.", "Includes output voltage and connector highlights.", "Mentions OCPP integration capability."],
        l: ["Uploaded brochure values need final verification.", "Model naming may vary by market.", "Connector options depend on project scope."],
        w: ["Useful for tender requirement mapping.", "Supports phased portfolio design.", "Improves vendor comparison clarity."],
        src: [{ title: "Uploaded brochure", value: "zheye.pdf placeholder", url: "assets/pdf/tonhe-brochure-badge.svg" }]
      },
      fr: {
        sub: "Tonhe",
        ho: "Familles Tonhe et parametres essentiels",
        dr: [
          { label: "CATEGORIE", value: "Ensemble solutions bornes DC" },
          { label: "INDICATEUR CLE", value: "Series G51/G45/G101/G102/G64/G53/Z13/Z14" },
          { label: "MODELE BUSINESS", value: "Hardware station + integration modules" },
          { label: "POURQUOI C EST IMPORTANT", value: "La largeur gamme aide le fit AO." }
        ],
        d: { availability: "Disponible maintenant" },
        s: ["Plusieurs formats de stations.", "Points cle: tension sortie et connecteurs.", "Mention de compatibilite OCPP."],
        l: ["Verifier les valeurs brochure finale.", "Noms modeles variables selon marche.", "Connecteurs selon cahier des charges."],
        w: ["Utile pour mapping appels d offres.", "Soutient design portefeuille par phase.", "Clarifie la comparaison fournisseurs."],
        src: [{ title: "Brochure importee", value: "Placeholder zheye.pdf", url: "assets/pdf/tonhe-brochure-badge.svg" }]
      }
    }
  },
  {
    id: "evmh-power-modules",
    modelName: "Power Modules: 40kW / 1000V",
    subtitle: "Power Module",
    category: "CHARGER",
    heroImage: "assets/slides/ev-slide-21.svg",
    heroOverlay: "40kW / 1000V module and efficiency benchmark",
    brandLogo: "",
    excludeFromCarsTable: true,
    details: {
      powertrain: null,
      power: null,
      range_km: null,
      fuel_economy_l100km: null,
      charging: null,
      price_mad: null,
      availability: "available_now"
    },
    links: {
      official: "assets/pdf/tonhe-brochure-badge.svg",
      app: "#"
    },
    t: {
      en: {
        sub: "Power",
        ho: "Tonhe module benchmark for DC charger stack",
        dr: [
          { label: "CATEGORY", value: "Power module benchmark" },
          { label: "KEY METRIC", value: "40kW module, 1000V class, high efficiency" },
          { label: "BUSINESS MODEL", value: "Module supply for charger OEM/ODM projects" },
          { label: "WHY IT MATTERS", value: "Efficiency drives TCO and thermal design." }
        ],
        d: { availability: "Available now" },
        s: ["Supports scalable cabinet architecture.", "Useful for high-power highway nodes.", "Efficiency focus lowers operating cost."],
        l: ["Exact efficiency curve must be validated.", "Field performance depends on cooling.", "Lead times can vary by procurement cycle."],
        w: ["Critical input for station economics.", "Helps compare platform maturity.", "Improves infrastructure sizing decisions."],
        src: [{ title: "Module source", value: "Tonhe brochure placeholder", url: "assets/pdf/tonhe-brochure-badge.svg" }]
      },
      fr: {
        sub: "Module",
        ho: "Benchmark module Tonhe pour stack bornes DC",
        dr: [
          { label: "CATEGORIE", value: "Benchmark module puissance" },
          { label: "INDICATEUR CLE", value: "Module 40kW, classe 1000V, haute efficacite" },
          { label: "MODELE BUSINESS", value: "Fourniture modules pour projets OEM/ODM" },
          { label: "POURQUOI C EST IMPORTANT", value: "Le rendement impacte TCO et thermique." }
        ],
        d: { availability: "Disponible maintenant" },
        s: ["Compatible architecture armoire evolutive.", "Pertinent pour noeuds autoroute haute puissance.", "Le rendement reduit le cout operationnel."],
        l: ["Courbe rendement a valider.", "Performance terrain depend du refroidissement.", "Delais variables selon cycle achat."],
        w: ["Entree cle pour economie station.", "Aide la comparaison maturite technique.", "Ameliore les decisions de dimensionnement."],
        src: [{ title: "Source module", value: "Placeholder brochure Tonhe", url: "assets/pdf/tonhe-brochure-badge.svg" }]
      }
    }
  },
  {
    id: "evmh-furen-overview",
    modelName: "Furen Company & EV Charging Series",
    subtitle: "Furen",
    category: "CHARGER",
    heroImage: "assets/slides/ev-slide-22.svg",
    heroOverlay: "Furen company profile and EV charging station series",
    brandLogo: "",
    excludeFromCarsTable: true,
    details: {
      powertrain: null,
      power: null,
      range_km: null,
      fuel_economy_l100km: null,
      charging: null,
      price_mad: null,
      availability: "available_now"
    },
    links: {
      official: "assets/pdf/furen-ev-charger-badge.svg",
      app: "#"
    },
    t: {
      en: {
        sub: "Furen",
        ho: "Furen EV charger product and company snapshot",
        dr: [
          { label: "CATEGORY", value: "Company + product series overview" },
          { label: "KEY METRIC", value: "EV station product lines from uploaded PDFs" },
          { label: "BUSINESS MODEL", value: "Equipment vendor + project delivery support" },
          { label: "WHY IT MATTERS", value: "Adds supplier optionality in rollout." }
        ],
        d: { availability: "Available now" },
        s: ["Combines company profile and hardware context.", "Useful for multi-vendor sourcing strategy.", "Can reduce procurement concentration risk."],
        l: ["Local service readiness must be checked.", "Technical claims need field validation.", "Commercial terms not yet benchmarked."],
        w: ["Expands sourcing options.", "Supports negotiation leverage.", "Improves deployment resilience."],
        src: [
          { title: "Uploaded PDF", value: "FUREN EV CHARGER.pdf placeholder", url: "assets/pdf/furen-ev-charger-badge.svg" },
          { title: "Uploaded PDF", value: "Product manual placeholder", url: "assets/pdf/furen-company-manual-badge.svg" }
        ]
      },
      fr: {
        sub: "Furen",
        ho: "Profil Furen et serie stations de recharge",
        dr: [
          { label: "CATEGORIE", value: "Vue entreprise + gamme produits" },
          { label: "INDICATEUR CLE", value: "Lignes produits EV issues des PDFs importes" },
          { label: "MODELE BUSINESS", value: "Fournisseur equipements + support projet" },
          { label: "POURQUOI C EST IMPORTANT", value: "Ajoute des options fournisseur." }
        ],
        d: { availability: "Disponible maintenant" },
        s: ["Combine profil societe et contexte hardware.", "Utile pour une strategie multi-fournisseurs.", "Peut reduire le risque de concentration achats."],
        l: ["Capacite SAV locale a verifier.", "Specs techniques a valider en terrain.", "Conditions commerciales non benchmarkees."],
        w: ["Elargit les options sourcing.", "Renforce le levier de negociation.", "Ameliore la resilience de deploiement."],
        src: [
          { title: "PDF importe", value: "Placeholder FUREN EV CHARGER.pdf", url: "assets/pdf/furen-ev-charger-badge.svg" },
          { title: "PDF importe", value: "Placeholder Product manual", url: "assets/pdf/furen-company-manual-badge.svg" }
        ]
      }
    }
  },
  {
    id: "evmh-rollout-architecture",
    modelName: "Recommended Architecture for Morocco Rollout",
    subtitle: "Rollout",
    category: "STRATEGY",
    heroImage: "assets/slides/ev-slide-23.svg",
    heroOverlay: "Home chargers + Destination AC + Highway DC",
    brandLogo: "",
    excludeFromCarsTable: true,
    details: {
      powertrain: null,
      power: null,
      range_km: null,
      fuel_economy_l100km: null,
      charging: null,
      price_mad: null,
      availability: "available_now"
    },
    links: {
      official: "https://openchargemap.io/",
      app: "#"
    },
    t: {
      en: {
        sub: "Rollout",
        ho: "Layered architecture: home, destination, highway",
        dr: [
          { label: "CATEGORY", value: "Deployment strategy" },
          { label: "KEY METRIC", value: "3-layer architecture for scale and reliability" },
          { label: "BUSINESS MODEL", value: "Mixed CAPEX ownership + CPO partnerships" },
          { label: "WHY IT MATTERS", value: "Balances cost, coverage, and user experience." }
        ],
        d: { availability: "Available now" },
        s: ["Matches different charging behaviors.", "Supports phased investment by demand.", "Improves utilization vs single-layer design."],
        l: ["Requires strong site acquisition pipeline.", "Grid constraints can delay high-power nodes.", "Interoperability governance is required."],
        w: ["Reduces rollout risk.", "Improves customer confidence.", "Creates scalable network foundation."],
        src: [{ title: "Planning reference", value: "Open charging map and route planning data", url: "https://openchargemap.io/" }]
      },
      fr: {
        sub: "Deploiement",
        ho: "Architecture en couches: domicile, destination, autoroute",
        dr: [
          { label: "CATEGORIE", value: "Strategie de deploiement" },
          { label: "INDICATEUR CLE", value: "Architecture 3 couches pour echelle et fiabilite" },
          { label: "MODELE BUSINESS", value: "CAPEX mixte + partenariats CPO" },
          { label: "POURQUOI C EST IMPORTANT", value: "Equilibre cout, couverture et experience." }
        ],
        d: { availability: "Disponible maintenant" },
        s: ["Repond a des usages de recharge differents.", "Permet un investissement progressif.", "Ameliore l utilisation des actifs."],
        l: ["Demande un pipeline foncier solide.", "Contraintes reseau pour les sites haute puissance.", "Gouvernance interoperabilite necessaire."],
        w: ["Reduit le risque de deploiement.", "Renforce la confiance client.", "Cree une base reseau evolutive."],
        src: [{ title: "Reference planification", value: "Donnees carte recharge et trajets", url: "https://openchargemap.io/" }]
      }
    }
  },
  {
    id: "evmh-appendix-sources",
    modelName: "Appendix: Sources and Links",
    subtitle: "Appendix",
    category: "POLICY",
    heroImage: "assets/slides/ev-slide-24.svg",
    heroOverlay: "Source registry for all benchmark slides",
    brandLogo: "",
    excludeFromCarsTable: true,
    details: {
      powertrain: null,
      power: null,
      range_km: null,
      fuel_economy_l100km: null,
      charging: null,
      price_mad: null,
      availability: "available_now"
    },
    links: {
      official: "https://www.beny.com/ev-charger/",
      app: "#"
    },
    t: {
      en: {
        sub: "Appendix",
        ho: "All URLs and brochure placeholders used in this deck",
        dr: [
          { label: "CATEGORY", value: "Reference registry" },
          { label: "KEY METRIC", value: "URLs + uploaded brochure placeholders" },
          { label: "BUSINESS MODEL", value: "Evidence-backed benchmark narrative" },
          { label: "WHY IT MATTERS", value: "Makes every claim traceable." }
        ],
        d: { availability: "Available now" },
        s: ["All links consolidated in one place.", "Speeds review and fact-check cycles.", "Ready for replacing placeholders with final docs."],
        l: ["Some links are placeholders.", "Uploaded PDFs represented by badge cards.", "Live URLs can change over time."],
        w: ["Improves deck credibility.", "Simplifies maintenance workflow.", "Keeps one source-of-truth list."],
        src: [
          { title: "BENY", value: "Official EV charger page", url: "https://www.beny.com/ev-charger/" },
          { title: "BYD EV", value: "EV lineup", url: "https://www.byd.com/eu/electric-cars" },
          { title: "Renault MA", value: "Megane E-Tech", url: "https://www.renault.ma/vehicules-electriques/megane-e-tech-electrique.html" },
          { title: "Open Charge Map", value: "Charging dataset", url: "https://openchargemap.io/" },
          { title: "Electromaps", value: "Morocco stations", url: "https://www.electromaps.com/en/charging-stations/morocco" },
          { title: "Tonhe upload", value: "zheye.pdf placeholder", url: "assets/pdf/tonhe-brochure-badge.svg" },
          { title: "Furen upload", value: "FUREN EV CHARGER.pdf placeholder", url: "assets/pdf/furen-ev-charger-badge.svg" },
          { title: "Furen manual upload", value: "Product manual placeholder", url: "assets/pdf/furen-company-manual-badge.svg" }
        ]
      },
      fr: {
        sub: "Annexe",
        ho: "Tous les liens et placeholders brochures du deck",
        dr: [
          { label: "CATEGORIE", value: "Registre de references" },
          { label: "INDICATEUR CLE", value: "URLs + placeholders brochures importees" },
          { label: "MODELE BUSINESS", value: "Narratif benchmark base sur preuves" },
          { label: "POURQUOI C EST IMPORTANT", value: "Rend chaque point tracable." }
        ],
        d: { availability: "Disponible maintenant" },
        s: ["Tous les liens regroupes en une page.", "Accelere revision et fact-check.", "Pret a remplacer les placeholders."],
        l: ["Certains liens restent provisoires.", "PDF importes encore en badge.", "Les URLs peuvent evoluer."],
        w: ["Renforce la credibilite.", "Simplifie la maintenance.", "Garde une liste source unique."],
        src: [
          { title: "BENY", value: "Page officielle chargeurs EV", url: "https://www.beny.com/ev-charger/" },
          { title: "BYD EV", value: "Gamme EV", url: "https://www.byd.com/eu/electric-cars" },
          { title: "Renault MA", value: "Megane E-Tech", url: "https://www.renault.ma/vehicules-electriques/megane-e-tech-electrique.html" },
          { title: "Open Charge Map", value: "Dataset recharge", url: "https://openchargemap.io/" },
          { title: "Electromaps", value: "Stations Maroc", url: "https://www.electromaps.com/en/charging-stations/morocco" },
          { title: "Upload Tonhe", value: "Placeholder zheye.pdf", url: "assets/pdf/tonhe-brochure-badge.svg" },
          { title: "Upload Furen", value: "Placeholder FUREN EV CHARGER.pdf", url: "assets/pdf/furen-ev-charger-badge.svg" },
          { title: "Upload manuel Furen", value: "Placeholder Product manual", url: "assets/pdf/furen-company-manual-badge.svg" }
        ]
      }
    }
  }
];

window.SLIDES_DATA = SLIDE_ENTRIES.filter(function (entry) {
  return !/^evmh-/.test(String(entry.id || ""));
}).map(function (entry) {
  const en = (entry.t && entry.t.en) ? entry.t.en : {};
  const fr = (entry.t && entry.t.fr) ? entry.t.fr : {};
  return {
    id: entry.id,
    modelName: entry.modelName,
    sidebarTitle: entry.sidebarTitle || "",
    subtitle: entry.subtitle || "",
    category: entry.category,
    tableSlide: Boolean(entry.tableSlide),
    excludeFromCarsTable: Boolean(entry.excludeFromCarsTable),
    table: entry.table || null,
    region: entry.region || "Morocco",
    heroImage: entry.heroImage,
    heroOverlay: entry.heroOverlay || "",
    brandLogo: entry.brandLogo,
    details: entry.details,
    links: entry.links,
    cta: (entry.ctaLabels && typeof entry.ctaLabels === "object") ? entry.ctaLabels : null,
    detailRows: Array.isArray(entry.detailRows) ? entry.detailRows : [],
    sources: Array.isArray(entry.sources) ? entry.sources : [],
    strengths: Array.isArray(en.s) ? en.s : [],
    limits: Array.isArray(en.l) ? en.l : [],
    whyItMatters: Array.isArray(en.w) ? en.w : [],
    translations: {
      en: {
        modelName: entry.modelName,
        sidebarTitle: en.sb || entry.sidebarTitle || "",
        subtitle: en.sub || entry.subtitle || "",
        region: entry.region || "Morocco",
        heroOverlay: en.ho || entry.heroOverlay || "",
        cta: (en.cta && typeof en.cta === "object")
          ? en.cta
          : ((entry.ctaLabels && typeof entry.ctaLabels === "object") ? entry.ctaLabels : null),
        detailRows: Array.isArray(en.dr) ? en.dr : [],
        details: en.d || {},
        strengths: Array.isArray(en.s) ? en.s : [],
        limits: Array.isArray(en.l) ? en.l : [],
        whyItMatters: Array.isArray(en.w) ? en.w : [],
        sources: Array.isArray(en.src) ? en.src : []
      },
      fr: {
        modelName: entry.modelName,
        sidebarTitle: fr.sb || entry.sidebarTitle || "",
        subtitle: fr.sub || entry.subtitle || "",
        region: entry.regionFr || "Maroc",
        heroOverlay: fr.ho || entry.heroOverlay || "",
        cta: (fr.cta && typeof fr.cta === "object")
          ? fr.cta
          : ((entry.ctaLabels && typeof entry.ctaLabels === "object") ? entry.ctaLabels : null),
        detailRows: Array.isArray(fr.dr) ? fr.dr : [],
        details: fr.d || {},
        strengths: Array.isArray(fr.s) ? fr.s : [],
        limits: Array.isArray(fr.l) ? fr.l : [],
        whyItMatters: Array.isArray(fr.w) ? fr.w : [],
        sources: Array.isArray(fr.src) ? fr.src : []
      }
    }
  };
});
