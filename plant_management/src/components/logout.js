import React from "react"
import { navigate } from "@reach/router"
import Cookies from "js-cookie"
import axios from "axios"
import {Button} from "reactstrap"

export default () => {
    
    const onClickHandler = (e) => {
        e.preventDefault()
        Cookies.remove("usertoken")
        axios.get("http://localhost:8000/api/users",{withCredentials: true})
        .catch(err => navigate("/home"))
    }
    
    
    return(
        <Button onClick={onClickHandler}>Logout</Button>
    )
}