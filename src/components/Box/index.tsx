import { forwardRef, Ref } from 'react';

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

const Box = forwardRef(({ as, ...props }: BoxProps, ref: Ref<HTMLElement>) => {
    const Tag = as || 'div';

    return <Tag {...props} />;
});

Box.displayName = 'Box';

export default Box;
