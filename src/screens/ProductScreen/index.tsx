import Box from '@/src/components/Box';
import Button from '@/src/components/Button';
import Text from '@/src/components/Text';
import Image from 'next/image';

export default function ProductScreen() {
    return (
        <Box className="flex flex-col justify-between sm:flex-row">
            <Image
                src="/images/headphone_b626ee22179d.png"
                width={256}
                height={256}
                alt=""
                className="flex self-center justify-center mb-4 rounded shadow-xl sm:mb-0 max-h-64 sm:self-start"
            />

            <Box>
                <Text as="h4" className="font-bold text-neutral-800 text-end">
                    HeadPhone Gamer B729
                </Text>

                <Text
                    as="p"
                    className="mb-2 text-xl font-bold text-right text-primary-600">
                    R$75,89
                </Text>

                <Text
                    as="p"
                    className="mb-2 text-sm text-right text-secondary-900">
                    Disponivel em estoque
                </Text>

                <Box className="flex flex-col items-end justify-end gap-2 mb-2 ">
                    <Button>Adicionar ao carrinho</Button>
                </Box>

                <Text as="p" className="font-bold text-neutral-variant-999">
                    Sobre o produto
                </Text>

                <Text as="p" className="w-64 text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus, non deserunt maxime illum commodi, sit
                    consectetur at facere laudantium eligendi
                </Text>
            </Box>
        </Box>
    );
}
