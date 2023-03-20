import Image from 'next/image';
import { useRouter } from 'next/router';

import data from '@/_data/cartScreen/pt-br.json';

import Box from '../Box';
import Button from '../Button';
import Text from '../Text';

export default function EmptyCart() {
    const router = useRouter();

    const { empty } = data;

    return (
        <Box className="flex flex-col items-center py-5 mt-8">
            <Image
                width={260}
                height={260}
                alt=""
                src={'/images/empty_cart.svg'}
            />

            <Text as="p" className="my-8">
                {empty.empty_description}
            </Text>

            <Button onClick={() => router.push('/')}>
                {empty.empty_btn_function}
            </Button>
        </Box>
    );
}
