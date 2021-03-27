import React,{useEffect,useRef} from 'react'


const Header = () =>{

    useEffect(()=>{

    })



    return(
        <div className='header'>

            <div className="headerName">
                <p> Gabriel Cance </p>
            </div>

            <div className="headerInformation">
                <p> Information</p>
            </div>

            <div className="headerSocial">
                <p> <a href="https://www.instagram.com/gabrielcance/" target="_blank" className="instagram">Instagram,</a><a href="mailto:cancegabriel@gmail.com" className="mail"> Email</a> </p>
               

            </div>
            <div className="headerBlank"></div>

            <div className="headerClock">
                <p> Clock</p>
            </div>
         

        </div>

    )
}

export default Header;