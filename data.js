/**
 * =========================================================================
 * PORTFOLIO DATA CONFIGURATION
 * =========================================================================
 * All text, links, schools, skills, projects, and certificates are centralized here.
 * You can easily edit any information or add new entries without touching HTML markup.
 * =========================================================================
 */

const PORTFOLIO_DATA = {
  personal: {
    fullName: "Ashley B. Serdoncillo",
    shortName: "Ashley Serdoncillo",
    initials: "AS",
    tagline: "BSIT Student & Aspiring IT Professional",
    welcomeHeading: "Welcome to My Portfolio",
    aboutHeading: "About Me",
    profileImage: "./assets/profile.jpg",
    bio: {
      intro: "Hello! I'm Ashley Serdoncillo, an enthusiastic Information Technology student dedicated to building clean, user-friendly digital systems, maintaining network infrastructures, and developing practical software solutions.",
      summary: "I am currently pursuing my Bachelor of Science in Information Technology at Data Center College of Bangued, with expected graduation in 2027. I have a strong foundation in networking basics, office productivity tools, computer troubleshooting, and web application development. Driven by continuous learning and real-world project development, I take pride in creating efficient retail and commercial systems that streamline everyday operations."
    },
    location: "Bangued, Abra, Philippines",
    statusBadge: "Available for Internships & Projects",
    stats: [
      { label: "Target Graduation", value: "2027" },
      { label: "Current Program", value: "BSIT" },
      { label: "Focus Areas", value: "Networks & Systems" }
    ],
    contacts: {
      email: "serdoncilloashley85@gmail.com",
      phone: "+63 900 000 0000",
      facebook: "https://www.facebook.com/lilashlie",
      messenger: "https://m.me/lilashlie",
      instagram: "https://instagram.com/lilashlie"
    }
  },

  education: [
    {
      level: "Tertiary Education",
      school: "Data Center College of Bangued",
      address: "Bangued, Abra, Philippines",
      course: "Bachelor of Science in Information Technology (BSIT)",
      year: "2023 – Present",
      expectedGraduation: "Expected Graduation: 2027",
      isCurrent: true
    },
    {
      level: "Secondary Education",
      school: "San Isidro Central School",
      address: "San Isidro, Abra, Philippines",
      year: "2017 – 2023",
      isCurrent: false
    },
    {
      level: "Primary Education",
      school: "San Isidro Central School",
      address: "San Isidro, Abra, Philippines",
      year: "2011 – 2017",
      isCurrent: false
    }
  ],

  skills: [
    {
      title: "Networking Basics",
      description: "Fundamental understanding of network concepts, protocols, IP addressing, routing principles, and local network configurations.",
      icon: "network",
      tag: "Infrastructure"
    },
    {
      title: "Office Productivity",
      description: "Proficient in Microsoft Office suite (Word, Excel, PowerPoint) and collaborative cloud productivity tools for accurate documentation.",
      icon: "file-text",
      tag: "Productivity"
    },
    {
      title: "Basic Troubleshooting",
      description: "Ability to diagnose, isolate, and resolve common hardware malfunctions, operating system issues, and software conflicts.",
      icon: "wrench",
      tag: "Technical Support"
    },
    {
      title: "Modern AI Concepts",
      description: "Certified foundation in modern artificial intelligence, machine learning concepts, and practical generative tools via Cisco Networking Academy.",
      icon: "cpu",
      tag: "Emerging Tech"
    },
    {
      title: "Digital Safety & Netiquette",
      description: "Certified in responsible digital communication, online ethics, safe browsing, data privacy, and cybersecurity etiquette by DICT.",
      icon: "shield-check",
      tag: "Cybersecurity"
    },
    {
      title: "Web & POS Systems",
      description: "Practical expertise in developing web applications, Point of Sale (POS) interfaces, e-commerce platforms, and database-driven solutions.",
      icon: "layout",
      tag: "System Design"
    }
  ],

  projects: [
    {
      id: "project-flowershop",
      title: "HappyStem by Carmencita — Floral E-Commerce & Customizer System",
      category: "E-COMMERCE & WEB SYSTEM",
      badge: "Full-Stack Application",
      description: "A specialized floral ordering and custom bouquet configuration web platform for HappyStem in Bangued, Abra. Features an interactive 'Design Your Own Bouquet' builder with live formula pricing, catalog filtering, GCash payment workflows, and an administrative back-office with automated flower price fluctuation cascading.",
      thumbnail: "./assets/projects/flowershop/2.png",
      gallery: [
        {
          url: "./assets/projects/flowershop/2.png",
          caption: "Storefront Homepage & Flower Catalogue with category filters (Arrangements, Roses, Sunflowers, Tulips)"
        },
        {
          url: "./assets/projects/flowershop/6.png",
          caption: "Interactive 'Design Your Own Bouquet' Builder: custom stem selection, fillers, wrappers, ribbons, and real-time total calculation"
        },
        {
          url: "./assets/projects/flowershop/3.png",
          caption: "Bouquet Shop Listing displaying high-resolution arrangements, Philippine Peso (₱) pricing, and instant checkout"
        },
        {
          url: "./assets/projects/flowershop/4.png",
          caption: "Floral Services Catalog tailored for Weddings, Debuts, Events & Celebrations, and Corporate arrangements"
        },
        {
          url: "./assets/projects/flowershop/5.png",
          caption: "Events & Celebrations Showcase Gallery (Miss Abra Pageant, UA Pageant, Ms. Teen Lagangilang 2026)"
        },
        {
          url: "./assets/projects/flowershop/9.png",
          caption: "Admin Management Portal: Flower Price Fluctuation Adjuster with auto-cascading wholesale and retail rate updates"
        },
        {
          url: "./assets/projects/flowershop/1.png",
          caption: "Customer Account Registration Portal featuring same-day local delivery and GCash payment benefits"
        },
        {
          url: "./assets/projects/flowershop/7.png",
          caption: "Integrated Google Business Maps location for the physical storefront on Taft Ave, Bangued, Abra"
        },
        {
          url: "./assets/projects/flowershop/8.png",
          caption: "Secure Back-Office Administrator sign-in gateway"
        }
      ]
    },
    {
      id: "project-minimart",
      title: "88 Mini Mart — Point of Sale (POS) & Store Inventory System",
      category: "POINT-OF-SALE & INVENTORY",
      badge: "Retail Management",
      description: "A fast-paced POS and retail management system developed for convenience store operations. Equips cashiers with quick-touch product tiles, barcode scanning, SC/PWD discount computations, and cash drawer reconciliations, while providing administrators with live sales dashboards, profit margin tracking, and inventory control.",
      thumbnail: "./assets/projects/minimart/2.png",
      gallery: [
        {
          url: "./assets/projects/minimart/2.png",
          caption: "Cashier POS Terminal: dynamic ticket summary, quick-touch category buttons, live stock counters, and touch keypad"
        },
        {
          url: "./assets/projects/minimart/5.png",
          caption: "Executive Analytics Dashboard: annual gross revenue, profit margins (18.2%), cost breakdown, and best sellers list"
        },
        {
          url: "./assets/projects/minimart/6.png",
          caption: "Product Catalog & Inventory Control Center: cost vs selling price management, stock indicators, and low-inventory alerts"
        },
        {
          url: "./assets/projects/minimart/3.png",
          caption: "Real-Time Sales Receipts Ledger: order histories, net revenue tracking, payment methods, and instant receipt reprinting"
        },
        {
          url: "./assets/projects/minimart/4.png",
          caption: "End-of-Shift Cash Drawer Reconciliation Tool: float tracking, cash balancing, and shift discrepancy audits"
        },
        {
          url: "./assets/projects/minimart/1.png",
          caption: "Secure Role-Based Authentication Gateway for administrators and staff cashiers"
        }
      ]
    }
  ],

  certificates: [
    {
      id: "cert-cisco-ai",
      title: "Introduction to Modern AI",
      issuer: "Cisco Networking Academy",
      date: "October 22, 2026",
      image: "./assets/cert-cisco-ai.jpg",
      badge: "Earned",
      certId: "7afs3f01-02d5-4402-ad99-39dbf5fff8cu",
      description: "Successfully completed Cisco's official curriculum covering modern artificial intelligence fundamentals, neural networks, ethics, and future technological paradigms."
    },
    {
      id: "cert-dict-netiquette",
      title: "Online Safety Through Netiquette",
      issuer: "Department of Information and Communications Technology (DICT) Region II",
      date: "July 23, 2026",
      image: "./assets/cert-dict-netiquette.jpg",
      badge: "Earned",
      certId: "DICT-R02-2026-CONF",
      description: "Awarded in recognition of active participation and commitment to promoting responsible, ethical, and secure use of technologies."
    }
  ],

  footer: {
    tagline: "Driven by curiosity, powered by technology.",
    copyright: "© 2026 Ashley Serdoncillo. All rights reserved."
  }
};
