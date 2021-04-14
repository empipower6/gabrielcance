import React from 'react'

 const Gif = ({data}) => {


    return (
        <>

        <div className="mediaGif">
            <img className="mediaGif" src={data.gif.file.url} alt={data.nameOfGif} />

        </div>
                 

        </>
    )
}

export default Gif;