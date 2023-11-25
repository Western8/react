import '@/styles/globals.css';
import '@/styles/index.css';
import '@/styles/App.module.css';
import '@/styles/Header.module.css';
import '@/styles/Home1.module.css';
import '@/styles/Pagination.module.css';
import '@/styles/People.module.css';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
