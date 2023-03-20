import Image from 'next/image';

import Box from '@/src/components/Box';
import Button from '@/src/components/Button';
import Text from '@/src/components/Text';
import { ProductProps } from '@/src/@types/products';
import { useState } from 'react';
import Notification from '@/src/components/Notification';

interface Props extends ProductProps {
    addToCart: () => void;
}

export default function ProductScreen({
    cover,
    description,
    available,
    price,
    name,
    addToCart,
}: Props) {
    const [isOpen, setIsOpen] = useState(false);

    const handleAddItem = () => {
        addToCart();

        setIsOpen(true);
    };

    return (
        <>
            <Notification isActive={isOpen} />
            <Box className="flex flex-col justify-between sm:flex-row">
                <Image
                    src={cover}
                    width={256}
                    height={256}
                    alt=""
                    className="flex self-center justify-center mb-4 rounded shadow-xl sm:mb-0 max-h-64 sm:self-start"
                />

                <Box>
                    <Text
                        as="h4"
                        className="font-bold text-neutral-800 text-end">
                        {name}
                    </Text>

                    <Text
                        as="p"
                        className="mb-2 text-xl font-bold text-right text-primary-600">
                        R${price}
                    </Text>

                    <Text
                        as="p"
                        className={`mb-2 text-sm text-right ${
                            available ? 'text-secondary-900' : 'text-danger-600'
                        } `}>
                        {available ? 'Disponivel em estoque' : 'Não disponivel'}
                    </Text>

                    <Box className="flex flex-col items-end justify-end gap-2 mb-2 ">
                        <Button
                            onClick={handleAddItem}
                            disabled={!available ? true : false}>
                            Adicionar ao carrinho
                        </Button>
                    </Box>

                    <Text as="p" className="font-bold text-neutral-variant-999">
                        Sobre o produto
                    </Text>

                    <Text as="p" className="w-64 text-sm">
                        {description}
                    </Text>
                </Box>
            </Box>
        </>
    );
}
