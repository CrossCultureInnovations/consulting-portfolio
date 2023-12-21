import {Container} from "react-bootstrap";

export const Subtitle = ({children}) =>
  <Container className="me-3 ps-0">
    <h3 style={{fontWeight: "bold"}}>{children}</h3>
  </Container>;