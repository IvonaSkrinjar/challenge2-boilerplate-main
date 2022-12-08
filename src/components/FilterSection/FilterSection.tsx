import styled from "styled-components";
import numberFormatCurrency from "../../common/numberFormatCurrency";
import { useContext, useEffect, useState } from "react";
import { FilterContext } from "context/filter/FilterContext";
import { ProductContext } from "context/product/ProductContext";
import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  Slider,
  TextField,
  Typography,
} from "@mui/material";

const FilterSection = () => {
  const { categories, getProductsCategories, products, productsLoading } =
    useContext(ProductContext);
  const [value, setValue] = useState("");
  const [checked] = useState([true, false]);

  const {
    filters: { category, price, maxPrice, minPrice },
    updateFilterValue,
    clearFilters,
  } = useContext(FilterContext);

 /* useEffect(() => {
    getProductsCategories();
  }, []);*/

  let categoryData = ["all", ...categories];

  const handleSearchChanges = (event: any) => {
    setValue(value);
    updateFilterValue(event);
  };

  if (productsLoading) {
    return <CircularProgress sx ={{width: "4rem", height: "4rem", justifyContent: "center"}}/>
  }

  return (
    <Wrapper>    
        <Autocomplete
          id="search"
          getOptionLabel={(option) => option.title || ""}
          options={products}
          sx={{
            width: 300,  
          }}         
          clearOnEscape
          onChange={(event: any, value: any | null) => {
            handleSearchChanges({ target: { name: "text", value: value } });
          }}
          renderInput={(params) => (
            <TextField            
              {...params}
              label={ <Typography  sx={{fontSize: "13px", color:"grey"}}> Search By Title </Typography>}
              variant="outlined"
              fullWidth              
            />
          )}        
        />     

      <div className="filter_price">
        <Typography variant="h4" component="h4">
          Filter By Price
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
          Product Categories
        </Typography>
        <Box>
          <div className="category-button">
            {categoryData.map((c, index) => {
              return (
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={category === c.toLowerCase() ? true : false}
                      onChange={(event: any, value: any | null) => {
                        handleSearchChanges({
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
          onClick={clearFilters}
        >
          <Typography fontSize="1.5rem" color="white">
            Clear Filters
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
  margin-left: -15rem;   
 
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
