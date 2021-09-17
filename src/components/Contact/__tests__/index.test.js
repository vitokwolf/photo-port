import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ContactForm from '..'

afterEach(cleanup)

describe('Contact component', () => {
  // baseline test
  it('renders', () => {
    render(<ContactForm />)
  })
  // snapshot test
  it('matches snapshot', () => {
    const { asFragment } = render(<ContactForm />)
    expect(asFragment()).toMatchSnapshot()
  })
  it('renders', () => {
    const { getByTestId } = render(<ContactForm />)
    expect(getByTestId('h1tag')).toHaveTextContent('Contact me')
  })
  it('renders', () => {
    const { getByTestId } = render(<ContactForm />)
    expect(getByTestId('btn')).toHaveTextContent('Submit')
  })
})
