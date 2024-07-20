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
    name: "MilwaukeeInternationals Team",
    description: `**Annual Tour of Milwaukee** is an annual event that provides a tour of the city of Milwaukee and a dinner with a host family to newly arrived international students, all for free. It is organized by a large group of volunteers, and for years we managed the event on paper. As the number of students and volunteers grew, we desperately needed a website to manage all the logistics. Asher and Amir came to our aid and provided a solution that has been working well for almost eight years. They also support the system and provide training and improvements every year. Thank you for all your help.`
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
