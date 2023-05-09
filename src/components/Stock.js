// Imports
import { Row, Image } from "react-bootstrap";

const Stock = ({ stockgraph }) => {
  return (
    <Row className="stockDet">
      <Image src={stockgraph} />
    </Row>
  );
};

export default Stock;
