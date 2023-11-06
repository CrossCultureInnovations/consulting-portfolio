import Form from 'react-bootstrap/Form';
import {Button, Col, Container, Row} from "react-bootstrap";
import {Subtitle} from "../utilities/index.jsx";

const Contact = () => (
  <Container className="my-5">
    <Subtitle>Contact Us</Subtitle>
    <p className="ps-3 mb-5">
      We are here to help. Feel free to reach out via phone or email, and we can discuss the next steps.
    </p>
    <Row>
      <Col sm={12} md={{ span: 8, offset: 2}}>
        <Form>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="How can we help"/>
          </Form.Group>
          <Button variant="success" type="submit">
           Send
          </Button>
        </Form>
      </Col>
    </Row>
  </Container>
);

export default Contact;