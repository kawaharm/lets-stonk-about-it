// Imports
import { Row, Col } from 'react-bootstrap'


function Stock(props) {
    return (
        <Row className="stockDet">
            <Col className="m-3 p-3" style={{ backgroundColor: "pink" }}>
                <div className="mb-2 text-center">Closing Price</div>
                <div className="p-2 border border-primary text-center"
                    style={{ fontSize: "30px" }}>{props.dayClose || "---"}</div>
            </Col>
            <Col className="m-3 p-3" style={{ backgroundColor: "pink" }}>
                <div className="mb-2 text-center">Day Low</div>
                <div className="p-2 border border-primary text-center"
                    style={{ fontSize: "30px" }}>{props.dayLow || "---"}</div>
            </Col>
            <Col className="m-3 p-3" style={{ backgroundColor: "pink" }}>
                <div className="mb-2 text-center">Day High</div>
                <div className="p-2 border border-primary text-center"
                    style={{ fontSize: "30px" }}>{props.dayHigh || "---"}</div>
            </Col>
        </Row>
    );
}

export default Stock;