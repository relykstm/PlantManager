import React from 'react';
import NewPlantForm from '../components/NewPlantForm'
import TopNavbar from '../components/Navbar'

export default props =>{
    const {id} = props

    return(
        <div>
            <TopNavbar/> 
            <h1>Add your Plant Details:</h1>
            <NewPlantForm id = {id}/>


        </div>
    )
}