import React, { useContext, useState } from "react";
import styled from "styled-components";
import GridViewIcon from "@mui/icons-material/GridView";
import { FilterContext } from "context/filter/FilterContext";
import ViewListIcon from "@mui/icons-material/ViewList";
import { FormControl, MenuItem, Select } from "@mui/material";

const Sort = () => {
    const { filter_products, grid_view, setGridView, setListView, sorting } =
    useContext(FilterContext);

    const [value, setValue] = useState("lowest");

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
                {filter_products.length > 1 && (
                    <p>{`${filter_products.length} Products Available`}</p>
                )}
                {filter_products.length < 2 && (
                    <p>{`${filter_products.length} Product Available`}</p>
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
                        color: "grey"
                    }}
                >
                    <MenuItem value={"lowest"}>Sort By Price: low to high</MenuItem>
                    <MenuItem value={"highest"}>Sort By Price: high to low</MenuItem>
                    <MenuItem value={"asc"}>Sort by Title (a-z)</MenuItem>
                    <MenuItem value={"desc"}>Sort by Title (z-a)</MenuItem>
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
