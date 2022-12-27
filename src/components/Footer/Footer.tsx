import React from "react";
import styles from "./styles.module.css";
import logo from "../../assets/images/LogoLevi.png";
import { Box, Divider, Grid, Link, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <Box className={styles.footer_box}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={3} md={3} className={styles.image}>
            <img src={logo} alt="logo" width="200px" />
          </Grid>
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            color="white"
          />
          <Grid item xs={12} sm={2} md={2}>
            <Typography
              variant="h4"
              component="h4"
              className={styles.contact_header}
            >
              {t("contact")}
            </Typography>
            <Typography
              variant="h6"
              component="h6"
              className={styles.footer_box}
            >
                Muiderstraat 1
            </Typography>
            <Typography
              variant="h6"
              component="h6"
              className={styles.footer_box}
            >
                1011 PZ Amsterdam
            </Typography>
            <Typography
              variant="h6"
              component="h6"
              className={styles.footer_box}
            >
                The Netherlands
            </Typography>
            <Typography
              variant="h6"
              component="h6"
              className={styles.footer_box}
            >
                T: +31 (0)206701947
            </Typography>
            <Typography
              variant="h6"
              component="h6"
              className={styles.footer_box}
            >
                M: info@levi9.com
            </Typography>
          </Grid>
          <Grid item xs={12} sm={2} md={2}>
            <Typography
              variant="h4"
              component="h4"
              className={styles.contact_header}
            >
              {t("offices")}
            </Typography>
            <Box className={styles.footer_box}>
              <Link href="https://www.levi9.com/contact/" color="inherit">
                  Amsterdam
              </Link>
            </Box>
            <Box className={styles.footer_box}>
              <Link
                color="inherit"
                href="https://www.levi9.com/portfolio/office-belgrade/"
              >
                  Belgrade
              </Link>
            </Box>
            <Box className={styles.footer_box}>
              <Link
                href="https://www.levi9.com/portfolio/office-novi-sad/"
                color="inherit"
              >
                  Novi Sad
              </Link>
            </Box>
            <Box className={styles.footer_box}>
              <Link
                href="https://www.levi9.com/portfolio/office-zrenjanin/"
                color="inherit"
              >
                  Zrenjanin
              </Link>
            </Box>
            <Box className={styles.footer_box}>
              <Link
                href="https://www.levi9.com/portfolio/office-kyiv/"
                color="inherit"
              >
                  Kyiv
              </Link>
            </Box>
            <Box className={styles.footer_box}>
              <Link
                href="https://www.levi9.com/portfolio/office-lviv/"
                color="inherit"
              >
                  Lviv
              </Link>
            </Box>
            <Box className={styles.footer_box}>
              <Link
                href="https://www.levi9.com/portfolio/office-iasi/"
                color="inherit"
              >
                  Iasi
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Typography
              variant="h4"
              component="h4"
              className={styles.contact_header}
            >
              {t("explore")}
            </Typography>
            <Box className={styles.footer_box}>
              <Link href="https://www.levi9.com/solutions/" color="inherit">
                {t("solutions")}
              </Link>
            </Box>
            <Box className={styles.footer_box}>
              <Link href="https://www.levi9.com/industries/" color="inherit">
                {t("industries")}
              </Link>
            </Box>
            <Box className={styles.footer_box}>
              <Link href="https://jobs.levi9.com/jobs" color="inherit">
                {t("career")}
              </Link>
            </Box>
            <Box className={styles.footer_box}>
              <Link href="https://www.levi9.com/contact/" color="inherit">
                {t("contact")}
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </footer>
  );
};

export default Footer;
