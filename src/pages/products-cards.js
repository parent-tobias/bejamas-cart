/** @jsx jsx */

import React from "react"
import { graphql } from "gatsby"
import { jsx, Styled } from "theme-ui"

import { Row, Col } from "../components/Grid"
import Dummy from "../images/products/dumy.svg"
import Card from "../components/Card"

export default function ProductCard({ data }) {
  return (
    <div sx={{ paddingTop: [60, 60, 105] }}>
      <Row styles={styles.cardWrapper}>
        {data !== undefined &&
          data.allMarkdownRemark.edges.map(({ node }) => (
            <Card key={node.frontmatter.id}>
              <img src={Dummy} alt="dummy image" />
              <p>{node.frontmatter.name}</p>
              <p>{node.frontmatter.excerpt}</p>
              <button sx={styles.addToCartBtn}>+</button>
            </Card>
          ))}
      </Row>
    </div>
  )
}

export const query = graphql`
  query MyQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            excerpt
            name
            description
            image
            price
          }
        }
      }
    }
  }
`
const styles = {
  cardWrapper: {
    justifyContent: "center",
    position: "relative",
  },
  addToCartBtn: {
    bottom: "10%",
    variant: "button.primary",
    // mx: ["auto", null, 0],
    position: "absolute",
    right: "2%",
  },
}
