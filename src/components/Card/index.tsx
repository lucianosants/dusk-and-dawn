import Link from 'next/link';
import Box from '../Box';
import Text from '../Text';

type ProductProps = {
    id?: string;
    available: boolean;
    category: string;
    cover: string;
    name: string;
    price: number;
};

export default function Card({ ...product }: ProductProps) {
    return (
        <Link
            href="#"
            className="flex flex-col overflow-hidden rounded-lg w-[45%] sm:w-[40%] md:w-[30%] lg:w-[15%] bg-neutral-100 hover:shadow-xl border hover:border-primary-500 hover:bg-neutral-50">
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
        </Link>
    );
}
