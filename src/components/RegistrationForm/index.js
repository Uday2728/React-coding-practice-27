// Write your JS code here

import {BrowserRouter, Switch} from 'react-router-dom'
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {firstName: '', lastName: '', isSubmitted: false}

  onfirstNameChange = event => {
    this.setState({firstName: event.target.value})
  }

  onLastNameChange = event => {
    this.setState({lastName: event.target.value})
  }

  onBlurFirstName = () => {
    const firstNameErrorMsgEl = document.getElementById('firstNameError')

    const {firstName} = this.state
    if (firstName === '') {
      firstNameErrorMsgEl.textContent = 'Required'
    }
  }

  onBlurLastName = () => {
    const lastNameErrorMsgEl = document.getElementById('lastNameError')

    const {lastName} = this.state
    if (lastName === '') {
      lastNameErrorMsgEl.textContent = 'Required'
    }
  }

  submitForm = event => {
    event.preventDefault()
    const {firstName, lastName, isSubmitted} = this.state

    if (firstName === '') {
      const firstNameErrorMsgEl = document.getElementById('firstNameError')
      firstNameErrorMsgEl.textContent = 'Required'
    }
    if (lastName === '') {
      const lastNameErrorMsgEl = document.getElementById('lastNameError')
      lastNameErrorMsgEl.textContent = 'Required'
    }

    if (firstName !== '' && lastName !== '') {
      this.setState({isSubmitted: true})
    }
  }

  FormComponent = () => {
    const {firstName, lastName} = this.state
    return (
      <form className="form-container" onSubmit={this.submitForm}>
        <div className="userName-container">
          <label htmlFor="firstName" className="labelName">
            FIRST NAME
          </label>
          <input
            value={firstName}
            placeholder="First Name"
            id="firstName"
            className="inputField"
            onBlur={this.onBlurFirstName}
            onChange={this.onfirstNameChange}
          />
          <p id="firstNameError"></p>
        </div>
        <div className="userName-container">
          <label htmlFor="firstName" className="labelName">
            LAST NAME
          </label>
          <input
            value={lastName}
            placeholder="Last Name"
            id="lastName"
            className="inputField"
            onBlur={this.onBlurLastName}
            onChange={this.onLastNameChange}
          />
          <p id="lastNameError"></p>
        </div>
        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>
    )
  }

  onAnotherResponse = () => {
    this.setState({firstName: '', lastName: '', isSubmitted: false})
  }

  Submitted = () => (
    <div className="response-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
      />
      <p>Submitted Successfully</p>
      <button onClick={this.onAnotherResponse}>Submit Another Response</button>
    </div>
  )

  render() {
    const {firstName, lastName, isSubmitted} = this.state
    return (
      <div className="bg-container">
        <h1>Registration</h1>
        <div className="content-container">
          {isSubmitted ? <this.Submitted /> : <this.FormComponent />}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
