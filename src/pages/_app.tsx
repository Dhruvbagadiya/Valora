import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import Navbar from "@App/components/Navbar";
import Footer from "@App/components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      disableTransitionOnChange
      defaultTheme="system"
      attribute="class"
    >
      <a
        href="#main"
        className="fixed p-2 top-0 left-0 -translate-y-full focus:translate-y-0"
      >
        Skip to main content
      </a>
      <Navbar />
      <div className="pt-[5rem] flex flex-col max-w-3xl mx-auto min-h-full px-4">
        <main id="main">
          <Component {...pageProps} />
        </main>
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
