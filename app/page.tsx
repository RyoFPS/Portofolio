import Script from "next/script";
import { PortfolioContent } from "@/app/portfolio-content";

export default function Home() {
  return (
    <>
      <Script src="/portfolio/i18n.js" strategy="afterInteractive" />
      <Script src="/portfolio/app.js" strategy="afterInteractive" />
      <PortfolioContent />
    </>
  );
}
