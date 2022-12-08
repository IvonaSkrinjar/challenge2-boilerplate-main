import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

const CarBadge = () => {
    return (
        <NavLink to={"/cart"}>
            <span className={styles.cart_badge}>
                <span className={styles.cart_items_number}>14</span>
            </span>
        </NavLink>
    );
};

export default memo(CarBadge);
