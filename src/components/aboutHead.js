import React, { Component } from "react";
import { Link } from 'gatsby';
import "../assets/allStyles.css"

class AboutHead extends Component {
  constructor (props) {
    super (props);
    this.state = {
      nameHover: false
    }
  }

  onNameHover = () => {
    this.setState({ nameHover: true })
  }

  onNameLeave = () => {
    this.setState({ nameHover: false })
  }

  render() {
    const { nameHover } = this.state;
    return (
      <div className="about-head">
        <h2>Hello!</h2>
        <span
          onMouseOver={this.onNameHover}
          onMouseLeave={this.onNameLeave}
        >My name is Ori</span>
        <div
          id="modal"
          style={{
            display: nameHover ? 'block' : 'none',
            marginLeft: '3%'
          }}
        >
          (It's really me - not a mockup text!)
        </div>
      </div>
    )
  }
}


export default AboutHead;
