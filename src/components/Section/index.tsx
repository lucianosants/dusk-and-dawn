import { ProductProps } from '@/src/@types/products';

import Box from '../Box';
import Card from '../Card';

interface SectionProps {
    currentCategory: string;
    products: ProductProps[];
}

export default function Section({ currentCategory, products }: SectionProps) {
    return (
        <Box as="section">
            <Box className="flex flex-wrap justify-start gap-3 lg:gap-[1.3rem] md:gap-[2.1rem]">
                {products
                    .filter((item) => {
                        const category = item.category;

                        return category === currentCategory || '';
                    })
                    .map((product, i) => {
                        return (
                            <Card
                                key={`${i} - ${product.name}`}
                                available={product.available}
                                category={product.category}
                                cover={product.cover}
                                name={product.name}
                                price={product.price}
                                description={product.description}
                                _id_stripe={product._id_stripe}
                            />
                        );
                    })}
            </Box>
        </Box>
    );
}
