import React, {useEffect, useState} from "react"
import Graph from "../components/graph"
import axios from "axios"


export default () => {

    const [allPlants, setAllPlants] = useState()
    const [loaded, setLoaded] = useState(false)

    useEffect(()=>{
        axios.get('http://localhost:8000/api/plants')
                    .then(res=>{
                        setAllPlants(res.data);
                        setLoaded(true);
                        }
                    )
    }, [])

    return (
        <div>
            {loaded && <Graph allPlants = {allPlants}/>}
        </div>
    )

}
