import React, { useEffect, useState, useContext } from 'react'
import { Link, navigate } from '@reach/router';
import Sky from 'react-sky';
import axios from 'axios';
import TopNavbar from '../components/Navbar';
import PlantList from '../components/PlantList';
import styles from '../components/divStyle.module.css';
import jwt from "jsonwebtoken"
import Cookies from "js-cookie"
import UserContext from "../components/usercontext"



export default () => {
    const [loaded, setLoaded] = useState(false);
    const {setLoggeduser, allPlants, setAllPlants} = useContext(UserContext)
    const [loaded2, setLoaded2] = useState(false);

    useEffect(()=>{
        const user = Cookies.get("usertoken")
        if (user === undefined){
            navigate("/home")
        } else{
        const thisUser = jwt.decode(user)
        const _id = thisUser._id
        axios.post("http://localhost:8000/api/userlogin",{_id},{withCredentials: true})
                .then(res=> {
                    setLoggeduser(res.data.user)
                    setLoaded2(true);
                })
                .then(res=>  {     
                axios.get('http://localhost:8000/api/plants')
                    .then(res=>{
                        setAllPlants(res.data);
                        setLoaded(true);
                        }
                    )
                }
                )
                .catch(err=> navigate("/home"))
        }

    },[])

    return (
        <div>    
            {loaded2 && <TopNavbar/>}      
           <Sky
            images ={{
                0: "https://i.ya-webdesign.com/images/cute-cactus-png-1.png",
                1: "https://i.pinimg.com/originals/f0/9e/4c/f09e4c0a1e846ff95accc4fc852e60ff.png",
                2: "https://i.ya-webdesign.com/images/cactus-clipart-transparent-4.png",
            }}
            how= {130} 
            time={40}
            size ={'100px'}
            // background={'#2f3939'}
           />
           
            <div className={styles.boxStyle}>
                <h3 className={styles.textFont}>Current saved plants:</h3>
                {loaded && <PlantList plants={allPlants}/>}
            </div>


        </div>
    )
}
