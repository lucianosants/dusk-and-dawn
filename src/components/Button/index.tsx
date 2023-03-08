import { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
}

export default function Button({ children, onClick }: ButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="px-4 py-2 font-semibold rounded-lg text-neutral-variant-999 bg-primary-500 hover:bg-primary-600 hover:text-primary-100">
            {children}
        </button>
    );
}
