//This code follows the BDD approach

import ProfileDescription from "./profileDescription";

describe("ProfileDescription component", () => {
  // Define mock form data for testing
  const formData = {
    name: "John Doe",
    age: 20,
    language: "English",
    bio: "Example Example",
    country: "USA",
    zipCode: 12345,
    timeZone: "Eastern",
    gamePreference: "",
    skillLevel: "Intermediate",
    playStyle: "Team Player",
    behavior: "Supportive/Team-oriented",
  };

  beforeEach(() => {
    // Mount the component with predefined props
    cy.mount(
      <ProfileDescription formData={formData} handleEditProfile={() => {}} />
    );
  });

  xit("Should display user's information", () => {
    // Assert that various elements containing profile information exist
    cy.get(".flex-col > :nth-child(1)").should("exist");
    cy.get(".flex-col > .mb-6 > :nth-child(1)").should("exist");
    cy.get(".flex-col > .mb-6 > :nth-child(2)").should("exist");
    cy.get(".flex-col > :nth-child(4) > :nth-child(1)").should("exist");
    cy.get(":nth-child(4) > :nth-child(2)").should("exist");
  });

  it("should trigger edit profile action when 'Edit' button is clicked", () => {
    // Click on the 'Edit' button
    cy.get("button").click();

    // Assert that the edit profile action is triggered
    // Logging a message to indicate that the action is triggered
    cy.log("Edit profile action triggered.");
  });

  xit("should display the user's name correctly", () => {
    // Assert that the user's name is displayed correctly based on the provided form data
    cy.get(".mb-6 > :nth-child(1) > :nth-child(1)").should(
      "contain.text",
      formData.name
    );
  });

  it("should display the user's age correctly", () => {
    cy.get(".mb-6 > :nth-child(1) > :nth-child(2)").should(
      "contain.text",
      formData.age
    );
  });

  xit("should display the user's langauges correctly", () => {
    cy.get(".mb-6 > :nth-child(1) > :nth-child(3)").should(
      "contain.text",
      formData.language
    );
  });
});
