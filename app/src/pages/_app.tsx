// src/pages/_app.tsx
import { withTRPC } from "@trpc/next";
import type { AppRouter } from "../server/router";
import superjson from "superjson";
import { SessionProvider } from "next-auth/react";
import { ReactElement, ReactNode, useEffect } from "react";
import { AppProps } from "next/app";
import { NextPage } from "next";
import "../styles/globals.css";
import "../styles/fonts.css";
import { applyThemePreference } from "../utils/theme";
import { THEME_TYPES } from "../constants";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) => {

  useEffect(() => {
    const existingPreference = localStorage.getItem("theme");
    if (existingPreference) {
      applyThemePreference(existingPreference);
    } else {
      if (localStorage.theme === THEME_TYPES.THEME_DARK
        || (!('theme' in localStorage)
          && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add(THEME_TYPES.THEME_DARK);
        applyThemePreference(THEME_TYPES.THEME_DARK);
      } else {
        document.documentElement.classList.remove(THEME_TYPES.THEME_DARK);
        applyThemePreference(THEME_TYPES.THEME_LIGHT);
      }
    }
  }, []);

  const getLayout = Component.getLayout ?? ((page) => page);
  const layout = getLayout(<Component {...pageProps} />);

  return <SessionProvider session={session}>{layout}</SessionProvider>;
}

const getBaseUrl = () => {
  if (typeof window !== "undefined") {
    return "";
  }
  if (process.browser) return ""; // Browser should use current path
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url

  return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
};

export default withTRPC<AppRouter>({
  config({ ctx }) {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    const url = `${getBaseUrl()}/api/trpc`;

    return {
      url,
      transformer: superjson,
      /**
       * @link https://react-query.tanstack.com/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: false,
})(MyApp);
