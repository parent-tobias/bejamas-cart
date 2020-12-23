/** @jsx jsx */
import React from "react"
import { jsx, Styled } from "theme-ui"
import { Row, Col } from "../components/Grid"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { Container } from "../components/Grid"

export default function ProductView({ data }) {
  const product = data.markdownRemark
  return (
    <Layout>
      <Container>
        <Row styles={{ justifyContent: ["center"] }}>
          <Col>
            <img
              src={product.frontmatter.image}
              alt={product.frontmatter.name}
            />
          </Col>

          <Col>
            <p>{product.frontmatter.tag}</p>

            <h1>{product.frontmatter.name}</h1>
            <p>{product.frontmatter.description}</p>
            <p>${product.frontmatter.price}</p>
            <button>Add to cart</button>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
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
