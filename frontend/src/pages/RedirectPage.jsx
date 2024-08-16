// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { ROOT_URL } from "../urls";

const RedirectPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const redirectToMainPage = () => {
            navigate(ROOT_URL);
        }
        redirectToMainPage()
      }, [navigate]);

    return <div className={"RedirectPage"}></div>
};

export default RedirectPage;
