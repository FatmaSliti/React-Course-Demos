import { redirect } from "react-router-dom";
import { getAuthToken } from "../util/auth";

//clear the local storage / get rif of the token
export function action() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
    redirect('/');
}
