// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { github } from "../icons";

const Footer = () => {
    const { t } = useTranslation();
    const [createdYear, setCreatedYear] = useState(null);
    const [avatarUrl, setAvatarUrl] = useState(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isAvatarLoaded, setIsAvatarLoaded] = useState(false); // New state to handle avatar loading

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://api.github.com/users/mldxo");
                const data = await response.json();
                const year = new Date(data.created_at).getFullYear();
                setCreatedYear(year);

                const img = new Image();
                img.src = data.avatar_url;
                img.onload = () => {
                    setAvatarUrl(data.avatar_url);
                    setIsAvatarLoaded(true);
                };
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div
            className="flex flex-col-reverse h-0 text-center w-full bg-transparent transition-all opacity-50 dark:text-slate-200">
            <div className="flex flex-row mx-auto pb-4 cursor-pointer select-none">
                <div
                    className="hover:opacity-70 transition-all duration-300"
                    onClick={() => window.location.href = "https://mldxo.github.io"}>
                    {github}
                </div>
                <div
                    className="flex flex-row mx-auto pb-4 cursor-pointer select-none hover:opacity-70 transition-all duration-300"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={() => window.open("https://github.com/mldxo", "_blank")}
                >
                    <div className="flex flex-row justify-center items-center min-w-5 sm:min-w-6 ml-4 sm:ml-2 md:ml-0 -mr-3 sm:-mr-0">
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
                    <div className="ml-3 sm:ml-0">
                        {createdYear}-{new Date().getFullYear()}
                        &nbsp; Miłosz Maculewicz - {t("footer.all_rights_reserved")}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
