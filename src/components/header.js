import React,{useEffect,useState} from 'react'


const Header = () =>{


    let date = new Date();  
    let hour = date.getHours()<10? "0"+date.getHours():date.getHours();    
    let minutes = date.getMinutes()<10? "0"+date.getMinutes():date.getMinutes();    
    let seconds = date.getSeconds()<10? "0"+date.getSeconds():date.getSeconds();  

    const [finalDate, setFinalDate] = useState(hour +":"+minutes+":"+seconds);

    useEffect(()=>{
      setInterval(()=>{changeTime()},1000);
    })

    const changeTime = () =>{

        date = new Date();  
        hour = date.getHours()<10? "0"+ date.getHours():date.getHours();    
        minutes = date.getMinutes()<10? "0"+date.getMinutes():date.getMinutes();    
        seconds = date.getSeconds()<10? "0"+date.getSeconds():date.getSeconds() ;  
        setFinalDate(hour +":"+minutes+":"+seconds);
    }



    return(
        <div className='header'>

            <div className="headerName">
                <p> Gabriel Cance </p>
            </div>

            <div className="headerInformation">
                <p> Information</p>
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