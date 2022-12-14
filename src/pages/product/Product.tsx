import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { ProductContext } from "context/product/ProductContext";
import { numberFormatCurrency } from "../../common/numberFormatCurrency";
import Star from "../../components/Star/Star";
import { ProductImage } from "components/ProductImage";
import AddToCart from "components/AddToCart";
import { NotFoundPage } from "pages";
import { CircularProgress, Typography } from "@mui/material";
import { AppLayout } from "components/Layouts";
import { Grid } from "@material-ui/core";

const Product = () => {
    const { getSingleProduct, singleProduct, singleProductLoading } = useContext(ProductContext);

    const { id } = useParams();

    const {
        title,
        price,
        description,
        category,
        rating = {
            rate: 0,
            count: 0,
        },
        image,
    } = singleProduct;

    useEffect(() => {
        getSingleProduct(id);
    }, []);

    if (singleProductLoading) {
        return <CircularProgress className="page_loading" sx ={{width: "4rem", height: "4rem", justifyContent: "center"}}/>;
    }

    return (
        <Wrapper>
            <AppLayout>
                {singleProduct ? (
                    <Grid container style={{ paddingTop: "5rem" }} spacing={3}>
                        <Grid item xs={12} sm={4} md={4}>
                            <div className="product_images">
                                <ProductImage img={image} />
                            </div>
                        </Grid>

                        <Grid className="product-data" item xs={12} sm={6} md={6}>                         
                            <Typography component="h2" variant="h2">
                                {title}
                            </Typography>
                            <Star stars={rating.rate} reviews={rating.count} />

                            <Typography className="product-data-price product-data-real-price">
                                {numberFormatCurrency.formatNumber(price)}
                            </Typography>
                            <Typography sx={{ fontSize: "15px" }}>
                                {description}
                            </Typography>

                            <Typography component="h5" variant="h5">
                    Categories: {category}
                            </Typography>

                            <AddToCart product={singleProduct} />                           
                        </Grid>
                    </Grid>
                ) : (
                    <NotFoundPage />
                )}
            </AppLayout>
        </Wrapper>
    );
};

const Wrapper = styled.section`

   .container {
    padding: 9rem 0;
    display:flex;
  }
  }
  .product_images {
    display: flex;
    align-items: center;
    padding-left: 10rem;
    width: 40rem;
    height:40rem;   
    &:hover img {
      transform: scale(1.2);
    }
  }
 
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;  

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: #1976d2;
      font-size: 14px;
    }  
  }

  .page_loading {
    font-size: 3.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 768px) {
    padding: 0 2.4rem;
  }
`;

export default Product;
