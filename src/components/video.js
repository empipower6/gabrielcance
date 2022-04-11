import React, { useRef } from "react"
import ReactPlayer from "react-player"

const Video = ({ data }) => {
  const frame = useRef(null)

  const findHeight = num => {
    let aspectRatio = data.aspectRatioHeight / data.aspectRatioWidth

    let height = num * aspectRatio + "vw"

    return height
  }
  return (
    <>
      <div className="desktopVideo">
        <ReactPlayer
          className="react-player"
          ref={frame}
          url={data.videoLink}
          width="36vw"
          height={findHeight(36)}
          onReady={findHeight(36)}
        />
      </div>
      <div className="mobileVideo">
        <ReactPlayer
          className="react-player"
          ref={frame}
          url={data.videoLink}
          width="90vw"
          height={findHeight(86)}
          onReady={findHeight(86)}
        />
      </div>
    </>
  )
}

export default Video
