import styled from "styled-components";
import numberFormatCurrency from "../../common/numberFormatCurrency";
import React, { useContext, useState } from "react";
import { FilterContext } from "context/filter/FilterContext";
import { ProductContext } from "context/product/ProductContext";
import {
    Autocomplete,    
    Box,
    Button,
    Checkbox,    
    FormControlLabel,  
    Slider,  
    TextField,
    Typography,
} from "@mui/material";
import { IProduct } from "interfaces";
import { useTranslation } from "react-i18next";

const FilterSection = () => {
    const { categories, products } = useContext(ProductContext);
    const [value, setValue] = useState<IProduct | null>(null);
    const [checked] = useState([true, false]);
    const [inputValue, setInputValue] = useState("");
    const { t } = useTranslation();
    
    const {
        filters: { category, price, maxPrice, minPrice },
        updateFilterValue,
        clearFilters,
    } = useContext(FilterContext);    

    const categoryData = ["all", ...categories];
       
    function sleep(ms: any) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
    const handleChanges = async (event: any) => {
        setValue(value);
        await sleep(1000);
        updateFilterValue(event);
    };

    const handleClearFilters = () => {
        setValue(null);
        setInputValue("");
        clearFilters();
    };   

    const defaultProps = {
        options: products,
        getOptionLabel: (option: IProduct) => option.title,
    };
    return (
        <Wrapper>
            <Autocomplete
                {...defaultProps}
                value={value}
                onChange={(e, value) => {
                    setValue(value);
                    updateFilterValue({
                        target: { name: "text", value: value },
                    });
                }}
                inputValue={inputValue}
                onInputChange={(e, v) => {
                    setInputValue(v);
                }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label={
                            <Typography sx={{ fontSize: "13px", color: "grey" }}>
                                {t("search")}
                            </Typography>
                        }
                        variant="outlined"
                        fullWidth
                    />
                )}
            />

            <div className="filter_price">
                <Typography variant="h4" component="h4">
                    {t("filter-price")}
                </Typography>
                <Typography
                    sx={{
                        fontSize: "1.5rem",
                        float: "right",
                        marginTop: "3rem",
                    }}
                >
                    {numberFormatCurrency.formatNumber(price)}
                </Typography>
                <Slider
                    sx={{
                        maxWidth: "33rem",
                    }}
                    name="price"
                    defaultValue={maxPrice}
                    min={minPrice}
                    max={maxPrice}
                    value={price}
                    onChange={updateFilterValue}
                />
            </div>
            <div className="filter-category">
                <Typography variant="h4" component="h4">
                    {t("filter-category")}
                </Typography>
                <Box>
                    <div className="category-button">
                        {categoryData.map((c, index) => {
                            return (
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={category === c.toLowerCase() ? true : false}
                                            onChange={() => {
                                                handleChanges({
                                                    target: {
                                                        name: "category",
                                                        checked: checked,
                                                        value: c,
                                                    },
                                                });
                                            }}
                                        />
                                    }
                                    label={
                                        <Typography fontSize="1.5rem" color="grey">
                                            {c}
                                        </Typography>
                                    }
                                    key={index}
                                />
                            );
                        })}
                    </div>
                </Box>
            </div>

            <div className="filter-clear">
                <Button
                    variant="contained"
                    className="clear-button"
                    onClick={handleClearFilters}
                >
                    <Typography fontSize="1.5rem" color="white">
                        {t("clear-filters")}
                    </Typography>
                </Button>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-left: 2rem;   
 
  .filter_price {    
      margin: 5.5rem 0 1rem 0;
      box-shadow: none;
      cursor: pointer;
    }

    .filter-category {
      div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.4rem;
        text-transform: capitalize;
        margin-top: 1rem;      
      }
    }


  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  } 
  } 

  .clear-button { 
    width: 35rem;
    height: 3rem;
  }
`;

export default FilterSection;
