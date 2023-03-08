import { ReactNode } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

import Box from '../Box';

interface ModalProps {
    children: ReactNode;
}

export default function Modal({ children }: ModalProps) {
    return (
        <Dialog.Root modal>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 w-screen h-full bg-neutral-variant-700 opacity-80" />

                <Dialog.Content className="absolute w-full max-w-2xl p-6 -translate-x-1/2 -translate-y-1/2 sm:p-10 top-80 left-1/2 bg-neutral-variant-50 rounded-xl">
                    <Dialog.Close className="px-4 py-2 mb-5 font-semibold rounded-lg text-neutral-variant-999 bg-primary-500 hover:bg-primary-600 hover:text-primary-100">
                        Voltar
                    </Dialog.Close>

                    <Box>{children}</Box>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
