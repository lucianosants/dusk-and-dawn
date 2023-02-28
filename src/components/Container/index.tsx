interface ContainerProps {
    children: React.ReactNode;
    isCol?: boolean;
}

export default function Container({ children, isCol }: ContainerProps) {
    return (
        <main
            className={`${isCol ? 'flex-col' : 'flex-row'} items-center ${
                isCol ? 'justify-center' : 'justify-between'
            }  px-4 mx-auto p-container container flex flex-wrap `}>
            {children}
        </main>
    );
}
