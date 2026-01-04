import Navbar from "@/components/navbar/Navbar";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";

const montSerrat = Montserrat({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montSerrat.className}>
      <body>
        {/* navbar */}
        <Navbar></Navbar>

        {/* main content */}

        <main className=" bg-linear-to-b from-white to-blue-50">
          {children}
        </main>

        {/* footer */}

        <Footer></Footer>
      </body>
    </html>
  );
}
