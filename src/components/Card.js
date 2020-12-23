/** @jsx jsx */
import React, { Children } from "react"
import { jsx, Styled } from "theme-ui"
// import { Link } from "gatsby"
// import { Container } from "./Grid"

export default function Card({ children }) {
  return <Styled.div sx={styles.box}>{children}</Styled.div>
}

const styles = {
  box: {
    backgroundColor: "#331F41",
    border: "2px solid #716774",
    // height: "200px",
    padding: "1em 0",
    textAlign: "center",
    width: "200px",
  },
}
