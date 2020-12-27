/** @jsx jsx */
import React from "react"
import {jsx} from 'theme-ui'
import { StaticQuery, graphql } from "gatsby"


export default function Image({image, alt}){
  const relativePath = image.replace("images/", "");
  return (
    <StaticQuery
      query={graphql`
query {
  allFile {
    edges{
      node{
        relativePath
        publicURL
      }
    }
  }
}  
      `}
    
      render={(data)=>{
        const url = data.allFile.edges.find(img => img.node.relativePath === relativePath
        )
        return <img src={url && url.node.publicURL} alt={alt} />
      }}
    
    />
  )
}
