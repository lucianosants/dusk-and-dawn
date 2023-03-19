import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

import { firebase } from '@/src/config/environments';

const firebaseConfig = {
    apiKey: firebase.api_key,
    authDomain: firebase.auth_domain,
    projectId: firebase.project_id,
    storageBucket: firebase.storage_bucket,
    messagingSenderId: firebase.messaging_sender_id,
    appId: firebase.app_id,
    measurementId: firebase.measurement_id,
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
