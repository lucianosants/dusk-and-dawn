import { useContext } from 'react';

import data from '@/_data/cartScreen/pt-br.json';

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

    const { screen } = data;

    const products = cart.map((product) => {
        return {
            price: product.product._id_stripe,
            quantity: product.quantity,
        };
    });

    const handleCheckout = async () => {
        await checkout(products);
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
                        {screen.title}
                    </Text>

                    <Box className="flex flex-col w-full gap-6">
                        {cart?.map((product, index) => {
                            const { _id_stripe, cover, name, price } =
                                product.product;
                            return (
                                <Box
                                    key={`${index} - ${_id_stripe}`}
                                    className="flex flex-col items-center justify-start w-full p-3 shadow sm:items-start sm:justify-between bg-neutral-50 sm:flex-row">
                                    <ProductCart
                                        cover={cover}
                                        name={name}
                                        price={price}
                                        quantity={product.quantity}
                                        add={() => addQuantity(_id_stripe)}
                                        remove={() =>
                                            removeQuantity(_id_stripe)
                                        }
                                        deleteItem={() =>
                                            removeToCart(_id_stripe)
                                        }
                                    />
                                </Box>
                            );
                        })}
                    </Box>

                    <Box className="flex flex-col items-center justify-start w-full p-5 mt-8 shadow sm:items-center sm:justify-between bg-neutral-50 sm:flex-row">
                        <Text as="p" className="mb-6 text-xl font-bold sm:mb-0">
                            {`${screen.total_price}: `}
                            <Text className="p-2 rounded-lg text-primary-50 bg-primary-600">
                                <Text className="font-normal">R$</Text>{' '}
                                {totalPrice}
                            </Text>{' '}
                        </Text>

                        <Button type="button" onClick={handleCheckout}>
                            {screen.btn_buy}
                        </Button>
                    </Box>
                </Box>
            )}
        </Container>
    );
}
