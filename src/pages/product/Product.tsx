import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { ProductContext } from "context/product/ProductContext";
import { Container } from "../../components/styles/Container";
import { numberFormatCurrency } from "../../common/numberFormatCurrency";
import Star from "../../components/Star/Star";
import { ProductImage } from "components/ProductImage";
import AddToCart from "components/AddToCart";
import { NotFoundPage } from "pages";
import { CircularProgress, Typography } from "@mui/material";
import { AppLayout } from "components/Layouts";

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
                <Container className="container">
                    {singleProduct ? (
                        <div className="grid grid-two-column">
                            <div className="product_images">
                                <ProductImage img={image} />
                            </div>

                            <div className="product-data">
                                <Typography component="h2" variant="h2">{title}</Typography>
                                <Star stars={rating.rate} reviews={rating.count} />

                                <Typography className="product-data-price product-data-real-price">
                                    {numberFormatCurrency.formatNumber(price)}
                                </Typography>
                                <Typography sx={{ fontSize: "15px" }}>{description}</Typography>

                                <Typography component="h5" variant="h5">Categories: {category}</Typography>
           
            
                                <AddToCart product={singleProduct} />
                            </div>
                        </div>
                    ) : (
                        <NotFoundPage />
                    )}
                </Container>
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
    gap: 4rem;
    width: 50rem;
    height:50rem;   
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

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: rgb(98 84 243);
      font-size: 15px;
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
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
