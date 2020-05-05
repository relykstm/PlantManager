import React from "react"
import {Link} from "@reach/router"
import styles from '../components/divStyle.module.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Jumbotron
  } from 'reactstrap';
import leaves from "../components/leaves.jpeg"
import soilhands from "../components/soilhands.jpg"
export default props => {

    return (
        <div>
            <Jumbotron className = {styles.loginbox}>
                <h1 className="display-3">Welcome to Plant Manager!</h1>
                <div className = {styles.homecard}>
                    <Card>
                        <CardImg className={styles.homeimg} src={leaves} alt="RegImg" />
                        <CardBody>
                        {/* <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> */}
                        <Button><Link className = {styles.homebutton} to="/register">Register as a new user!</Link></Button>
                        </CardBody>
                    </Card>
                </div>
                <div className = {styles.homecard}>
                    <Card>
                        <CardImg className={styles.homeimg}  src={soilhands} alt="LogImg" />
                        <CardBody>
                        {/* <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> */}
                        <Button><Link className = {styles.homebutton} to="/login">Click here to Login!</Link></Button>
                        </CardBody>
                    </Card>
                </div>
            </Jumbotron>
        </div>
    )
}