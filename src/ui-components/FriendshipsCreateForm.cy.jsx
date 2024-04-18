import React from 'react'
import FriendshipsCreateForm from './FriendshipsCreateForm'

describe('<FriendshipsCreateForm />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<FriendshipsCreateForm />)
  })
})