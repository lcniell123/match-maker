import React from 'react'
import ProfileUpdateForm from './ProfileUpdateForm'

describe('<ProfileUpdateForm />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ProfileUpdateForm />)
  })
})