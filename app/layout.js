import "./globals.css";

import Footer from "@/components/footer";

import Container from "@/components/container";
import { draftMode } from "next/headers";

export default function RootLayout({ children }) {
  const { isEnabled } = draftMode();

  return (
    <html lang="en">
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
