import React from "react"

export default props => {

    const {imagearray} = props

    return (
        <div >
                {imagearray.map((each, i)=> <img key ={i} style={{width:200, height:200}} src={each} alt="image"/>)}
        </div>
    )
}
