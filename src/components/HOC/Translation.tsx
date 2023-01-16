import { useContext, useEffect } from "react";

import { Home } from "../pages/Home";
import { IntlProvider } from "react-intl";
import LanguageContext from "../../context/language";
import { allmessages } from "../../Messages/Messages";

export const Translation = () => {
    const { language } = useContext(LanguageContext);
    const message: any = allmessages;

    useEffect(() => {}, [ language ])

    return (
        <IntlProvider locale={ language } messages={ message[ language ] }>
            <Home />
        </IntlProvider>
    )
}