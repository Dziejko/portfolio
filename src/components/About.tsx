import { Col, Container, Row } from "react-bootstrap";

import Img1 from "../assets/zdj1.jpg";

function About() {
  return (
    <Container id="about" >
      <div className="d-flex flex-column" style={{ minHeight: "600px" }}>
      <h2>About Me</h2>
      <Row xs={1} lg={2}>
        <Col>
          <img src={Img1} style={{ borderRadius: "0.8rem" }} />
        </Col>
        <Col>
          <p className="par">
            I create responsive websites and web applications, especially love
            working with react. I work well both alone and as a team member. I
            learn very quickly, I am not afraid of new challenges and I can
            quickly adapt to a new environment. I am responsible for the duties
            entrusted to me and I always complete my tasks to the best of my
            ability.
            <br />
            <br />
            Beyond coding I'm passionate about football. My favorite club is
            Real Madrid and my dream is to have the opportunity to go to Madrid
            and watch their match live. In my free time I enjoy spend time with
            my friends and meeting new people. Occasionally I also like to go to
            the gym. If the situation allows, I plan to start training
            kickboxing and ballroom dancing.
          </p>
        </Col>
      </Row>
      </div>
      <hr />
    </Container>
  );
}

export default About;
