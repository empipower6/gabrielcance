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
      description {
        raw
      }
      chooseMedia {
        ... on ContentfulImages {
          normalMedia {
            gatsbyImageData(placeholder: TRACED_SVG)
          }
          title

        }
        ... on ContentfulVideoFromUrl {
          videoLink
          aspectRatioHeight
          aspectRatioWidth
        }
        ... on ContentfulGif {
          nameOfGif
          gif {
            file {
              url
            }
          }
        }
      }
    }
  }
  }`
)

  useEffect(()=>{

    //  console.log(data.pieces.nodes);
  },[])
  return(
    <div>
      <Header />

      <Scroll />

      <Gallery allPieces = {data.pieces.nodes} />

    </div>
  )
}
