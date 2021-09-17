import React, { useState } from 'react'
import { validateEmail } from '../../utils/helpers'

function ContactForm() {
  const [errorMessage, setErrorMessage] = useState('')
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })
  const { name, email, message } = formState

  function handleChange(e) {
    e.preventDefault()
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value)
      console.log(isValid)
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage('Your email is invalid.')
      } else {
        setErrorMessage('')
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`)
      } else {
        setErrorMessage('')
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value })
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(formState)
  }

  return (
    <section>
      <h1 data-testid="h1tag">Contact me</h1>
      <form id="contact-form">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            defaultValue={message}
            onBlur={handleChange}
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit" onSubmit={handleSubmit} data-testid="btn">
          Submit
        </button>
      </form>
    </section>
  )
}

export default ContactForm
