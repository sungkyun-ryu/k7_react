import "./MyClockTime.css"
import styles from './My.module.css'
import { useEffect, useState } from "react";

function MyClockTime() {
    const date = new Date();
    const showTime = date.toLocaleTimeString();
    // const ampm = showTime.substring(showTime.length - 2);
    // const st= {
    //     color: "cyan", 
    //     fontSize: "100px"
    // };
    
    const [ct, setCt] = useState(new Date());
    
    useEffect(() => {
        const tm = setInterval(()=>{
            setCt(new Date())
        }, 1000) ; 

        return () => {
            clearInterval(tm); 
        }
    },[])

    return (
        <>
        {/* <p className={ampm === "AM" ? "p1" : "p2"}>{showTime}</p> */}
        {/* <p style={{color: "cyan", fontSize: "100px"}}> {showTime} </p> */}
        {/* <p style ={st}> {showTime} </p> */}
        <p className={styles.c1}>{ct.toLocaleTimeString()}</p>
        </>
    )
}

export default MyClockTime;