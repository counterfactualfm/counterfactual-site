import "./globals.css";

import Footer from "@/components/footer";
import { IBM_Plex_Serif } from "next/font/google";

import Container from "@/components/container";

const ibm_plex_serif = IBM_Plex_Serif({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ibm-plex-serif",
  weight: ["400", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${ibm_plex_serif.variable} font-serif text-neutral-950`}
    >
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body>
        <div className="min-h-screen">
          <main>
            <Container>{children}</Container>
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
