import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "@/utils/api";

import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Header />
      <div className="mx-auto w-screen max-w-7xl">
        <Component {...pageProps} />
      </div>
      <Footer />
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
