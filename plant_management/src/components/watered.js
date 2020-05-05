import React, { useEffect, useState } from "react"
import moment from "moment"
import axios from "axios"
import styles from '../components/divStyle.module.css';

export default props => {

    const {timeSinceLastWater, precip, id,waterhistory} = props
    const [lastWatered, setLastWatered] = useState()
    const [loaded, setLoaded] = useState()
    const [daysFromNow, setDaysFromNow] = useState()
    const [nextWater, setNextWater] = useState()

    const calcWatering = new Promise((resolve, reject) =>{
        if((Math.floor(365/(precip/0.5))+1)>0){
        resolve(Math.floor(365/(precip/0.5))+1)
        } else{
            reject("This plants watering is past due!")
        }
    })


    useEffect(()=> {
        setLastWatered(moment(timeSinceLastWater).format('MM/DD/YYYY'))
        
        calcWatering
            .then(res => {
                setNextWater(res);
                const daysmoment = moment(timeSinceLastWater).add(res, 'days')
                setDaysFromNow(moment(daysmoment).fromNow())
            })
            .then(setLoaded(true))
            .catch(res=> console.log(res))


        
    }, [])

    const waterPlant = (e) =>{
        e.preventDefault()
        waterhistory.push(Date.now())
        let newwaterhistory = waterhistory
        axios.put("http://localhost:8000/api/plants/edit/"+ id, {
            id,
            newwaterhistory
        })
            .then(res=> console.log(res.data))
    }

    return(
        <div className = {styles.loginbox} style={{width:400, display : 'inline-block'}}>
        {loaded &&
            <div>
                <p>Day last watered: {lastWatered}</p>
                <p>This plant requires water every {nextWater} days.</p>
                <p>We recommend you water your plant {daysFromNow}.</p>
                <button onClick={waterPlant}>Click here when you water!</button>
            </div>}
        </div>
    )

}