import { AppLayout } from "components/Layouts";
import styles from "./styles.module.css";
import React from "react";

const NotFound = () => {
    return (
        <AppLayout>
            <div className={styles.login_page}>
                <h1 className={styles.title}>404 not found</h1>
            </div>
        </AppLayout>
    );
};

export default NotFound;