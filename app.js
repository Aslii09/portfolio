/**
 * =========================================================================
 * PORTFOLIO APPLICATION LOGIC
 * =========================================================================
 * Powers dynamic rendering from data.js, theme toggling, interactive gallery
 * slider modal, certificate lightbox, and mobile navigation.
 * =========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderHeader();
  renderHero();
  renderEducation();
  renderSkills();
  renderProjects();
  renderCertificates();
  renderContact();
  renderFooter();
  initMobileNav();
  initScrollSpy();
  initGalleryModal();
  initCertModal();
  initBackToTop();
});

/* ==========================================================================
   1. THEME ENGINE (Light Baby Pink / Dark Neon Pink)
   ========================================================================== */
function initTheme() {
  const savedTheme = localStorage.getItem("portfolio_theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDark = savedTheme ? savedTheme === "dark" : prefersDark;

  applyTheme(isDark);

  const toggleButtons = document.querySelectorAll(".theme-toggle-btn");
  toggleButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const currentlyDark = document.documentElement.classList.contains("dark");
      applyTheme(!currentlyDark);
    });
  });
}

function applyTheme(isDark) {
  const root = document.documentElement;
  if (isDark) {
    root.classList.add("dark");
    localStorage.setItem("portfolio_theme", "dark");
  } else {
    root.classList.remove("dark");
    localStorage.setItem("portfolio_theme", "light");
  }
  updateThemeIcons(isDark);
}

function updateThemeIcons(isDark) {
  const icons = document.querySelectorAll(".theme-icon-container");
  icons.forEach((el) => {
    el.innerHTML = isDark
      ? `
      <svg class="w-4 h-4 text-pink-400 group-hover:text-pink-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>`
      : `
      <svg class="w-4 h-4 text-pink-500 group-hover:text-pink-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>`;
  });
}

/* ==========================================================================
   2. HEADER & LOGO
   ========================================================================== */
function renderHeader() {
  const { initials, shortName } = PORTFOLIO_DATA.personal;
  const brandInitials = document.getElementById("brand-initials");
  const brandName = document.getElementById("brand-name");

  if (brandInitials) brandInitials.textContent = initials;
  if (brandName) brandName.textContent = shortName;
}

/* ==========================================================================
   3. HERO / ABOUT ME SECTION
   ========================================================================== */
function renderHero() {
  const { welcomeHeading, aboutHeading, bio, profileImage, statusBadge, stats, contacts } =
    PORTFOLIO_DATA.personal;

  const profileImgEl = document.getElementById("hero-profile-img");
  const welcomeEl = document.getElementById("hero-welcome-badge");
  const introEl = document.getElementById("hero-intro-text");
  const aboutHeadingEl = document.getElementById("hero-about-heading");
  const summaryEl = document.getElementById("hero-summary-text");
  const statsContainer = document.getElementById("hero-stats-container");

  if (profileImgEl) {
    profileImgEl.src = profileImage;
    profileImgEl.alt = PORTFOLIO_DATA.personal.fullName;
  }

  if (welcomeEl) welcomeEl.textContent = welcomeHeading;
  if (introEl) introEl.textContent = bio.intro;
  if (aboutHeadingEl) aboutHeadingEl.textContent = aboutHeading;
  if (summaryEl) summaryEl.textContent = bio.summary;

  if (statsContainer && stats) {
    statsContainer.innerHTML = stats
      .map(
        (st) => `
      <div class="px-3 py-2 rounded-lg bg-pink-50/70 dark:bg-slate-900/80 border border-pink-200/60 dark:border-pink-500/20 text-center">
        <div class="text-xs text-pink-600 dark:text-pink-400 font-medium">${st.label}</div>
        <div class="text-sm font-bold text-slate-800 dark:text-white mt-0.5">${st.value}</div>
      </div>
    `
      )
      .join("");
  }
}

/* ==========================================================================
   4. EDUCATION SECTION (Compact timeline / lined list)
   ========================================================================== */
function renderEducation() {
  const container = document.getElementById("education-timeline");
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.education
    .map((edu, idx) => {
      const isLast = idx === PORTFOLIO_DATA.education.length - 1;
      return `
      <div class="relative pl-6 pb-6 ${!isLast ? "border-l-2 border-pink-300/40 dark:border-pink-500/30" : ""}">
        <!-- Timeline Node -->
        <span class="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-pink-500 dark:border-pink-400 flex items-center justify-center">
          <span class="w-1.5 h-1.5 rounded-full ${edu.isCurrent ? "bg-pink-500 animate-ping" : "bg-pink-400"}"></span>
        </span>

        <!-- Section Header (Pink) -->
        <div class="flex items-center gap-2 flex-wrap mb-1">
          <span class="text-xs uppercase tracking-wider font-semibold text-pink-600 dark:text-pink-400 bg-pink-100/70 dark:bg-pink-500/10 px-2 py-0.5 rounded border border-pink-300/50 dark:border-pink-500/20">
            ${edu.level}
          </span>
          ${edu.isCurrent ? `<span class="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">Active Enrollment</span>` : ""}
        </div>

        <!-- School Name (Bold) -->
        <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight">
          ${edu.school}
        </h3>

        <!-- Address -->
        <div class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mt-0.5">
          <svg class="w-3.5 h-3.5 text-pink-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>${edu.address}</span>
        </div>

        <!-- Course / Program (Only rendered if course is provided) -->
        ${
          edu.course
            ? `<div class="mt-1 text-sm font-medium text-slate-700 dark:text-slate-200">
                <span class="text-pink-600 dark:text-pink-400 font-semibold">Course:</span> ${edu.course}
              </div>`
            : ""
        }

        <!-- Year Graduated (Italicized) -->
        <div class="text-xs text-slate-500 dark:text-slate-400 italic mt-0.5">
          ${edu.year} ${edu.expectedGraduation ? `• <span class="font-medium text-pink-600 dark:text-pink-400 not-italic">${edu.expectedGraduation}</span>` : ""}
        </div>

        <!-- Practical Description (Only rendered if description is provided) -->
        ${
          edu.description
            ? `<p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                ${edu.description}
              </p>`
            : ""
        }
      </div>
    `;
    })
    .join("");
}

/* ==========================================================================
   5. SKILLS SECTION (Grid with thin pink left-border accent)
   ========================================================================== */
function renderSkills() {
  const container = document.getElementById("skills-grid");
  if (!container) return;

  const iconMap = {
    network: `
      <svg class="w-5 h-5 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>`,
    "file-text": `
      <svg class="w-5 h-5 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>`,
    wrench: `
      <svg class="w-5 h-5 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>`,
    cpu: `
      <svg class="w-5 h-5 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m-2 6h2m14-6h2m-2 6h2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>`,
    "shield-check": `
      <svg class="w-5 h-5 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>`,
    layout: `
      <svg class="w-5 h-5 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM14 13a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1h-4a1 1 0 01-1-1v-6z" />
      </svg>`
  };

  container.innerHTML = PORTFOLIO_DATA.skills
    .map(
      (skill) => `
    <div class="group bg-white dark:bg-slate-900/90 rounded-r-lg rounded-l-none border border-slate-200/80 dark:border-slate-800/80 border-l-[3.5px] border-l-pink-500 dark:border-l-pink-400 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md dark:hover:shadow-[0_0_15px_rgba(255,42,133,0.18)]">
      <div class="flex items-center justify-between gap-2 mb-2">
        <div class="flex items-center gap-2">
          <div class="p-1.5 rounded-md bg-pink-50 dark:bg-pink-500/10 text-pink-500 dark:text-pink-400">
            ${iconMap[skill.icon] || iconMap.network}
          </div>
          <h4 class="text-sm font-bold text-slate-800 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
            ${skill.title}
          </h4>
        </div>
        ${
          skill.tag
            ? `<span class="text-[10px] font-semibold text-pink-600 dark:text-pink-300 bg-pink-50 dark:bg-pink-500/10 px-2 py-0.5 rounded-full border border-pink-200/60 dark:border-pink-500/20">
                ${skill.tag}
              </span>`
            : ""
        }
      </div>
      <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
        ${skill.description}
      </p>
    </div>
  `
    )
    .join("");
}

/* ==========================================================================
   6. PROJECTS SECTION (Responsive grid with gallery triggers)
   ========================================================================== */
function renderProjects() {
  const container = document.getElementById("projects-grid");
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.projects
    .map(
      (proj) => `
    <div class="group bg-white dark:bg-slate-900/90 rounded-xl overflow-hidden border border-slate-200/90 dark:border-pink-500/25 transition-all duration-200 hover:shadow-lg dark:hover:shadow-[0_0_18px_rgba(255,42,133,0.22)] flex flex-col">
      <!-- Thumbnail Image Placeholder / Preview -->
      <div class="relative w-full h-44 overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img 
          src="${proj.thumbnail}" 
          alt="${proj.title}" 
          class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
        
        <!-- Category Pill Badge -->
        <span class="absolute top-3 left-3 text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-white/90 dark:bg-slate-900/90 text-pink-600 dark:text-pink-400 border border-pink-300/40 dark:border-pink-500/40 shadow-sm backdrop-blur-sm">
          ${proj.category}
        </span>

        <span class="absolute bottom-2.5 right-3 text-[11px] font-medium text-white/90 bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm">
          ${proj.gallery.length} Images
        </span>
      </div>

      <!-- Card Body -->
      <div class="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h4 class="text-base font-bold text-slate-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
            ${proj.title}
          </h4>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
            ${proj.description}
          </p>
        </div>

        <!-- Open Gallery Slider Link -->
        <div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <button 
            type="button" 
            class="open-gallery-btn text-xs font-semibold text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 flex items-center gap-1 group/btn transition-colors focus:outline-none"
            data-project-id="${proj.id}"
          >
            <span>Open Gallery Slider</span>
            <span class="transition-transform group-hover/btn:translate-x-1">→</span>
          </button>
          <span class="text-[11px] text-slate-400 font-mono">View Showcase</span>
        </div>
      </div>
    </div>
  `
    )
    .join("");
}

/* ==========================================================================
   7. CERTIFICATES SECTION (Compact cards with View Certificate trigger)
   ========================================================================== */
function renderCertificates() {
  const container = document.getElementById("certificates-grid");
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.certificates
    .map(
      (cert) => `
    <div class="group bg-white dark:bg-slate-900/90 rounded-xl overflow-hidden border border-slate-200/90 dark:border-pink-500/25 transition-all duration-200 hover:shadow-lg dark:hover:shadow-[0_0_18px_rgba(255,42,133,0.22)] flex flex-col">
      <!-- Certificate Image Header -->
      <div class="relative w-full h-40 overflow-hidden bg-slate-100 dark:bg-slate-800 cursor-pointer view-cert-trigger" data-cert-id="${cert.id}">
        <img 
          src="${cert.image}" 
          alt="${cert.title}" 
          class="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors flex items-center justify-center">
          <span class="opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 text-white text-xs px-2.5 py-1 rounded-md backdrop-blur-sm flex items-center gap-1">
            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
            Inspect
          </span>
        </div>

        <!-- Earned Green Badge -->
        <span class="absolute top-2.5 right-2.5 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 backdrop-blur-sm">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          ${cert.badge || "Earned"}
        </span>
      </div>

      <!-- Card Content -->
      <div class="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h4 class="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
            ${cert.title}
          </h4>
          <p class="text-xs font-medium text-pink-600 dark:text-pink-400 mt-1">
            ${cert.issuer}
          </p>
          <p class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
            Issued: <span class="font-medium text-slate-700 dark:text-slate-300">${cert.date}</span>
          </p>
          ${
            cert.certId
              ? `<div class="mt-2 text-[10px] font-mono text-slate-400 dark:text-slate-500 truncate">
                  ID: ${cert.certId}
                </div>`
              : ""
          }
        </div>

        <!-- View Certificate link aligned to bottom right -->
        <div class="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800 flex justify-end">
          <button 
            type="button" 
            class="view-cert-trigger text-xs font-semibold text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 flex items-center gap-1 focus:outline-none transition-colors"
            data-cert-id="${cert.id}"
          >
            <span>View Certificate</span>
            <span>↗</span>
          </button>
        </div>
      </div>
    </div>
  `
    )
    .join("");
}

/* ==========================================================================
   8. CONTACT SECTION
   ========================================================================== */
function renderContact() {
  const { contacts, fullName } = PORTFOLIO_DATA.personal;

  const emailLink = document.getElementById("contact-email-link");
  const emailText = document.getElementById("contact-email-text");
  const phoneLink = document.getElementById("contact-phone-link");
  const phoneText = document.getElementById("contact-phone-text");
  const fbLink = document.getElementById("contact-fb-link");
  const msgLink = document.getElementById("contact-msg-link");
  const igLink = document.getElementById("contact-ig-link");

  if (emailLink) emailLink.href = `mailto:${contacts.email}`;
  if (emailText) emailText.textContent = contacts.email;

  if (phoneLink) phoneLink.href = `tel:${contacts.phone.replace(/[^0-9+]/g, "")}`;
  if (phoneText) phoneText.textContent = contacts.phone;

  if (fbLink) fbLink.href = contacts.facebook;
  if (msgLink) msgLink.href = contacts.messenger;
  if (igLink) igLink.href = contacts.instagram;

  // Clipboard copy email helper
  const copyBtn = document.getElementById("copy-email-btn");
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(contacts.email).then(() => {
        const copyNotice = document.getElementById("copy-notice");
        if (copyNotice) {
          copyNotice.classList.remove("opacity-0", "pointer-events-none");
          setTimeout(() => {
            copyNotice.classList.add("opacity-0", "pointer-events-none");
          }, 2000);
        }
      });
    });
  }
}

/* ==========================================================================
   9. FOOTER SECTION
   ========================================================================== */
function renderFooter() {
  const { copyright, tagline } = PORTFOLIO_DATA.footer;
  const copyrightEl = document.getElementById("footer-copyright");
  const taglineEl = document.getElementById("footer-tagline");

  if (copyrightEl) copyrightEl.textContent = copyright;
  if (taglineEl) taglineEl.textContent = tagline;
}

/* ==========================================================================
   10. MOBILE NAVIGATION & DRAWER
   ========================================================================== */
function initMobileNav() {
  const toggleBtn = document.getElementById("mobile-menu-toggle");
  const menuDrawer = document.getElementById("mobile-menu-drawer");
  const navLinks = document.querySelectorAll(".mobile-nav-link");

  if (!toggleBtn || !menuDrawer) return;

  const updateToggleIcon = (isOpen) => {
    toggleBtn.innerHTML = isOpen
      ? `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
           <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
         </svg>`
      : `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
           <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
         </svg>`;
  };

  const toggle = () => {
    const isHidden = menuDrawer.classList.contains("hidden");
    if (isHidden) {
      menuDrawer.classList.remove("hidden");
      updateToggleIcon(true);
    } else {
      menuDrawer.classList.add("hidden");
      updateToggleIcon(false);
    }
  };

  toggleBtn.addEventListener("click", toggle);

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuDrawer.classList.add("hidden");
      updateToggleIcon(false);
    });
  });

  // Close on outside tap
  document.addEventListener("click", (e) => {
    if (
      !menuDrawer.classList.contains("hidden") &&
      !menuDrawer.contains(e.target) &&
      !toggleBtn.contains(e.target)
    ) {
      menuDrawer.classList.add("hidden");
      updateToggleIcon(false);
    }
  });
}

/* ==========================================================================
   11. SCROLL SPY & SMOOTH NAVIGATION
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".desktop-nav-link");

  window.addEventListener(
    "scroll",
    () => {
      let current = "";
      const scrollY = window.pageYOffset;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("text-pink-600", "dark:text-pink-400", "font-bold");
        if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("text-pink-600", "dark:text-pink-400", "font-bold");
        }
      });
    },
    { passive: true }
  );
}

/* ==========================================================================
   12. INTERACTIVE PROJECT GALLERY SLIDER MODAL
   ========================================================================== */
let activeProject = null;
let currentSlideIndex = 0;

function initGalleryModal() {
  const modal = document.getElementById("gallery-modal");
  const closeBtn = document.getElementById("gallery-close-btn");
  const prevBtn = document.getElementById("gallery-prev-btn");
  const nextBtn = document.getElementById("gallery-next-btn");

  if (!modal) return;

  // Event delegation for opening slider
  document.addEventListener("click", (e) => {
    const trigger = e.target.closest(".open-gallery-btn");
    if (trigger) {
      const projId = trigger.dataset.projectId;
      const proj = PORTFOLIO_DATA.projects.find((p) => p.id === projId);
      if (proj && proj.gallery && proj.gallery.length > 0) {
        openGallery(proj);
      }
    }
  });

  if (closeBtn) closeBtn.addEventListener("click", closeGallery);
  if (prevBtn) prevBtn.addEventListener("click", prevSlide);
  if (nextBtn) nextBtn.addEventListener("click", nextSlide);

  // Close when clicking modal backdrop
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeGallery();
  });

  // Keyboard navigation
  window.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("hidden")) {
      if (e.key === "Escape") closeGallery();
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    }
  });
}

function openGallery(project) {
  activeProject = project;
  currentSlideIndex = 0;

  const modal = document.getElementById("gallery-modal");
  const titleEl = document.getElementById("gallery-modal-title");
  const categoryEl = document.getElementById("gallery-modal-category");

  if (titleEl) titleEl.textContent = project.title;
  if (categoryEl) categoryEl.textContent = project.category;

  renderSlide();
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeGallery() {
  const modal = document.getElementById("gallery-modal");
  if (modal) modal.classList.add("hidden");
  document.body.style.overflow = "";
}

function renderSlide() {
  if (!activeProject) return;
  const slide = activeProject.gallery[currentSlideIndex];
  const imgEl = document.getElementById("gallery-slide-img");
  const captionEl = document.getElementById("gallery-slide-caption");
  const counterEl = document.getElementById("gallery-slide-counter");
  const dotsContainer = document.getElementById("gallery-dots-container");

  if (imgEl) {
    imgEl.src = slide.url;
    imgEl.alt = slide.caption || activeProject.title;
  }
  if (captionEl) captionEl.textContent = slide.caption || "";
  if (counterEl) {
    counterEl.textContent = `${currentSlideIndex + 1} / ${activeProject.gallery.length}`;
  }

  if (dotsContainer) {
    dotsContainer.innerHTML = activeProject.gallery
      .map(
        (_, idx) => `
      <button 
        type="button" 
        class="w-2.5 h-2.5 rounded-full transition-all ${
          idx === currentSlideIndex
            ? "bg-pink-500 w-5"
            : "bg-slate-300 dark:bg-slate-700 hover:bg-pink-300"
        }"
        onclick="goToSlide(${idx})"
        aria-label="Go to slide ${idx + 1}"
      ></button>
    `
      )
      .join("");
  }
}

function prevSlide() {
  if (!activeProject) return;
  currentSlideIndex =
    (currentSlideIndex - 1 + activeProject.gallery.length) % activeProject.gallery.length;
  renderSlide();
}

function nextSlide() {
  if (!activeProject) return;
  currentSlideIndex = (currentSlideIndex + 1) % activeProject.gallery.length;
  renderSlide();
}

window.goToSlide = function (index) {
  currentSlideIndex = index;
  renderSlide();
};

/* ==========================================================================
   13. HIGH-RESOLUTION CERTIFICATE LIGHTBOX MODAL
   ========================================================================== */
function initCertModal() {
  const modal = document.getElementById("cert-modal");
  const closeBtn = document.getElementById("cert-modal-close");

  if (!modal) return;

  document.addEventListener("click", (e) => {
    const trigger = e.target.closest(".view-cert-trigger");
    if (trigger) {
      const certId = trigger.dataset.certId;
      const cert = PORTFOLIO_DATA.certificates.find((c) => c.id === certId);
      if (cert) {
        openCertModal(cert);
      }
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", closeCertModal);
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeCertModal();
  });

  window.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("hidden") && e.key === "Escape") {
      closeCertModal();
    }
  });
}

function openCertModal(cert) {
  const modal = document.getElementById("cert-modal");
  const imgEl = document.getElementById("cert-modal-img");
  const titleEl = document.getElementById("cert-modal-title");
  const issuerEl = document.getElementById("cert-modal-issuer");
  const dateEl = document.getElementById("cert-modal-date");
  const idEl = document.getElementById("cert-modal-id");

  if (imgEl) {
    imgEl.src = cert.image;
    imgEl.alt = cert.title;
  }
  if (titleEl) titleEl.textContent = cert.title;
  if (issuerEl) issuerEl.textContent = cert.issuer;
  if (dateEl) dateEl.textContent = `Earned: ${cert.date}`;
  if (idEl) idEl.textContent = cert.certId ? `Credential Verification: ${cert.certId}` : "";

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeCertModal() {
  const modal = document.getElementById("cert-modal");
  if (modal) modal.classList.add("hidden");
  document.body.style.overflow = "";
}

/* ==========================================================================
   14. FLOATING BACK TO TOP BUTTON
   ========================================================================== */
function initBackToTop() {
  const btn = document.getElementById("back-to-top-btn");
  if (!btn) return;

  window.addEventListener(
    "scroll",
    () => {
      if (window.pageYOffset > 300) {
        btn.classList.remove("opacity-0", "pointer-events-none", "translate-y-3");
      } else {
        btn.classList.add("opacity-0", "pointer-events-none", "translate-y-3");
      }
    },
    { passive: true }
  );

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
