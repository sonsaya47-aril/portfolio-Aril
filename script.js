/* ==========================================================================
   ACH SYAFA ARIYILHAQ — INTERACTIVE PORTFOLIO ENGINE
   ========================================================================== */

(function () {
  'use strict';

  /* ------------------------------------------------------------------------
     1. INTERNATIONALIZATION (ID / EN)
     ------------------------------------------------------------------------ */
  const I18N = {
    id: {
      skip: 'Lewati ke konten utama',
      brandRole: 'Rekayasa Perangkat Lunak',
      navHome: 'Beranda',
      navWorkspace: 'Konsol',
      navProjects: 'Proyek',
      navAbout: 'Profil',
      navSkills: 'Keahlian',
      navFaq: 'Tanya Jawab',
      navContact: 'Kontak',
      cmdLabel: 'Cari',
      openCmdBtn: 'Buka Command Palette',
      themeTitle: 'Mode Tampilan',
      themeDark: 'Obsidian',
      themeLight: 'Ivory',
      accentTitle: 'Palet Aksen',
      heroStatus: 'Terbuka untuk Kolaborasi & PKL',
      heroSubtitleSerif: 'Merancang sistem web yang terstruktur, bersih, & berkarakter.',
      heroLead: 'Pelajar jurusan Rekayasa Perangkat Lunak (RPL) yang berfokus pada pengembangan aplikasi web modern, sistem pencatatan serta pengelolaan data, dan pengalaman antarmuka yang intuitif serta mudah digunakan.',
      ctaExplore: 'Jelajahi Karya',
      ctaCv: 'Pratinjau CV',
      ctaContact: 'Hubungi Saya',
      statProjects: 'Proyek Terkurasi',
      statTech: 'Teknologi & Alat',
      statMajor: 'Rekayasa Perangkat Lunak',
      portraitEdition: 'EDISI PORTOFOLIO 2026',
      consoleEyebrow: '/ Ruang Kerja Interaktif',
      consoleTitle: 'Konsol Profil',
      consoleDesc: 'Jelajahi ringkasan teknis dalam format kode interaktif atau pantau aktivitas repositori publik GitHub secara langsung.',
      copyCode: 'Salin',
      runCode: 'Jalankan',
      openGithub: 'Buka GitHub ↗',
      ghRepos: 'Repositori',
      ghFollowers: 'Pengikut',
      ghTrack: 'Jalur',
      principlesTitle: 'Prinsip Pengerjaan Kode',
      p1Title: 'Struktur Semantik & Rapi',
      p1Desc: 'Memisahkan tanggung jawab HTML, CSS, dan JavaScript agar mudah dipelihara.',
      p2Title: 'Antarmuka Intuitif',
      p2Desc: 'Navigasi jelas dan nyaman diakses di layar desktop maupun perangkat seluler.',
      projEyebrow: '/ Arsip Karya Terpilih',
      projTitle: 'Proyek',
      projTitleSerif: '& Studi Kasus',
      projSubtitle: 'Klik kartu proyek mana saja untuk membaca studi kasus lengkap serta mencoba simulasi pratinjau interaktif di dalamnya.',
      filterAll: 'Semua',
      filterAgri: 'Pertanian',
      searchPlaceholder: 'Cari proyek atau teknologi...',
      openCaseStudy: 'Studi Kasus & Demo ↗',
      p1Cat: 'Web / Pertanian',
      p1Name: 'Sistem Informasi Tanaman Obat',
      p1Summary: 'Katalog dan sistem informasi tanaman obat berbasis web untuk mendokumentasikan jenis, bagian yang digunakan, dan khasiatnya secara terstruktur.',
      p2Cat: 'Web / Pertanian',
      p2Name: 'Monitoring Tanaman Kangkung',
      p2Summary: 'Aplikasi pencatatan dan pemantauan pertumbuhan tanaman kangkung untuk mendata perkembangan harian, penyiraman, hingga estimasi masa panen.',
      p3Cat: 'RPL / Web',
      p3Name: 'Portofolio Proyek RPL',
      p3Summary: 'Kumpulan tugas dan pengembangan antarmuka web jurusan Rekayasa Perangkat Lunak sebagai arsip praktik pemrograman terstruktur.',
      emptyProjects: 'Tidak ada proyek yang cocok dengan kata kunci atau filter tersebut.',
      resetFilter: 'Tampilkan Semua Proyek',
      aboutEyebrow: '/ Profil & Perjalanan',
      aboutTitle: 'Mengenal',
      profileHeading: 'Profil Singkat',
      profileP1: 'Saya <strong>Ach Syafa Ariyilhaq</strong>, pelajar jurusan <strong>Rekayasa Perangkat Lunak (RPL)</strong> yang berfokus pada pengembangan web terstruktur dan pembuatan antarmuka yang fungsional.',
      profileP2: 'Dalam setiap proyek, saya mengutamakan keterbacaan kode, alur navigasi yang jelas, serta penyajian dan pengolahan data yang mudah dipahami oleh pengguna akhir.',
      specMajorLbl: 'Jurusan',
      specMajorVal: 'Rekayasa Perangkat Lunak',
      specFocusLbl: 'Fokus Utama',
      specFocusVal: 'Pengembangan Web',
      specStackLbl: 'Bahasa Inti',
      specStatusLbl: 'Ketersediaan',
      specStatusVal: 'Siap Kolaborasi / PKL',
      openCvFull: 'Lihat Ringkasan CV Lengkap',
      t1Phase: 'TAHAP 01 · FONDASI',
      t1Title: 'Fondasi Web & Logika Pemrograman',
      t1Desc: 'Mempelajari struktur HTML5 semantik, tata letak responsif CSS3, serta logika algoritma pemrograman dasar.',
      t2Phase: 'TAHAP 02 · INTERAKTIVITAS',
      t2Title: 'JavaScript DOM & Pengolahan Data',
      t2Desc: 'Mengembangkan fitur dinamis di peramban seperti filter katalog, validasi formulir, dan dasar pemrograman Python.',
      t3Phase: 'TAHAP 03 · PROYEK TERAPAN',
      t3Title: 'Sistem Informasi & Monitoring Pertanian',
      t3Desc: 'Membangun aplikasi katalog tanaman obat dan sistem pemantauan pertumbuhan kangkung berbasis web.',
      t4Phase: 'TAHAP 04 · BERKELANJUTAN',
      t4Title: 'Alur Kerja Git & Arsitektur Modern',
      t4Desc: 'Membiasakan kontrol versi Git/GitHub, kerapian dokumentasi, dan eksplorasi antarmuka web modern berstandar industri.',
      skillsEyebrow: '/ Kompetensi Teknis',
      skillsTitle: 'Keahlian',
      skillsTitleSerif: '& Kemampuan',
      skillAll: 'Semua',
      skillWeb: 'Antarmuka Web',
      skillProg: 'Pemrograman',
      skillTools: 'Perangkat Kerja',
      catWeb: 'Antarmuka Web',
      catProg: 'Pemrograman',
      catTools: 'Perangkat Kerja',
      sHtml: 'Markup semantik, aksesibilitas dasar, dan struktur dokumen web yang bersih.',
      sCss: 'Flexbox, CSS Grid, tata letak responsif, variabel tema, dan transisi halus.',
      sJs: 'Manipulasi DOM, interaksi modal, filtering data, validasi form, dan penyimpanan lokal.',
      sPyName: 'Dasar Python',
      sPy: 'Pemahaman logika pemrograman, struktur data dasar, dan otomasi skrip sederhana.',
      sGit: 'Pengelolaan riwayat perubahan kode, repositori proyek, dan kolaborasi tim.',
      sVscode: 'Lingkungan pengembangan utama untuk penulisan kode, debugging, dan pemformatan rapi.',
      srv1Title: 'Antarmuka Web Responsif',
      srv1Desc: 'Merancang halaman web dengan hierarki visual yang elegan, nyaman dibaca, dan adaptif di berbagai ukuran layar.',
      srv2Title: 'Sistem Informasi & Katalog',
      srv2Desc: 'Membangun antarmuka pencatatan data, pencarian katalog, serta pemantauan progres berbasis logika yang terstruktur.',
      srv3Title: 'Kolaborasi Proyek RPL',
      srv3Desc: 'Berkontribusi dalam pengembangan modul web menggunakan alur Git/GitHub yang teratur dan mudah ditinjau.',
      faqEyebrow: '/ Pertanyaan Umum',
      faqTitle: 'Tanya',
      faqTitleSerif: 'Jawab',
      q1: 'Teknologi apa yang paling sering Anda gunakan saat ini?',
      a1: 'Saya berfokus pada fondasi web standar industri yaitu HTML5, CSS3, dan JavaScript murni untuk memastikan pemahaman logika yang kuat, dipadukan dengan dasar Python serta Git/GitHub untuk pengelolaan kode.',
      q2: 'Apakah terbuka untuk kerja sama tugas, proyek web, atau magang (PKL)?',
      a2: 'Ya, saya sangat terbuka untuk diskusi proyek, kolaborasi antarmuka web, maupun kesempatan Praktik Kerja Lapangan (PKL) di bidang pengembangan perangkat lunak.',
      q3: 'Di mana saya dapat melihat kode sumber proyek Anda?',
      a3: 'Anda dapat meninjau repositori publik saya melalui GitHub di @sonsaya47-aril, atau menghubungi saya langsung melalui email untuk menanyakan detail proyek tertentu.',
      q4: 'Bagaimana cara tercepat menghubungi Anda?',
      a4: 'Cara tercepat adalah melalui email langsung ke sonsaya47@gmail.com atau menggunakan formulir kontak interaktif di bagian bawah halaman ini.',
      contactEyebrow: '/ Kontak & Kolaborasi',
      contactTitle: 'Mari',
      contactTitleSerif: 'Terhubung',
      directChannel: 'Saluran Komunikasi Langsung',
      contactLead: 'Silakan kirim pesan untuk diskusi proyek web, kolaborasi tugas Rekayasa Perangkat Lunak, maupun peluang magang.',
      copyEmail: 'Salin Email',
      topicPresetLabel: 'Pilih Topik Cepat',
      presetCollab: 'Kolaborasi Proyek',
      presetRpl: 'Diskusi RPL',
      presetIntern: 'Magang / PKL',
      presetGeneral: 'Umum',
      lblName: 'Nama Lengkap',
      phName: 'Masukkan nama Anda',
      lblEmail: 'Alamat Email',
      lblSubject: 'Subjek',
      phSubject: 'Contoh: Diskusi pembuatan web',
      lblMessage: 'Pesan',
      phMessage: 'Tuliskan detail pesan atau kebutuhan Anda...',
      sendBtn: 'Kirim via Email',
      copyMsgBtn: 'Salin Format Pesan',
      footerTagline: '© 2026 · Dibangun dengan HTML5, CSS3, dan JavaScript.',
      footerShortcut: 'Pintasan: Tekan Ctrl + K',
      tabCase: 'Studi Kasus',
      tabDemo: 'Simulasi Interaktif',
      prevProj: 'Proyek Sebelumnya',
      nextProj: 'Proyek Berikutnya',
      cvHeaderTitle: 'Ringkasan Curriculum Vitae',
      cvPrint: 'Cetak / Simpan PDF',
      cvRole: 'Pelajar Rekayasa Perangkat Lunak (RPL) · Web Developer',
      cvSumTitle: 'Ringkasan Profil',
      cvSumBody: 'Pelajar jurusan Rekayasa Perangkat Lunak (RPL) yang berfokus pada pengembangan aplikasi web, sistem pengelolaan data, serta antarmuka perangkat lunak yang terstruktur, rapi, dan mudah digunakan.',
      cvEduTitle: 'Pendidikan & Jurusan',
      cvEduName: 'Rekayasa Perangkat Lunak (RPL / PPLG)',
      cvEduDesc: 'Fokus pada pemrograman web, desain antarmuka, dan dasar sistem informasi.',
      cvProjTitle: 'Proyek Pilihan',
      cvSkillsTitle: 'Kompetensi Teknis',
      typePhrases: [
        'Pengembangan Antarmuka Web',
        'Sistem Informasi & Pengelolaan Data',
        'Pelajar Rekayasa Perangkat Lunak'
      ]
    },
    en: {
      skip: 'Skip to main content',
      brandRole: 'Software Engineering Student',
      navHome: 'Home',
      navWorkspace: 'Console',
      navProjects: 'Projects',
      navAbout: 'About',
      navSkills: 'Skills',
      navFaq: 'FAQ',
      navContact: 'Contact',
      cmdLabel: 'Search',
      openCmdBtn: 'Open Command Palette',
      themeTitle: 'Appearance',
      themeDark: 'Obsidian',
      themeLight: 'Ivory',
      accentTitle: 'Accent Palette',
      heroStatus: 'Open for Collaboration & Internship',
      heroSubtitleSerif: 'Crafting structured, refined, & purposeful web systems.',
      heroLead: 'Software Engineering (RPL) student focused on modern web application development, structured data management systems, and clean, user-friendly software interfaces.',
      ctaExplore: 'Explore Work',
      ctaCv: 'Preview CV',
      ctaContact: 'Contact Me',
      statProjects: 'Curated Projects',
      statTech: 'Core Technologies',
      statMajor: 'Software Engineering',
      portraitEdition: 'PORTFOLIO EDITION 2026',
      consoleEyebrow: '/ Interactive Workspace',
      consoleTitle: 'Profile Console',
      consoleDesc: 'Inspect technical details in an interactive code editor or view live public GitHub repository telemetry.',
      copyCode: 'Copy',
      runCode: 'Run',
      openGithub: 'Open GitHub ↗',
      ghRepos: 'Repositories',
      ghFollowers: 'Followers',
      ghTrack: 'Track',
      principlesTitle: 'Engineering Principles',
      p1Title: 'Semantic & Clean Structure',
      p1Desc: 'Separating HTML, CSS, and JavaScript responsibilities for long-term maintainability.',
      p2Title: 'Intuitive User Experience',
      p2Desc: 'Clear navigation and thoughtful visual hierarchy across desktop and mobile screens.',
      projEyebrow: '/ Selected Works Archive',
      projTitle: 'Projects',
      projTitleSerif: '& Case Studies',
      projSubtitle: 'Select any project card to read the full case study and interact with its built-in live preview simulation.',
      filterAll: 'All',
      filterAgri: 'Agriculture',
      searchPlaceholder: 'Search project or stack...',
      openCaseStudy: 'Case Study & Demo ↗',
      p1Cat: 'Web / Agriculture',
      p1Name: 'Medicinal Plants Information System',
      p1Summary: 'A web-based catalog and information system documenting medicinal plant species, usable plant parts, and health benefits.',
      p2Cat: 'Web / Agriculture',
      p2Name: 'Water Spinach Growth Monitor',
      p2Summary: 'A growth tracking and logging application to record daily plant development, care routines, and harvest readiness.',
      p3Cat: 'RPL / Web',
      p3Name: 'RPL Software Project Archive',
      p3Summary: 'A curated collection of Software Engineering assignments and web interface prototypes built during academic practice.',
      emptyProjects: 'No projects matched your search query or active filter.',
      resetFilter: 'Show All Projects',
      aboutEyebrow: '/ Profile & Journey',
      aboutTitle: 'About',
      profileHeading: 'Brief Profile',
      profileP1: 'I am <strong>Ach Syafa Ariyilhaq</strong>, a <strong>Software Engineering (RPL)</strong> student focused on structured web development and functional interface design.',
      profileP2: 'Across every project, I prioritize clean readable code, clear user flows, and organized data presentation.',
      specMajorLbl: 'Major',
      specMajorVal: 'Software Engineering (RPL)',
      specFocusLbl: 'Primary Focus',
      specFocusVal: 'Web Development',
      specStackLbl: 'Core Stack',
      specStatusLbl: 'Availability',
      specStatusVal: 'Open to Collaborate / Intern',
      openCvFull: 'Open Full CV Summary',
      t1Phase: 'STAGE 01 · FOUNDATION',
      t1Title: 'Web Foundations & Programming Logic',
      t1Desc: 'Mastered semantic HTML5 structure, responsive CSS3 layouts, and core algorithmic problem-solving.',
      t2Phase: 'STAGE 02 · INTERACTIVITY',
      t2Title: 'JavaScript DOM & Data Handling',
      t2Desc: 'Built dynamic browser interactions such as catalog filters, form validation, and Python fundamentals.',
      t3Phase: 'STAGE 03 · APPLIED PROJECTS',
      t3Title: 'Information Systems & Agri-Tech Web',
      t3Desc: 'Delivered web applications for medicinal plant cataloging and daily water spinach growth monitoring.',
      t4Phase: 'STAGE 04 · CONTINUOUS',
      t4Title: 'Git Workflow & Modern Architecture',
      t4Desc: 'Practicing Git/GitHub version control, clean documentation, and refined UI engineering.',
      skillsEyebrow: '/ Technical Competencies',
      skillsTitle: 'Skills',
      skillsTitleSerif: '& Capabilities',
      skillAll: 'All',
      skillWeb: 'Web Interface',
      skillProg: 'Programming',
      skillTools: 'Workflow Tools',
      catWeb: 'Web Interface',
      catProg: 'Programming',
      catTools: 'Workflow Tools',
      sHtml: 'Semantic markup, baseline accessibility, and clean document structure.',
      sCss: 'Flexbox, CSS Grid, responsive layouts, theme tokens, and smooth transitions.',
      sJs: 'DOM manipulation, modal interactions, filtering, validation, and local storage.',
      sPyName: 'Python Basics',
      sPy: 'Programming logic fundamentals, basic data structures, and simple automation scripts.',
      sGit: 'Source code history tracking, repository management, and team collaboration.',
      sVscode: 'Primary code editor setup for writing, formatting, and debugging projects.',
      srv1Title: 'Responsive Web Interfaces',
      srv1Desc: 'Designing web pages with refined visual hierarchy, readability, and fluid adaptability across devices.',
      srv2Title: 'Information & Catalog Systems',
      srv2Desc: 'Building structured logging tools, searchable catalogs, and clear progress monitoring dashboards.',
      srv3Title: 'RPL Project Collaboration',
      srv3Desc: 'Contributing clean modular code through organized Git and GitHub workflows.',
      faqEyebrow: '/ Frequently Asked',
      faqTitle: 'Questions',
      faqTitleSerif: '& Answers',
      q1: 'Which technologies do you work with most right now?',
      a1: 'I focus on industry-standard web foundations—HTML5, CSS3, and vanilla JavaScript—combined with Python basics and Git/GitHub version control.',
      q2: 'Are you open to collaborations or internship (PKL) opportunities?',
      a2: 'Yes, I am open to project discussions, web UI collaborations, and software engineering internship opportunities.',
      q3: 'Where can I inspect your project source code?',
      a3: 'You can browse my public repositories on GitHub at @sonsaya47-aril or reach out directly via email for specific project details.',
      q4: 'What is the fastest way to reach you?',
      a4: 'Emailing sonsaya47@gmail.com directly or using the interactive contact form at the bottom of this page is the quickest way.',
      contactEyebrow: '/ Contact & Collaboration',
      contactTitle: 'Let us',
      contactTitleSerif: 'Connect',
      directChannel: 'Direct Communication',
      contactLead: 'Send a message to discuss web projects, Software Engineering collaborations, or internship inquiries.',
      copyEmail: 'Copy Email',
      topicPresetLabel: 'Quick Topic Presets',
      presetCollab: 'Project Collaboration',
      presetRpl: 'RPL Discussion',
      presetIntern: 'Internship / PKL',
      presetGeneral: 'General Inquiry',
      lblName: 'Full Name',
      phName: 'Enter your name',
      lblEmail: 'Email Address',
      lblSubject: 'Subject',
      phSubject: 'e.g., Web development collaboration',
      lblMessage: 'Message',
      phMessage: 'Write your message or project details...',
      sendBtn: 'Send via Email',
      copyMsgBtn: 'Copy Formatted Message',
      footerTagline: '© 2026 · Crafted with HTML5, CSS3, and JavaScript.',
      footerShortcut: 'Shortcut: Press Ctrl + K',
      tabCase: 'Case Study',
      tabDemo: 'Interactive Demo',
      prevProj: 'Previous Project',
      nextProj: 'Next Project',
      cvHeaderTitle: 'Curriculum Vitae Summary',
      cvPrint: 'Print / Save PDF',
      cvRole: 'Software Engineering Student (RPL) · Web Developer',
      cvSumTitle: 'Profile Summary',
      cvSumBody: 'Software Engineering (RPL) student focused on structured web application development, data management systems, and refined, user-friendly software interfaces.',
      cvEduTitle: 'Education & Major',
      cvEduName: 'Software Engineering (RPL / PPLG)',
      cvEduDesc: 'Focused on web programming, UI design, and foundational information systems.',
      cvProjTitle: 'Selected Projects',
      cvSkillsTitle: 'Technical Stack',
      typePhrases: [
        'Web Interface Engineering',
        'Information & Data Systems',
        'Software Engineering Student'
      ]
    }
  };

  let currentLang = document.documentElement.getAttribute('lang') || 'id';

  /* ------------------------------------------------------------------------
     2. TOAST NOTIFICATION UTILITY
     ------------------------------------------------------------------------ */
  const toastContainer = document.getElementById('toast-container');

  function showToast(message) {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span class="toast__dot" aria-hidden="true"></span><span></span>`;
    toast.querySelector('span:last-child').textContent = message;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(16px)';
      toast.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
      setTimeout(() => toast.remove(), 260);
    }, 3000);
  }

  /* ------------------------------------------------------------------------
     3. CLIPBOARD HELPER
     ------------------------------------------------------------------------ */
  async function copyText(text, successMsg) {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.left = '-9999px';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        ta.remove();
      }
      showToast(successMsg);
      return true;
    } catch {
      showToast(currentLang === 'id' ? 'Gagal menyalin otomatis. Silakan salin manual.' : 'Copy failed. Please copy manually.');
      return false;
    }
  }

  /* ------------------------------------------------------------------------
     4. THEME, ACCENT, & LANGUAGE SWITCHING
     ------------------------------------------------------------------------ */
  let activeProjectModalId = null;
  let activeModalTab = 'case';
  let cmdPalette = null;
  let cmdInput = null;

  const htmlEl = document.documentElement;
  const langToggleBtn = document.getElementById('lang-toggle');
  const langBadge = document.getElementById('lang-badge');
  const appearanceToggle = document.getElementById('appearance-toggle');
  const appearancePopover = document.getElementById('appearance-popover');

  function syncThemeUI() {
    const activeTheme = htmlEl.getAttribute('data-theme') || 'dark';
    const activeAccent = htmlEl.getAttribute('data-accent') || 'champagne';

    document.querySelectorAll('[data-set-theme]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.setTheme === activeTheme);
    });
    document.querySelectorAll('[data-set-accent]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.setAccent === activeAccent);
    });
  }

  function setTheme(theme, silent = false) {
    htmlEl.setAttribute('data-theme', theme);
    try { localStorage.setItem('asa_theme', theme); } catch {}
    syncThemeUI();
    if (!silent) {
      showToast(theme === 'dark'
        ? (currentLang === 'id' ? 'Tema beralih ke Obsidian Dark' : 'Switched to Obsidian Dark')
        : (currentLang === 'id' ? 'Tema beralih ke Ivory Light' : 'Switched to Ivory Light'));
    }
  }

  function setAccent(accent, silent = false) {
    htmlEl.setAttribute('data-accent', accent);
    try { localStorage.setItem('asa_accent', accent); } catch {}
    syncThemeUI();
    if (!silent) {
      const names = { champagne: 'Champagne Gold', emerald: 'Botanical Emerald', sapphire: 'Editorial Cobalt' };
      showToast((currentLang === 'id' ? 'Palet aksen: ' : 'Accent palette: ') + (names[accent] || accent));
    }
  }

  function applyLanguage(lang, silent = false) {
    currentLang = lang;
    htmlEl.setAttribute('lang', lang);
    try { localStorage.setItem('asa_lang', lang); } catch {}
    if (langBadge) langBadge.textContent = lang.toUpperCase();

    const dict = I18N[lang] || I18N.id;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (!dict[key]) return;
      if (key === 'profileP1') {
        el.innerHTML = dict[key];
      } else {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      if (dict[key]) el.setAttribute('placeholder', dict[key]);
    });

    if (activeProjectModalId) {
      renderProjectModalContent();
    }
    if (cmdPalette && cmdPalette.classList.contains('open')) {
      renderCmdList(cmdInput ? cmdInput.value : '');
    }

    if (!silent) {
      showToast(lang === 'id' ? 'Bahasa diubah ke Indonesia' : 'Language switched to English');
    }
  }

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      applyLanguage(currentLang === 'id' ? 'en' : 'id');
    });
  }

  if (appearanceToggle && appearancePopover) {
    appearanceToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = appearancePopover.classList.toggle('open');
      appearanceToggle.setAttribute('aria-expanded', String(open));
    });

    document.addEventListener('click', (e) => {
      if (!appearancePopover.contains(e.target) && !appearanceToggle.contains(e.target)) {
        appearancePopover.classList.remove('open');
        appearanceToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  document.querySelectorAll('[data-set-theme]').forEach(btn => {
    btn.addEventListener('click', () => setTheme(btn.dataset.setTheme));
  });

  document.querySelectorAll('[data-set-accent]').forEach(btn => {
    btn.addEventListener('click', () => setAccent(btn.dataset.setAccent));
  });

  syncThemeUI();
  applyLanguage(currentLang, true);

  /* ------------------------------------------------------------------------
     5. MOBILE MENU DRAWER
     ------------------------------------------------------------------------ */
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const menuIconOpen = document.getElementById('menu-icon-open');
  const menuIconClose = document.getElementById('menu-icon-close');

  function toggleMobileMenu(forceState) {
    if (!mobileDrawer || !mobileToggle) return;
    const isOpen = typeof forceState === 'boolean' ? forceState : !mobileDrawer.classList.contains('open');
    mobileDrawer.classList.toggle('open', isOpen);
    mobileToggle.setAttribute('aria-expanded', String(isOpen));
    if (menuIconOpen && menuIconClose) {
      menuIconOpen.style.display = isOpen ? 'none' : 'block';
      menuIconClose.style.display = isOpen ? 'block' : 'none';
    }
  }

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => toggleMobileMenu());
  }

  if (mobileDrawer) {
    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => toggleMobileMenu(false));
    });
  }

  /* ------------------------------------------------------------------------
     6. SCROLL PROGRESS, BACK-TO-TOP RING, & ACTIVE NAV SPY
     ------------------------------------------------------------------------ */
  const scrollProgress = document.getElementById('scroll-progress');
  const siteHeader = document.getElementById('site-header');
  const backToTop = document.getElementById('back-to-top');
  const ringCircle = document.querySelector('.progress-ring__circle');
  const ringCircumference = 2 * Math.PI * 22; // ~138.23
  const sections = Array.from(document.querySelectorAll('main section[id]'));
  const navLinks = Array.from(document.querySelectorAll('[data-nav]'));

  function handleScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0;

    if (scrollProgress) scrollProgress.style.width = `${(pct * 100).toFixed(2)}%`;
    if (siteHeader) siteHeader.classList.toggle('is-scrolled', scrollTop > 20);
    if (backToTop) backToTop.classList.toggle('visible', scrollTop > 380);
    if (ringCircle) {
      ringCircle.style.strokeDashoffset = String(ringCircumference - pct * ringCircumference);
    }

    // Active nav tracking
    let activeId = sections[0] ? sections[0].id : 'beranda';
    for (const sec of sections) {
      const top = sec.offsetTop - 140;
      if (scrollTop >= top) {
        activeId = sec.id;
      }
    }
    navLinks.forEach(link => {
      link.classList.toggle('active', link.dataset.nav === activeId);
    });
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ------------------------------------------------------------------------
     7. CURSOR SPOTLIGHT (DESKTOP FINE POINTER)
     ------------------------------------------------------------------------ */
  const cursorGlow = document.getElementById('cursor-glow');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  if (cursorGlow && finePointer && !prefersReducedMotion) {
    window.addEventListener('mousemove', (e) => {
      document.body.classList.add('pointer-active');
      cursorGlow.style.left = `${e.clientX}px`;
      cursorGlow.style.top = `${e.clientY}px`;
    }, { passive: true });

    document.addEventListener('mouseleave', () => {
      document.body.classList.remove('pointer-active');
    });
  }

  /* ------------------------------------------------------------------------
     8. LIVE WIB CLOCK & TYPEWRITER EFFECT
     ------------------------------------------------------------------------ */
  const liveClock = document.getElementById('live-clock');
  function updateClock() {
    if (!liveClock) return;
    try {
      const formatter = new Intl.DateTimeFormat('id-ID', {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      });
      liveClock.textContent = `${formatter.format(new Date())} WIB`;
    } catch {
      const now = new Date();
      const hh = String(now.getHours()).padStart(2, '0');
      const mm = String(now.getMinutes()).padStart(2, '0');
      liveClock.textContent = `${hh}:${mm} WIB`;
    }
  }
  updateClock();
  setInterval(updateClock, 15000);

  const typewriterEl = document.getElementById('typewriter-text');
  let twPhraseIdx = 0;
  let twCharIdx = 0;
  let twDeleting = false;

  function runTypewriter() {
    if (!typewriterEl) return;
    const phrases = (I18N[currentLang] && I18N[currentLang].typePhrases) || I18N.id.typePhrases;
    const phrase = phrases[twPhraseIdx % phrases.length];

    if (prefersReducedMotion) {
      typewriterEl.textContent = phrase;
      return;
    }

    if (!twDeleting) {
      twCharIdx++;
      typewriterEl.textContent = phrase.slice(0, twCharIdx);
      if (twCharIdx >= phrase.length) {
        twDeleting = true;
        setTimeout(runTypewriter, 1900);
        return;
      }
      setTimeout(runTypewriter, 52);
    } else {
      twCharIdx--;
      typewriterEl.textContent = phrase.slice(0, Math.max(0, twCharIdx));
      if (twCharIdx <= 0) {
        twDeleting = false;
        twPhraseIdx = (twPhraseIdx + 1) % phrases.length;
        setTimeout(runTypewriter, 320);
        return;
      }
      setTimeout(runTypewriter, 28);
    }
  }
  runTypewriter();

  /* ------------------------------------------------------------------------
     9. INTERSECTION REVEAL, SKILL BARS & STAT COUNTERS
     ------------------------------------------------------------------------ */
  const revealEls = Array.from(document.querySelectorAll('.reveal'));
  const skillFills = document.querySelectorAll('.skill-bar__fill');
  const countEls = document.querySelectorAll('[data-count-to]');

  function revealElement(el) {
    el.classList.add('in-view');
    el.querySelectorAll('.skill-bar__fill').forEach(bar => {
      bar.style.width = `${bar.dataset.level || 0}%`;
    });
  }

  if ('IntersectionObserver' in window && !prefersReducedMotion) {
    htmlEl.classList.add('js-reveal');

    // Immediately show elements visible on initial load
    revealEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.96) {
        revealElement(el);
      }
    });

    const revealObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          revealElement(entry.target);
          revealObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.06, rootMargin: '0px 0px -24px 0px' });

    revealEls.forEach(el => {
      if (!el.classList.contains('in-view')) revealObs.observe(el);
    });

    const countObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const target = parseInt(entry.target.dataset.countTo, 10) || 0;
        let current = 0;
        const stepTime = 42;
        const timer = setInterval(() => {
          current++;
          entry.target.textContent = String(current);
          if (current >= target) clearInterval(timer);
        }, stepTime);
        countObs.unobserve(entry.target);
      });
    }, { threshold: 0.35 });

    countEls.forEach(el => countObs.observe(el));
  } else {
    revealEls.forEach(revealElement);
    skillFills.forEach(bar => { bar.style.width = `${bar.dataset.level || 0}%`; });
  }

  /* ------------------------------------------------------------------------
     10. INTERACTIVE CODE CONSOLE
     ------------------------------------------------------------------------ */
  const CODE_SNIPPETS = {
    profil: {
      raw: `{
  "nama": "Ach Syafa Ariyilhaq",
  "jurusan": "Rekayasa Perangkat Lunak (RPL)",
  "fokus": ["Pengembangan Web", "Sistem Data", "Antarmuka UI"],
  "kontak": "sonsaya47@gmail.com",
  "github": "github.com/sonsaya47-aril",
  "siapKolaborasi": true
}`,
      html: `<span class="tok-cmt">// Konfigurasi identitas pengembang</span>
{
  <span class="tok-key">"nama"</span>: <span class="tok-str">"Ach Syafa Ariyilhaq"</span>,
  <span class="tok-key">"jurusan"</span>: <span class="tok-str">"Rekayasa Perangkat Lunak (RPL)"</span>,
  <span class="tok-key">"fokus"</span>: [<span class="tok-str">"Pengembangan Web"</span>, <span class="tok-str">"Sistem Data"</span>, <span class="tok-str">"Antarmuka UI"</span>],
  <span class="tok-key">"kontak"</span>: <span class="tok-str">"sonsaya47@gmail.com"</span>,
  <span class="tok-key">"github"</span>: <span class="tok-str">"github.com/sonsaya47-aril"</span>,
  <span class="tok-key">"siapKolaborasi"</span>: <span class="tok-num">true</span>
}`,
      outputId: '> [OK] Profil terverifikasi: Ach Syafa Ariyilhaq — Jurusan RPL.\n> Status: Siap untuk proyek web, kolaborasi tim, & peluang PKL.',
      outputEn: '> [OK] Profile verified: Ach Syafa Ariyilhaq — Software Engineering.\n> Status: Available for web builds, team collaboration, & internships.'
    },
    stack: {
      raw: `const arilStack = {
  antarmuka: ["HTML5", "CSS3", "JavaScript"],
  bahasaLain: ["Dasar Python"],
  perangkat: ["Git", "GitHub", "VS Code"],
  prinsip: "Kode terstruktur & mudah digunakan"
};

console.log(arilStack.antarmuka.join(" · "));`,
      html: `<span class="tok-kw">const</span> arilStack = {
  <span class="tok-key">antarmuka</span>: [<span class="tok-str">"HTML5"</span>, <span class="tok-str">"CSS3"</span>, <span class="tok-str">"JavaScript"</span>],
  <span class="tok-key">bahasaLain</span>: [<span class="tok-str">"Dasar Python"</span>],
  <span class="tok-key">perangkat</span>: [<span class="tok-str">"Git"</span>, <span class="tok-str">"GitHub"</span>, <span class="tok-str">"VS Code"</span>],
  <span class="tok-key">prinsip</span>: <span class="tok-str">"Kode terstruktur &amp; mudah digunakan"</span>
};

console.log(arilStack.antarmuka.join(<span class="tok-str">" · "</span>));`,
      outputId: '> Output Console:\n> HTML5 · CSS3 · JavaScript (+ Dasar Python, Git, GitHub, VS Code)',
      outputEn: '> Console Output:\n> HTML5 · CSS3 · JavaScript (+ Python Basics, Git, GitHub, VS Code)'
    },
    visi: {
      raw: `def bangun_solusi_web(kebutuhan):
    langkah = [
        "1. Pahami alur data & pengguna",
        "2. Rancang antarmuka bersih dan responsif",
        "3. Tulis logika terstruktur & uji lintas layar"
    ]
    return {"target": kebutuhan, "tahap": langkah}

print(bangun_solusi_web("Sistem Informasi & Web RPL"))`,
      html: `<span class="tok-kw">def</span> <span class="tok-key">bangun_solusi_web</span>(kebutuhan):
    langkah = [
        <span class="tok-str">"1. Pahami alur data &amp; pengguna"</span>,
        <span class="tok-str">"2. Rancang antarmuka bersih dan responsif"</span>,
        <span class="tok-str">"3. Tulis logika terstruktur &amp; uji lintas layar"</span>
    ]
    <span class="tok-kw">return</span> {<span class="tok-str">"target"</span>: kebutuhan, <span class="tok-str">"tahap"</span>: langkah}

<span class="tok-kw">print</span>(bangun_solusi_web(<span class="tok-str">"Sistem Informasi &amp; Web RPL"</span>))`,
      outputId: '> Python 3 Simulasi:\n> Target: Sistem Informasi & Web RPL | 3 tahap eksekusi selesai (0.02s)',
      outputEn: '> Python 3 Simulation:\n> Target: Information Systems & RPL Web | 3 workflow stages ready (0.02s)'
    }
  };

  let activeCodeTab = 'profil';
  const codeDisplay = document.getElementById('code-display');
  const codeOutput = document.getElementById('code-output');
  const copyCodeBtn = document.getElementById('copy-code-btn');
  const runCodeBtn = document.getElementById('run-code-btn');

  function renderCodeTab(tabKey) {
    activeCodeTab = tabKey;
    const snippet = CODE_SNIPPETS[tabKey] || CODE_SNIPPETS.profil;
    if (codeDisplay) codeDisplay.innerHTML = snippet.html;
    if (codeOutput) codeOutput.classList.remove('visible');

    document.querySelectorAll('[data-code-tab]').forEach(btn => {
      const isActive = btn.dataset.codeTab === tabKey;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', String(isActive));
    });
  }

  document.querySelectorAll('[data-code-tab]').forEach(btn => {
    btn.addEventListener('click', () => renderCodeTab(btn.dataset.codeTab));
  });

  if (copyCodeBtn) {
    copyCodeBtn.addEventListener('click', () => {
      const snippet = CODE_SNIPPETS[activeCodeTab];
      if (snippet) {
        copyText(snippet.raw, currentLang === 'id' ? 'Potongan kode disalin!' : 'Code snippet copied!');
      }
    });
  }

  if (runCodeBtn && codeOutput) {
    runCodeBtn.addEventListener('click', () => {
      const snippet = CODE_SNIPPETS[activeCodeTab];
      if (!snippet) return;
      codeOutput.textContent = currentLang === 'id' ? snippet.outputId : snippet.outputEn;
      codeOutput.classList.add('visible');
    });
  }

  renderCodeTab('profil');

  /* ------------------------------------------------------------------------
     11. GITHUB LIVE TELEMETRY (WITH GRACEFUL OFFLINE FALLBACK)
     ------------------------------------------------------------------------ */
  const ghReposCount = document.getElementById('gh-repos-count');
  const ghFollowersCount = document.getElementById('gh-followers-count');
  const ghStatusText = document.getElementById('gh-status-text');
  const ghReposList = document.getElementById('gh-repos-list');

  function renderFallbackRepos() {
    if (!ghReposList) return;
    const fallback = [
      { name: 'portfolio-Aril', lang: 'HTML / CSS / JS', url: 'https://github.com/sonsaya47-aril' },
      { name: 'sistem-tanaman-obat', lang: 'Web / Katalog', url: 'https://github.com/sonsaya47-aril' },
      { name: 'monitoring-kangkung', lang: 'JavaScript', url: 'https://github.com/sonsaya47-aril' }
    ];
    if (ghReposCount && ghReposCount.textContent === '—') ghReposCount.textContent = '3+';
    if (ghFollowersCount && ghFollowersCount.textContent === '—') ghFollowersCount.textContent = 'RPL';

    ghReposList.innerHTML = '';
    fallback.forEach(item => {
      const a = document.createElement('a');
      a.href = item.url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.className = 'gh-repo-item';
      a.innerHTML = `<span></span><span class="gh-repo-item__lang"></span>`;
      a.querySelector('span:first-child').textContent = item.name;
      a.querySelector('span:last-child').textContent = item.lang;
      ghReposList.appendChild(a);
    });
  }

  async function fetchGitHubTelemetry() {
    if (!ghReposList) return;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4500);

    try {
      const [userRes, reposRes] = await Promise.all([
        fetch('https://api.github.com/users/sonsaya47-aril', { signal: controller.signal }),
        fetch('https://api.github.com/users/sonsaya47-aril/repos?sort=updated&per_page=3', { signal: controller.signal })
      ]);
      clearTimeout(timeoutId);

      if (!userRes.ok || !reposRes.ok) throw new Error('GitHub API unavailable');

      const userData = await userRes.json();
      const reposData = await reposRes.json();

      if (ghReposCount) ghReposCount.textContent = String(userData.public_repos ?? '0');
      if (ghFollowersCount) ghFollowersCount.textContent = String(userData.followers ?? '0');
      if (ghStatusText) ghStatusText.textContent = `@${userData.login} · Live`;

      if (Array.isArray(reposData) && reposData.length > 0) {
        ghReposList.innerHTML = '';
        reposData.slice(0, 3).forEach(repo => {
          const a = document.createElement('a');
          a.href = repo.html_url;
          a.target = '_blank';
          a.rel = 'noopener noreferrer';
          a.className = 'gh-repo-item';
          a.innerHTML = `<span></span><span class="gh-repo-item__lang"></span>`;
          a.querySelector('span:first-child').textContent = repo.name;
          a.querySelector('span:last-child').textContent = repo.language || 'Web';
          ghReposList.appendChild(a);
        });
      } else {
        renderFallbackRepos();
      }
    } catch {
      clearTimeout(timeoutId);
      renderFallbackRepos();
    }
  }
  fetchGitHubTelemetry();

  /* ------------------------------------------------------------------------
     12. PROJECT FILTER, SEARCH, VIEW MODE & CASE STUDY MODAL + LIVE DEMOS
     ------------------------------------------------------------------------ */
  const projectCards = Array.from(document.querySelectorAll('.project-card'));
  const filterTabs = Array.from(document.querySelectorAll('[data-filter]'));
  const projectSearch = document.getElementById('project-search');
  const projectGrid = document.getElementById('project-grid');
  const projectEmpty = document.getElementById('project-empty');
  const resetProjectsBtn = document.getElementById('reset-projects-btn');
  const viewBtns = Array.from(document.querySelectorAll('[data-view]'));

  let activeProjectFilter = 'Semua';

  function filterProjects() {
    const query = (projectSearch ? projectSearch.value : '').trim().toLowerCase();
    let visibleCount = 0;

    projectCards.forEach(card => {
      const cats = (card.dataset.categories || '').split(',');
      const hay = (card.dataset.search || '').toLowerCase() + ' ' + card.textContent.toLowerCase();
      const matchesCat = activeProjectFilter === 'Semua' || cats.includes(activeProjectFilter);
      const matchesSearch = !query || hay.includes(query);
      const show = matchesCat && matchesSearch;
      card.classList.toggle('is-hidden', !show);
      if (show) visibleCount++;
    });

    if (projectEmpty) {
      projectEmpty.classList.toggle('visible', visibleCount === 0);
    }
  }

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      activeProjectFilter = tab.dataset.filter;
      filterTabs.forEach(t => t.classList.toggle('active', t === tab));
      filterProjects();
    });
  });

  if (projectSearch) {
    projectSearch.addEventListener('input', filterProjects);
  }

  if (resetProjectsBtn) {
    resetProjectsBtn.addEventListener('click', () => {
      activeProjectFilter = 'Semua';
      if (projectSearch) projectSearch.value = '';
      filterTabs.forEach(t => t.classList.toggle('active', t.dataset.filter === 'Semua'));
      filterProjects();
    });
  }

  viewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const mode = btn.dataset.view;
      viewBtns.forEach(b => b.classList.toggle('active', b === btn));
      if (projectGrid) {
        projectGrid.classList.toggle('list-view', mode === 'list');
      }
    });
  });

  // Case Study Data + Interactive Mini-Demo Renderers
  const PROJECT_IDS = ['tanaman-obat', 'monitoring-kangkung', 'portofolio-rpl'];
  const PROJECT_DATA = {
    'tanaman-obat': {
      image: 'tanaman obat.jpeg',
      year: '2025 · Web App',
      stack: ['HTML5', 'CSS3', 'JavaScript'],
      id: {
        category: 'Web / Pertanian',
        title: 'Sistem Informasi Tanaman Obat',
        problem: 'Informasi mengenai jenis tanaman obat keluarga (TOGA), bagian tanaman yang dimanfaatkan, serta khasiatnya sering tersebar dan sulit dicari secara cepat saat dibutuhkan.',
        solution: 'Membangun katalog berbasis web yang mengelompokkan tanaman secara terstruktur lengkap dengan filter pencarian, detail bagian yang digunakan, dan cara pengolahan singkat.',
        features: [
          'Katalog visual jenis tanaman obat populer',
          'Informasi bagian tanaman (rimpang, daun, akar) & manfaat',
          'Pencarian cepat berdasarkan nama maupun khasiat'
        ]
      },
      en: {
        category: 'Web / Agriculture',
        title: 'Medicinal Plants Information System',
        problem: 'Details about medicinal herb varieties, usable plant parts, and traditional benefits are often scattered and hard to look up quickly.',
        solution: 'Built a structured web catalog organizing medicinal plants with instant search, usable-part categorization, and concise usage notes.',
        features: [
          'Visual catalog of common medicinal plants',
          'Structured breakdown of usable parts & health benefits',
          'Fast lookup by herb name or therapeutic benefit'
        ]
      }
    },
    'monitoring-kangkung': {
      image: 'kangkung.jpg',
      year: '2025 · Data Tracker',
      stack: ['HTML5', 'JavaScript', 'CSS3'],
      id: {
        category: 'Web / Pertanian',
        title: 'Monitoring Tanaman Kangkung',
        problem: 'Pencatatan pertumbuhan tanaman kangkung secara manual di kertas rentan hilang dan menyulitkan perbandingan perkembangan tinggi tanaman dari hari ke hari.',
        solution: 'Merancang aplikasi web ringan untuk mencatat tinggi tanaman, kondisi daun, jadwal penyiraman, serta memantau progres menuju estimasi panen (±25–28 hari).',
        features: [
          'Log perkembangan harian dari tanam hingga panen',
          'Indikator fase pertumbuhan (kecambah, vegetatif, siap panen)',
          'Antarmuka pencatatan ringkas dan mudah dipahami'
        ]
      },
      en: {
        category: 'Web / Agriculture',
        title: 'Water Spinach Growth Monitor',
        problem: 'Manual paper logs for plant growth tracking are easy to lose and make day-by-day height comparisons difficult.',
        solution: 'Designed a lightweight web logger to record plant height, leaf count, watering schedule, and harvest readiness (~25–28 days).',
        features: [
          'Daily growth timeline from planting to harvest',
          'Clear stage indicator (seedling, vegetative, harvest-ready)',
          'Streamlined data entry interface'
        ]
      }
    },
    'portofolio-rpl': {
      image: 'portofolio pplg.jpeg',
      year: '2026 · RPL Archive',
      stack: ['HTML5', 'CSS3', 'JavaScript'],
      id: {
        category: 'RPL / Web',
        title: 'Portofolio Proyek RPL',
        problem: 'Tugas praktik pemrograman web di jurusan RPL perlu diarsipkan secara rapi agar progres kompetensi teknis mudah ditinjau oleh guru, rekan tim, maupun mitra industri.',
        solution: 'Mengembangkan arsip portofolio dengan struktur HTML semantik, sistem tema modular, serta penyajian daftar proyek dan keahlian yang terorganisir.',
        features: [
          'Arsitektur kode semantik tanpa ketergantungan berat',
          'Tata letak adaptif untuk desktop dan seluler',
          'Dokumentasi terpusat seluruh praktik pengembangan web'
        ]
      },
      en: {
        category: 'RPL / Web',
        title: 'RPL Software Project Archive',
        problem: 'Academic web assignments in Software Engineering (RPL) need organized archiving so technical progress can be clearly reviewed by mentors and peers.',
        solution: 'Created a structured portfolio archive using semantic HTML, modular CSS theming, and clear project & skill organization.',
        features: [
          'Clean semantic code architecture with zero heavy bloat',
          'Responsive layout across mobile and desktop viewports',
          'Centralized showcase of web engineering practice'
        ]
      }
    }
  };

  const projectModal = document.getElementById('project-modal');
  const pmTitle = document.getElementById('pm-title');
  const pmCategory = document.getElementById('pm-category');
  const pmYear = document.getElementById('pm-year');
  const pmImage = document.getElementById('pm-image');
  const pmContent = document.getElementById('pm-content');
  const pmClose = document.getElementById('pm-close');
  const pmPrev = document.getElementById('pm-prev');
  const pmNext = document.getElementById('pm-next');

  function renderProjectDemo(projectId) {
    if (projectId === 'tanaman-obat') {
      const herbs = [
        { name: 'Jahe Merah', part: currentLang === 'id' ? 'Rimpang' : 'Rhizome', benefit: currentLang === 'id' ? 'Menghangatkan tubuh, meredakan mual, & anti-inflamasi.' : 'Warms the body, relieves nausea, & anti-inflammatory.' },
        { name: 'Kunyit', part: currentLang === 'id' ? 'Rimpang' : 'Rhizome', benefit: currentLang === 'id' ? 'Membantu kesehatan pencernaan & antioksidan alami.' : 'Supports digestion & acts as natural antioxidant.' },
        { name: 'Daun Sirih', part: currentLang === 'id' ? 'Daun' : 'Leaf', benefit: currentLang === 'id' ? 'Antiseptik alami untuk menjaga kebersihan & kesehatan mulut.' : 'Natural antiseptic supporting oral & skin hygiene.' },
        { name: 'Temulawak', part: currentLang === 'id' ? 'Rimpang' : 'Rhizome', benefit: currentLang === 'id' ? 'Menjaga fungsi hati & membantu meningkatkan nafsu makan.' : 'Supports liver health & natural appetite.' }
      ];

      pmContent.innerHTML = `
        <div class="demo-sandbox">
          <div class="demo-controls">
            <input type="search" id="demo-herb-search" placeholder="${currentLang === 'id' ? 'Cari tanaman (mis. Jahe, Sirih)...' : 'Search herb (e.g., Ginger, Leaf)...'}" style="flex:1;padding:9px 12px;border-radius:8px;border:1px solid var(--border);background:var(--bg-elevated);font-size:0.84rem;outline:none;">
          </div>
          <div class="herb-grid" id="demo-herb-grid"></div>
        </div>
      `;

      const grid = document.getElementById('demo-herb-grid');
      const input = document.getElementById('demo-herb-search');

      function drawHerbs(q = '') {
        const filtered = herbs.filter(h =>
          h.name.toLowerCase().includes(q) ||
          h.part.toLowerCase().includes(q) ||
          h.benefit.toLowerCase().includes(q)
        );
        grid.innerHTML = filtered.length
          ? filtered.map(h => `
              <div class="herb-card">
                <h5>${h.name}</h5>
                <span>${currentLang === 'id' ? 'Bagian' : 'Part'}: ${h.part}</span>
                <p>${h.benefit}</p>
              </div>
            `).join('')
          : `<p style="color:var(--text-muted);font-size:0.84rem;">${currentLang === 'id' ? 'Tanaman tidak ditemukan.' : 'No matching plant found.'}</p>`;
      }

      drawHerbs();
      input.addEventListener('input', () => drawHerbs(input.value.trim().toLowerCase()));
      return;
    }

    if (projectId === 'monitoring-kangkung') {
      pmContent.innerHTML = `
        <div class="demo-sandbox">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;gap:12px;flex-wrap:wrap;">
            <strong style="font-size:0.92rem;">${currentLang === 'id' ? 'Simulasi Hari Pertumbuhan Kangkung' : 'Water Spinach Growth Day Simulator'}</strong>
            <span id="demo-day-badge" style="font-family:var(--font-mono);color:var(--accent);font-size:0.85rem;">Hari ke-14</span>
          </div>
          <input type="range" id="demo-day-slider" min="1" max="28" value="14" style="width:100%;accent-color:var(--accent);margin-bottom:18px;cursor:pointer;">
          <div class="case-grid" style="margin:0;">
            <div class="case-box">
              <h4>${currentLang === 'id' ? 'Estimasi Tinggi' : 'Est. Height'}</h4>
              <p id="demo-height" style="font-size:1.35rem;font-weight:700;color:var(--text);">14.5 cm</p>
            </div>
            <div class="case-box">
              <h4>${currentLang === 'id' ? 'Fase & Status' : 'Stage & Status'}</h4>
              <p id="demo-stage" style="font-weight:600;color:var(--accent);">Pertumbuhan Vegetatif</p>
            </div>
          </div>
          <div style="margin-top:14px;">
            <div style="display:flex;justify-content:space-between;font-family:var(--font-mono);font-size:0.72rem;color:var(--text-muted);margin-bottom:6px;">
              <span>${currentLang === 'id' ? 'Progres Menuju Panen' : 'Harvest Progress'}</span>
              <span id="demo-harvest-pct">50%</span>
            </div>
            <div class="skill-bar"><div id="demo-harvest-bar" class="skill-bar__fill" style="width:50%;"></div></div>
          </div>
        </div>
      `;

      const slider = document.getElementById('demo-day-slider');
      const dayBadge = document.getElementById('demo-day-badge');
      const heightEl = document.getElementById('demo-height');
      const stageEl = document.getElementById('demo-stage');
      const pctEl = document.getElementById('demo-harvest-pct');
      const barEl = document.getElementById('demo-harvest-bar');

      function updateGrowth(day) {
        const d = Number(day);
        const estHeight = (0.8 + d * 0.98).toFixed(1);
        const pct = Math.min(100, Math.round((d / 28) * 100));
        let stage = '';
        if (d <= 6) {
          stage = currentLang === 'id' ? 'Fase Kecambah (Jaga Kelembapan)' : 'Germination (Keep Moist)';
        } else if (d <= 20) {
          stage = currentLang === 'id' ? 'Fase Vegetatif Aktif' : 'Active Vegetative Growth';
        } else {
          stage = currentLang === 'id' ? 'Siap Panen Optimal ✓' : 'Harvest Ready ✓';
        }
        dayBadge.textContent = currentLang === 'id' ? `Hari ke-${d}` : `Day ${d}`;
        heightEl.textContent = `${estHeight} cm`;
        stageEl.textContent = stage;
        pctEl.textContent = `${pct}%`;
        barEl.style.width = `${pct}%`;
      }

      updateGrowth(14);
      slider.addEventListener('input', () => updateGrowth(slider.value));
      return;
    }

    // Portofolio RPL interactive architecture preview
    pmContent.innerHTML = `
      <div class="demo-sandbox">
        <p style="font-size:0.86rem;color:var(--text-muted);margin-bottom:14px;">
          ${currentLang === 'id'
            ? 'Pilih lapisan arsitektur web untuk meninjau prinsip struktur yang diterapkan pada proyek RPL:'
            : 'Select a web architecture layer to inspect the structural principles used in RPL projects:'}
        </p>
        <div class="demo-controls">
          <button type="button" class="preset-chip active" data-arch="html">HTML5 Semantic</button>
          <button type="button" class="preset-chip" data-arch="css">CSS3 Design Tokens</button>
          <button type="button" class="preset-chip" data-arch="js">Vanilla JS Modules</button>
        </div>
        <div class="case-box" id="demo-arch-detail"></div>
      </div>
    `;

    const archInfo = {
      html: currentLang === 'id'
        ? 'Menggunakan tag semantik (<header>, <main>, <section>, <article>, <footer>) serta atribut ARIA agar aksesibel di pembaca layar dan mesin pencari.'
        : 'Uses semantic tags (<header>, <main>, <section>, <article>, <footer>) and ARIA attributes for screen-reader and SEO clarity.',
      css: currentLang === 'id'
        ? 'Memanfaatkan CSS Custom Properties (:root), Grid & Flexbox modern, dan transisi yang menghormati preferensi prefers-reduced-motion.'
        : 'Leverages CSS Custom Properties (:root), modern Grid & Flexbox, and transitions respecting prefers-reduced-motion.',
      js: currentLang === 'id'
        ? 'Logika terstruktur menggunakan IIFE modular, Event Delegation, IntersectionObserver untuk performa scroll, dan LocalStorage untuk preferensi pengguna.'
        : 'Structured with modular IIFE patterns, IntersectionObserver for smooth scroll performance, and LocalStorage persistence.'
    };

    const archBox = document.getElementById('demo-arch-detail');
    function showArch(key) {
      archBox.innerHTML = `<h4>${key.toUpperCase()}</h4><p>${archInfo[key]}</p>`;
    }
    showArch('html');
    pmContent.querySelectorAll('[data-arch]').forEach(btn => {
      btn.addEventListener('click', () => {
        pmContent.querySelectorAll('[data-arch]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        showArch(btn.dataset.arch);
      });
    });
  }

  function renderProjectModalContent() {
    if (!activeProjectModalId) return;
    const item = PROJECT_DATA[activeProjectModalId];
    if (!item) return;
    const localized = item[currentLang] || item.id;

    if (pmTitle) pmTitle.textContent = localized.title;
    if (pmCategory) pmCategory.textContent = localized.category;
    if (pmYear) pmYear.textContent = item.year;
    if (pmImage) {
      pmImage.src = item.image;
      pmImage.alt = localized.title;
    }

    document.querySelectorAll('[data-pm-tab]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.pmTab === activeModalTab);
    });

    if (activeModalTab === 'demo') {
      renderProjectDemo(activeProjectModalId);
      return;
    }

    const lblProblem = currentLang === 'id' ? 'Latar Belakang' : 'Challenge';
    const lblSolution = currentLang === 'id' ? 'Solusi & Implementasi' : 'Solution & Architecture';
    const lblFeatures = currentLang === 'id' ? 'Fitur & Hasil Utama' : 'Key Features';
    const lblStack = currentLang === 'id' ? 'Teknologi Digunakan' : 'Technology Stack';

    pmContent.innerHTML = `
      <div class="case-grid">
        <div class="case-box">
          <h4>${lblProblem}</h4>
          <p>${localized.problem}</p>
        </div>
        <div class="case-box">
          <h4>${lblSolution}</h4>
          <p>${localized.solution}</p>
        </div>
      </div>
      <div class="case-box" style="margin-bottom:16px;">
        <h4>${lblFeatures}</h4>
        <ul>
          ${localized.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
      </div>
      <div>
        <p style="font-family:var(--font-mono);font-size:0.72rem;color:var(--text-muted);margin-bottom:8px;">${lblStack}</p>
        <div class="tech-tags">
          ${item.stack.map(s => `<span class="tech-tag">${s}</span>`).join('')}
        </div>
      </div>
    `;
  }

  function openProjectModal(projectId) {
    if (!PROJECT_DATA[projectId] || !projectModal) return;
    activeProjectModalId = projectId;
    activeModalTab = 'case';
    renderProjectModalContent();
    projectModal.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (pmClose) pmClose.focus();
  }

  function closeProjectModal() {
    if (!projectModal) return;
    projectModal.classList.remove('open');
    document.body.style.overflow = '';
    activeProjectModalId = null;
  }

  projectCards.forEach(card => {
    const pid = card.dataset.projectId;
    card.addEventListener('click', () => openProjectModal(pid));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openProjectModal(pid);
      }
    });
  });

  document.querySelectorAll('[data-pm-tab]').forEach(btn => {
    btn.addEventListener('click', () => {
      activeModalTab = btn.dataset.pmTab;
      renderProjectModalContent();
    });
  });

  if (pmPrev) {
    pmPrev.addEventListener('click', () => {
      const idx = PROJECT_IDS.indexOf(activeProjectModalId);
      const prevIdx = (idx - 1 + PROJECT_IDS.length) % PROJECT_IDS.length;
      activeProjectModalId = PROJECT_IDS[prevIdx];
      renderProjectModalContent();
    });
  }

  if (pmNext) {
    pmNext.addEventListener('click', () => {
      const idx = PROJECT_IDS.indexOf(activeProjectModalId);
      const nextIdx = (idx + 1) % PROJECT_IDS.length;
      activeProjectModalId = PROJECT_IDS[nextIdx];
      renderProjectModalContent();
    });
  }

  if (pmClose) pmClose.addEventListener('click', closeProjectModal);
  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) closeProjectModal();
    });
  }

  /* ------------------------------------------------------------------------
     13. SKILLS FILTER TABS
     ------------------------------------------------------------------------ */
  const skillFilterBtns = document.querySelectorAll('[data-skill-filter]');
  const skillCards = document.querySelectorAll('.skill-card');

  skillFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.skillFilter;
      skillFilterBtns.forEach(b => b.classList.toggle('active', b === btn));
      skillCards.forEach(card => {
        const show = cat === 'all' || card.dataset.skillCat === cat;
        card.classList.toggle('is-hidden', !show);
      });
    });
  });

  /* ------------------------------------------------------------------------
     14. FAQ ACCORDION
     ------------------------------------------------------------------------ */
  document.querySelectorAll('.faq-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      if (!item) return;
      const isOpen = item.getAttribute('data-open') === 'true';
      item.setAttribute('data-open', String(!isOpen));
      btn.setAttribute('aria-expanded', String(!isOpen));
    });
  });

  /* ------------------------------------------------------------------------
     15. CV / RESUME MODAL + PRINT
     ------------------------------------------------------------------------ */
  const cvModal = document.getElementById('cv-modal');
  const openCvBtns = [document.getElementById('open-cv-btn'), document.getElementById('open-cv-btn-2')];
  const cvClose = document.getElementById('cv-close');
  const cvPrintBtn = document.getElementById('cv-print-btn');

  function openCvModal() {
    if (!cvModal) return;
    cvModal.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (cvClose) cvClose.focus();
  }

  function closeCvModal() {
    if (!cvModal) return;
    cvModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  openCvBtns.forEach(btn => {
    if (btn) btn.addEventListener('click', openCvModal);
  });
  if (cvClose) cvClose.addEventListener('click', closeCvModal);
  if (cvModal) {
    cvModal.addEventListener('click', (e) => {
      if (e.target === cvModal) closeCvModal();
    });
  }
  if (cvPrintBtn) {
    cvPrintBtn.addEventListener('click', () => window.print());
  }

  /* ------------------------------------------------------------------------
     16. COMMAND PALETTE (CTRL+K / CMD+K)
     ------------------------------------------------------------------------ */
  cmdPalette = document.getElementById('command-palette');
  const cmdTrigger = document.getElementById('cmd-trigger');
  const mobileCmdBtn = document.getElementById('mobile-cmd-btn');
  const cmdClose = document.getElementById('cmd-close');
  cmdInput = document.getElementById('cmd-input');
  const cmdList = document.getElementById('cmd-list');

  let cmdSelectedIdx = 0;

  function getCommands() {
    const id = currentLang === 'id';
    return [
      { label: id ? 'Pergi ke Beranda' : 'Go to Home', group: 'Navigasi', action: () => { location.hash = '#beranda'; } },
      { label: id ? 'Pergi ke Konsol Profil & GitHub' : 'Go to Console & GitHub', group: 'Navigasi', action: () => { location.hash = '#ringkasan'; } },
      { label: id ? 'Pergi ke Daftar Proyek' : 'Go to Projects', group: 'Navigasi', action: () => { location.hash = '#proyek'; } },
      { label: id ? 'Pergi ke Profil & Perjalanan' : 'Go to About & Timeline', group: 'Navigasi', action: () => { location.hash = '#tentang'; } },
      { label: id ? 'Pergi ke Kontak' : 'Go to Contact', group: 'Navigasi', action: () => { location.hash = '#kontak'; } },
      { label: id ? 'Buka Studi Kasus: Tanaman Obat' : 'Open Case Study: Medicinal Plants', group: 'Proyek', action: () => openProjectModal('tanaman-obat') },
      { label: id ? 'Buka Studi Kasus: Monitoring Kangkung' : 'Open Case Study: Water Spinach Monitor', group: 'Proyek', action: () => openProjectModal('monitoring-kangkung') },
      { label: id ? 'Buka Studi Kasus: Portofolio RPL' : 'Open Case Study: RPL Archive', group: 'Proyek', action: () => openProjectModal('portofolio-rpl') },
      { label: id ? 'Buka Pratinjau CV / Resume' : 'Open CV / Resume Preview', group: 'Aksi', action: openCvModal },
      { label: id ? 'Salin Email (sonsaya47@gmail.com)' : 'Copy Email (sonsaya47@gmail.com)', group: 'Aksi', action: () => copyText('sonsaya47@gmail.com', id ? 'Email berhasil disalin!' : 'Email copied!') },
      { label: id ? 'Ganti Tema: Obsidian Dark' : 'Switch Theme: Obsidian Dark', group: 'Tema', action: () => setTheme('dark') },
      { label: id ? 'Ganti Tema: Ivory Light' : 'Switch Theme: Ivory Light', group: 'Tema', action: () => setTheme('light') },
      { label: id ? 'Palet Aksen: Champagne Gold' : 'Accent: Champagne Gold', group: 'Palet', action: () => setAccent('champagne') },
      { label: id ? 'Palet Aksen: Botanical Emerald' : 'Accent: Botanical Emerald', group: 'Palet', action: () => setAccent('emerald') },
      { label: id ? 'Palet Aksen: Editorial Cobalt' : 'Accent: Editorial Cobalt', group: 'Palet', action: () => setAccent('sapphire') },
      { label: id ? 'Ganti Bahasa (ID ↔ EN)' : 'Toggle Language (ID ↔ EN)', group: 'Bahasa', action: () => applyLanguage(currentLang === 'id' ? 'en' : 'id') },
      { label: 'GitHub (@sonsaya47-aril)', group: 'Tautan', action: () => window.open('https://github.com/sonsaya47-aril', '_blank', 'noopener,noreferrer') }
    ];
  }

  let filteredCmds = [];

  function renderCmdList(query = '') {
    if (!cmdList) return;
    const q = query.trim().toLowerCase();
    filteredCmds = getCommands().filter(c =>
      c.label.toLowerCase().includes(q) || c.group.toLowerCase().includes(q)
    );
    if (cmdSelectedIdx >= filteredCmds.length) cmdSelectedIdx = 0;

    cmdList.innerHTML = '';
    if (filteredCmds.length === 0) {
      cmdList.innerHTML = `<div style="padding:20px;text-align:center;color:var(--text-muted);font-size:0.86rem;">${currentLang === 'id' ? 'Perintah tidak ditemukan.' : 'No matching command.'}</div>`;
      return;
    }

    filteredCmds.forEach((cmd, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'cmd-item' + (idx === cmdSelectedIdx ? ' selected' : '');
      btn.setAttribute('role', 'option');
      btn.innerHTML = `<span></span><span class="cmd-item__group"></span>`;
      btn.querySelector('span:first-child').textContent = cmd.label;
      btn.querySelector('span:last-child').textContent = cmd.group;
      btn.addEventListener('click', () => {
        closeCmdPalette();
        cmd.action();
      });
      cmdList.appendChild(btn);
    });
  }

  function openCmdPalette() {
    if (!cmdPalette) return;
    toggleMobileMenu(false);
    cmdSelectedIdx = 0;
    if (cmdInput) cmdInput.value = '';
    renderCmdList('');
    cmdPalette.classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => cmdInput && cmdInput.focus(), 30);
  }

  function closeCmdPalette() {
    if (!cmdPalette) return;
    cmdPalette.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (cmdTrigger) cmdTrigger.addEventListener('click', openCmdPalette);
  if (mobileCmdBtn) mobileCmdBtn.addEventListener('click', openCmdPalette);
  if (cmdClose) cmdClose.addEventListener('click', closeCmdPalette);
  if (cmdPalette) {
    cmdPalette.addEventListener('click', (e) => {
      if (e.target === cmdPalette) closeCmdPalette();
    });
  }

  if (cmdInput) {
    cmdInput.addEventListener('input', () => {
      cmdSelectedIdx = 0;
      renderCmdList(cmdInput.value);
    });

    cmdInput.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (filteredCmds.length) {
          cmdSelectedIdx = (cmdSelectedIdx + 1) % filteredCmds.length;
          renderCmdList(cmdInput.value);
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (filteredCmds.length) {
          cmdSelectedIdx = (cmdSelectedIdx - 1 + filteredCmds.length) % filteredCmds.length;
          renderCmdList(cmdInput.value);
        }
      } else if (e.key === 'Enter') {
        e.preventDefault();
        const chosen = filteredCmds[cmdSelectedIdx];
        if (chosen) {
          closeCmdPalette();
          chosen.action();
        }
      }
    });
  }

  // Global keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (cmdPalette && cmdPalette.classList.contains('open')) {
        closeCmdPalette();
      } else {
        openCmdPalette();
      }
    }
    if (e.key === 'Escape') {
      if (cmdPalette && cmdPalette.classList.contains('open')) closeCmdPalette();
      if (projectModal && projectModal.classList.contains('open')) closeProjectModal();
      if (cvModal && cvModal.classList.contains('open')) closeCvModal();
      if (appearancePopover && appearancePopover.classList.contains('open')) {
        appearancePopover.classList.remove('open');
        appearanceToggle.setAttribute('aria-expanded', 'false');
      }
    }
  });

  /* ------------------------------------------------------------------------
     17. CONTACT HUB (COPY EMAIL, PRESETS, DRAFT AUTO-SAVE, VALIDATION)
     ------------------------------------------------------------------------ */
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const emailAddressEl = document.getElementById('email-address');
  const contactForm = document.getElementById('contact-form');
  const namaInput = document.getElementById('nama');
  const emailInput = document.getElementById('email');
  const subjekInput = document.getElementById('subjek');
  const pesanInput = document.getElementById('pesan');
  const charCount = document.getElementById('char-count');
  const draftStatus = document.getElementById('draft-status');
  const copyMsgBtn = document.getElementById('copy-msg-btn');

  if (copyEmailBtn && emailAddressEl) {
    copyEmailBtn.addEventListener('click', () => {
      copyText(emailAddressEl.textContent.trim(), currentLang === 'id' ? 'Alamat email berhasil disalin!' : 'Email address copied!');
    });
  }

  document.querySelectorAll('.preset-chip[data-preset]').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.preset-chip[data-preset]').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      if (subjekInput) {
        subjekInput.value = chip.dataset.preset;
        saveDraft();
      }
      if (pesanInput) pesanInput.focus();
    });
  });

  function updateCharCounter() {
    if (!pesanInput || !charCount) return;
    charCount.textContent = `${pesanInput.value.length} / 1000`;
  }

  function saveDraft() {
    try {
      const payload = {
        nama: namaInput ? namaInput.value : '',
        email: emailInput ? emailInput.value : '',
        subjek: subjekInput ? subjekInput.value : '',
        pesan: pesanInput ? pesanInput.value : ''
      };
      localStorage.setItem('asa_contact_draft', JSON.stringify(payload));
      if (draftStatus && (payload.nama || payload.email || payload.subjek || payload.pesan)) {
        draftStatus.textContent = currentLang === 'id' ? 'Draf tersimpan otomatis' : 'Draft auto-saved';
      }
    } catch {}
  }

  // Restore saved draft
  try {
    const rawDraft = localStorage.getItem('asa_contact_draft');
    if (rawDraft) {
      const d = JSON.parse(rawDraft);
      if (namaInput && d.nama) namaInput.value = d.nama;
      if (emailInput && d.email) emailInput.value = d.email;
      if (subjekInput && d.subjek) subjekInput.value = d.subjek;
      if (pesanInput && d.pesan) pesanInput.value = d.pesan;
      updateCharCounter();
    }
  } catch {}

  [namaInput, emailInput, subjekInput, pesanInput].forEach(el => {
    if (!el) return;
    el.addEventListener('input', () => {
      updateCharCounter();
      saveDraft();
      const errEl = document.getElementById(`err-${el.id}`);
      if (errEl) errEl.textContent = '';
    });
  });

  function validateForm() {
    let valid = true;
    const isId = currentLang === 'id';

    const setErr = (id, msg) => {
      const errEl = document.getElementById(`err-${id}`);
      if (errEl) errEl.textContent = msg;
      if (msg) valid = false;
    };

    if (!namaInput.value.trim()) {
      setErr('nama', isId ? 'Nama lengkap wajib diisi.' : 'Full name is required.');
    } else setErr('nama', '');

    const emailVal = emailInput.value.trim();
    if (!emailVal || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
      setErr('email', isId ? 'Masukkan alamat email yang valid.' : 'Please enter a valid email.');
    } else setErr('email', '');

    if (!subjekInput.value.trim()) {
      setErr('subjek', isId ? 'Subjek pesan wajib diisi.' : 'Subject is required.');
    } else setErr('subjek', '');

    if (pesanInput.value.trim().length < 10) {
      setErr('pesan', isId ? 'Tuliskan pesan minimal 10 karakter.' : 'Please write at least 10 characters.');
    } else setErr('pesan', '');

    return valid;
  }

  function buildFormattedMessage() {
    return (
      `Nama: ${namaInput.value.trim()}\n` +
      `Email: ${emailInput.value.trim()}\n` +
      `Subjek: ${subjekInput.value.trim()}\n\n` +
      `Pesan:\n${pesanInput.value.trim()}`
    );
  }

  if (copyMsgBtn) {
    copyMsgBtn.addEventListener('click', () => {
      if (!validateForm()) {
        showToast(currentLang === 'id' ? 'Lengkapi formulir terlebih dahulu.' : 'Please complete the form fields first.');
        return;
      }
      copyText(buildFormattedMessage(), currentLang === 'id' ? 'Format pesan disalin ke clipboard!' : 'Formatted message copied!');
    });
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!validateForm()) return;

      const targetEmail = emailAddressEl ? emailAddressEl.textContent.trim() : 'sonsaya47@gmail.com';
      const body = `Nama: ${namaInput.value.trim()}\nEmail: ${emailInput.value.trim()}\n\nPesan:\n${pesanInput.value.trim()}`;
      const mailtoLink = `mailto:${targetEmail}?subject=${encodeURIComponent(subjekInput.value.trim())}&body=${encodeURIComponent(body)}`;

      showToast(currentLang === 'id' ? 'Membuka aplikasi email Anda...' : 'Opening your email client...');
      try { localStorage.removeItem('asa_contact_draft'); } catch {}
      if (draftStatus) draftStatus.textContent = '';
      window.location.href = mailtoLink;
    });
  }
})();
