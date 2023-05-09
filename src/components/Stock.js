// Imports
import { Row, Image } from "react-bootstrap";

const Stock = () => {
  const { stockgraph } = props;
  return (
    <Row className="stockDet">
      <Image src={stockgraph} />
    </Row>
  );
};

export default Stock;
