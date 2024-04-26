import React from "react";
import ProfilePicture from "./profilePicture";

describe("<ProfilePicture />", () => {
  it("Should renders the page", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ProfilePicture />);
  });

  it("Should allow users to choose a photo from their local devices and upload it", () => {
    cy.mount(<ProfilePicture />);
    // cy.get('#profile-image').click();
  });
});
