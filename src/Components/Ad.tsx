import Card from 'react-bootstrap/Card';

interface Props {
    flavor: string;
    fontSize: number;
    darkTheme: boolean;
}
function Ad(props: Props) {
    return (
        //  <Card style={{ width: '18rem', textAlign: "center" }}>
        //     <Card.Body className={theme == "Light" ? "light" : "dark"}>
        //         <Card.Title className="titleCard">Vote For</Card.Title>
        //         <Card.Subtitle className="mb-2" style={styles}>{ad}</Card.Subtitle>
        //     </Card.Body>
        // </Card>
         <Card style={{ width: '18rem', textAlign: "center" }}>
            <Card.Body className={props.darkTheme ? "dark" : "light"}>
                <Card.Title className="titleCard">Vote For</Card.Title>
                <Card.Subtitle className="mb-2" style={{fontSize: props.fontSize}}>
                    {props.flavor}
                </Card.Subtitle>
            </Card.Body>
        </Card>
    )
}

export default Ad;