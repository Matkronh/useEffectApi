import { useEffect, useState } from "react"
import styles from "./card.module.css"

let clickNumber = 2

async function getData(url, callback){
    const response = await fetch(url)
    const parsedData = await response.json()

    callback(parsedData.posts)
}



function Card(url){
    const [data, setData] = useState(null)

    useEffect(
        () => {getData(`https://dummyjson.com/posts/?offset=1&limit=${clickNumber}`, setData)}, [url])

    
    
    return( 
        <div className={styles.outercard}>
            <div>
                {
                    data &&
                    data.map((item, index) => {
                        return  <div className={styles.card} key={index}>
                                    <h4 className={styles.idtext}>Id: {item.id}</h4> 
                                    <h1 className={styles.title}>{item.title}</h1>
                                    <p className={styles.boddytext}>{item.body}</p>

                                    <div><span className={styles.tagtext}>{item.tags[0]}</span><span className={styles.tagtext}>{item.tags[1]}</span><span className={styles.tagtext}>{item.tags[2]}</span></div>

                                </div>      
                    })
                    
                }
                
            </div>
            <button onClick={() => {
                clickNumber++
                console.log(clickNumber)
                getData(`https://dummyjson.com/posts/?offset=1&limit=${clickNumber}`, setData)
            }} className={styles.click}>Clicky</button>
        </div>
        
    )
}




export default Card