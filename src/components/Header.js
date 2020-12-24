/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { Container } from "../components/Grid"
import { FaShoppingBasket } from "react-icons/fa"
export default function Header() {
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
        <span styles={styles.cart}>
          <FaShoppingBasket size="30" color="white" />
        </span>
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
}
