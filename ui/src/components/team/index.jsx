import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import amir from "../../assets/5R3A9059.jpg";
import asher from "../../assets/asher.jpg";
import {Subtitle} from "../utilities/index.jsx";

const Team = () =>
  <Container className="my-5">
    <Subtitle>Meet the Team</Subtitle>
    <Row>
      <Col md={6} className="d-flex justify-content-center mb-2">
        <Card>
          <Row className="px-2">
            <Col sm={12} md={5} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Card.Img variant="top" src={asher} />
            </Col>
            <Col sm={12} md={7}>
              <Card.Body className="px-2">
                <Card.Title>Asher Imtiaz</Card.Title>
                <Card.Text>
                  Asher Imtiaz is a seasoned software professional with a strong background in healthcare software. He spent seven years at IBM Watson Health, specializing in the intersection of computer science and healthcare.
                </Card.Text>
                <Button variant="primary" href="https://www.linkedin.com/in/asherimtiaz/">
                  <FontAwesomeIcon icon={faLinkedin} />
                </Button>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Col>
      <Col md={6} className="d-flex justify-content-center mb-2">
        <Card>
          <Row className="px-2">
            <Col sm={12} md={5} style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
              <Card.Img variant="top" src={amir} />
            </Col>
            <Col sm={12} md={7}>
              <Card.Body>
                <Card.Title>Amir Hesamian</Card.Title>
                <Card.Text>
                  Amir is a senior software engineer at Microsoft Azure and has a PhD in Computer Science focusing on compilers,
                  bringing eight years of experience in software development.
                </Card.Text>
                <Button variant="primary" className="me-2" href="https://www.linkedin.com/in/hesamian">
                  <FontAwesomeIcon icon={faLinkedin} />
                </Button>
                <Button variant="primary" href="https://github.com/amir734jj">
                  <FontAwesomeIcon icon={faGithub} />
                </Button>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  </Container>;

export default Team;
