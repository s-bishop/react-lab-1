import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import "./Votes.css";
import { useState } from "react";

function Votes () {
    const [chocolateVotes, setChocolateVotes] = useState(0);
    const [strawberryVotes, setStrawberryVotes] = useState(0);
    const [vanillaVotes, setVanillaVotes] = useState(0);
    const [totalVotes, setTotalVotes] = useState(0);
    const styles = {marginTop: 25}
    return (
        <div style={styles} className="votes">
            <h2 className="voteHeader">Vote Here</h2>
            <Button 
            disabled={totalVotes >= 1000000} 
            variant="primary" onClick={() => {setChocolateVotes(prv => prv + 1); 
            setTotalVotes(prv => prv + 1)}}className="blueButton">Chocolate</Button>

            <Button 
            disabled={totalVotes >= 1000000}
            variant="secondary" onClick={() => {setStrawberryVotes(prv => prv + 1);
            setTotalVotes(prv => prv + 1)}}className="blueButton">Strawberry</Button>

            <Button 
            disabled={totalVotes >= 1000000}  
            variant="success" onClick={() => {setVanillaVotes (prv => prv + 1);
            setTotalVotes(prv => prv + 1)}}className="blueButton">Vanilla</Button>

            <p className="marginBar chocolateMargin">Chocolate: {chocolateVotes} ({((chocolateVotes / totalVotes * 100)).toFixed(1)}%)</p>
            <ProgressBar now={chocolateVotes} className="chocolateBar"/>

            <p className="marginBar chocolateMargin">Strawberry: {strawberryVotes} ({((strawberryVotes / totalVotes) * 100).toFixed(1)}%)</p>
            <ProgressBar now={strawberryVotes} className="strawberryBar"/>

            <p className="marginBar chocolateMargin">Vanilla: {vanillaVotes} ({((vanillaVotes / totalVotes * 100)).toFixed(1)}%)</p>
            <ProgressBar now={vanillaVotes} className="vanillaBar"/>

        </div>
    )
};

export default Votes;