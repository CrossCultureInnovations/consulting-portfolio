import { Container } from "react-bootstrap";
import { Subtitle } from "../utilities/index.jsx";

const Portfolio = () =>
  <Container className="my-4">
    <Container>
      <Subtitle>Technical Skills</Subtitle>
      <Container className="ms-5">
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
            .NET, Node.js, Express.js, Nest.js, Sinatra, Django, Flask, and Spring Boot
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
      </Container>
    </Container>
    <Container>
      <Subtitle id="software">Software</Subtitle>
      <Container className="ms-5">
        <p>
          We have expertise in C#, .NET, JavaScript, React and Angular. We have delivered websites and software's
          using these technologies and we are confident that we can help.
        </p>
        <ul>
          <li>
            <a href="https://www.milwaukeeinternationals.com" target="_blank" rel="noreferrer">Milwaukee-Internationals</a>:
            Fully featured website to managed annual UW-Milwaukee tour of the city for international students.
          </li>
        </ul>
      </Container>
    </Container>
    <Container>
      <Subtitle id="cloud">Cloud</Subtitle>
      <Container className="ms-5">
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

        We are also experienced with PaaS services such as <a href="https://www.heroku.com/" target="_blank" rel="noreferrer">Heroku</a> and <a href="https://www.digitalocean.com/" target="_blank" rel="noreferrer">Digital-Occean</a> and IaaS such as <a href="https://www.linode.com/products/"  target="_blank" rel="noreferrer">linode</a>.
      </Container>
    </Container>
  </Container >;

export default Portfolio;