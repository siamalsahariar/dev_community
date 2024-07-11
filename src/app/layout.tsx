// app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
import Head from "next/head";
import "../../styles/globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  icons: {
    icon: "https://media.dev.to/cdn-cgi/image/width=180,height=,fit=scale-down,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F8j7kvp660rqzt99zui8e.png",
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <html lang="en">
        <Script
          src="https://code.jquery.com/jquery-3.6.0.min.js"
          integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRuIjAZK5h2eJoV/nER6Qlg6Z4AQVnpEuqFsT9xN5"
          crossOrigin="anonymous"
        ></Script>
        <Head>
          <Link rel="icon" href="/favicon.ico" />
          {/* You can add more meta tags or link tags here */}
        </Head>
        <body>
          <Header />
          <main className="main-content">{children}</main>
          <Footer />
        </body>
      </html>
    </>
  );
};

export default RootLayout;
