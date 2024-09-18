// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       userName: '',
//       textareaValue: '',
//       islogin: 'false'
//     }
//   }
//   userNameHandler(event) {
//     console.log(event)
//     this.setState(
//       { userName: event.nativeEvent.target.value }
//     )
//   }
//   textareaHandler(event) {
//     console.log(event);
//     this.setState({ textareaValue: event.nativeEvent.target.value })
//   }
//   loginHandler(event) {
//     console.log(event)
//     this.setState({ islogin: event.nativeEvent.target.checked })
//   }
//   render() {
//     return (
//       <div>

//         <div>
//           <h4>{this.state.userName}</h4>
//           <input type='text' value={this.state.userName} onChange={(event) => this.userNameHandler(event)} />
//         </div>

//         <div>
//           <label htmlFor="login" >login</label>
//           <input type='checkbox' id='login' checked={this.state.islogin} onChange={(event) => this.loginHandler(event)} />
//         </div>

//         <div>
//           <h3>{this.state.textareaValue}</h3>
//           <textarea name="" id="" cols='30' rows='10' value={this.state.textareaValue} onChange={(event) => this.textareaHandler(event)}></textarea>
//         </div>
//       </div>
//     );
//   }
// }
// export default App;
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