import EditProfile from "./editProfile";

describe("EditProfile component", () => {
  // Define mock props for testing
  const formData = {
   
  };

  // Mock functions to handle events
  const handleChange = () => {};
  const handleSaveProfile = () => {};
  const handleCancelEdit = () => {};
  const handleDeleteProfile = () => {};

  beforeEach(() => {
    // Mount the EditProfile component with mock props
    cy.mount(
      <EditProfile
        formData={formData}
        handleChange={handleChange}
        handleSaveProfile={handleSaveProfile}
        handleCancelEdit={handleCancelEdit}
        handleDeleteProfile={handleDeleteProfile}
      />
    );
  });

  it("Should allow users to enter their personal information", () => {
    // Simulate user input in various input fields
    cy.get("#name").type("Jane Doe");
    cy.get("#age").type("25");
    cy.get("#language").type("English");
    cy.get("#bio").type("Example Example Example")
  });

  it("Should allow users to enter their geographic location", () => {
    // Simulate user input in various input fields
    cy.get("#country").type("USA");
    cy.get("#zipCode").type("12345");
    cy.get("#timeZone").type("Eastern");
  });

  it("should allow users to enter their game preference", () => {
    cy.get("#gamePreference").type("Game Preference Example");
  })

  it("should allow users to select game skills", () => {
    // Select a game skill
    const selectedSkill = "advanced";
    cy.get("#skillLevel").select(selectedSkill);

    // Assert that the selected skill is updated in the form data
    cy.get("#skillLevel").should("have.value", selectedSkill);
  });

  it("should allow users to select behaviors", () => {
    // Select a behavior
    const selectedBehavior = "friendly";
    cy.get("#behavior").select(selectedBehavior);

    // Assert that the selected behavior is updated in the form data
    cy.get("#behavior").should("have.value", selectedBehavior);
  });

  it("should allow users to select play styles", () => {
    // Select a play style
    const selectedPlayStyle = "casual";
    cy.get("#playStyle").select(selectedPlayStyle);

    // Assert that the selected play style is updated in the form data
    cy.get("#playStyle").should("have.value", selectedPlayStyle);
  });

  

});
