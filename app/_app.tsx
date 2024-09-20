// _app.tsx
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return <Component {...pageProps} router={router} />;
}

export default MyApp;