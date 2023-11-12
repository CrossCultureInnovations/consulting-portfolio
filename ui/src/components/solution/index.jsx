import {Button, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const Solution = () =>
  <Container className="my-5">
    <Row className="row align-items-md-stretch">
      <Col md={6} className="mb-2">
        <div className="h-100 p-5 text-white bg-dark rounded-3">
          <h2>Custom Website and Software Solutions</h2>
          <p>
          Elevate your business with tailored, cutting-edge website and software solutions powered by Azure Cloud,
          ensuring seamless integration and top-tier performance.
          </p>
          <Link to="/portfolio#software">
            <Button className="btn btn-outline-light" type="button">Learn More</Button>
          </Link>
        </div>
      </Col>
      <Col md={6} className="mb-2">
        <div className="h-100 p-5 text-white bg-dark rounded-3">
          <h2>Cloud Consultation</h2>
          <p>
          Optimize your software solutions with expert (Azure) Cloud consultation, unlocking unparalleled scalability and
          performance for your business needs.
          </p>
          <Link to="/portfolio#cloud">
            <Button className="btn btn-outline-light" type="button">Learn More</Button>
          </Link>
        </div>
      </Col>
    </Row>
  </Container>;

export default  Solution;