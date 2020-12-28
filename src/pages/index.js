import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/HomePage/Hero"
import { Container } from "../components/Grid"
import Lead from "../components/Layout/Lead"
import { ProductProvider } from '../context/productContext';
import { CartProvider } from "../context/cartContext"

export default function IndexPage() {
  return (
    <ProductProvider>
      <CartProvider>
        <Layout>
          <SEO title="Home" />
          <Container>
            <Hero />
          </Container>
        </Layout>
      </CartProvider>
    </ProductProvider>

  )
}
