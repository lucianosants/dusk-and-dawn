import { createContext, ReactNode, useState } from 'react';

import { ProductProps } from '../@types/products';

type CartProps = {
    cart: CartItem[];
    addToCart: (item: ProductProps) => void;
    addQuantity: (productId: string) => void;
    removeQuantity: (productId: string) => void;
    getTotalPrice: () => void;
    removeToCart: (id: string) => void;
};

export const CartContext = createContext<CartProps>({
    cart: [],
    addToCart: () => {},
    addQuantity: () => {},
    removeQuantity: () => {},
    getTotalPrice: () => {},
    removeToCart: () => {},
});

interface CartProviderProps {
    children: ReactNode;
}

interface CartItem {
    product: ProductProps;
    quantity: number;
}

export const CartProvider = ({ children }: CartProviderProps) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    const alreadyInCart = (productId: string) => {
        return cart.some((item) => item.product._id_stripe === productId);
    };

    const addToCart = (item: ProductProps) => {
        if (alreadyInCart(item._id_stripe)) {
            alert('Este item já foi adicionado ao carrinho.');

            return;
        }
        setCart([...cart, { product: item, quantity: 1 }]);
    };

    const removeToCart = (productId: string) => {
        setCart(cart.filter((item) => item.product._id_stripe !== productId));
    };

    const addQuantity = (productId: string) => {
        setCart(
            cart.map((cartItem) =>
                cartItem.product._id_stripe === productId
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
            )
        );
    };

    const removeQuantity = (productId: string) => {
        setCart(
            cart.map((cartItem) =>
                cartItem.product._id_stripe === productId &&
                cartItem.quantity > 1
                    ? { ...cartItem, quantity: cartItem.quantity - 1 }
                    : cartItem
            )
        );
    };

    const getTotalPrice = (): number => {
        return cart.reduce((total, cartItem) => {
            const price = Number(
                total + cartItem.product.price * cartItem.quantity
            );
            return price;
        }, 0);
    };

    return (
        <CartContext.Provider
            value={{
                cart: cart,
                addToCart: addToCart,
                addQuantity: addQuantity,
                removeQuantity: removeQuantity,
                getTotalPrice: getTotalPrice,
                removeToCart: removeToCart,
            }}>
            {children}
        </CartContext.Provider>
    );
};
