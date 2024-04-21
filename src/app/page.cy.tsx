import Page from "./page";

xdescribe("Profiles", () => {
  it("Should render component", () => {
    cy.mount(<Page />);
  });
});
