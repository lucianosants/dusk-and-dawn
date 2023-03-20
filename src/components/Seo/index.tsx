import Head from 'next/head';

interface SeoProps {
    title: string;
}

export default function Seo({ title }: SeoProps) {
    const description =
        'A Dusk & Dawn é uma loja de varejo online com uma ampla variedade de produtos, incluindo moda, tecnologia e casa. Oferecemos envio rápido e excelente atendimento ao cliente, ajudando nossos clientes a encontrar seu próprio estilo e se sentirem confiantes e bonitos o dia todo.';

    return (
        <Head>
            <title>{title}</title>

            <meta name="description" content={description} />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <meta charSet="utf-8" />

            <meta
                property="og:url"
                content={'https://dusk-and-dawn.vercel.app'}
            />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={'/images/hero_pattern.svg'} />

            <meta name="author" content="Dusk and Dawn" />
            <meta name="creator" content="Luciano Santos - lucianosants" />

            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}
