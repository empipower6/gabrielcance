import React, { useEffect, useState, useRef } from "react"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { gsap } from "gsap/dist/gsap"
import { Link } from "gatsby"

const Header = () => {
  let date = new Date()
  let hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
  let minutes =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
  let seconds =
    date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()

  const [finalDate, setFinalDate] = useState(
    hour + ":" + minutes + ":" + seconds
  )

  const page = useRef(null)
  if (typeof window !== `undefined`) {
    page.current = window.location.pathname
  }

  gsap.registerPlugin(ScrollToPlugin)

  useEffect(() => {
    setInterval(() => {
      changeTime()
    }, 1000)
  })

  const changeTime = () => {
    date = new Date()
    hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
    minutes =
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
    seconds =
      date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()
    setFinalDate(hour + ":" + minutes + ":" + seconds)
  }

  const scrollUp = () => {
    gsap.to(window, { scrollTo: { y: 0 }, duration: 1 })
  }

  return (
    <div className="header">
      <div className="headerName">
        {page.current && page.current == "/information" ? (
          <Link
            to="/"
            style={{ color: "white", textDecoration: "none" }}
            alt={"Go to Home Page"}
          >
            {" "}
            <p>Gabriel Cance</p>
          </Link>
        ) : (
          <p
            onClick={() => {
              scrollUp()
            }}
          >
            {" "}
            Gabriel Cance{" "}
          </p>
        )}
      </div>

      <div className="headerInformation">
        <Link
          to="/information"
          alt={"Go to Information Page"}
          style={{ color: "white", textDecoration: "none" }}
        >
          <a alt="Information Page">
            <p> Information</p>
          </a>
        </Link>
      </div>

      <div className="headerSocial">
        <p>
          {" "}
          <a
            href="https://www.instagram.com/gabrielcance/"
            alt="Go to Gabriel's Instagram"
            target="_blank"
            rel="noreferrer"
            className="instagram"
          >
            Instagram,
          </a>
          <a
            href="mailto:cancegabriel@gmail.com"
            className="mail"
            alt="Go to Gabriel's Email"
          >
            {" "}
            Email
          </a>{" "}
        </p>
      </div>
      <div className="headerBlank"></div>

      <div className="headerClock">
        <p> {finalDate}</p>
      </div>
    </div>
  )
}

export default Header
