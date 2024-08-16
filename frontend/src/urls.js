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
export const ROOT_URL = "/";
export const DEBUG_URL = "/debug";
