import { useTranslation } from "react-i18next";

export function Component() {
    const { t } = useTranslation();

    return(
        <h1>
            {t("title")}
        </h1>
    )
} 