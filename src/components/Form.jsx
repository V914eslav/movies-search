import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      email: "",
      message: "",
      select: "",
      subscription: false,
      gender: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleCheckedChange = (e) => {
    this.setState({
      [e.target.name]: e.target.checked,
    });
  };
  render() {
    const { firstName, email, message, select, subscription, gender } =
      this.state;
    return (
      <div>
        <input
          type="text"
          name="firstName"
          placeholder="firstName"
          value={firstName}
          onChange={this.handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={this.handleChange}
        />
        <textarea
          name="message"
          placeholder="message"
          value={message}
          onChange={this.handleChange}
        />
        <select name="select" value={select} onChange={this.handleChange}>
          <option value="" disabled></option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <label>
          <input
            type="checkbox"
            name="subscription"
            checked={subscription}
            onChange={this.handleCheckedChange}
          />
          subscription
        </label>
        <br />
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={this.handleChange}
          checked={gender === "male"}
        />
        Male
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={this.handleChange}
          checked={gender === "female"}
        />
        Female
      </div>
    );
  }
}

export default Form;
