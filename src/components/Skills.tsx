import { Container } from "react-bootstrap";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
import { SiVisualstudio } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaPython } from "react-icons/fa";

function Skills() {
  return (
    <Container id="skills">
      <div className="d-flex flex-column" style={{ minHeight: "500px" }}>
        <h2>My Skills</h2>
        <div
          className="d-flex flex-wrap justify-content-center gap-5"
          style={{ maxWidth: "700px", margin: "0 auto" }}
        >
          <div className="skill-div">
            <FaHtml5 className="icon" color="red" />
            <h3>HTML</h3>
          </div>
          <div className="skill-div">
            <FaCss3Alt className="icon" color="blue" />
            <h3>CSS</h3>
          </div>
          <div className="skill-div">
            <IoLogoJavascript className="icon" color="#F0DB4F" />
            <h3>JavaScript</h3>
          </div>
          <div className="skill-div">
            <FaReact className="icon" color="#61DBFB" />
            <h3>React.js</h3>
          </div>
          <div className="skill-div">
            <SiTypescript className="icon" color="#007acc" />
            <h3>TypeScript</h3>
          </div>
          <div className="skill-div">
            <FaBootstrap className="icon" color="#9400FF" />
            <h3>Bootstrap</h3>
          </div>
          <div className="skill-div">
            <SiVisualstudio className="icon" color="#0078d7" />
            <h3>VS Code</h3>
          </div>
          <div className="skill-div">
            <FaGitAlt className="icon" color="black" />
            <h3>Git</h3>
          </div>
          <div className="skill-div">
            <FaGithub className="icon" color="black" />
            <h3>GitHub</h3>
          </div>
          <div className="skill-div">
            <FaPython className="icon" color="#4584b6" />
            <h3>Python</h3>
          </div>
        </div>
      </div>
      <hr />
    </Container>
  );
}

export default Skills;
