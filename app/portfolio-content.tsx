import { existsSync } from "node:fs";
import path from "node:path";
import {
  CodeXml,
  Mail,
  MapPin,
} from "lucide-react";
import LaravelIcon from "@thesvg/react/laravel";
import PhpIcon from "@thesvg/react/php";
import Html5Icon from "@thesvg/react/html5";
import Css3Icon from "@thesvg/react/css3";
import FlutterIcon from "@thesvg/react/flutter";
import DartIcon from "@thesvg/react/dart";
import MysqlIcon from "@thesvg/react/mysql";
import GitIcon from "@thesvg/react/git";
import JavascriptIcon from "@thesvg/react/javascript";
import VueIcon from "@thesvg/react/vuedotjs";
import DockerIcon from "@thesvg/react/docker";
import NextIcon from "@thesvg/react/nextdotjs";
import SqliteIcon from "@thesvg/react/sqlite";
import LinuxIcon from "@thesvg/react/linux";
import GithubIcon from "@thesvg/react/github";
import LinkedinIcon from "@thesvg/react/linkedin";
import InstagramIcon from "@thesvg/react/instagram";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { FlipWords } from "@/components/ui/flip-words";
import { LanguageSelect } from "@/components/language-select";
import { PortfolioDrawer } from "@/components/portfolio-drawer";
import { ThemeToggle } from "@/components/theme-toggle";

const technologyIcons: Record<string, React.ReactNode> = {
  Laravel: <LaravelIcon className="chip-icon" aria-hidden="true" />,
  PHP: <PhpIcon className="chip-icon" aria-hidden="true" />,
  Blade: <CodeXml className="chip-icon" aria-hidden="true" />,
  MySQL: <MysqlIcon className="chip-icon" aria-hidden="true" />,
  HTML: <Html5Icon className="chip-icon" aria-hidden="true" />,
  CSS: <Css3Icon className="chip-icon" aria-hidden="true" />,
  "HTML/CSS": <><Html5Icon className="chip-icon" aria-hidden="true" /><Css3Icon className="chip-icon" aria-hidden="true" /></>,
  Flutter: <FlutterIcon className="chip-icon" aria-hidden="true" />,
  Dart: <DartIcon className="chip-icon" aria-hidden="true" />,
  Git: <GitIcon className="chip-icon" aria-hidden="true" />,
  JavaScript: <JavascriptIcon className="chip-icon" aria-hidden="true" />,
  Vue: <VueIcon className="chip-icon" aria-hidden="true" />,
  Docker: <DockerIcon className="chip-icon" aria-hidden="true" />,
  "Next.js": <NextIcon className="chip-icon" aria-hidden="true" />,
  SQLite: <SqliteIcon className="chip-icon" aria-hidden="true" />,
  Linux: <LinuxIcon className="chip-icon" aria-hidden="true" />,
  Geolocation: <MapPin className="chip-icon" aria-hidden="true" />,
};

const socialIcons = {
  github: <GithubIcon className="link-icon" aria-hidden="true" />,
  linkedin: <LinkedinIcon className="link-icon" aria-hidden="true" />,
  instagram: <InstagramIcon className="link-icon" aria-hidden="true" />,
};

function TechBadge({ name }: { name: string }) {
  return (
    <Badge variant="outline" className="tech-stack-badge">
      {technologyIcons[name]}{name}
    </Badge>
  );
}

function ProjectImage({
  src,
  width,
  height,
  alt,
  translation,
}: {
  src: string;
  width: number;
  height: number;
  alt: string;
  translation: string;
}) {
  if (!existsSync(path.join(process.cwd(), "public", src))) {
    return (
      <span
        className="missing-project-image"
        role="img"
        aria-label={alt}
        data-i18n-aria-label={translation}
        style={{ aspectRatio: `${width}/${height}` }}
      >
        Screenshot proyek belum tersedia
      </span>
    );
  }

  return <img className="od-media" src={`/${src}`} width={width} height={height} loading="lazy" alt={alt} data-i18n-alt={translation} />;
}

function PortfolioIcons() {
  return (
    <svg className="icon-library" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <symbol id="i-arrow" viewBox="0 0 24 24"><path d="M5 19 19 5M5 5h14v14" /></symbol>
        <symbol id="i-right" viewBox="0 0 24 24"><path d="M4 12h16m-6-6 6 6-6 6" /></symbol>
        <symbol id="i-down" viewBox="0 0 24 24"><path d="M12 4v16m-6-6 6 6 6-6" /></symbol>
        <symbol id="i-close" viewBox="0 0 24 24"><path d="m6 6 12 12M6 18 18 6" /></symbol>
        <symbol id="i-menu" viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16" /></symbol>
        <symbol id="i-copy" viewBox="0 0 24 24"><rect x="8" y="8" width="12" height="13" rx="2" /><path d="M16 8V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h4" /></symbol>
        <symbol id="i-up" viewBox="0 0 24 24"><path d="M12 20V4m-6 6 6-6 6 6" /></symbol>
        <symbol id="i-chevron" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></symbol>
      </defs>
    </svg>
  );
}

export function PortfolioContent() {
  return (
    <>
      <PortfolioIcons />
      <a className="skip-link" href="#main"><span data-i18n="skip">Lewati ke konten</span></a>
      <header className="site-header shell" id="top">
        <a className="wordmark" href="#top" aria-label="Ryo, kembali ke atas" data-i18n-aria-label="homeLabel">ryo<span>.</span></a>
        <nav className="desktop-nav" aria-label="Navigasi utama" data-i18n-aria-label="navLabel">
          <select className="language-select" id="language-select" aria-label="Bahasa" disabled hidden aria-hidden="true" tabIndex={-1}>
            <option value="id" lang="id">ID</option><option value="en" lang="en">EN</option>
          </select>
          <LanguageSelect />
          <a href="#perjalanan"><span data-i18n="experienceNav">Pengalaman</span></a>
          <a href="#proyek"><span data-i18n="projectsNav">Proyek</span></a>
          <a href="#kontak"><span data-i18n="contactNav">Kontak</span></a>
          <ThemeToggle />
        </nav>
      </header>
      <p className="sr-only" id="language-status" role="status" aria-live="polite" />

      <main className="shell" id="main" lang="id">
        <section className="profile" id="tentang" aria-labelledby="profile-name">
          <BackgroundRippleEffect />
          <div className="profile-top od-row">
            <figure className="avatar"><img src="/IMG_lmc20260626_112640_lmc_8.4.webp" width="1728" height="2304" alt="Foto profil Ramadhoni Gibran Maulana" fetchPriority="high" data-i18n-alt="portraitAlt" /></figure>
            <div className="od-fill">
              <h1 className="profile-name" id="profile-name">Ramadhoni Gibran Maulana<span style={{ color: "var(--accent)" }}>.</span></h1>
              <p className="profile-role">Software Engineer</p>
              <p className="profile-location"><span className="location-mark" aria-hidden="true" />Indonesia</p>
            </div>
          </div>
          <div className="profile-copy">
            <p><span data-i18n="introStart">Halo, aku</span> <FlipWords words={["Ryo", "Ramadhoni", "Ramdhon"]} />. <strong><span data-i18n="introStrong">Aku mengembangkan aplikasi web dan mobile,</span></strong> <span data-i18n="introEnd">sambil terus belajar lewat proyek pribadi dan pengalaman bekerja bersama tim.</span></p>
            <p><span data-i18n="about">Aku punya latar belakang Informatika dan pengalaman mengerjakan frontend maupun backend. Aku terbuka untuk kesempatan kerja dan kolaborasi dalam pengembangan aplikasi.</span></p>
          </div>
          <div className="interest-row">
            <span className="interest-label"><span data-i18n="interests">Minat</span></span>
            <Badge variant="secondary" className="interest-badge"><span data-i18n="languageLearning">Belajar bahasa</span></Badge>
            <Badge variant="secondary" className="interest-badge"><span data-i18n="homeLabbing">Home labbing</span></Badge>
            <Badge variant="secondary" className="interest-badge"><span data-i18n="gaming">Gaming</span></Badge>
          </div>
          <div className="profile-links" aria-label="Email dan profil sosial" data-i18n-aria-label="socialLabel">
            <div className="email-row">
              <a className="email-link" href="mailto:ramdhon1.ssss@gmail.com"><Mail className="link-icon" aria-hidden="true" />ramdhon1.ssss@gmail.com</a>
              <button className="copy-button" id="copy-email" aria-label="Salin alamat email" data-i18n-aria-label="copyEmail"><svg className="od-icon" aria-hidden="true"><use href="#i-copy" /></svg></button>
            </div>
            <button className="social-link" data-social="github" data-label="GitHub">{socialIcons.github}GitHub <svg className="od-icon" aria-hidden="true"><use href="#i-arrow" /></svg></button>
            <button className="social-link" data-social="linkedin" data-label="LinkedIn">{socialIcons.linkedin}LinkedIn <svg className="od-icon" aria-hidden="true"><use href="#i-arrow" /></svg></button>
            <button className="social-link" data-social="instagram" data-label="Instagram">{socialIcons.instagram}Instagram <svg className="od-icon" aria-hidden="true"><use href="#i-arrow" /></svg></button>
          </div>
        </section>

        <section className="section" id="perjalanan" aria-labelledby="experience-heading">
          <div className="section-heading"><h2 className="section-title" id="experience-heading"><span data-i18n="experienceTitle">Pengalaman</span></h2></div>
          <div className="experience-list">
            <details className="experience-item" name="professional-experience" open suppressHydrationWarning>
              <summary className="experience-summary">
                <span className="company-mark"><img className="company-logo" src="/syncost-app-icon.webp" width="32" height="32" alt="Ikon Syncost" loading="lazy" data-i18n-alt="syncIcon" /></span>
                <span className="experience-title od-field"><strong>PT. Sync Software Technologies</strong><span className="experience-role">Frontend Developer Intern</span></span>
                <Badge variant="secondary" className="experience-date"><span data-i18n="syncPeriod">10 Des 2025 – 8 Mar 2026</span></Badge>
                <span className="experience-toggle" aria-hidden="true"><svg className="od-icon"><use href="#i-chevron" /></svg></span>
              </summary>
              <div className="experience-content">
                <p><span data-i18n="syncSummary">Berkontribusi pada pembaruan antarmuka aplikasi SaaS manajemen biaya berdasarkan desain yang disediakan.</span></p>
                <ul>
                  <li><span data-i18n="syncModals">Memperbarui tampilan tujuh modal untuk pengelolaan biaya produk, pesanan, dan pengiriman.</span></li>
                  <li><span data-i18n="syncToolbar">Menyesuaikan Product Toolbar agar konsisten dengan desain aplikasi.</span></li>
                  <li><span data-i18n="syncOnboarding">Mengimplementasikan pembaruan tampilan onboarding berdasarkan desain yang disediakan.</span></li>
                </ul>
                <div className="experience-tags" aria-label="Teknologi yang digunakan" data-i18n-aria-label="technologiesLabel">
                  {["HTML", "CSS", "JavaScript", "Blade", "Vue", "PHP", "Laravel", "MySQL", "Docker", "Git"].map((name) => <TechBadge key={name} name={name} />)}
                </div>
                <button className="text-link" data-open="syncost-dialog"><span data-i18n="projectDetails">Lihat detail proyek</span> <svg className="od-icon" aria-hidden="true"><use href="#i-arrow" /></svg></button>
              </div>
            </details>
            <details className="experience-item" name="professional-experience" suppressHydrationWarning>
              <summary className="experience-summary">
                <span className="company-mark"><img className="company-logo" src="/yalla-wisata.webp" width="500" height="500" alt="Logo PT. Yalla Wisata Indonesia" loading="lazy" data-i18n-alt="yallaLogo" /></span>
                <span className="experience-title od-field"><strong>PT. Yalla Wisata Indonesia</strong><span className="experience-role">Web Developer Intern</span></span>
                <Badge variant="secondary" className="experience-date"><span data-i18n="yallaPeriod">12 Agu – 12 Nov 2025</span></Badge>
                <span className="experience-toggle" aria-hidden="true"><svg className="od-icon"><use href="#i-chevron" /></svg></span>
              </summary>
              <div className="experience-content">
                <p><span data-i18n="yallaSummary">Berkontribusi bersama tim dalam pengembangan Goyalla Syariah, platform perjalanan untuk layanan Haji dan Umrah.</span></p>
                <ul>
                  <li><span data-i18n="yallaUI">Memperbarui antarmuka pada sisi frontend.</span></li>
                  <li><span data-i18n="yallaBackend">Menangani masalah backend pada panel admin dan vendor.</span></li>
                  <li><span data-i18n="yallaCMS">Mengembangkan CMS FAQ agar admin dapat memperbarui konten tanpa mengubah kode.</span></li>
                </ul>
                <div className="experience-tags" aria-label="Teknologi yang digunakan" data-i18n-aria-label="technologiesLabel">
                  {["HTML", "CSS", "JavaScript", "Blade", "PHP", "Laravel", "MySQL", "Git"].map((name) => <TechBadge key={name} name={name} />)}
                </div>
                <button className="text-link" data-open="goyalla-dialog"><span data-i18n="projectDetails">Lihat detail proyek</span> <svg className="od-icon" aria-hidden="true"><use href="#i-arrow" /></svg></button>
              </div>
            </details>
          </div>
        </section>

        <section className="section" id="proyek" aria-labelledby="projects-title">
          <div className="section-heading">
            <h2 className="section-title" id="projects-title"><span data-i18n="projectsTitle">Proyek pilihan</span></h2>
            <div className="filter-group" role="group" aria-label="Filter jenis proyek" data-i18n-aria-label="filterLabel">
              <Button type="button" variant="ghost" className="filter" data-filter="all" aria-pressed="true"><span data-i18n="all">Semua</span> <small>02</small></Button>
              <Button type="button" variant="ghost" className="filter" data-filter="web" aria-pressed="false">Web</Button>
              <Button type="button" variant="ghost" className="filter" data-filter="mobile" aria-pressed="false">Mobile</Button>
            </div>
          </div>
          <div className="projects-grid od-grid">
            <article className="project-card" data-category="mobile">
              <div className="project-preview"><div className="mobile-shots">
                <ProjectImage src="assets/odomate-home.png" width={720} height={1600} alt="Beranda OdoMate dengan catatan odometer dan statistik perjalanan" translation="odoHomeAlt" />
                <ProjectImage src="assets/odomate-ride.png" width={720} height={1600} alt="Detail perjalanan OdoMate dengan peta rute" translation="odoRideAlt" />
              </div></div>
              <div className="project-copy">
                <p className="project-type"><span data-i18n="odoType">Proyek personal · Dikembangkan mandiri</span></p>
                <h3><button className="project-title" data-open="odomate-dialog" aria-label="Lihat detail proyek OdoMate" data-i18n-aria-label="odoDetailsLabel"><span>OdoMate</span><svg className="od-icon" aria-hidden="true"><use href="#i-arrow" /></svg></button></h3>
                <p className="project-description"><span data-i18n="odoSummary">Aplikasi pencatat odometer, perjalanan GPS, dan jadwal servis motor berdasarkan jarak tempuh.</span></p>
                <div className="project-tags">{["Flutter", "Dart", "Geolocation"].map((name) => <TechBadge key={name} name={name} />)}</div>
              </div>
            </article>
            <article className="project-card" data-category="web">
              <div className="project-preview"><div className="browser-preview">
                <div className="browser-toolbar" aria-hidden="true"><span className="browser-dot" /><span className="browser-dot" /><span className="browser-dot" /><span className="browser-address">Goyalla Syariah / Umrah</span></div>
                <ProjectImage src="assets/goyalla-after.png" width={747} height={405} alt="Screenshot asli pembaruan daftar paket Umrah di Goyalla Syariah" translation="yallaScreenshotAlt" />
              </div></div>
              <div className="project-copy">
                <p className="project-type"><span data-i18n="yallaType">Proyek tim · PT. Yalla Wisata Indonesia</span></p>
                <h3><button className="project-title" data-open="goyalla-dialog" aria-label="Lihat detail proyek Goyalla Syariah" data-i18n-aria-label="yallaDetailsLabel"><span>Goyalla Syariah</span><svg className="od-icon" aria-hidden="true"><use href="#i-arrow" /></svg></button></h3>
                <p className="project-description"><span data-i18n="yallaCard">Platform OTA perjalanan syariah untuk Haji dan Umrah. Berkontribusi pada UI/UX, backend, panel admin dan vendor, serta CMS FAQ bersama tim.</span></p>
                <div className="project-tags">{["Laravel", "Blade", "PHP", "MySQL"].map((name) => <TechBadge key={name} name={name} />)}</div>
              </div>
            </article>
          </div>
          <p className="filter-status" id="filter-status" role="status" aria-live="polite">2 proyek ditampilkan</p>
          <noscript><p>Aktifkan JavaScript untuk filter dan detail proyek. Ringkasan kedua proyek tetap dapat dibaca di atas.</p></noscript>
        </section>

        <section className="section" id="keahlian" aria-labelledby="skills-title">
          <div className="section-heading"><h2 className="section-title" id="skills-title"><span data-i18n="skillsTitle">Keahlian &amp; tech stack</span></h2></div>
          <p className="skills-intro"><span data-i18n="skillsIntro">Perangkat yang aku gunakan untuk membangun produk web dan mobile, serta berkolaborasi dalam pengembangannya.</span></p>
          <div className="skills-list">
            <div className="skill-row"><h3>Web development</h3><div className="skill-tags">{["HTML", "CSS", "JavaScript", "Blade", "PHP", "Laravel", "Vue", "Next.js"].map((name) => <TechBadge key={name} name={name} />)}</div></div>
            <div className="skill-row"><h3>Mobile development</h3><div className="skill-tags">{["Dart", "Flutter"].map((name) => <TechBadge key={name} name={name} />)}</div></div>
            <div className="skill-row"><h3><span data-i18n="databaseTitle">Database</span></h3><div className="skill-tags">{["MySQL", "SQLite"].map((name) => <TechBadge key={name} name={name} />)}</div></div>
            <div className="skill-row"><h3><span data-i18n="toolsTitle">Tools &amp; infrastruktur</span></h3><div className="skill-tags">{["Git", "Docker", "Linux"].map((name) => <TechBadge key={name} name={name} />)}</div></div>
          </div>
        </section>

        <section className="section" id="pendidikan" aria-labelledby="education-heading">
          <div className="section-heading"><h2 className="section-title" id="education-heading"><span data-i18n="education">Pendidikan</span></h2></div>
          <div className="education-list">
            <article className="education-item">
              <span className="education-mark"><img className="education-logo" src="/bsi-logo.webp" width="1500" height="1513" alt="Logo Universitas Bina Sarana Informatika" loading="lazy" data-i18n-alt="universityLogo" /></span>
              <div>
                <h3>Universitas Bina Sarana Informatika</h3>
                <span className="education-role"><span data-i18n="degree">Informatika · Sarjana</span></span>
                <span className="education-year"><span data-i18n="universityYear">Lulus 2026</span></span>
                <p><span data-i18n="educationBody">Selama kuliah, aku mempelajari pengembangan aplikasi dan terlibat dalam penelitian bersama tim di bidang analisis sentimen.</span></p>
                <details className="education-accordion">
                  <summary className="education-accordion-summary"><span data-i18n="educationHighlights">Kegiatan &amp; pencapaian</span><svg className="od-icon education-accordion-toggle" aria-hidden="true"><use href="#i-chevron" /></svg></summary>
                  <ul className="education-highlights">
                  <li>
                    <div className="education-highlight-heading">
                      <strong><span data-i18n="publicationLabel">Publikasi jurnal</span></strong>
                      <Badge variant="secondary">IKOMTI · 2025</Badge>
                    </div>
                    <p className="education-publication-title">Perbandingan Algoritma Klasifikasi Sentimen Pada Ulasan Aplikasi Mobile JKN</p>
                    <p><span data-i18n="publicationBody">Penulis pertama dalam penelitian bersama tim yang dikerjakan pada semester 6 dan dipublikasikan di Jurnal Ilmu Komputer dan Teknologi (IKOMTI).</span></p>
                    <a className="text-link" href="https://doi.org/10.35960/ikomti.v6i3.1891" target="_blank" rel="noopener noreferrer"><span data-i18n="viewPublication">Lihat publikasi</span> <svg className="od-icon" aria-hidden="true"><use href="#i-arrow" /></svg></a>
                  </li>
                  <li>
                    <div className="education-highlight-heading">
                      <strong><span data-i18n="certificationTitle">Sertifikasi Kompetensi Analis Program</span></strong>
                      <Badge variant="secondary">BNSP · 2025</Badge>
                    </div>
                    <p className="education-publication-title">LSP Universitas Bina Sarana Informatika</p>
                    <p><span data-i18n="certificationBody">Memperoleh sertifikasi kompetensi Analis Program di bidang pengembangan perangkat lunak. Cakupan kompetensi meliputi analisis skalabilitas, implementasi algoritma, SQL dan akses basis data, serta kualitas kode melalui dokumentasi, debugging, profiling, code review, dan pengujian unit maupun integrasi.</span></p>
                    <a className="text-link" href="/certificates/sertifikasi-kompetensi-analis-program-bnsp.pdf" download="Sertifikasi-Kompetensi-Analis-Program-Ramadhoni-Gibran-Maulana.pdf"><span data-i18n="downloadCertificate">Unduh sertifikat (PDF)</span> <svg className="od-icon" aria-hidden="true"><use href="#i-down" /></svg></a>
                  </li>
                  </ul>
                </details>
              </div>
            </article>
            <article className="education-item"><span className="education-mark"><img className="education-logo" src="/smkn-1-cibinong-logo.webp" width="320" height="312" alt="Logo SMK Negeri 1 Cibinong" loading="lazy" data-i18n-alt="schoolLogo" /></span><div><h3>SMK Negeri 1 Cibinong</h3><span className="education-role"><span data-i18n="schoolBody">Teknik Kendaraan Ringan</span></span><span className="education-year"><span data-i18n="schoolYear">Lulus 2022</span></span></div></article>
          </div>
        </section>

        <section className="section contact-section" id="kontak" aria-labelledby="contact-title">
          <div className="section-heading"><h2 className="section-title" id="contact-title"><span data-i18n="contactTitle">Mari terhubung.</span></h2></div>
          <p><span data-i18n="contactBody">Ada peluang kerja, ide proyek, atau ingin bertukar cerita? Aku senang mendengarnya.</span></p>
          <div className="contact-actions">
            <a className="text-link" data-email-subject="contact" href="mailto:ramdhon1.ssss@gmail.com?subject=Mari%20terhubung%20%E2%80%94%20Portofolio"><span data-i18n="sendEmail">Kirim email</span> <svg className="od-icon" aria-hidden="true"><use href="#i-arrow" /></svg></a>
            <a className="email-link" href="mailto:ramdhon1.ssss@gmail.com">ramdhon1.ssss@gmail.com</a>
          </div>
        </section>
      </main>

      <footer className="site-footer shell"><span>© 2026 Ramadhoni Gibran Maulana</span><a href="#top"><span data-i18n="backTop">Kembali ke atas</span> <svg className="od-icon" aria-hidden="true"><use href="#i-up" /></svg></a></footer>

      <PortfolioDrawer id="odomate-dialog" labelledBy="odomate-title">
        <div className="dialog-header"><h2 id="odomate-title">OdoMate</h2><button className="round-button" data-close aria-label="Tutup detail OdoMate" data-i18n-aria-label="odoClose"><svg className="od-icon" aria-hidden="true"><use href="#i-close" /></svg></button></div>
        <div className="dialog-content">
          <p className="dialog-meta"><span data-i18n="odoMeta">Proyek personal · Pengembangan mandiri · Flutter &amp; Dart</span></p>
          <p><span data-i18n="odoBody">Aplikasi mobile untuk membantu pemilik motor mencatat odometer, merekam perjalanan berbasis GPS, dan memantau jadwal servis berdasarkan jarak tempuh.</span></p>
          <h3><span data-i18n="contributions">Yang aku kerjakan</span></h3>
          <ul><li><span data-i18n="odoUI">Mengembangkan antarmuka dan alur aplikasi mobile.</span></li><li><span data-i18n="odoGPS">Mencatat odometer serta merekam dan menyimpan perjalanan berbasis geolokasi.</span></li><li><span data-i18n="odoService">Menampilkan statistik berkendara dan jadwal servis berkala.</span></li></ul>
          <h3><span data-i18n="technologiesLabel">Teknologi yang digunakan</span></h3>
          <div className="experience-tags">{["Flutter", "Dart", "Geolocation"].map((name) => <TechBadge key={name} name={name} />)}</div>
          <div className="dialog-gallery mobile">
            <figure><ProjectImage src="assets/odomate-home.png" width={720} height={1600} alt="Screenshot penuh beranda OdoMate" translation="odoFullHomeAlt" /><figcaption><span data-i18n="odoHomeCaption">Beranda dan ringkasan aktivitas</span></figcaption></figure>
            <figure><ProjectImage src="assets/odomate-ride.png" width={720} height={1600} alt="Screenshot penuh detail rute perjalanan OdoMate" translation="odoFullRideAlt" /><figcaption><span data-i18n="odoRideCaption">Detail perjalanan dan rute GPS</span></figcaption></figure>
          </div>
          <h3><span data-i18n="moreTitle">Ingin tahu lebih lanjut?</span></h3>
          <p><span data-i18n="odoMore">Tautan repository dan demo belum dicantumkan. Hubungi aku untuk berdiskusi tentang proyek ini.</span></p>
          <a className="text-link" data-email-subject="odomate" href="mailto:ramdhon1.ssss@gmail.com?subject=Tentang%20proyek%20OdoMate"><span data-i18n="odoAsk">Tanya tentang OdoMate</span> <svg className="od-icon" aria-hidden="true"><use href="#i-arrow" /></svg></a>
        </div>
      </PortfolioDrawer>
      <PortfolioDrawer id="goyalla-dialog" labelledBy="goyalla-title">
        <div className="dialog-header"><h2 id="goyalla-title">Goyalla Syariah</h2><button className="round-button" data-close aria-label="Tutup detail Goyalla Syariah" data-i18n-aria-label="yallaClose"><svg className="od-icon" aria-hidden="true"><use href="#i-close" /></svg></button></div>
        <div className="dialog-content">
          <p className="dialog-meta"><span data-i18n="yallaMeta">Proyek tim · PT. Yalla Wisata Indonesia · 12 Agustus–12 November 2025</span></p>
          <p><span data-i18n="yallaBody">Goyalla Syariah merupakan platform online travel agent (OTA) untuk layanan perjalanan syariah, khususnya Haji dan Umrah. Dalam program magang, aku berkontribusi bersama tim dalam pengembangan dan pemeliharaan platform.</span></p>
          <h3><span data-i18n="teamContributions">Kontribusi dalam tim</span></h3>
          <ul><li><span data-i18n="yallaDetailUI">Memperbarui antarmuka dan pengalaman pengguna (UI/UX) pada sisi frontend.</span></li><li><span data-i18n="yallaDetailBackend">Menangani permasalahan backend serta meningkatkan stabilitas panel admin dan vendor.</span></li><li><span data-i18n="yallaDetailCMS">Mengembangkan fitur CMS untuk pengelolaan FAQ, sehingga admin dapat memperbarui konten secara mandiri tanpa mengubah kode.</span></li></ul>
          <h3><span data-i18n="technologiesLabel">Teknologi yang digunakan</span></h3>
          <div className="experience-tags">{["HTML", "CSS", "JavaScript", "Blade", "PHP", "Laravel", "MySQL", "Git"].map((name) => <TechBadge key={name} name={name} />)}</div>
        </div>
      </PortfolioDrawer>
      <PortfolioDrawer id="syncost-dialog" labelledBy="syncost-title">
        <div className="dialog-header"><h2 id="syncost-title">Syncost</h2><button className="round-button" data-close aria-label="Tutup detail Syncost" data-i18n-aria-label="syncostClose"><svg className="od-icon" aria-hidden="true"><use href="#i-close" /></svg></button></div>
        <div className="dialog-content">
          <p className="dialog-meta"><span data-i18n="syncostMeta">Pengalaman kerja · PT. Sync Software Technologies · 10 Des 2025–8 Mar 2026</span></p>
          <p><span data-i18n="syncostBody">Syncost membantu pemilik toko Shopify memahami profit dengan merangkum biaya produk, pengiriman, biaya transaksi, iklan, dan pengeluaran lain dalam satu dashboard.</span></p>
          <h3><span data-i18n="contributions">Yang aku kerjakan</span></h3>
          <ul><li><span data-i18n="syncModals">Memperbarui tampilan tujuh modal untuk pengelolaan biaya produk, pesanan, dan pengiriman.</span></li><li><span data-i18n="syncToolbar">Menyesuaikan Product Toolbar agar konsisten dengan desain aplikasi.</span></li><li><span data-i18n="syncOnboarding">Mengimplementasikan pembaruan tampilan onboarding berdasarkan desain yang disediakan.</span></li></ul>
          <h3><span data-i18n="technologiesLabel">Teknologi yang digunakan</span></h3>
          <div className="experience-tags">{["HTML", "CSS", "JavaScript", "Blade", "Vue", "PHP", "Laravel", "MySQL", "Docker", "Git"].map((name) => <TechBadge key={name} name={name} />)}</div>
          <a className="text-link" href="https://www.syncost.com/" target="_blank" rel="noreferrer"><span data-i18n="syncostWebsite">Kunjungi situs Syncost</span> <svg className="od-icon" aria-hidden="true"><use href="#i-arrow" /></svg></a>
        </div>
      </PortfolioDrawer>
      <PortfolioDrawer id="profile-dialog" labelledBy="profile-title" className="notice-dialog">
        <div className="dialog-header"><h2 id="profile-title"><span data-i18n="profileDialogTitle">Mari terhubung</span></h2><button className="round-button" data-close aria-label="Tutup informasi kontak" data-i18n-aria-label="profileDialogClose"><svg className="od-icon" aria-hidden="true"><use href="#i-close" /></svg></button></div>
        <div className="dialog-content"><p id="profile-message" /><a className="button button-primary" href="mailto:ramdhon1.ssss@gmail.com"><span data-i18n="contactEmail">Hubungi lewat email</span> <svg className="od-icon" aria-hidden="true"><use href="#i-arrow" /></svg></a></div>
      </PortfolioDrawer>
      <div className="toast" id="toast" role="status" aria-live="polite" aria-atomic="true" />
    </>
  );
}
