import { GetStaticProps } from 'next';
import { collection, getDocs } from 'firebase/firestore';

import data from '@/_data/homeScreen/pt-br.json';

import { db } from '@/src/firebase/config';

import { ProductProps } from '@/src/@types/products';

import Seo from '@/src/components/Seo';
import HomeScreen from '@/src/screens/HomeScreen';

interface ProductsProps {
    products: ProductProps[];
}

export default function Home({ products }: ProductsProps) {
    const { head } = data;
    return (
        <>
            <Seo title={head.title} />

            <HomeScreen products={products} />
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const collectionRef = collection(db, 'products');

    const querySnapshot = await getDocs(collectionRef);

    if (querySnapshot.empty) {
        return {
            props: {
                products: [],
            },
        };
    }

    const products = querySnapshot.docs.map((doc) => {
        const data = doc.data();

        return {
            ...data,
        };
    });

    return {
        props: {
            products: products,
        },
        revalidate: 60 * 60 * 24 * 2, // 2 days
    };
};
