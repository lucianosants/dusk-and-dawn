import Image from 'next/image';

import Box from '../Box';
import Text from '../Text';

interface HeroProps {
    title: string;
    subtitle: string;
    description: string;
    image: string;
}

export default function Hero({
    title,
    subtitle,
    description,
    image,
}: HeroProps) {
    return (
        <Box
            as="section"
            className="w-screen mx-auto mb-8 bg-gradient-to-l from-primary-600 to-danger-500">
            <Box className="container flex items-center justify-between px-4 mx-auto p-container">
                <Box className="flex flex-col w-full lg:w-1/2">
                    <Text
                        as="h1"
                        className="pb-5 mb-4 text-3xl font-bold md:text-4xl lg:text-5xl text-neutral-50">
                        {title}
                    </Text>

                    <Text
                        as="h2"
                        className="mb-2 text-lg font-medium text-neutral-variant-50">
                        {subtitle}
                    </Text>

                    <Text as="h3" className="text-sm text-neutral-variant-50">
                        {description}
                    </Text>
                </Box>

                <Image
                    src={image}
                    alt=""
                    width={360}
                    height={360}
                    className="hidden rounded shadow-xl lg:block"
                />
            </Box>
        </Box>
    );
}
