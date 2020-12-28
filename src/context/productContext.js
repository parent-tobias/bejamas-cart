import React, { useState, createContext } from "react"
import {useStaticQuery, graphql } from 'gatsby'

export const ProductContext = createContext({
  products: [],
})

export const ProductProvider = ({ children }) => {
  const data = useStaticQuery(graphql`
  query MyQuery {
    allMarkdownRemark(filter: { frontmatter: { price: { gte: 0 } } }) {
      edges {
        node {
          fields {
            slug
          }
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
  }`
)
  const products = data.allMarkdownRemark.edges.map((product)=>product.node)
  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  )
}
