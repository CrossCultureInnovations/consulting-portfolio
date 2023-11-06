import {Container} from "react-bootstrap";
import Contact from "../contact";
import Team from "../team";
import Testimonial from "../endorsment/index.jsx";
import Solution from "../solution/index.jsx";
import Jumbotron from "../jumbotron/index.jsx";

const Front = () => <>
  <Container className="py-4">
    <Jumbotron/>
    <Solution/>
    <Testimonial/>
    <Team/>
    <Contact/>
  </Container>
</>;

export default Front;