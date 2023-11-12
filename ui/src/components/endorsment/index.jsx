import {faQuoteLeft, faQuoteRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Col, Container, Row} from "react-bootstrap";
import {Subtitle} from "../utilities/index.jsx";

const HorizontalRule = () =>
  <div className=" d-flex justify-content-center">
    <hr style={{width: "30%"}}/>
  </div>;

const testimonies = [
  {
    name: "Amir",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur.`
  }
];

const Testimonial = () => (
  <Container className="my-5">
    <Subtitle>Testimonials</Subtitle>
    { testimonies.map(({ name, description}, index) =>
      <Container key={index}>
        <Row>
          <Col sm={{span: 8, offset: 2}}>
            <p style={{fontStyle: 'italic'}}>
              <FontAwesomeIcon icon={faQuoteLeft} size="lg" className="me-3"/>
              {description}
              <FontAwesomeIcon icon={faQuoteRight} size="lg" className="ms-3"/>
            </p>
            <small>{name}</small>
          </Col>
        </Row>
        <HorizontalRule/>
      </Container>) }
  </Container>);

export default Testimonial;
