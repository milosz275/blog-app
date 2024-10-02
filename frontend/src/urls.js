const debug = true;
let API_BASE = "";
if (debug) {
    API_BASE = "http://localhost:8000"
} else {
    API_BASE = "https://myawesomeblog.com"
}

// backend
export const API_BASE_URL = API_BASE;
export const API_POSTS_URL = API_BASE + "/posts/";
export const API_POSTS_RECENT_URL = API_BASE + "/posts/recent/";
export const API_POSTS_TRENDING_URL = API_BASE + "/posts/trending/";
export const API_POSTS_POPULAR_URL = API_BASE + "/posts/popular/";

// frontend

//// shared
let BASE_URL = "/blog-app";
export const ROOT_URL = BASE_URL + "/";
export const DEBUG_URL = BASE_URL + "/debug";

//// en
export const POSTS_URL = BASE_URL + "/posts";
export const LOGIN_URL = BASE_URL + "/login";
export const REGISTER_URL = BASE_URL + "/register";
export const PROFILE_URL = BASE_URL + "/profile";
export const LOGOUT_URL = BASE_URL + "/logout";

//// pl
export const POSTS_URL_PL = BASE_URL + "/posty";
export const LOGIN_URL_PL = BASE_URL + "/logowanie";
export const REGISTER_URL_PL = BASE_URL + "/rejestracja";
export const PROFILE_URL_PL = BASE_URL + "/profil";
export const LOGOUT_URL_PL = BASE_URL + "/wyloguj";
