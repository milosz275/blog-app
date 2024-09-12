import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROOT_URL } from "../urls";
import { deleteAllCookies } from "../functions/deleteAllCookies";

const LogOut = () => {
    const navigate = useNavigate();

    useEffect(() => {
        deleteAllCookies();
        localStorage.clear();
        navigate(ROOT_URL);
    }, [navigate]);

    return null;
};

export default LogOut;
