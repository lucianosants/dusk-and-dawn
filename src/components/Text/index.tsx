interface TextProps {
    as?:
        | 'h1'
        | 'h2'
        | 'h3'
        | 'h4'
        | 'h5'
        | 'h6'
        | 'p'
        | 'span'
        | 'strong'
        | 'em'
        | 'small';
    children: React.ReactNode;
    className?: string;
    'data-count'?: string | number;
}

export default function Text({ as, children, ...props }: TextProps) {
    const Tag = as || 'span';
    return <Tag {...props}>{children}</Tag>;
}
