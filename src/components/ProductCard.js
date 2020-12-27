/** @jsx jsx */
import React, { Children } from "react"
import { jsx } from "theme-ui"
import { Link } from 'gatsby';
import {FaPlus} from 'react-icons/fa';

import Card from './Card';
import Image from './Image';


export default function ProductCard(props){
  const {product, addToCart} = props;
  return (
     <Card>
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
      onClick={addToCart}
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