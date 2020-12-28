/** @jsx jsx */
import React, { Children } from "react"
import { jsx } from "theme-ui"
import { Link } from 'gatsby';
import {FaPlus} from 'react-icons/fa';

import {ProductContext} from '../context/productContext'

export default function CartSummary({items}){
  return (
  <ProductContext.Consumer>
    {products=>(
      items.map(item=>(
        <CartItem key={item.id} products={products} item={item} />
        )
      )
  
    )
    }
  </ProductContext.Consumer>
  )
}

function CartItem({products, item}){
  const product = products.find(product => product.id === item.id)
  return (
     <div>
    <Link
      to={product.fields.slug}
      sx={{ color: "#fff", textDecoration: "none" }}
    >
      <span>{product.frontmatter.name}</span>
    </Link>
    <span>{item.qty}</span>
  </div>
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