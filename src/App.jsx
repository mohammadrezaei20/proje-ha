import React from "react";
import "./Form.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstNameData: "",
      lastNameData: "",
      gmailData: "",
      submitted: false,
      allValid: false,
    };

    // Binding the event handlers
    this.submitHandler = this.submitHandler.bind(this);
    this.FirstnameValidation = this.FirstnameValidation.bind(this);
    this.LastnameValidation = this.LastnameValidation.bind(this);
    this.gmailValidation = this.gmailValidation.bind(this);
  }

  submitHandler(event) {
    event.preventDefault();
    this.setState({ submitted: true });
    // Here you can add more logic like validation
  }

  FirstnameValidation(event) {
    this.setState({ firstNameData: event.target.value });
  }

  LastnameValidation(event) {
    this.setState({ lastNameData: event.target.value });
  }

  gmailValidation(event) {
    this.setState({ gmailData: event.target.value });
  }

  render() {
    return (
      <div className="form-container">
        <form
          className="register-form"
          onSubmit={this.submitHandler}
          autoComplete="off"
        >

          <input
            type="text"
            className="form-field"
            placeholder="First Name"
            name="FirstName"
            id="FirstName"
            onChange={this.FirstnameValidation}
          />
          {this.state.submitted && this.state.firstNameData.length === 0 && (
            <span>pls enter your first name</span>
          )}
          <input
            type="text"
            className="form-field"
            placeholder="Last Name"
            name="LastName"
            id="LastName"
            onChange={this.LastnameValidation}
          />
          {this.state.submitted && this.state.lastNameData.length === 0 && (
            <span>pls enter your last name</span>
          )}
          <input
            type="text"
            className="form-field"
            placeholder="Email"
            name="Email"
            id="Email"
            onChange={this.gmailValidation}
          />
          {this.state.submitted && this.state.gmailData.length === 0 && (
            <span>pls enter email</span>
          )}
          <button className="form-field" type="submit">
            Register
          </button>
        </form>
      </div>
    );
  }
}
