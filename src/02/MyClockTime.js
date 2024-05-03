import "./MyClockTime.css"
import styles from './My.module.css'

function MyClockTime() {
    const date = new Date();
    const showTime = date.toLocaleTimeString();
    // const ampm = showTime.substring(showTime.length - 2);
    // const st= {
    //     color: "cyan", 
    //     fontSize: "100px"
    // };
    


    return (
        <>
        {/* <p className={ampm === "AM" ? "p1" : "p2"}>{showTime}</p> */}
        {/* <p style={{color: "cyan", fontSize: "100px"}}> {showTime} </p> */}
        {/* <p style ={st}> {showTime} </p> */}
        <p className={styles.c1}>{showTime}</p>
        </>
    )
}

export default MyClockTime;