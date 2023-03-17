import { useContext } from 'react';

import { CartContext } from '@/src/context/CartContext';

import { checkout } from '@/src/utils/checkout';

import Box from '@/src/components/Box';
import Container from '@/src/components/Container';
import Text from '@/src/components/Text';
import EmptyCart from '@/src/components/EmptyCart';
import ProductCart from '@/src/components/ProductCart';
import Button from '@/src/components/Button';

export default function CartScreen() {
    const { cart, addQuantity, removeQuantity, getTotalPrice, removeToCart } =
        useContext(CartContext);

    const totalPrice = Number(getTotalPrice()).toFixed(2);

    const handleCheckout = async () => {
        await checkout();
    };

    return (
        <Container isCol={!cart.length}>
            {!cart.length ? (
                <EmptyCart />
            ) : (
                <Box className="flex flex-col items-start w-full py-5 mt-8">
                    <Text
                        as="h2"
                        className="w-full mb-4 text-2xl font-bold text-center sm:text-start">
                        Carrinho de Compras
                    </Text>

                    <Box className="flex flex-col w-full gap-6">
                        {cart?.map((product, index) => {
                            const {
                                id,
                                available,
                                category,
                                cover,
                                name,
                                price,
                            } = product.product;
                            return (
                                <Box
                                    key={`${index} - ${id}`}
                                    className="flex flex-col items-center justify-start w-full p-3 shadow sm:items-start sm:justify-between bg-neutral-50 sm:flex-row">
                                    <ProductCart
                                        cover={cover}
                                        name={name}
                                        price={price}
                                        quantity={product.quantity}
                                        add={() => addQuantity(id)}
                                        remove={() => removeQuantity(id)}
                                        deleteItem={() => removeToCart(id)}
                                    />
                                </Box>
                            );
                        })}
                    </Box>

                    <Box className="flex flex-col items-center justify-start w-full p-5 mt-8 shadow sm:items-start sm:justify-between bg-neutral-50 sm:flex-row">
                        <Text as="p" className="text-xl font-bold">
                            Valor Total:{' '}
                            <Text className="p-2 rounded-lg text-primary-50 bg-primary-600">
                                <Text className="font-normal">R$</Text>{' '}
                                {totalPrice}
                            </Text>{' '}
                        </Text>

                        <Button type="button" onClick={handleCheckout}>
                            Finalizar Compras
                        </Button>
                    </Box>
                </Box>
            )}
        </Container>
    );
}
