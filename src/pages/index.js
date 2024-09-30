import Footer from "./modulos/footer";
import Navbar from "./modulos/navbar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function index() {
  return (
    <div>
      <Navbar />
      Bem vindos
      <Container>
        <Row>
          <Col className="bg-primary">1 of 2</Col>
          <Col className="bg-danger">2 of 2</Col>
        </Row>
        <Row>
          <Col className="bg-success">1 of 3</Col>
          <Col className="bg-warning">2 of 3</Col>
          <Col className="bg-info">3 of 3</Col>
        </Row>
      </Container>
      <Footer />
    </div>)
};