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
            <strong>React</strong> and <strong>Spring Boot</strong>, and have
            hands-on experience with microservices architecture and Kafka. I
            believe in the importance of best practices like test-driven
            development and CI/CD, and I strive to write quality code while
            learning from mypeers. I'm always looking to improve my skills and
            contribute to meaningful projects. Additionally, I am skilled in
            modern development tools and practices, including:
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
            <li>
              <strong>Testing:</strong> JUnit, Mockito, Jest
            </li>
            <li>
              <strong>Messaging:</strong> Kafka
            </li>
          </ul>
        </div>
      </Layout>
    </div>
  );
}
