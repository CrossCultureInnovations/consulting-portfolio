import {Row, Col, Container} from "react-bootstrap";
import { Subtitle } from "../utilities/index.jsx";
import Wordcloud from "../wordcloud";


const Technical = () => <Container>
  <Subtitle>Technical Skills</Subtitle>
  <p>
    Our team has a combined experience of 15 years in software industry working on range of technologies including:
  </p>
  <ul>
    <li>
      <strong>Languages</strong>:
      C#, Java, JavaScript, Typescript, Scala, SQL and Python
    </li>
    <li>
      <strong>Front-end</strong>:
      Angular, React, Blazor, Bootstrap
    </li>
    <li>
      <strong>Back-end</strong>:
      .NET, Node.js, Express.js, Nest.js, Django, Flask, and Spring Boot
    </li>
    <li>
      <strong>Database</strong>:
      SQL, MongoDB, CosmosDb Azure Blob, and Azure Table Storage
    </li>
    <li>
      <strong>Cloud</strong>:
      Docker, docker-compose, docker-swarm, managed Kubernetes
    </li>
  </ul>
</Container>;

const Cloud = () => <Container>
  <Subtitle id="cloud">Cloud</Subtitle>
  <Container className="mb-3">
      We are brining first-hand experience in cloud computing, specially Microsoft Azure and services including:
    <ul>
      <li>Azure Functions (serverless)</li>
      <li>Azure WebApps (including Docker deployment)</li>
      <li>CosmosDb (and managed MongoDb)</li>
      <li>Azure Blob and Table storage</li>
      <li>Microsoft Azure SQL (including Postgres)</li>
      <li>Azure Identity Management (IAM)</li>
      <li>Azure Devops (CI/CD)</li>
    </ul>

      We are also have experience with PaaS services such as <a href="https://www.heroku.com/" target="_blank" rel="noreferrer">Heroku</a> and <a href="https://www.digitalocean.com/" target="_blank" rel="noreferrer">Digital-Ocean</a> and IaaS such as <a href="https://www.linode.com/products/"  target="_blank" rel="noreferrer">linode</a>.
  </Container>
</Container>;

const Software = () => <Container>
  <Subtitle id="software">Software</Subtitle>
  <Container>
    <p>
        We have expertise in C#, .NET, JavaScript, React and Angular. We have delivered websites and software's
        using these technologies and we are confident that we can help.
    </p>
    <ul>
      <li>
        <a href="https://www.milwaukeeinternationals.com" target="_blank"
          rel="noreferrer">Milwaukee-Internationals</a>:
          Fully featured website to managed annual UW-Milwaukee tour of the city for international students.
      </li>
    </ul>
  </Container>
</Container>;


const Portfolio = () =>
  <Container className="my-4" style={{ lineHeight: '2rem'}}>
    <Row>
      <Col md={8}>
        <Technical />
        <Cloud />
        <Software />
      </Col>
      <Col md={4} className="d-none d-lg-block d-xl-block">
        <Wordcloud width={400} height={300} showControls={false}/>
      </Col>
    </Row>
    <Container>
    </Container>
  </Container >;

export default Portfolio;