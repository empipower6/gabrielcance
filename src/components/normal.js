import React,{useEffect} from 'react'
import { GatsbyImage } from "gatsby-plugin-image"
 const Normal = ({media}) =>{

    useEffect(()=>{

    },[])

    return (
        <>
            {media.length > 1 ? 
            
            media.map((image,index)=>(
            <div className="mediaInnerMany">

                <GatsbyImage image={image.gatsbyImageData} key={index} alt={image.title} /> 

            </div>

            ))
            
            :
            <div className="mediaInner">

                    <GatsbyImage image={media[0].gatsbyImageData} alt={media[0].title} /> 

            </div>
            }
        </>
    )
}

export default Normal;