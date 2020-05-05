import React, {useContext} from 'react'
import {Link} from "@reach/router"
import UserContext from "../components/usercontext"


export default props => {

    const {loggeduser} = useContext(UserContext)

    const showPlantList = props.plants.plants.map((plant, idx)=>{
       return (
           <div>
                <Link to={`/details/${plant._id}`} key={idx}>{plant.nickname}<br/></Link>
            </div>
       )
      })

    return (
        <div >
                {showPlantList}


        </div>
    )
}
