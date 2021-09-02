import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import "./AdDesigner.css"
import Ad from './Ad';
import { propTypes } from 'react-bootstrap/esm/Image';

function AdDesigner() {
    const [ad, setAd] = useState("Chocolate");
    const [theme, setTheme] = useState("Light");
    const [font, setFont] = useState(50);
    const styles = {fontSize: font};
    
    return (
    <div className="adDesigner">
        {/* <Card style={{ width: '18rem', textAlign: "center" }}>
            <Card.Body className={theme == "Light" ? "light" : "dark"}>
                <Card.Title className="titleCard">Vote For</Card.Title>
                <Card.Subtitle className="mb-2" style={styles}>{ad}</Card.Subtitle>
            </Card.Body>
        </Card> */}
        
        <Ad fontSize={font} flavor={ad} darkTheme={theme === "Dark" ? true : false}/>

        <h2>What to Support</h2>
        <Button disabled={ad === "Chocolate"} variant="primary" onClick={() => {setAd("Chocolate")}} className="blueButton">Chocolate</Button>

        <Button disabled={ad === "Strawberry"} variant="secondary" onClick={() => {setAd("Strawberry")}} className="blueButton">Strawberry</Button>

        <Button disabled={ad === "Vanilla"} variant="success" onClick={() => {setAd ("Vanilla")}}  className="blueButton">Vanilla</Button>

        <h2>Color Theme</h2>
        <Button disabled={theme === "Light"} variant="success" onClick={() => {setTheme ("Light")}} className="blueButton">Light</Button>
        
        <Button disabled={theme === "Dark"} variant="success" onClick={() => {setTheme ("Dark")}} className="blueButton">Dark</Button>

        <h2>Font Size</h2>
        <Button variant="success" onClick={() => {setFont ((prv) => prv - 1)}} className="blueButton">Down</Button>
        <span className="fontSize">{font.toString().padStart(3, "0")}</span>
        <Button variant="success" onClick={() => {setFont ((prv) => prv + 1)}} className="blueButton">Up</Button>
    </div>
    )

}

export default AdDesigner;