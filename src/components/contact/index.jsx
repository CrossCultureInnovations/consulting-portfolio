import Form from 'react-bootstrap/Form';
import { Button, Col, Container, Row } from "react-bootstrap";
import { Subtitle } from "../utilities/index.jsx";
import axios from "axios";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const sendEmail = async ({ email, description }) => {
  await axios.post('/email', { email, description });
};

const schema = yup
  .object({
    email: yup.string().email().required(),
    description: yup.string().min(5).required(),
  })
  .required();

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

  return (
    <Container className="my-5">
      <Subtitle>Contact Us</Subtitle>
      <p className="ps-3 mb-5">
        We are here to help. Feel free to reach out via phone or email, and we can discuss the next steps.
      </p>
      <Row>
        <Col sm={12} md={{ span: 8, offset: 2 }}>
          <Form onSubmit={handleSubmit(sendEmail)}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                {...register("email")}
              />
              {errors.email && (
                <Form.Text className="text-danger">
                  {errors.email.message}
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="How can we help"
                {...register("description")}
              />
              {errors.description && (
                <Form.Text className="text-danger">
                  {errors.description.message}
                </Form.Text>
              )}
            </Form.Group>
            <Button variant="success" type="submit">
              Send
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;