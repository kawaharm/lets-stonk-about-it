// Imports
import { Row, Container, Image } from "react-bootstrap";

function Stock(props) {
  return (
    <Row className="stockDet">
      <Image src={props.stockgraph} />
    </Row>
  );
}

export default Stock;
