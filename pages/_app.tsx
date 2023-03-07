import Footer from '@/src/patterns/Footer';
import Header from '@/src/patterns/Header';
import '@/src/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}
