// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { github } from "../icons";

const Footer = () => {
    const { i18n, t } = useTranslation();
    const [createdYear, setCreatedYear] = useState(null);
    const [avatarUrl, setAvatarUrl] = useState(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isAvatarLoaded, setIsAvatarLoaded] = useState(false);
    const [lastPageDeploy, setLastPageDeploy] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userResponse = await fetch("https://api.github.com/users/mldxo");
                if (!userResponse.ok) {
                    const errorData = await userResponse.json();
                    if (errorData.message.includes("API rate limit exceeded")) {
                        setError("API rate limit exceeded. Please try again later.");
                    } else {
                        setError("Error fetching user data.");
                    }
                    return;
                }
                const userData = await userResponse.json();
                const year = new Date(userData.created_at).getFullYear();
                setCreatedYear(year);

                const img = new Image();
                img.src = userData.avatar_url;
                img.onload = () => {
                    setAvatarUrl(userData.avatar_url);
                    setIsAvatarLoaded(true);
                };

                const deployResponse = await fetch("https://api.github.com/repos/mldxo/blog-app/deployments");
                if (!deployResponse.ok) {
                    const errorData = await deployResponse.json();
                    if (errorData.message.includes("API rate limit exceeded")) {
                        setError("API rate limit exceeded. Please try again later.");
                    } else {
                        setError("Error fetching deployment data.");
                    }
                    return;
                }
                const deployData = await deployResponse.json();
                if (deployData.length > 0) {
                    const locale = i18n.language === "en" ? "en-GB" : "pl-PL";
                    const lastDeployDate = new Date(deployData[0].created_at).toLocaleDateString(locale, {
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric'
                    });
                    setLastPageDeploy(lastDeployDate);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                setError("An unexpected error occurred.");
            }
        };
        fetchData();
    }, [t, i18n.language]);

    return (
        <div
            className="flex flex-col-reverse h-0 text-center w-full bg-transparent transition-all opacity-50 dark:text-slate-200">
            <div className="flex flex-row mx-auto pb-4 cursor-pointer select-none">
                <div
                    className="hover:opacity-70 transition-all duration-300 hidden sm:block"
                    onClick={() => window.location.href = "https://mldxo.github.io"}>
                    {github}
                </div>
                <div
                    className="flex flex-row mx-auto pb-4 cursor-pointer select-none hover:opacity-70 transition-all duration-300"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={() => window.open("https://github.com/mldxo", "_blank")}
                >
                    <div className="flex-row justify-center items-center min-w-5 sm:min-w-6 ml-4 sm:ml-2 md:ml-0 -mr-3 sm:-mr-0 hidden sm:flex">
                        <div className="relative">
                            <span className={`transition-opacity duration-300 ${isHovered && isAvatarLoaded ? 'opacity-0' : 'opacity-100'}`}>
                                &copy;
                            </span>
                            {avatarUrl && (
                                <img
                                    src={avatarUrl}
                                    alt="Avatar"
                                    className={`inline-block object-fit h-4 w-4 rounded-full absolute top-1 left-0 transition-opacity duration-300 ${isHovered && isAvatarLoaded ? 'opacity-100' : 'opacity-0'}`} />
                            )}
                        </div>
                    </div>
                    <div className="flex ml-3 sm:ml-0">
                        <p className="flex-col sm:hidden mr-1 sm:mr-0">
                            &copy;
                        </p>
                        <p>
                            {createdYear ? `${createdYear}-${new Date().getFullYear()}` : new Date().getFullYear()} Miłosz Maculewicz - {t("footer.all_rights_reserved")}
                        </p>
                    </div>
                </div>
            </div>
            <div
                className="flex flex-col-reverse h-0 text-center w-full bg-transparent transition-all opacity-50 dark:text-slate-200">
                <div className="flex flex-row mx-auto pb-4 cursor-normal select-none">
                    <div className="hover:opacity-70 transition-all duration-300">
                        {lastPageDeploy ? (
                            <p>{t("footer.last_deploy")} {lastPageDeploy}</p>
                        ) : error ? (
                            <p>{error}</p>
                        ) : (
                            <p>{t("footer.error_message")}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
