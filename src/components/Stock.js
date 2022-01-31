// Imports
import { Row, Col } from 'react-bootstrap'


function Stock(props) {
    return (
        <Row className="stockDet">
            <Col className="m-3 p-3 border border-primary border-1 border-dark rounded"
                style={{ backgroundColor: "#4D5656" }}>
                <div className="mb-2 text-center text-white">Closing Price</div>
                <div className="p-2 border border-primary border-3 border-dark text-center bg-white"
                    style={{ fontSize: "30px" }}>{props.dayClose || "---"}</div>
            </Col>
            <Col className="m-3 p-3 border border-primary border-1 border-dark rounded"
                style={{ backgroundColor: "#4D5656" }}>
                <div className="mb-2 text-center text-white">Day Low</div>
                <div className="p-2 border border-primary border-3 border-dark text-center bg-white"
                    style={{ fontSize: "30px" }}>{props.dayLow || "---"}</div>
            </Col>
            <Col className="m-3 p-3 border border-primary border-1 border-dark rounded"
                style={{ backgroundColor: "#4D5656" }}>
                <div className="mb-2 text-center text-white">Day High</div>
                <div className="p-2 border border-primary border-3 border-dark text-center bg-white"
                    style={{ fontSize: "30px" }}>{props.dayHigh || "---"}</div>
            </Col>
        </Row>
    );
}

export default Stock;