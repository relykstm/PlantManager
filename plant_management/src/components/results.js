import React from "react"
import {Link} from "@reach/router"

export default props => {

    const {results} = props

    const makeDiv = (each, i) => <li key = {i} ><Link to={`/new/${each.id}`}>{each.common_name}  ({each.scientific_name})</Link></li>

    return (
        <div>
            <h1>Is this one of your plants?</h1>
            <ul>
            {results.map(makeDiv)}
            </ul>
        </div>
    )
}