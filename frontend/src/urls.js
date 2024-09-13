const debug = true;
let API_BASE = "";
if (debug) {
    API_BASE = "http://localhost:8000"
} else {
    API_BASE = "https://myawesomeblog.com"
}

// backend
export const API_BASE_URL = API_BASE;

// frontend

//// shared
export const ROOT_URL = "/";
export const DEBUG_URL = "/debug";

//// en
export const POSTS_URL = "/posts";
export const LOGIN_URL = "/login";
export const REGISTER_URL = "/register";
export const PROFILE_URL = "/profile";
export const LOGOUT_URL = "/logout";

//// pl
export const POSTS_URL_PL = "/posty";
export const LOGIN_URL_PL = "/logowanie";
export const REGISTER_URL_PL = "/rejestracja";
export const PROFILE_URL_PL = "/profil";
export const LOGOUT_URL_PL = "/wyloguj";
