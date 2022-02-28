// Imports
import { Row, Col } from 'react-bootstrap'


function Stock(props) {
    return (
        <Row className="stockDet">
            <Col className="m-3 p-3 border border-primary border-1 border-dark rounded"
                style={{ backgroundColor: "#4D5656" }}>
                <div className="mb-2 text-center text-white">Closing Price</div>
                <div className="p-2 border border-primary border-3 border-dark text-center bg-white"
                    style={{ fontSize: "20px" }}>{props.close || "---"}</div>
            </Col>
            <Col className="m-3 p-3 border border-primary border-1 border-dark rounded"
                style={{ backgroundColor: "#4D5656" }}>
                <div className="mb-2 text-center text-white">Range Low</div>
                <div className="p-2 border border-primary border-3 border-dark text-center bg-white"
                    style={{ fontSize: "20px" }}>{props.low || "---"}</div>
            </Col>
            <Col className="m-3 p-3 border border-primary border-1 border-dark rounded"
                style={{ backgroundColor: "#4D5656" }}>
                <div className="mb-2 text-center text-white">Range High</div>
                <div className="p-2 border border-primary border-3 border-dark text-center bg-white"
                    style={{ fontSize: "20px" }}>{props.high || "---"}</div>
            </Col>
        </Row>
    );
}

export default Stock;