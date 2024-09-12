// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import LogOut from "../components/LogOut";

const LogoutPage = () => {
    useEffect(() => {
        LogOut();
    }, []);

    return (
        <></>
    );
}

export default LogoutPage;
