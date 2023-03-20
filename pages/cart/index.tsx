import data from '@/_data/cartScreen/pt-br.json';

import Seo from '@/src/components/Seo';
import CartScreen from '@/src/screens/CartScreen';

export default function Cart() {
    return (
        <>
            <Seo title={data.head.title} />
            <CartScreen />
        </>
    );
}
