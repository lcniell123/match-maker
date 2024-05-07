import EditProfile from "./editProfile";

xdescribe("EditProfile component", () => {
  // Define mock props for testing
  const formData = {};

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
    cy.get("#bio").type("Example Example Example");
  });

  it("Should allow users to enter their geographic location", () => {
    // Simulate user input in various input fields
    cy.get("#country").type("USA");
    cy.get("#zipCode").type("12345");
    cy.get("#timeZone").type("Eastern");
  });

  it("should allow users to enter their game preference", () => {
    cy.get("#gamePreference").type("Game Preference Example");
  });

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

  //Sprint 3
  it("should allow users to select preferred genre", () => {
    // Select a play style
    const selectpreferredGenres = "Sports";
    cy.get("#preferredGenre").select(selectpreferredGenres);

    // Assert that the selected play style is updated in the form data
    cy.get("#preferredGenre").should("have.value", selectpreferredGenres);
  });
  it("should allow users to select time availability", () => {
    // Select a play style
    const selectTimeAvailability = "Weekends Afternoon";
    cy.get("#timeAvailability").select(selectTimeAvailability);

    // Assert that the selected play style is updated in the form data
    cy.get("#timeAvailability").should("have.value", selectTimeAvailability);
  });
  it("should allow users to select teammate age range", () => {
    // Select a play style
    const selectPreferredTeammateAgeRange = "26-35";
    cy.get("#preferredTeammateAgeRange").select(
      selectPreferredTeammateAgeRange
    );

    // Assert that the selected play style is updated in the form data
    cy.get("#preferredTeammateAgeRange").should(
      "have.value",
      selectPreferredTeammateAgeRange
    );
  });
  it("should allow users to select preferred game mode", () => {
    // Select a play style
    const selectPreferredGameMode = "Multiplayer";
    cy.get("#preferredGameMode").select(selectPreferredGameMode);

    // Assert that the selected play style is updated in the form data
    cy.get("#preferredGameMode").should("have.value", selectPreferredGameMode);
  });
  it("should allow users to select preferred role", () => {
    // Select a play style
    const selectPreferredRole = "Utility";
    cy.get("#preferredRole").select(selectPreferredRole);

    // Assert that the selected play style is updated in the form data
    cy.get("#preferredRole").should("have.value", selectPreferredRole);
  });
  it("should allow users to select flexibility", () => {
    // Select a play style
    const selectFlexibility = "Moderate";
    cy.get("#flexibility").select(selectFlexibility);

    // Assert that the selected play style is updated in the form data
    cy.get("#flexibility").should("have.value", selectFlexibility);
  });
  it("should allow users to select preferred communication", () => {
    // Select a play style
    const selectCommunicationPreference = "Voice Chat";
    cy.get("#communicationPreference").select(selectCommunicationPreference);

    // Assert that the selected play style is updated in the form data
    cy.get("#communicationPreference").should(
      "have.value",
      selectCommunicationPreference
    );
  });
  it("should allow users to select tolerance level", () => {
    // Select a play style
    const selectToleranceLevel = "Low";
    cy.get("#toleranceLevel").select(selectToleranceLevel);

    // Assert that the selected play style is updated in the form data
    cy.get("#toleranceLevel").should("have.value", selectToleranceLevel);
  });
  it("should allow users to select teamwork level", () => {
    // Select a play style
    const selectTeamworkLevel = "Medium";
    cy.get("#teamworkLevel").select(selectTeamworkLevel);

    // Assert that the selected play style is updated in the form data
    cy.get("#teamworkLevel").should("have.value", selectTeamworkLevel);
  });
  it("should allow users to select completitiveness level", () => {
    // Select a play style
    const selectCompetitivenessLevel = "High";
    cy.get("#competitivenessLevel").select(selectCompetitivenessLevel);

    // Assert that the selected play style is updated in the form data
    cy.get("#competitivenessLevel").should(
      "have.value",
      selectCompetitivenessLevel
    );
  });
});
