import { createContext, ReactNode, useState } from 'react';

type ProductProps = {
    id: string;
    available: boolean;
    category: string;
    cover: string;
    name: string;
    price: number;
};

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
        return cart.some((item) => item.product.id === productId);
    };

    const addToCart = (item: ProductProps) => {
        if (alreadyInCart(item.id)) {
            alert('Este item já foi adicionado ao carrinho.');
            return;
        }
        setCart([...cart, { product: item, quantity: 1 }]);
    };

    const removeToCart = (productId: string) => {
        setCart(cart.filter((item) => item.product.id !== productId));
    };

    const addQuantity = (productId: string) => {
        setCart(
            cart.map((cartItem) =>
                cartItem.product.id === productId
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
            )
        );
    };

    const removeQuantity = (productId: string) => {
        setCart(
            cart.map((cartItem) =>
                cartItem.product.id === productId && cartItem.quantity > 1
                    ? { ...cartItem, quantity: cartItem.quantity - 1 }
                    : cartItem
            )
        );
    };

    const getTotalPrice = () => {
        return cart.reduce((total, cartItem) => {
            return total + cartItem.product.price * cartItem.quantity;
        }, 0);
    };

    console.log('Produtos no carrinho', cart);
    console.log('Preço total', getTotalPrice().toFixed(2));

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
