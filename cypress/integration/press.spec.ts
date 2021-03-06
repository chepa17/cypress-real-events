describe("cy.realPress", () => {
  beforeEach(() => {
    cy.visit("https://google.com?hl=en");
  });

  it("hovers and applies styles from :hover pseudo-class", () => {
    cy.realPress("c");
    cy.realPress("y");
    cy.realPress("p");
    cy.realPress("r");
    cy.realPress("e");
    cy.realPress("s");
    cy.realPress("s");
    
    cy.get("input[name=q]").should("have.value", "cypress");
  });

  it("Can fire native Tab focus switch", () => {
    cy.realPress("Tab");
    cy.get("[aria-label='Search by voice']").should("be.focused");
  });
});
