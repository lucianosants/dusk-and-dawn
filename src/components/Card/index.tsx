import { useContext } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

import { CartContext } from '@/src/context/CartContext';

import Box from '../Box';
import Text from '../Text';
import ProductScreen from '@/src/screens/ProductScreen';

type ProductProps = {
    id: string;
    available: boolean;
    category: string;
    cover: string;
    name: string;
    price: number;
    description: string;
};

export default function Card({ ...product }: ProductProps) {
    const { addToCart } = useContext(CartContext);

    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <Box className="flex cursor-pointer flex-col overflow-hidden rounded-lg w-[45%] sm:w-[40%] md:w-[30%] lg:w-[15%] bg-neutral-100 hover:shadow-xl border hover:border-primary-500 hover:bg-neutral-50">
                    <img src={product.cover} alt="" className="w-full h-full" />

                    <Box className="flex flex-col px-3 py-3 border-t border-neutral-variant-300">
                        <Text as="span" className="text-neutral-900 text-break">
                            {product.name}
                        </Text>

                        <Text
                            as="span"
                            className="text-lg font-bold text-neutral-variant-999">
                            {product.price}
                        </Text>
                    </Box>
                </Box>
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 w-screen h-full bg-neutral-variant-700 opacity-80" />

                <Dialog.Content className="fixed w-full max-w-2xl p-6 -translate-x-1/2 -translate-y-1/2 sm:p-10 top-80 left-1/2 bg-neutral-variant-50 rounded-xl">
                    <Dialog.Close className="px-4 py-2 mb-5 font-semibold rounded-lg text-neutral-variant-999 bg-primary-500 hover:bg-primary-600 hover:text-primary-100">
                        Voltar
                    </Dialog.Close>

                    <Box>
                        <ProductScreen
                            description={product.description}
                            cover={product.cover}
                            isAvailable={product.available}
                            price={product.price}
                            name={product.name}
                            id={product.id}
                            addToCart={() => addToCart({ ...product })}
                        />
                    </Box>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
