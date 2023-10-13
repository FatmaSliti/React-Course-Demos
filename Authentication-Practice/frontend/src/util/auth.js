import { redirect } from 'react-router-dom';

export function getTokenDuration() {
    const storedExpirationDate = localStorage.getItem('expiration');
    const expirationDate = new Date(storedExpirationDate);
    const now = new Date();
    const duration = expirationDate.getTime() - now.getTime();
    return duration;
}

export function getAuthToken() {
    const token = localStorage.getItem('token');

    if (!token) {
        return null;
    }

    const tokenDuration = getTokenDuration();

    if (tokenDuration < 0) {
        return 'EXPIRED';
    }

    return token;
}

export function tokenLoader() {
    const token = getAuthToken();
    return token;
}

export function checkAuthLoader() {
    const token = getAuthToken();

    if (!token) {
        return redirect('/auth');
    }
}





// import { redirect } from "react-router-dom";

// export function getTokenDuration() {
//     const storedExpirationDate = localStorage.getItem('expiration');
//     const expirationDate = new Date(storedExpirationDate);
//     const now = new Date();
//     const duration = expirationDate.getTime() - now.getTime();
//     return duration;
// }
// export function getAuthToken() {
//     const token = localStorage.getItem('token');

//     if (!token) {
//         return null;
//     } // if I don't do that the UI would not be updated correctly because it will always return EXPIRED

//     const tokenDuration = getTokenDuration();

//     if (tokenDuration < 0) {
//         return 'EXPIRED'
//     }

//     return token;
// }

// //this loader is used to protect a route
// export function tokenLoader() {
//     return getAuthToken();
// }

// export function checkAuthLoader() {
//     const token = getAuthToken();

//     if (!token) {
//         return redirect('/auth')
//     }
// }

