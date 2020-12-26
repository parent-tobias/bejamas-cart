/** @jsx jsx */
import React from "react"
import { Flex, jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import { Col, Row, Container } from "../components/Grid"
import Dummy from "../images/products/dumy.svg"

export default function ProductView({ data }) {
  const product = data.markdownRemark
  return (
    <Layout>
      <Container>
        <section sx={{ paddingTop: [60, 60, 105] }}>
          <Row sx={styles.detailViewWrapper}>
            <Col styles={styles.detailImage}>
              <img
                // src={product.frontmatter.image}
                src={Dummy}
                alt={product.frontmatter.name}
                sx={{ maxWidth: "1" }}
              />
            </Col>

            <Col style={styles.detailMeta}>
              <p>{product.frontmatter.tag}</p>

              <Styled.h1 sx={styles.heading}>
                {product.frontmatter.name}
              </Styled.h1>
              <p>{product.frontmatter.description}</p>
              <h2>${product.frontmatter.price}</h2>
              <button sx={{ variant: "button.primary", mx: ["auto", null, 0] }}>
                ADD TO CART
              </button>
            </Col>
          </Row>
        </section>
      </Container>
    </Layout>
  )
}

const styles = {
  detailViewWrapper: {
    paddingTop: [60, 60, 105],
    paddingLeft: [60, 60, 105],
    paddingRight: [60, 60, 105],
  },
  detailImage: {
    width: ["1", "1", "2/5", null, 450],
    textAlign: ["center", "center", "left"],
  },
  detailMeta: {
    width: ["1", "1", "3/5", null, 650],
    ml: ["auto", 0, 0, 0, 0, 100],

    mb: ["65px", "65px", 0],
  },
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      # html
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
