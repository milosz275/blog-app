import { useEffect } from "react";
import LogOut from "../handlers/useLogOut";

const LogoutPage = () => {
    const logout = LogOut();

    useEffect(() => {
        logout();
    }, [logout]);

    return (
        <></>
    );
}

export default LogoutPage;
