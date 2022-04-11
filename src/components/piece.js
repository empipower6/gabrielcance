import React, { useState } from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Normal from "./normal"
import Video from "./video"
import Carousel from "./carousel"
import Gif from "./gif"

const Piece = ({ info }) => {
  const [show, setShow] = useState(false)
  const options = {
    renderText: text =>
      text.split("\n").flatMap((text, i) => [i > 0 && <br />, text]),
  }

  const findMediaType = (media, index) => {
    let amount = info.chooseMedia.length

    let result

    if (media.normalMedia) {
      result =
        amount > 1 && index < amount - 1 ? (
          [
            <Normal media={media.normalMedia} key={index} />,
            <div className="separator"></div>,
          ]
        ) : (
          <Normal media={media.normalMedia} key={index} />
        )
    } else if (media.videoLink) {
      // result = <Video data={media} key={index} />
      result =
        amount > 1 && index < amount - 1 ? (
          [
            <Video data={media} key={index} />,
            <div className="separator"></div>,
          ]
        ) : (
          <Video data={media} key={index} />
        )
    } else if (media.gif) {
      // console.log(index + " and the amount is " + amount)

      result =
        amount > 1 && index < amount - 1 ? (
          [<Gif data={media} key={index} />, <div className="separator"></div>]
        ) : (
          <Gif data={media} key={index} />
        )
    } else {
      result = ""
    }

    return result
  }

  return (
    <div className="piece">
      <div className="row">
        <div className="media">
          <div className="mediaInnerWrapper">
            {info.chooseMedia.map((media, index) =>
              findMediaType(media, index)
            )}
          </div>
          <div className="mobileColumn">
            <div className="sectionNumber">
              <p className="projectNumber">{info.projectNumber}</p>
            </div>
            <div className="togglerDiv">
              <button
                onClick={() => {
                  setShow(!show)
                }}
              >
                {show ? (
                  <p>
                    Close <span>↑</span>
                  </p>
                ) : (
                  <p>
                    Info <span>↓</span>
                  </p>
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="desc">
          <p className="projectNumber">{info.projectNumber}</p>

          <div className="descBottom">
            <div className="furtherBottom">
              <div className="projectDesc">
                {info.description
                  ? documentToReactComponents(
                      JSON.parse(info.description.raw),
                      options
                    )
                  : ""}
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
        {show ? (
          <div className="mobileDesc">
            <div className="projectDesc">
              {info.description
                ? documentToReactComponents(
                    JSON.parse(info.description.raw),
                    options
                  )
                : ""}
            </div>
            <div className="projectYear">
              <p>{info.year}</p>
            </div>
            <div className="projectType">
              <p>{info.typeOfWork}</p>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  )
}

export default Piece
