import React, { useState } from 'react'

import UserContext from "./usercontext";

const Wrapper = (props) =>{

   
    const [loggeduser, setLoggeduser] = useState([])
    const [allPlants, setAllPlants] = useState([])


    return(
            
        <UserContext.Provider value = {{loggeduser, setLoggeduser, allPlants, setAllPlants}}>
            {props.children}
        </UserContext.Provider>

        );
    }

export default Wrapper