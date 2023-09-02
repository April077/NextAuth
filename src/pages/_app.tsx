import AppBar from "../components/Appbar";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <AppBar />
      <Component {...pageProps} />
    </SessionProvider>
  );
}
