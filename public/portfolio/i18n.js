'use strict';

// Indonesian copy stays in the HTML; English copy is centralized here.
const english = {
  "skip": "Skip to content",
  "homeLabel": "Ryo, back to top",
  "navLabel": "Main navigation",
  "experienceNav": "Experience",
  "projectsNav": "Projects",
  "contactNav": "Contact",
  "portraitAlt": "Portrait of Ramadhoni Gibran Maulana",
  "introStart": "Hi, I'm",
  "introStrong": "I develop web and mobile apps,",
  "introEnd": "while continuing to learn through personal projects and experience working with teams.",
  "about": "I have a background in Informatics and experience working on both frontend and backend. I am open to job opportunities and collaboration in application development.",
  "interests": "Interests",
  "languageLearning": "Language learning",
  "homeLabbing": "Home labbing",
  "gaming": "Gaming",
  "socialLabel": "Email and social profiles",
  "copyEmail": "Copy email address",
  "experienceTitle": "Experience",
  "syncIcon": "Syncost icon",
  "syncPeriod": "10 Dec 2025 – 8 Mar 2026",
  "syncSummary": "Contributed to updating the interface of a cost management SaaS application based on the supplied designs.",
  "syncModals": "Updated seven modals for managing product, order, and shipping costs.",
  "syncToolbar": "Adjusted the Product Toolbar to match the application design.",
  "syncOnboarding": "Implemented onboarding interface updates based on the supplied designs.",
  "syncostClose": "Close Syncost project details",
  "syncostMeta": "Work experience · PT. Sync Software Technologies · 10 Dec 2025–8 Mar 2026",
  "syncostBody": "Syncost helps Shopify merchants understand profit by bringing product costs, shipping, transaction fees, advertising, and other expenses together in one dashboard.",
  "syncostWebsite": "Visit Syncost website",
  "yallaLogo": "PT. Yalla Wisata Indonesia logo",
  "yallaPeriod": "12 Aug – 12 Nov 2025",
  "yallaSummary": "Contributed to the development of Goyalla Syariah as part of a team. The platform provides travel services for Hajj and Umrah.",
  "yallaUI": "Updated the frontend interface.",
  "yallaBackend": "Addressed backend issues in the admin and vendor panels.",
  "yallaCMS": "Developed an FAQ CMS so admins can update content without changing code.",
  "yallaDetailUI": "Updated the frontend interface and user experience (UI/UX).",
  "yallaDetailBackend": "Resolved backend issues and improved the stability of the admin and vendor panels.",
  "yallaDetailCMS": "Built a CMS feature for FAQ management, enabling admins to update content independently without changing code.",
  "technologiesLabel": "Technologies used",
  "projectDetails": "View project details",
  "projectsTitle": "Selected projects",
  "filterLabel": "Filter projects by type",
  "all": "All",
  "odoHomeAlt": "OdoMate home screen with odometer readings and ride statistics",
  "odoRideAlt": "OdoMate ride details with a route map",
  "odoType": "Personal project · Built independently",
  "odoDetailsLabel": "View OdoMate project details",
  "odoSummary": "A mobile app for logging odometer readings, recording GPS rides, and tracking motorcycle service schedules by distance.",
  "yallaScreenshotAlt": "Original screenshot of the updated Umrah package listing in Goyalla Syariah",
  "yallaType": "Team project · PT. Yalla Wisata Indonesia",
  "yallaDetailsLabel": "View Goyalla Syariah project details",
  "yallaCard": "An OTA platform for Hajj and Umrah travel. Contributed to UI/UX, backend fixes, admin and vendor panels, and an FAQ CMS as part of a team.",
  "skillsTitle": "Skills & tech stack",
  "skillsIntro": "Tools I use to build web and mobile products and collaborate on their development.",
  "databaseTitle": "Database",
  "toolsTitle": "Tools & infrastructure",
  "education": "Education",
  "universityLogo": "Universitas Bina Sarana Informatika logo",
  "schoolLogo": "SMK Negeri 1 Cibinong logo",
  "degree": "Informatics · Bachelor's degree",
  "universityYear": "Graduated 2026",
  "educationBody": "During university, I studied application development and took part in collaborative research on sentiment analysis.",
  "educationHighlights": "Activities & achievements",
  "publicationLabel": "Journal publication",
  "publicationBody": "First author of a collaborative study conducted in my sixth semester and published in Jurnal Ilmu Komputer dan Teknologi (IKOMTI).",
  "viewPublication": "View publication",
  "certificationTitle": "Program Analyst Competency Certification",
  "certificationBody": "Earned competency certification as a Program Analyst in software development. The certification covers scalability analysis, algorithm implementation, SQL and database access, and code quality through documentation, debugging, profiling, code review, and unit and integration testing.",
  "downloadCertificate": "Download certificate (PDF)",
  "schoolBody": "Light Vehicle Engineering",
  "schoolYear": "Graduated 2022",
  "contactTitle": "Let’s connect.",
  "contactBody": "Have a job opportunity, a project idea, or just want to chat? I would love to hear from you.",
  "sendEmail": "Send an email",
  "backTop": "Back to top",
  "odoClose": "Close OdoMate details",
  "odoMeta": "Personal project · Built independently · Flutter & Dart",
  "odoBody": "A mobile app that helps motorcycle owners log odometer readings, record GPS-based rides, and track service schedules by distance.",
  "contributions": "My contributions",
  "odoUI": "Developed the mobile interface and application flows.",
  "odoGPS": "Implemented odometer logging and geolocation-based ride recording and storage.",
  "odoService": "Displayed ride statistics and periodic service schedules.",
  "odoFullHomeAlt": "Full screenshot of the OdoMate home screen",
  "odoHomeCaption": "Home and activity overview",
  "odoFullRideAlt": "Full screenshot of OdoMate ride route details",
  "odoRideCaption": "Ride details and GPS route",
  "moreTitle": "Want to know more?",
  "odoMore": "Repository and demo links have not been added yet. Get in touch to discuss this project.",
  "odoAsk": "Ask about OdoMate",
  "yallaClose": "Close Goyalla Syariah details",
  "yallaMeta": "Team project · PT. Yalla Wisata Indonesia · 12 August–12 November 2025",
  "yallaBody": "Goyalla Syariah is an online travel agency (OTA) platform for Sharia-compliant travel, particularly Hajj and Umrah. During my internship, I contributed to the development and maintenance of the platform as part of a team.",
  "teamContributions": "Team contributions",
  "profileDialogTitle": "Let’s connect",
  "profileDialogClose": "Close contact information",
  "contactEmail": "Get in touch by email",
  "metaDescription": "Ramadhoni Gibran Maulana’s portfolio — a Software Engineer focused on frontend development. Explore my work, skills, and experience."
};
const textTargets = [...document.querySelectorAll('[data-i18n]')].map(element => ({
  element, key: element.dataset.i18n, original: element.textContent
}));
const attributeTargets = ['aria-label', 'alt', 'content'].flatMap(attribute =>
  [...document.querySelectorAll('[data-i18n-' + attribute + ']')].map(element => ({
    element, attribute, key: element.getAttribute('data-i18n-' + attribute), original: element.getAttribute(attribute)
  }))
);
const languageSelect = document.querySelector('#language-select');
let currentLanguage = 'id';

const feedback = {
  id: {
    copied: 'Alamat email berhasil disalin.',
    copyFailed: 'Belum bisa menyalin otomatis. Pilih alamat email untuk menyalinnya, atau klik untuk mengirim email.',
    invalidProfile: label => 'Tautan ' + label + ' belum valid. Silakan hubungi saya melalui email.',
    missingProfile: label => 'Tautan ' + label + ' belum ditambahkan. Sementara ini, kamu bisa menghubungi saya melalui email.'
  },
  en: {
    copied: 'Email address copied.',
    copyFailed: 'Automatic copying is unavailable. Select the address to copy it, or click it to send an email.',
    invalidProfile: label => 'The ' + label + ' link is invalid. Please get in touch by email.',
    missingProfile: label => 'The ' + label + ' link has not been added yet. You can get in touch by email for now.'
  }
};
const emailSubjects = {
  id: { contact: 'Mari terhubung — Portofolio', odomate: 'Tentang proyek OdoMate' },
  en: { contact: 'Let’s connect — Portfolio', odomate: 'About the OdoMate project' }
};

function formatProjectCount(count, language = currentLanguage) {
  return language === 'en'
    ? count + (count === 1 ? ' project shown' : ' projects shown')
    : count + ' proyek ditampilkan';
}

function updateProjectCount() {
  const count = [...document.querySelectorAll('[data-category]')].filter(card => !card.hidden).length;
  document.querySelector('#filter-status').textContent = formatProjectCount(count);
}

function applyLanguage(language) {
  currentLanguage = language === 'en' ? 'en' : 'id';
  textTargets.forEach(({ element, key, original }) => {
    element.textContent = currentLanguage === 'en' ? (english[key] ?? original) : original;
  });
  attributeTargets.forEach(({ element, attribute, key, original }) => {
    element.setAttribute(attribute, currentLanguage === 'en' ? (english[key] ?? original) : original);
  });
  document.documentElement.lang = currentLanguage;
  document.querySelector('main').lang = currentLanguage;
  languageSelect.value = currentLanguage;
  languageSelect.dispatchEvent(new Event('portfolio-language-update'));
  languageSelect.setAttribute('aria-label', currentLanguage === 'en' ? 'Language' : 'Bahasa');
  document.querySelectorAll('[data-email-subject]').forEach(link => {
    link.href = link.href.split('?')[0] + '?subject=' + encodeURIComponent(emailSubjects[currentLanguage][link.dataset.emailSubject]);
  });
  updateProjectCount();
  document.querySelector('#toast').textContent = '';
}

// Check translation coverage and the singular/plural boundary when the page loads.
console.assert([...textTargets, ...attributeTargets].every(target => typeof english[target.key] === 'string'), 'Missing English translation');
console.assert(formatProjectCount(0, 'en') === '0 projects shown' && formatProjectCount(1, 'en') === '1 project shown' && formatProjectCount(2, 'id') === '2 proyek ditampilkan', 'Project count translation is inconsistent');

let savedLanguage = 'id';
try { savedLanguage = localStorage.getItem('portfolio-language') || 'id'; } catch { /* Storage may be unavailable for local files. */ }
applyLanguage(savedLanguage);
languageSelect.disabled = false;
languageSelect.dataset.languageReady = 'true';
languageSelect.dispatchEvent(new Event('portfolio-language-ready'));
languageSelect.addEventListener('change', () => {
  applyLanguage(languageSelect.value);
  document.querySelector('#language-status').textContent = currentLanguage === 'en' ? 'Language changed to English.' : 'Bahasa diubah ke Indonesia.';
  try { localStorage.setItem('portfolio-language', currentLanguage); } catch { /* Switching still works without storage. */ }
});
