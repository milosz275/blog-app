// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();
    const [createdYear, setCreatedYear] = useState(null);
    const [avatarUrl, setAvatarUrl] = useState(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://api.github.com/users/mldxo");
                const data = await response.json();
                const year = new Date(data.created_at).getFullYear();
                setCreatedYear(year);
                setAvatarUrl(data.avatar_url);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div
            className="flex flex-col-reverse h-0 text-center w-full bg-transparent transition-all duration-300 opacity-50 dark:text-slate-200">
            <div
                className="flex flex-row mx-auto pb-4 cursor-pointer select-none"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => window.open("https://github.com/mldxo", "_blank")}
            >
                <div className="flex flex-row justify-center items-center min-w-4 sm:min-w-5 ml-4 sm:ml-0 -mr-3 sm:-mr-0">
                    {isHovered && avatarUrl ? (
                        <img src={avatarUrl
                        } alt="Avatar" className="inline-block h-4 object-fit rounded-full" />
                    ) : (
                        <>&copy;</>
                    )}
                </div>
                <div>
                    {createdYear}-{new Date().getFullYear()}
                    &nbsp; Miłosz Maculewicz - {t("footer.all_rights_reserved")}
                </div>
            </div>
        </div>
    );
}

export default Footer;
