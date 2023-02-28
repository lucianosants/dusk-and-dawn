import Head from 'next/head';

import HomeScreen from '@/src/screens/HomeScreen';

export default function Home() {
    return (
        <>
            <Head>
                <title>Dusk&Dawn</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HomeScreen />
        </>
    );
}
