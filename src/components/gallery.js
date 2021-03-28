import React,{useEffect} from 'react'

import Piece from './piece'

const Gallery = ({allPieces}) =>{


    return (

        <div className="gallery">
        {
            allPieces.map((piece,index)=>(

                <Piece info={piece} key={piece.projectNumber} />
            ))
        }
        </div>
    )
}


export default Gallery;