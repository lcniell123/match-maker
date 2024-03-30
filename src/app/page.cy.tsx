import Page from "./page";

describe("Profiles", () => {
  it("Should render component", () => {
    cy.mount(<Page />);
  });
});
