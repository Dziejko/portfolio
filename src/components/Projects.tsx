import {
  Card,
  CardBody,
  CardImg,
  Col,
  Container,
  Row,
  Stack,
} from "react-bootstrap";
import { RiCodeView } from "react-icons/ri";
import { TbWorld } from "react-icons/tb";

import Mobile from "../assets/projects-ss/mobile.png";
import Leagues from "../assets/projects-ss/leagues.png";
import Ecommerce from "../assets/projects-ss/ecommerce.png";
import Nintendo from "../assets/projects-ss/nintendo.png";

function Projects() {
  return (
    <Container id="projects" className="mb-5">
      <h2>Projects I've worked on</h2>
      <Row xs={1} lg={2}>
        <Col>
          <Card>
            <CardImg src={Mobile} aria-hidden />
            <CardBody>
              <Stack
                direction="horizontal"
                gap={2}
                className="justify-content-center"
              >
                <span className="tool text-white fw-bold rounded ">React</span>
                <span className="tool text-white fw-bold rounded ">
                  TypeScript
                </span>
                <span className="tool text-white fw-bold rounded ">
                  Bootstrap
                </span>
              </Stack>
              <Card.Title className="mt-3">Service Provider</Card.Title>
              <hr />
              <div className="d-flex align-items-center w-100 gap-2 fw-bold">
                <a
                  target="_blank"
                  href="https://dziejko.github.io/mobile/"
                  className="link d-flex align-items-center gap-1 justify-content-center flex-grow-1"
                >
                  See Live
                  <TbWorld />
                </a>
                <a
                  target="_blank"
                  href="https://github.com/Dziejko/mobile/"
                  className="link d-flex align-items-center gap-1 justify-content-center flex-grow-1 "
                >
                  See Code
                  <RiCodeView />
                </a>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardImg src={Leagues} aria-hidden />
            <CardBody>
              <Stack
                direction="horizontal"
                gap={2}
                className="justify-content-center"
              >
                <span className="tool text-white fw-bold rounded ">
                  React (JS)
                </span>
                <span className="tool text-white fw-bold rounded ">API</span>
                <span className="tool text-white fw-bold rounded ">CSS</span>
              </Stack>
              <Card.Title className="mt-3">Football Leagues</Card.Title>
              <hr />
              <div className="d-flex align-items-center w-100 gap-2 fw-bold">
                <a
                  target="_blank"
                  href="https://dziejko.github.io/football-leagues/"
                  className="link d-flex align-items-center gap-1 justify-content-center flex-grow-1"
                >
                  See Live
                  <TbWorld />
                </a>
                <a
                  target="_blank"
                  href="https://github.com/Dziejko/football-leagues"
                  className="link d-flex align-items-center gap-1 justify-content-center flex-grow-1 "
                >
                  See Code
                  <RiCodeView />
                </a>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardImg src={Ecommerce} aria-hidden />
            <CardBody>
              <Stack
                direction="horizontal"
                gap={2}
                className="justify-content-center"
              >
                <span className="tool text-white fw-bold rounded ">
                  React (JS)
                </span>
                <span className="tool text-white fw-bold rounded ">CSS</span>
              </Stack>
              <Card.Title className="mt-3">E-commerce Store</Card.Title>
              <hr />
              <div className="d-flex align-items-center w-100 gap-2 fw-bold">
                <a
                  target="_blank"
                  href="https://dziejko.github.io/e-commerce/"
                  className="link d-flex align-items-center gap-1 justify-content-center flex-grow-1"
                >
                  See Live
                  <TbWorld />
                </a>
                <a
                  target="_blank"
                  href="https://github.com/Dziejko/e-commerce"
                  className="link d-flex align-items-center gap-1 justify-content-center flex-grow-1 "
                >
                  See Code
                  <RiCodeView />
                </a>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardImg src={Nintendo} aria-hidden />
            <CardBody>
              <Stack
                direction="horizontal"
                gap={2}
                className="justify-content-center"
              >
                <span className="tool text-white fw-bold rounded ">HTML</span>
                <span className="tool text-white fw-bold rounded ">CSS</span>
              </Stack>
              <Card.Title className="mt-3">Product Page</Card.Title>
              <hr />
              <div className="d-flex align-items-center w-100 gap-2 fw-bold">
                <a
                  target="_blank"
                  href="https://dziejko.github.io/nintendo-product-page/"
                  className="link d-flex align-items-center gap-1 justify-content-center flex-grow-1"
                >
                  See Live
                  <TbWorld />
                </a>
                <a
                  target="_blank"
                  href="https://github.com/Dziejko/nintendo-product-page"
                  className="link d-flex align-items-center gap-1 justify-content-center flex-grow-1 "
                >
                  See Code
                  <RiCodeView />
                </a>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
