import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "G Industries Consolidated | Tax & Accounting Services | Durban",
  description: "G Industries Consolidated — Tax specialists serving individuals and businesses across KZN for over 25 years with personalised, professional service.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        {/* <Header /> */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
