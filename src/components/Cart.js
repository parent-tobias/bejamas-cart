/** @jsx jsx */
import React, { Children } from "react"
import { jsx } from "theme-ui"
import { Link } from 'gatsby';
import {FaPlus} from 'react-icons/fa';

import {ProductContext} from '../context/productContext'

export default function CartSummary({items, adjustCart, removeFromCart}){
  return (
  <ProductContext.Consumer>
    {products=>(
      items.map(item=>(
        <CartItem key={item.id} products={products} item={item} removeFromCart={removeFromCart} />
        )
      )
  
    )
    }
  </ProductContext.Consumer>
  )
}

function CartItem({products, item, removeFromCart}){
  const product = products.find(product => product.id === item.id)
  return ( product ?
     <div sx={styles.cartRow}>
    <Link
      to={product.fields.slug}
      sx={{ color: "#fff", textDecoration: "none" }}
    >
      <span>{product.frontmatter.name}</span>
    </Link>
    <span>{item.qty}</span>
    <button onClick={()=>removeFromCart(item.id)}>x</button>
  </div> : <div>No match found</div>
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
  cartRow: {
    padding: ".5rem",
    display: "flex",
    justifyContent: "space-between"
  }
}