import { useState } from 'react';
import * as ToggleGroup from '@radix-ui/react-toggle-group';

import data from '@/_data/homeScreen/pt-br.json';

import Container from '@/src/components/Container';
import Box from '@/src/components/Box';
import Hero from '@/src/components/Hero';
import Section from '@/src/components/Section';
import { ProductProps } from '@/src/@types/products';

type Categories = 'technology' | 'house and decoration' | 'clothes';

interface HomeScreenProps {
    products: ProductProps[];
}

export default function HomeScreen({ products }: HomeScreenProps) {
    const [currentCategory, setCurrentCategory] =
        useState<Categories>('technology');

    const { body } = data;
    const { title, subtitle, description, image } = body.hero;

    const handleCategoryChange = (category: string) => {
        if (category === 'Tecnologia') setCurrentCategory('technology');
        if (category === 'Casa e Decoração')
            setCurrentCategory('house and decoration');
        if (category === 'Roupas') setCurrentCategory('clothes');
    };

    return (
        <Container isCol>
            <Hero
                title={title}
                subtitle={subtitle}
                description={description}
                image={image}
            />

            <Box className="flex flex-col w-full min-h-screen gap-8">
                <h2 className="text-2xl font-bold text-neutral-800">
                    {data.body.title_category}
                </h2>

                <ToggleGroup.Root
                    className="flex flex-wrap gap-2 pb-3"
                    type="single">
                    {body.categories.map((category, i) => {
                        return (
                            <ToggleGroup.Item
                                key={`${i} - ${category}`}
                                onClick={() => handleCategoryChange(category)}
                                className="px-3 py-3 font-semibold rounded-lg text-neutral-999 bg-neutral-200 hover:bg-neutral-300 data-[state=on]:text-neutral-50 data-[state=on]:bg-primary-600"
                                value={category}>
                                {category}
                            </ToggleGroup.Item>
                        );
                    })}
                </ToggleGroup.Root>

                <Section
                    products={products}
                    currentCategory={currentCategory}
                />
            </Box>
        </Container>
    );
}
