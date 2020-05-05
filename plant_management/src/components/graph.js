import React, { useState, useEffect } from "react"
import Radar from 'react-d3-radar';
import axios from "axios";
import {Link} from "@reach/router"

export default (props) => {

    const {allPlants} = props
    const [sets, setSets] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(()=>{

        allPlants.plants.forEach(plant=> {
            const id = plant.apid
            axios.post("http://localhost:8000/api/getoneresult", {id})
              .then (res=>{
                  let each = {
                    key: `${plant.nickname}`,
                    label: `${plant.location}`,
                    values: {
                        ph: res.data.main_species.growth.ph_maximum,
                        precip: res.data.main_species.growth.precipitation_maximum.inches,
                        tempMin: res.data.main_species.growth.temperature_minimum.deg_f
                      }
                    }
                  sets.push(each)
                  setSets(sets)
                  console.log(sets)
              })
        })
        
    }, [])

    const onClickHandler = (e) =>{
      e.preventDefault()
      setLoaded(true)
    }

    return (
      <div>
      <button onClick ={onClickHandler}>Load my graph of plants!</button>
      {loaded &&<Radar
        width={300}
        height={300}
        padding={70}
        domainMax={100}
        highlighted={null}
        onHover={(point) => {
            if (point) {
              console.log('hovered over a data point');
            } else {
              console.log('not over anything');
            }
        }}
        
        data={{
          variables: [
            {key: 'ph', label: 'PH Maximum'},
            {key: 'precip', label: 'Max Precipitation'},
            {key: 'tempMin', label: 'Minimum Temperature'},
          ],
          sets: sets,
        }}
      />}
        <Link to="/main">Back to Main Page</Link>
      </div>
    )
}
