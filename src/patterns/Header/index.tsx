import { FormEvent, useContext } from 'react';
import Link from 'next/link';
import { AiOutlineSearch, AiOutlineUser } from 'react-icons/ai';
import { HiOutlineShoppingBag } from 'react-icons/hi';

import { CartContext } from '@/src/context/CartContext';

import data from '@/_data/header/pt-br.json';

import Box from '@/src/components/Box';
import Text from '@/src/components/Text';

export default function Header() {
    const { cart } = useContext(CartContext);

    const { brand, label_search, placeholder_search } = data;

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        alert('Disponível em breve...');
    };

    return (
        <Box className="fixed flex justify-center w-full h-16 bg-gradient-to-r from-danger-600 to-primary-600">
            <Box
                as="header"
                className="container flex items-center justify-between flex-1 h-full px-4">
                <Link href="/">
                    <Text className="text-2xl italic font-black text-neutral-variant-50 hover:opacity-90">
                        {brand}
                    </Text>
                </Link>

                <Box className="w-[60%]">
                    <form
                        onSubmit={handleSubmit}
                        className="flex items-center justify-between flex-1 gap-3 px-3 py-2 rounded-full bg-neutral-variant-50 focus-within:bg-primary-50 focus-within:outline hover:bg-primary-50">
                        <label htmlFor="search" className="sr-only">
                            {placeholder_search}
                        </label>

                        <input
                            className="w-full text-sm font-medium bg-transparent border-r-2 outline-none"
                            type="text"
                            id="search"
                            autoComplete="off"
                            placeholder={label_search}
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
                    <Link href="/cart">
                        <Text
                            data-count={cart.length}
                            as="span"
                            className="cart__notification">
                            <HiOutlineShoppingBag size={28} />
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
