import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/HomePage/Hero"
import { Container } from "../components/Grid"
import Card from "../components/Card"
import { CartProvider } from "../context/cartContext"

export default function IndexPage() {
  return (
    <CartProvider>
      <Layout>
        <SEO title="Home" />
        <Container>
          <Hero />
          {/* <Card /> */}
        </Container>
      </Layout>
    </CartProvider>
  )
}
