const checkout = async () => {
    const items = [
        {
            price: 'price_1Mm1SzGJXxfMeJBxxpTo1y4p',
            quantity: 3,
        },
        {
            price: 'price_1Mm1VNGJXxfMeJBxuJ6uo5NS',
            quantity: 5,
        },
    ];

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
