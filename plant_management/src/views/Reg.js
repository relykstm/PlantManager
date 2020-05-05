import React, {useState} from "react"
import axios from "axios"
import {Link} from "@reach/router"
import styles from '../components/divStyle.module.css';

export default props => {

    const [firstName, setFname] = useState("")
    const [lastName, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmpw] = useState("")
    const [errors,setErrors] = useState([])

    const onSubmitHandler = e =>{
        e.preventDefault();
        let plants = []
        axios.post("http://localhost:8000/api/users/new",{firstName, lastName, email, password, confirmPassword, plants})
            .then(res=> console.log(res.data.msg))
            .catch(err => {
                const errorResponse = err.response.data.errors;
                let errorArr = [];
                for(const key of Object.keys(errorResponse)){
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr)
            })
    }

    return (
        <div className={styles.loginbox} style={{width:400, display: "inline-block"}}>
            <h1>Register Here:</h1>
            <form onSubmit = {onSubmitHandler}>
                {errors.map((each, i)=> <h5 key={i}>{each}</h5>)}
                <p>
                    <label>First Name:</label>
                    <input type="text" onChange = {(e)=> setFname(e.target.value)}/>
                </p>
                <p>
                    <label>Last Name:</label>
                    <input type="text"onChange = {(e)=> setLname(e.target.value)}/>
                </p>
                <p>
                    <label>Email:</label>
                    <input type="text" onChange = {(e)=> setEmail(e.target.value)}/>
                </p>
                <p>
                    <label>Password:</label>
                    <input type="password" onChange = {(e)=> setPassword(e.target.value)}/>
                </p>
                <p>
                    <label>Confirm Password:</label>
                    <input type="password" onChange = {(e)=> setConfirmpw(e.target.value)}/>
                </p>
                <button type="submit">Register as a new User!</button>
            </form>
            <Link to="/login">Already have an account? Clicker here to login!</Link>
            <br/>
            <Link to="/home">Back to Home Page</Link>
        </div>
    )
}