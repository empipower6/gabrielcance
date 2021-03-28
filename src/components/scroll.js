import React,{useEffect,useState,useRef} from 'react'
import { gsap } from "gsap/dist/gsap";

const Scroll = () =>{

    const [disappear, setDisappear] = useState(true);

    const scroll = useRef(null);

    useEffect(()=>{

        window.addEventListener('scroll',()=>{
            checkWhere();
        })

    },[])

    const checkWhere= () =>{

        if(window.pageYOffset == 0){
                setDisappear(true);
        }
        else{
            if(disappear){

                setDisappear(false);

            }
        }


    }

    useEffect(()=>{

 
        console.log(disappear);

        const timeline = gsap.timeline({paused:true});
        timeline.fromTo(scroll.current,{opacity:1},{opacity:0,duration:0.5});

        disappear ? timeline.reverse(0.5):timeline.play();

    },[disappear])

    return(

        <div className="scrollDown" ref={scroll}>

            <p>Scroll down</p> 

        </div>

    )
}

export default Scroll;