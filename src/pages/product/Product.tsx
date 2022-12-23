import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { ProductContext } from "context/product/ProductContext";
import { numberFormatCurrency } from "../../common/numberFormatCurrency";
import Star from "../../components/Star/Star";
import { ProductImage } from "components/ProductImage";
import AddToCart from "components/AddToCart";
import { CircularProgress, Stack, Typography } from "@mui/material";
import { AppLayout } from "components/Layouts";
import { Grid } from "@mui/material";
import { useTranslation } from "react-i18next";

const Product = () => {
    const { getSingleProduct, singleProduct, singleProductLoading } =
    useContext(ProductContext);

    const { id } = useParams();
    const { t } = useTranslation();

    useEffect(() => {
        getSingleProduct(Number(id));
    }, []);
 
    if (singleProductLoading) {
        return (
            <AppLayout>
                <Stack
                    gap={1}
                    justifyContent="center"
                    alignItems="center"
                    marginTop="5rem"
                >
                    <CircularProgress style={{ color: "#1976d2" }} />
                    <Typography>{t("loading")}</Typography>
                </Stack>
            </AppLayout>
        );
    }     

    return (
        <Wrapper>
            {singleProduct && (
                <AppLayout>
                    <Grid container style={{ paddingTop: "5rem" }} spacing={3}>
                        <Grid item xs={12} sm={4} md={4}>
                            <div className="product_images">
                                <ProductImage img={singleProduct.image} />
                            </div>
                        </Grid>

                        <Grid className="product-data" item xs={12} sm={6} md={6}>
                            <Typography component="h2" variant="h2">
                                {singleProduct.title}
                            </Typography>
                            <Star
                                stars={singleProduct.rating.rate}
                                reviews={singleProduct.rating.count}
                            />

                            <Typography className="product-data-price product-data-real-price">
                                {numberFormatCurrency.formatNumber(singleProduct.price)}
                            </Typography>
                            <Typography sx={{ fontSize: "15px" }}>
                                {singleProduct.description}
                            </Typography>

                            <Typography component="h5" variant="h5">
                  Categories: {singleProduct.category}
                            </Typography>

                            <AddToCart product={singleProduct} />
                        </Grid>
                    </Grid>
                </AppLayout>
            )}
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
