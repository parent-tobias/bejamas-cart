// /** @jsx jsx */

// import React from "react"
// import { graphql, Link } from "gatsby"
// import { Container, jsx, Styled } from "theme-ui"

// import { Row, Col } from "../components/Grid"
// import Dummy from "../images/products/dumy.svg"
// import Card from "../components/Card"
// import Layout from "../components/Layout"

// export default function ProductCard({ data }) {
//   return (
//     <Layout>
//       <Container>
//         <div sx={{ paddingTop: [60, 60, 105] }}>
//           <Row styles={styles.cardWrapper}>
//             {data &&
//               data.allMarkdownRemark.edges.map(({ node }) => (
//                 <Card key={node.frontmatter.id}>
//                   <Link to={node.fields.slug}>
//                     <img src={Dummy} alt="dummy image" />
//                     <p>{node.frontmatter.name}</p>
//                     <p>{node.frontmatter.excerpt}</p>
//                     <button sx={styles.addToCartBtn}>+</button>
//                   </Link>
//                 </Card>
//               ))}
//           </Row>
//         </div>
//       </Container>
//     </Layout>
//   )
// }

// export const query = graphql`
//   query MyQuery {
//     allMarkdownRemark {
//       edges {
//         node {
//           fields {
//             slug
//           }
//           id
//           frontmatter {
//             excerpt
//             name
//             description
//             image
//             price
//           }
//         }
//       }
//     }
//   }
// `
// const styles = {
//   cardWrapper: {
//     justifyContent: "center",
//     position: "relative",

//     addToCartBtn: {
//       bottom: "10%",
//       variant: "button.primary",
//       position: "absolute",
//       right: "2%",
//     },
//   },
// }
