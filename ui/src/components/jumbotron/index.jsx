import { Container } from "react-bootstrap";

const Jumbotron = () =>
  <Container className="p-5 mb-4 bg-light rounded-3">
    <Container fluid="md" className="py-5">
      <h1 className="display-5 fw-bold">
        Local Software Consulting Team
      </h1>
      <p className="col-md-8 fs-4">
        Your local software solution experts, providing innovative services to propel your business forward. Contact us
        today for a consultation!
      </p>
    </Container>
  </Container>;

export default Jumbotron;