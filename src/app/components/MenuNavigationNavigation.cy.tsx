import React from "react";
import { Navigation } from "./oldMenuNavigation";

describe("<Navigation />", () => {
  xit("should allow users to click on notification button to check their friend requests", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Navigation />);
    // cy.get('.p-1 > .sr-only')
    // Click the button to open the user menu
    cy.get(".p-1 > .sr-only").click();
  });
});
