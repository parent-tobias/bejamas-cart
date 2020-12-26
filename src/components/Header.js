/** @jsx jsx */
import React, { useState, useContext } from "react"
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { FaShoppingBasket } from "react-icons/fa"

import { Container } from "../components/Grid"
import { CartContext } from "../context/cartContext"

export default function Header() {
  // const [cart, setCart] = useContext(CartContext)
  const [isOpen, setIsOpen] = useState(false)

  const openCart = () => {
    setIsOpen(!isOpen)
  }

  // const removeFromCart = (item) => {
  //   setCart((currentCart) => {
  //     const indexOfItemToRemove = currentCart.findIndex(
  //       (cartItem) => cartItem.id === item.id
  //     )

  //     if (indexOfItemToRemove === -1) {
  //       return currentCart
  //     }

  //     return [
  //       ...currentCart.slice(0, indexOfItemToRemove),
  //       ...currentCart.slice(indexOfItemToRemove + 1),
  //     ]
  //   })
  // }

  return (
    <header sx={styles.header}>
      <Container
        styles={styles.headerContainer}
        sx={{
          maxWidth: [
            "100%",
            "552px",
            "732px",
            "910px",
            "1100px",
            "1320px",
            "1480px",
          ],
        }}
      >
        <Link to="/" sx={styles.mainLink}>
          JAM SHOP
        </Link>
        <div>
          <FaShoppingBasket size="30" color="white" onClick={openCart} />
          {/* {cart.length} */}
          {/* {isOpen && (
            <div sx={styles.cartOpen}>
              {cart.map((item) => (
                <div sx={styles.cartItem}>
                  ${item}
                </div>
              ))}
            </div>
          )} */}
        </div>
      </Container>
    </header>
  )
}

Header.propTypes = {}

Header.defaultProps = {}

const styles = {
  header: {
    padding: "20px 0",
    position: "absolute",
    top: 0,
    left: 0,
    width: "1",
    background: "transparent",
  },
  mainLink: {
    variant: "text.link",
    color: "white",
    fontWeight: "bold",
    fontSize: 22,
  },
  headerContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  cartOpen: {
    width: "200px",
    height: "200px",
    background: "#220538",
    border: "2px solid #fff",
    borderRadius: "5px",
  },
  cartItem: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1em",
  },
}
