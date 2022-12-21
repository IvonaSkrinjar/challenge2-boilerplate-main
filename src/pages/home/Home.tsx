import { AppLayout } from "components/Layouts";
import Headline from "components/Headline";
import Products from "components/Products";
import React from "react";
import { useTranslation } from "react-i18next";

const Home = () => {
    const { t } = useTranslation();

    return (
        <AppLayout>
            <Headline title={t("products-title")} />
            <Products />
        </AppLayout>
    );
};

export default Home;
