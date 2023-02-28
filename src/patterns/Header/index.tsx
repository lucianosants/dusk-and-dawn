import { FormEvent, useState } from 'react';
import Link from 'next/link';
import {
    AiOutlineSearch,
    AiOutlineShoppingCart,
    AiOutlineUser,
} from 'react-icons/ai';

import Box from '@/src/components/Box';
import Text from '@/src/components/Text';

export default function Header() {
    const [count, setCount] = useState(0);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        alert('Disponível em breve...');
    };

    return (
        <Box className="fixed flex justify-center w-full h-16 bg-primary-600">
            <Box
                as="header"
                className="container flex items-center justify-between flex-1 h-full px-4">
                <Link href="/">
                    <Text className="text-2xl italic font-black text-white hover:opacity-90">
                        Dusk&Dawn
                    </Text>
                </Link>

                <Box className="w-[60%]">
                    <form
                        onSubmit={handleSubmit}
                        className="flex items-center justify-between flex-1 gap-3 px-3 py-2 rounded-full bg-neutral-variant-50 focus-within:bg-primary-50 focus-within:outline hover:bg-primary-50">
                        <label htmlFor="search" className="sr-only">
                            Pesquise por um produto em estoque
                        </label>

                        <input
                            className="w-full text-sm font-medium bg-transparent border-r-2 outline-none"
                            type="text"
                            id="search"
                            autoComplete="off"
                            placeholder="Pesquise por um produto..."
                        />

                        <button type="submit" title="Pesquisar produto">
                            <Text
                                as="span"
                                className="text-neutral-variant-600 hover:text-neutral-variant-999">
                                <AiOutlineSearch size={20} />
                            </Text>
                        </button>
                    </form>
                </Box>

                <Box className="flex gap-6">
                    <Link href="#">
                        <Text
                            data-count={count}
                            as="span"
                            className="cart__notification">
                            <AiOutlineShoppingCart size={28} />
                        </Text>
                    </Link>

                    <Link href="/auth/register">
                        <Text
                            as="span"
                            className="text-neutral-variant-50 hover:text-neutral-variant-100">
                            <AiOutlineUser size={28} />
                        </Text>
                    </Link>
                </Box>
            </Box>
        </Box>
    );
}
