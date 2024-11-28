import { AppProps } from 'next/app';
import PageLoader from '../components/PageLoader';
import '../styles/globals.css';


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <PageLoader />
      <Component {...pageProps} />
    </>
  );
}
