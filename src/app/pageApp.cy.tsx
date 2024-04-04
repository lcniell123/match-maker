import React from "react";
import App from "./page";

xdescribe("User Forgot Password", () => {
  it("should display an input field for email address", () => {
    cy.mount(<App />);

    cy.get('[data-amplify-footer=""]').within(() => {
      cy.get(".amplify-button").click();
    });
    cy.get("input").should("be.visible");
  });

  it("should allow the user to submit the form with a valid email address", () => {
    cy.mount(<App />);

    cy.get('[data-amplify-footer=""]').within(() => {
      cy.get(".amplify-button").click();
    });

    cy.get("input").eq(0).type("test@example.com");
    cy.get(".amplify-button--primary").click();
  });
});

describe("<App />", () => {
  it("should render Sign In page without error", () => {
    cy.mount(<App />);
    cy.get("#signIn-tab");
    cy.get("form").should("be.visible");
  });

  it("should allow user to fill in email in field on Sign In page", () => {
    cy.mount(<App />);
    cy.get("#signIn-tab");
    cy.get("input").eq(0).type("test@example.com");
  });

  it("should allow user to fill in password field on Sign In page", () => {
    cy.mount(<App />);
    cy.get("#signIn-tab");
    cy.get("input").eq(1).type("password1234");
  });

  it("should submit the form when the button is clicked", () => {
    // Mount the component
    cy.mount(<App />);
    cy.get("#signIn-tab");

    // Fill in required fields
    cy.get("input").eq(0).type("ploypawachot33@gmail.com");
    cy.get("input").eq(1).type("test1234!");

    // Click the submit button
    cy.get(".amplify-button--primary").click();
  });

  it("should enable signin button when all required fields are filled", () => {
    // Mount the component
    cy.mount(<App />);
    cy.get("#signIn-tab");

    // Fill in required fields
    cy.get("input").eq(0).type("test@example.com");
    cy.get("input").eq(1).type("password1234");

    // Assert that the button is enabled
    cy.get(".amplify-button--primary").should("not.be.disabled");
  });

  it('should navigate to Sign In page when "back to Sign In" button is clicked', () => {
    // Mount the component
    cy.mount(<App />);

    cy.get('[data-amplify-footer=""]').within(() => {
      cy.get(".amplify-button").click();
    });
    cy.get(".amplify-button--link").click();
  });

  it('should navigate to signup page when "Create Account" button is clicked', () => {
    // Mount the component containing the signup button
    cy.mount(<App />);

    // Simulate clicking on the "Create Account" button
    cy.contains("Create Account").click();
  });

  it("should allow user to fill in email field on Sign Up page", () => {
    // Mount the component containing the signup button
    cy.mount(<App />);

    // Simulate clicking on the "Create Account" button
    cy.contains("Create Account").click();
    cy.get("input").eq(0).type("test@example.com");
  });

  it("should allow user to fill in password field on Sign Up page", () => {
    // Mount the component containing the signup button
    cy.mount(<App />);

    // Simulate clicking on the "Create Account" button
    cy.contains("Create Account").click();
    cy.get("input").eq(1).type("password1234");
  });

  it("should allow user to fill in confirm password field on Sign Up page", () => {
    // Mount the component containing the signup button
    cy.mount(<App />);

    // Simulate clicking on the "Create Account" button
    cy.contains("Create Account").click();
    cy.get("input").eq(2).type("password1234");
  });

  it('should navigate to forgot password page when "forgot your passowrd?" button is clicked', () => {
    // Mount the component
    cy.mount(<App />);

    cy.get('[data-amplify-footer=""]').within(() => {
      cy.get(".amplify-button").click();
    });
  });
});
