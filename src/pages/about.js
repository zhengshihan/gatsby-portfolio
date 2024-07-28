import React from "react";
import Layout from "../Components/Layout";
import * as styles from "../styles/about.module.css";
export default function about() {
  return (
    <div>
      <Layout>
        <div class="about-container">
          <h2>About Me</h2>
          <p>
            Hello! I'm Shihan Zheng, a dedicated and passionate{" "}
            <strong>software developer</strong> with a postgraduate degree in{" "}
            <strong>Information Systems Management</strong> from the{" "}
            <em>National University of Ireland, Galway (NUIG)</em>. With a
            strong foundation in both business and technology, I am enthusiastic
            about leveraging technology to solve complex problems and drive
            business success.
          </p>
          <p>
            I specialize in full-stack development, particularly with{" "}
            <strong>React</strong> and <strong>Spring Boot</strong>, which
            allows me to create seamless, dynamic applications that are both
            powerful and user-friendly. Additionally, I am skilled in modern
            development tools and practices, including:
          </p>
          <ul>
            <li>
              <strong>Front-end:</strong> React, HTML5, CSS3, JavaScript (ES6+),
              TypeScript
            </li>
            <li>
              <strong>Back-end:</strong> Spring Boot, Node.js, Express.js
            </li>
            <li>
              <strong>Databases:</strong> MySQL, MongoDB
            </li>
            <li>
              <strong>DevOps:</strong> Docker, Jenkins, CI/CD Pipelines
            </li>
            <li>
              <strong>Version Control:</strong> Git, GitHub
            </li>
            <li>
              <strong>Cloud Platforms:</strong> AWS, Azure
            </li>
          </ul>
          <p>
            Throughout my academic and personal projects, I have honed my skills
            in creating scalable, efficient, and robust applications. I am a
            proactive learner, always eager to embrace new technologies and
            methodologies that can enhance my development process.
          </p>
          <p>
            I am now seeking opportunities to bring my expertise to a dynamic
            team where I can contribute to impactful projects. I am particularly
            excited about roles that allow me to innovate and collaborate with
            like-minded professionals. My goal is to continuously grow as a
            developer and help organizations succeed in the ever-evolving
            digital landscape.
          </p>
          <p>
            If you're looking for a driven and skilled developer to join your
            team, let's connect! I'm ready to take on new challenges and
            contribute my skills to create innovative solutions.
          </p>
        </div>
      </Layout>
    </div>
  );
}
