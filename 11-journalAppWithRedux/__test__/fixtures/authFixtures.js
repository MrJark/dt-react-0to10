// este archivo es para los estados o const que sean inmutable a lo largo de las pruebas para evitarnos copiar y pegar todo D.R.Y.
export const initialState = {
    status: 'checking', // 'not-authenticated', 'authenticated'
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
};

export const authenticatedState = {
    status: 'authenticated', // 'not-authenticated', 'authenticated'
    uid: '1234qwer',
    email: 'demo@gmail.com',
    displayName: 'User',
    photoURL: 'https://photo-demo.jpg',
    errorMessage: null,
};

export const notAuthenticatedState = {
    status: 'not-authenticated', // 'not-authenticated', 'authenticated'
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
};

export const demoUser = {
    uid: '1234qwer',
    email: 'demo@gmail.com',
    displayName: 'User Name',
    photoURL: 'https:// photo-demo.jpg',
};