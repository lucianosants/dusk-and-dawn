import Box from '../Box';

import data from '@/_data/data.json';
import Card from '../Card';

interface SectionProps {
    currentCategory: string;
}

export default function Section({ currentCategory }: SectionProps) {
    return (
        <Box as="section">
            <Box className="flex flex-wrap justify-start gap-3 lg:gap-[1.3rem] md:gap-[2.1rem]">
                {data.categories
                    .filter((item) => {
                        const category = item.category;

                        return category === currentCategory || '';
                    })
                    .map((product, i) => {
                        return (
                            <Card
                                key={`${i} - ${product.id}`}
                                available={true}
                                category={product.category}
                                cover={product.cover}
                                name={product.name}
                                price={product.price}
                            />
                        );
                    })}
            </Box>
        </Box>
    );
}
