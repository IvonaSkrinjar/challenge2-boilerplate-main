import React, { useContext, useEffect, useState } from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import { FilterContext } from "context/filter/FilterContext";
import ViewListIcon from "@mui/icons-material/ViewList";
import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.css";

const Sort = () => {
  const {
    filter_products,
    sortingProducts,
    grid_view,
    setGridView,
    setListView,
    sorting,
  } = useContext(FilterContext);

  useEffect(() => {
    sortingProducts();
  }, [filter_products]);

  const [value, setValue] = useState("lowest");
  const { t } = useTranslation();

  const handleValueChange = (event: any) => {
    setValue(event.target.value);
    sorting(event);
  };
  return (
    <div className={styles.sorting}>
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
            <Box className={styles.sorting_item}>{t("sort-title-desc")}</Box>
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Sort;
