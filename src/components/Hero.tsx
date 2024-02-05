import { Col, Container, Row } from "react-bootstrap";
import Prof from "../assets/profilowe1.jpg";
import { FaHeart } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
function Hero() {
  return (
    <Container id="hero" className="mb-5 mt-5">
      <div style={{ margin: "8rem auto" }}>
        <Row style={{ maxWidth: "1000px" }}>
          <Col className="column-1">
            <h1>Hi, I'm Kamil Kołodziej</h1>
            <span className="hero-sub">Front-end Developer</span>

            <p className="opis">
              I'm 21 years old, I come from Poland, currently live in Scotland
              but my goal is to work remotely from my homeland
              <FaHeart className="ms-1" />
            </p>
            <p className="email">
              <MdEmail size={25} /> --&gt; kamilkolodziej022@gmail.com
            </p>
          </Col>
          <Col className="d-flex justify-content-center column-2">
            <img src={Prof} className="prof" />
          </Col>
        </Row>
      </div>
      <hr />
    </Container>
  );
}

export default Hero;
