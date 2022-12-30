import React, { useContext, useState } from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import { FilterContext } from "context/filter/FilterContext";
import ViewListIcon from "@mui/icons-material/ViewList";
import { Box, FormControl, Grid, MenuItem, Select, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.css";

const Sort = () => {
  const {
    filter_products,
    grid_view,
    setGridView,
    setListView,
    sorting,
  } = useContext(FilterContext);  

  const [value, setValue] = useState("lowest");
  const { t } = useTranslation();

  const handleValueChange = (event: any) => {
    setValue(event.target.value);
    sorting(event);
  };
  return (
    <Box className={styles.sorting}>
      <Grid container spacing={1}>
        <Grid item xs={4} sm={2} md={2}>
          <div className={styles.sorting_list}>
            <button
              className={grid_view ? styles.active_sort_btn : styles.sort_btn}
              onClick={setGridView}
            >
              <GridViewIcon className={styles.icon} />
            </button>

            <button
              className={!grid_view ? styles.active_sort_btn : styles.sort_btn}
              onClick={setListView}
            >
              <ViewListIcon className={styles.icon} />
            </button>
          </div>
        </Grid>        
        <Grid item xs={8} sm={7} md={7}>
          {filter_products.length === 0 && (
            <Typography component="h4" variant="h4">
              <Box className={styles.product_available}>
                {t("zero-products-available")}
              </Box>
            </Typography>
          )}
          {filter_products.length > 1 && (
            <Typography component="h4" variant="h4">
              <Box className={styles.product_available}>
                {filter_products.length} {t("products-available")}
              </Box>
            </Typography>
          )}
          {filter_products.length === 1 && (
            <Typography component="h4" variant="h4">
              <Box className={styles.product_available}>
                {filter_products.length} {t("product-available")}
              </Box>
            </Typography>
          )}
        </Grid>
        
        <Grid item xs={12} sm={3} md={3}>
          <FormControl className={styles.form_sorting}>
            <Select
              name="sort"
              id="sort"
              value={value}
              defaultValue={value}
              onChange={handleValueChange}
              className={styles.select_sorting}
            >
              <MenuItem value={"lowest"}>
                <Box className={styles.sorting_item}>
                  {t("sort-price-low-high")}
                </Box>
              </MenuItem>
              <MenuItem className={styles.sorting_item} value={"highest"}>
                <Box className={styles.sorting_item}>
                  {t("sort-price-high-low")}
                </Box>
              </MenuItem>
              <MenuItem className={styles.sorting_item} value={"asc"}>
                <Box className={styles.sorting_item}>{t("sort-title-asc")}</Box>
              </MenuItem>
              <MenuItem className={styles.sorting_item} value={"desc"}>
                <Box className={styles.sorting_item}>
                  {t("sort-title-desc")}
                </Box>
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Sort;
