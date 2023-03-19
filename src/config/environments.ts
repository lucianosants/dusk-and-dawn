const stripe_api = {
    public: process.env.NEXT_PUBLIC_API_KEY || '',
    secret: process.env.STRIPE_SECRET_KEY || '',
};

const firebase = {
    api_key: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || '',
    auth_domain: process.env.NEXT_PUBLIC_AUTH_DOMAIN || '',
    project_id: process.env.NEXT_PUBLIC_PROJECT_ID || '',
    storage_bucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET || '',
    messaging_sender_id: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID || '',
    app_id: process.env.NEXT_PUBLIC_APP_ID || '',
    measurement_id: process.env.NEXT_PUBLIC_MEASUREMENT_ID || '',
};

export { stripe_api, firebase };
