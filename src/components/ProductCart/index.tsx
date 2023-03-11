import Image from 'next/image';
import React from 'react';
import Box from '../Box';
import Button from '../Button';
import Text from '../Text';

type Props = {
    cover: string;
    name: string;
    price: number;
};

interface ProductInfosProps extends Props {}

const ProductInfos = ({ cover, name, price }: ProductInfosProps) => {
    return (
        <Box className="flex flex-col items-center gap-6 sm:items-start sm:flex-row">
            <Image
                src={cover}
                width={150}
                height={150}
                alt=""
                className="rounded-lg shadow-lg"
            />

            <Box>
                <Text as="p" className="mt-4 text-lg sm:mt-0">
                    {name}
                </Text>

                <Text
                    as="p"
                    className="mt-4 text-2xl font-bold sm:mt-0 text-neutral-variant-800 ">
                    R${price}
                </Text>

                <Text
                    as="p"
                    className="mt-6 cursor-pointer text-tertiary-500 hover:text-primary-700">
                    Informações do Produto
                </Text>
            </Box>
        </Box>
    );
};

interface ProductProps extends Props {
    quantity: number;
    add: () => void;
    remove: () => void;
    deleteItem: () => void;
}

export default function ProductCart({
    cover,
    name,
    price,
    quantity,
    add,
    remove,
    deleteItem,
}: ProductProps) {
    return (
        <>
            <ProductInfos cover={cover} name={name} price={price} />

            <Box className="sm:text-end text-start">
                <Text as="p" className="mt-4 text-sm sm:mt-0">
                    Total
                </Text>

                <Text
                    as="p"
                    className="mt-4 text-2xl font-bold sm:mt-0 text-neutral-variant-800">
                    R${Number(price * quantity).toFixed(2)}
                </Text>

                <Box className="flex items-center gap-3 my-3 mb-2 font-medium">
                    <Button onClick={remove}>-</Button>

                    <Text className="text-3xl font-bold text-primary-700">
                        {quantity}
                    </Text>

                    <Button onClick={add}>+</Button>
                    <Button onClick={deleteItem}>Remover</Button>
                </Box>
            </Box>
        </>
    );
}
