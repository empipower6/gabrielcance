import React,{useEffect,useState} from 'react'
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { gsap } from "gsap/dist/gsap";
import { Link } from "gatsby"

const Header = () =>{


    let date = new Date();  
    let hour = date.getHours()<10? "0"+date.getHours():date.getHours();    
    let minutes = date.getMinutes()<10? "0"+date.getMinutes():date.getMinutes();    
    let seconds = date.getSeconds()<10? "0"+date.getSeconds():date.getSeconds();  

    const [finalDate, setFinalDate] = useState(hour +":"+minutes+":"+seconds);

    gsap.registerPlugin(ScrollToPlugin);

    useEffect(()=>{
      setInterval(()=>{changeTime()},1000);
      console.log();
    })

    const changeTime = () =>{

        date = new Date();  
        hour = date.getHours()<10? "0"+ date.getHours():date.getHours();    
        minutes = date.getMinutes()<10? "0"+date.getMinutes():date.getMinutes();    
        seconds = date.getSeconds()<10? "0"+date.getSeconds():date.getSeconds() ;  
        setFinalDate(hour +":"+minutes+":"+seconds);
    }

    const scrollUp = ()=>{

        gsap.to(window,{scrollTo:{y:0},duration:1});

    }


    return(
        <div className='header'>

            <div className="headerName" >
                
                {
                    window.location.pathname=='/information'?
                    <Link to="/" style={{color:'white',textDecoration:'none'}}> <p>Gabriel Cance</p></Link>:
                    <p onClick={()=>{scrollUp()}}> Gabriel Cance </p>
                }
            </div>

                <div className="headerInformation">
                <Link to='/information' style={{color:'white',textDecoration:'none'}}>
                    <p> Information</p>
                </Link>
                </div>

            <div className="headerSocial">
                <p> <a href="https://www.instagram.com/gabrielcance/" target="_blank" rel="noreferrer" className="instagram">Instagram,</a><a href="mailto:cancegabriel@gmail.com" className="mail"> Email</a> </p>
               

            </div>
            <div className="headerBlank"></div>

            <div className="headerClock">
                <p> {finalDate}</p>
            </div>
         

        </div>

    )
}

export default Header;