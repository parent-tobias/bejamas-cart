// import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import { Styled } from "theme-ui"

// export default function Lead() {
//   const data = useStaticQuery(graphql`
//     query MyQuery {
//       allMarkdownRemark(
//         filter: { frontmatter: { title: { eq: "Explore community choices" } } }
//       ) {
//         edges {
//           node {
//             frontmatter {
//               title
//               lead
//             }
//           }
//         }
//       }
//     }
//   `)
//   return (
//     <>
//       {data &&
//         data.allMarkdownRemark.edges.map(({ node }) => (
//           <div>
//             <Styled.h1>{node.frontmatter.title}</Styled.h1>
//             <Styled.p>{node.frontmatter.lead}</Styled.p>
//           </div>
//         ))}
//     </>
//   )
// }
