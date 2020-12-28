/** @jsx jsx */
import React, { Children } from "react"
import { jsx, Styled } from "theme-ui"
import { useStaticQuery, graphql, Link } from 'gatsby';
import {FaPlus} from 'react-icons/fa';
import Slider from "react-slick"

import Card from './Card';
import Image from './Image';

import { ProductContext } from '../context/productContext';

export default function ProductPanel({addToCart}){


  const settings = {
    centerPadding: "2px",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
    
  const data = useStaticQuery(graphql`{
    allMarkdownRemark(filter: {frontmatter:{title: {ne: ""}}}) {
      edges {
        node {
          frontmatter {
            title
            lead
          }
        }
      }
    }
  }
  `)
  const {allMarkdownRemark: {edges: [{node: {frontmatter: productHeader}}] }} = data;
  
  return (
    <ProductContext.Consumer>
    {products => (
      <section>

        <header>
      <h2>{productHeader.title}</h2>
      <p>{productHeader.lead}</p>
    </header>
    <Slider {...settings}>
          { products.map(product=>(
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))
          }
        
    </Slider>
    </section>
 )}
      </ProductContext.Consumer>
  )
}


export function ProductCard(props){
  const {product, addToCart} = props;
  
  return (
     <Card >
    <Link
      to={product.fields.slug}
      sx={{ color: "#fff", textDecoration: "none" }}
    >
      <Image
        sx={{ textAlign: "center" }}
        image={product.frontmatter.image}
        alt="dummy image"
      />
      <p>{product.frontmatter.name}</p>
      <p>{product.frontmatter.excerpt}</p>
    </Link>
    <span
      style={styles.addToCartBtn}
      onClick={()=>addToCart(product.id)}
    >
      <FaPlus size="24" color="white" />
    </span>
  </Card>
  )
}


const styles = {
  addToCartBtn: {
    maxWidth: "100px",
    background: "#AA528D",
    display: "flex",
    alignSelf: "flex-end",
    width: "50px",
    height: "auto",
    padding: "15px",
    borderRadius: "100%",
    cursor: "pointer",
  },
}