interface ContainerProps {
    children: React.ReactNode;
    isCol?: boolean;
}

export default function Container({ children, isCol }: ContainerProps) {
    return (
        <main
            className={`${isCol ? 'flex-col' : 'flex-row'} items-center ${
                isCol ? 'items-center' : 'justify-between'
            }  px-4 mx-auto p-container container flex place-content-center flex-wrap `}>
            {children}
        </main>
    );
}
