import React from "react";
import Layout from "../components/layout";
import '../assets/allStyles.css'

const About = () => (
  <Layout>
    <div className="about">
      <div>

        <div className="about-head">
          <h2>Hello!</h2>
          <p>My name is Ori</p>
        </div>
        <div id="my-photo"></div>
        <p>I'm a Philosopher turned Developer. After devoting the last 8 years of my life to studying subjects such as political philosophy, philosophy of moral, and philosophical and mathematical logic, I decided to try something new. What motivated this decision?</p>
        <p>I think that nowadays everybody should have some minimal understanding of computers and programming (without neglecting their understanding of major philosophical issues of course <span role="img" aria-label="wink">😉</span>). On a personal level, after years of concentrating in abstract and unsolvable issues I wanted to do something real, to build something I can see, and can be practical. Even a simple “Hello World!” program can be a huge satisfaction.</p>
        <p>I would love to hear from you! Please contact me with any suggestions, comments remarks or  an offer for a front-end developer position…</p>
      </div>
    </div>
  </Layout>
)

export default About;
