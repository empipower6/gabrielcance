import React,{useEffect} from "react"
import Header from '../components/header'
import Scroll from '../components/scroll'
import Gallery from '../components/gallery'

import { useStaticQuery, graphql } from 'gatsby'


import '../../stylesheets/style.scss'

export default function Home() {

  let data = useStaticQuery(graphql`
  query{

  pieces : allContentfulArtPiece(sort: {fields: projectNumber}) {
    nodes {
      title
      typeOfWork
      year
      projectNumber
      chooseMediaType {

        ... on ContentfulNormalMedia {
          title
          normalMedia {
            gatsbyImageData
          }
        }
        ... on ContentfulVideoUrl {
          title
          videoLink
        }
      }
      description {
        raw
      }
    }
  }
  }`
)

  useEffect(()=>{


  },[])
  return(
    <div>
      <Header />

      <Scroll />

      <Gallery allPieces = {data.pieces.nodes} />

    </div>
  )
}
