import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import GridViewIcon from "@mui/icons-material/GridView";
import { FilterContext } from "context/filter/FilterContext";
import ViewListIcon from "@mui/icons-material/ViewList";
import { FormControl, MenuItem, Select } from "@mui/material";
import { useTranslation } from "react-i18next";

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
        <Wrapper>
            <div className="sorting-list">
                <button
                    className={grid_view ? "active sort-btn" : "sort-btn"}
                    onClick={setGridView}
                >
                    <GridViewIcon className="icon" />
                </button>

                <button
                    className={!grid_view ? "active sort-btn" : " sort-btn"}
                    onClick={setListView}
                >
                    <ViewListIcon className="icon" />
                </button>
            </div>

            <div className="product-data">
                {filter_products.length === 0 && (
                    <p>{t("zero-products-available")}</p>
                )}
                {filter_products.length > 1 && (
                    <p>
                        {filter_products.length} {t("products-available")}
                    </p>
                )}
                {filter_products.length === 1 && (
                    <p>
                        {filter_products.length} {t("product-available")}
                    </p>
                )}
            </div>
            <FormControl style={{ paddingRight: "5rem" }}>
                <Select
                    name="sort"
                    id="sort"
                    value={value}
                    defaultValue={value}
                    onChange={handleValueChange}
                    sx={{
                        fontSize: "13px",
                        color: "grey",
                    }}
                >
         
                    <MenuItem sx={{ fontSize: "13px" }} value={"lowest"}>
                        {t("sort-price-low-high")}
                    </MenuItem>
                    <MenuItem sx={{ fontSize: "13px" }} value={"highest"}>
                        {t("sort-price-high-low")}
                    </MenuItem>
                    <MenuItem sx={{ fontSize: "13px" }} value={"asc"}>
                        {t("sort-title-asc")}
                    </MenuItem>
                    <MenuItem sx={{ fontSize: "13px" }} value={"desc"}>
                        {t("sort-title-desc")}
                    </MenuItem>
                </Select>
            </FormControl>
        </Wrapper>
    );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  padding-bottom: 3rem;
 
  .sorting-list {
    display: flex;
    gap: 2rem;

    .sort-btn {
      padding: 0.8rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .icon {
      font-size: 1.6rem;
    }
    .active {
      background-color: #212529;
      color: #fff;
    }
  }
`;

export default Sort;
