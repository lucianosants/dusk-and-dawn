import Link from 'next/link';
import Box from '../Box';
import Text from '../Text';

export default function Card() {
    return (
        <Link
            href="#"
            className="flex flex-col overflow-hidden rounded-lg w-[45%] sm:w-[40%] md:w-[30%] lg:w-[15%] bg-neutral-100 hover:shadow-xl border hover:border-primary-500 hover:bg-neutral-50">
            <img
                src="/images/headphone_b626ee22179d.png"
                alt=""
                className="w-full h-full"
            />

            <Box className="flex flex-col px-3 py-3 border-t border-neutral-variant-300">
                <Text as="span" className="text-neutral-900 text-break">
                    HeadPhone Gamer B729
                </Text>

                <Text
                    as="span"
                    className="text-lg font-bold text-neutral-variant-999">
                    R$ 75,89
                </Text>
            </Box>
        </Link>
    );
}
