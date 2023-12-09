import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import amir from "../../assets/amir.jpg";
import asher from "../../assets/asher.jpg";
import {Subtitle} from "../utilities/index.jsx";

const Team = () =>
  <Container className="my-5">
    <Subtitle>Meet the Team</Subtitle>
    <Row>
      <Col md={6} className="d-flex justify-content-center mb-2">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={asher} />
          <Card.Body>
            <Card.Title>Asher Imtiaz</Card.Title>
            <Card.Text>
              Asher Imtiaz is a seasoned professional with a background in R&D Healthcare Software, 
              spending 7 years at IBM, where he specialized in computer science and software development.
            </Card.Text>
            <Button variant="primary" href="https://www.linkedin.com/in/asherimtiaz/">
              <FontAwesomeIcon icon={faLinkedin} />
            </Button>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6} className="d-flex justify-content-center mb-2">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={amir} />
          <Card.Body>
            <Card.Title>Amir Hesamian</Card.Title>
            <Card.Text>
              Amir is a senior software engineer at Microsoft Azure and has a PhD in Computer Science focusing on compilers, 
              bringing 8 years of experience in software development.
            </Card.Text>
            <Button variant="primary" className="me-2" href="https://www.linkedin.com/in/hesamian">
              <FontAwesomeIcon icon={faLinkedin} />
            </Button>
            <Button variant="primary" href="https://github.com/amir734jj">
              <FontAwesomeIcon icon={faGithub} />
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>;

export default Team;