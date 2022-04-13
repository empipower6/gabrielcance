import React, { useEffect, useState, useRef } from "react"
import { gsap } from "gsap/dist/gsap"

//header.scss

const Scroll = () => {
  const [disappear, setDisappear] = useState(true)
  const [height, setHeight] = useState(0)
  const scroll = useRef(null)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      checkWhere()
    })
    // We listen to the resize event
    window.addEventListener("resize", () => {
      // We execute the same script as before
      changeHeight()
    })
    changeHeight()
    window.addEventListener("resize", changeHeight)
    return () => window.removeEventListener("scroll", changeHeight)
  }, [])
  const changeHeight = () => {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight
    setHeight(vh)
  }
  useEffect(() => console.log(height), [height])

  const checkWhere = () => {
    if (window.pageYOffset === 0) {
      setDisappear(true)
    } else {
      if (disappear) {
        setDisappear(false)
      }
    }
  }

  useEffect(() => {
    const timeline = gsap.timeline({ paused: true })
    timeline.fromTo(
      scroll.current,
      { opacity: 1 },
      { opacity: 0, duration: 0.3 }
    )

    disappear ? timeline.reverse(0.5) : timeline.play()
  }, [disappear])

  return (
    <>
      {/* <div
        style={{
          backgroundColor: "white",
          height: "20px",
          width: "100%",
          marginTop: `${height - 20}px`,
        }}
      ></div> */}
      <div
        className="scrollDown"
        ref={scroll}
        style={{
          paddingTop: `${Number(height) - 40}px`,
        }}
      >
        <p>Scroll down</p>
      </div>
    </>
  )
}

export default Scroll
