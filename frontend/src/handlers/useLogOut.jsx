import { useNavigate } from "react-router-dom";
import { ROOT_URL } from "../urls";
import { DeleteAllCookies } from "../components/DeleteAllCookies";

const useLogout = () => {
    const navigate = useNavigate();

    const logout = () => {
        DeleteAllCookies();
        localStorage.clear();
        navigate(ROOT_URL);
    };

    return logout;
};

export default useLogout;
