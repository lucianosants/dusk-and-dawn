import Image from 'next/image';
import { useRouter } from 'next/router';

import Box from '../Box';
import Button from '../Button';
import Text from '../Text';

export default function EmptyCart() {
    const router = useRouter();

    return (
        <Box className="flex flex-col items-center py-5 mt-8">
            <Image
                width={260}
                height={260}
                alt=""
                src={'/images/empty_cart.svg'}
            />

            <Text as="p" className="my-8">
                Seu carrinho está vazio.
            </Text>

            <Button onClick={() => router.push('/')}>Iniciar compras</Button>
        </Box>
    );
}
