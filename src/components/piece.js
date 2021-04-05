import React,{useEffect} from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Normal from './normal'
import Video from './video'
import Carousel from './carousel'

const Piece = ({info}) =>{

   
    const options = {
        renderText: text => text.split('\n').flatMap((text, i) => [i > 0 && <br />, 
        text])
       }

    const findMediaType = (media,index) =>{


        let result;

        if(media.normalMedia){
            result = <Normal media={media.normalMedia} key={index}/>

       }
       else if(media.videoLink){
            result = <Video url={media.videoLink} key={index} />

       }
    //    else if(info.chooseMediaType.carouselMedia){
    //         result =  <Carousel />

    //    }
       else{
           result =  "";
       }

       return result;


    }

    // const findClassName = () =>{

    //     let result;

    //     if(info.chooseMediaType.normalMedia){
    //         result = info.chooseMediaType.normalMedia.length > 1 ? "normalMany":"normalOne";

    //    }
    //    else if(info.chooseMediaType.videoLink){
    //         result = "video"

    //    }
    //    else if(info.chooseMediaType.carouselMedia){
    //         result =  "carousel"

    //    }
    //    else{
    //        result =  "";
    //    }

    //    return result;


    // }

    useEffect(()=>{

       

    },[])
    return (
        <div className="piece">
            <div className="row">
                <div className="media">

            
                        {
                          info.chooseMedia.map((media,index)=>(

                            findMediaType(media,index)

                           ))
                        }

                </div>

                <div className="desc">
                
                    

                    <p className="projectNumber">{info.projectNumber}</p>

                    <div className="descBottom">

                        <div className="furtherBottom">
                            <div className="projectDesc">
                            {info.description ? documentToReactComponents(JSON.parse(info.description.raw),options): ""}
                            </div>
                            <div className="projectYear">
                                <p>{info.year}</p>
                            </div>
                            <div className="projectType">
                                <p>{info.typeOfWork}</p>
                            </div>
                        </div>
                </div> 

                </div>

            </div>
        </div>

    )
}


export default Piece;