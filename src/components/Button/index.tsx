import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ type, ...props }: ButtonProps) {
    return (
        <button
            {...props}
            type={type || 'button'}
            className="px-4 py-2 font-semibold rounded-lg text-neutral-variant-999 disabled:bg-neutral-200 disabled:text-neutral-500 disabled:cursor-not-allowed bg-primary-500 hover:bg-primary-600 hover:text-primary-100"
        />
    );
}
