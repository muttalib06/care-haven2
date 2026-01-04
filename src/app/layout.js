import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import Footer from "@/components/footer/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* navbar */}
        <Navbar></Navbar>

        {/* main content */}

        <main className=" bg-linear-to-b from-white to-blue-50">{children}</main>

        {/* footer */}

      <Footer></Footer>
      </body>
    </html>
  );
}
