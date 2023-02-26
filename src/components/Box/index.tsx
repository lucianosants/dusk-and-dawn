interface BoxProps {
    as?:
        | 'div'
        | 'section'
        | 'article'
        | 'aside'
        | 'main'
        | 'footer'
        | 'header'
        | 'nav'
        | 'span';
    className?: string;
    children?: React.ReactNode;
}

export default function Box({ children, as, ...props }: BoxProps) {
    const Tag = as || 'div';
    return <Tag {...props}>{children}</Tag>;
}
