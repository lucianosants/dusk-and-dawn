interface ContainerProps {
    children: React.ReactNode;
    isCol?: boolean;
}

export default function Container({ children, isCol }: ContainerProps) {
    return (
        <main
            className={`container flex ${
                isCol ? 'flex-col' : 'flex-row'
            } items-center ${
                isCol ? 'justify-center' : 'justify-between'
            }  px-4 mx-auto p-container`}>
            {children}
        </main>
    );
}
