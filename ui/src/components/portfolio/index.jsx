import {Container} from "react-bootstrap";
import {Subtitle} from "../utilities/index.jsx";

const Portfolio = () =>
  <Container className="my-4">
    <Container>
      <Subtitle>Technical Skills</Subtitle>
      <Container className="ms-5">
        <p>
          <strong>Languages</strong>:
          C#, Java, JavaScript, Typescript, Scala, SQL and Python
        </p>
        <p>
          <strong> Front-end</strong>:
          Angular, React, Blazor, Bootstrap
        </p>
        <p>
          <strong>Back-end</strong>:
          .NET, Node.js, Express.js, Nest.js, Sinatra, Django, Flask, and Spring Boot
        </p>
        <p>
          <strong>Database</strong>:
          SQL, MongoDB, CosmosDb Azure Blob, and Azure Table Storage
        </p>
        <p>
          <strong> Cloud</strong>:
          Docker, docker-compose, docker-swarm, managed kubernetes
        </p>
      </Container>
    </Container>
    <Container>
      <Subtitle id="software">Software</Subtitle>
      <p className="ms-3">
        We have expertise in C#, .NET, JavaScript, React and Angular. We have delivered websites and software's
        using these technologies and we are confident that we can help.
      </p>
    </Container>
    <Container>
      <Subtitle id="cloud">Cloud</Subtitle>
    </Container>
  </Container>;

export default Portfolio;