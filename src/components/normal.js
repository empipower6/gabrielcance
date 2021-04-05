import React,{useEffect} from 'react'
import { GatsbyImage } from "gatsby-plugin-image"
 const Normal = ({media}) =>{

    useEffect(()=>{

        console.log(media.normalMedia.length);
    },[])

    return (
        <>
            {media.normalMedia.length > 1 ? 
            
            media.normalMedia.map((image,index)=>(
            <div className="mediaInnerMany">

                <GatsbyImage image={image.gatsbyImageData} key={index} alt={image.title} style={{maxHeight:'100%'}} /> 

            </div>

            ))
            
            :
            <div className="mediaInner">



                    <GatsbyImage image={media.normalMedia[0].gatsbyImageData} alt={media.title} style={{maxHeight:'100%'}} /> 

            </div>
            }
        </>
    )
}

export default Normal;