import Box from '../Box';

interface NotificationProps {
    isActive: boolean;
}

export default function Notification({ isActive }: NotificationProps) {
    return (
        <>
            {isActive && (
                <Box className="fixed px-5 py-3 font-bold shadow animate-bounce top-7 right-4 rounded-xl bg-secondary-500 text-secondary-999">
                    Produto no Carrinho
                </Box>
            )}
        </>
    );
}
