import Navbar from "@/components/layout/Navbar";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Providers from "./Providers";

const montSerrat = Montserrat({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montSerrat.className}>
      <body>
        <Providers>
          {/* navbar */}
          <Navbar></Navbar>

          {/* main content */}

          <main className=" bg-linear-to-b from-white to-blue-50">
            {children}
          </main>

          {/* footer */}

          <Footer></Footer>
        </Providers>
      </body>
    </html>
  );
}
