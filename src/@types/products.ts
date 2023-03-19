type ProductProps = {
    _id_stripe: string;
    available?: boolean;
    category?: 'technology' | 'clothes' | 'house and decoration' | string;
    cover: string;
    description?: string;
    name: string;
    price: number;
};

export type { ProductProps };
