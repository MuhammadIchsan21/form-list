import React, { Component } from "react";
import FormComponent from "../components/FormComponent";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { value, name, type, checked } = e.target;

    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  render() {
    return <FormComponent handleChange={this.handleChange} {...this.state} />;
  }
}

export default Home;
