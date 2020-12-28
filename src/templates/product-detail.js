/** @jsx jsx */
import React from "react"
import { Flex, jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import { Col, Row, Container } from "../components/Grid"
import { ProductProvider} from '../context/productContext';
import { CartProvider, CartContext } from '../context/cartContext';

export default function ProductView({ data }) {
  const product = data.markdownRemark;
  console.log(JSON.parse(JSON.stringify(data)));

  return (
<ProductProvider>

  <CartProvider>
    <Layout>
      <Container>
        <section sx={{ paddingTop: [60, 60, 105] }}>
          <Flex sx={styles.detailViewWrapper}>
            <Col styles={styles.detailImage}>
              <img
                src={product.frontmatter.image}
                alt={product.frontmatter.name}
                sx={{ maxWidth: "1" }}
              />
            </Col>

            <Col styles={styles.detailMeta}>
              <Styled.p sx={{ textTransform: "uppercase", color: "#D9C055" }}>
                {product.frontmatter.tag}
              </Styled.p>

              <Styled.h2 sx={styles.heading}>
                {product.frontmatter.name}
              </Styled.h2>
              <p>{product.frontmatter.description}</p>
              <Styled.h3>${product.frontmatter.price}</Styled.h3>
              <CartContext.Consumer>
                { ({cart, addToCart})=>(
                  <button sx={{ variant: "button.primary", mx: ["auto", null, 0] }} onClick={()=>addToCart(product.id)}>
                    ADD TO CART
                  </button>
                )}
              </CartContext.Consumer>
            </Col>
          </Flex>
        </section>
      </Container>
    </Layout>
  </CartProvider>
  </ProductProvider>

  )
}

const styles = {
  detailViewWrapper: {
    paddingTop: [60, 60, 105],
    paddingLeft: [60, 60, 105],
    paddingRight: [60, 60, 105],
    flexDirection: ["column", "column", "row"],
  },
  detailImage: {
    width: ["1", "1", "2/5", null, 450],
    textAlign: ["center", "center", "left"],
  },
  detailMeta: {
    width: ["1", "1", "3/5", null, 650],
    // ml: ["auto", 0, 0, 0, 0, 100],
    // mb: ["65px", "65px", 0],
  },
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      # html
      id
      frontmatter {
        image
        name
        description
        price
        tag
      }
    }
  }
`
