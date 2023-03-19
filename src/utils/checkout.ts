type Props = Array<{
    price: string;
    quantity: number;
}>;

const checkout = async (items: Props) => {
    try {
        const response = await fetch('/api/checkout_session', {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            referrerPolicy: 'no-referrer',
            body: JSON.stringify({ items }),
        });

        const { data } = await response.json();

        window.location.replace(data.url);
    } catch (error) {
        console.log(error);
    }
};

export { checkout };
