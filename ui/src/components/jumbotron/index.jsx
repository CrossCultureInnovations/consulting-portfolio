import {Col, Container, Row} from "react-bootstrap";
import CloudSvg from '../../assets/cloud-computing-cloud-svgrepo-com.svg?react';

const Jumbotron = () =>
  <Container className="p-5 mb-4 bg-light rounded-3">
    <Container fluid="md" className="py-5">
      <Row>
        <Col sm={12} md={8}>
          <h1 className="display-5 fw-bold">
            Cross Cultural Innovation Consulting
          </h1>
          <p className="col-md-8 fs-4">
            Your local software solution experts, providing innovative services to propel your business forward. Contact
            us
            today for a consultation!
          </p>
        </Col>
        <Col md={4} className="d-sm-none d-md-block d-none d-sm-block">
          <CloudSvg style={{height: '10rem', width: "10rem", float: "right"}} />
        </Col>
      </Row>
    </Container>
  </Container>;

export default Jumbotron;