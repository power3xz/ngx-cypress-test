/// <reference types="cypress" />

describe("Our first suite", () => {
  it("first test", () => {
    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();

    //by Tag  Name
    cy.get("input");

    //by ID
    cy.get("#inputEmail1");

    //by Class name
    cy.get(".input-full-width");

    //by Attribute name
    cy.get("[placeholder]");

    //by Attribute name and value
    cy.get('[placeholder="Email"]');

    //by Class value
    cy.get('[class="input-full-width size-medium shape-rectangle"]');

    //by Tag name and attribute with value
    cy.get('input[placeholder="Email"]');

    //by two different attributes
    cy.get('[placeholder="Email"][type="email"]');

    //by tag name, attribute with value, ID and Class name
    cy.get('input[placeholder="Email"]#inputEmail1.input-full-width');

    //The most recommended way by Cypress
    cy.get('[data-cy="inputEmail1"]');
  });

  it.only("second test", () => {
    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();

    cy.get('[data-cy="signInButton"]');

    cy.contains("Sign in");

    cy.contains('[status="warning"]', "Sign in");
    cy.get(".sidebar-toggle").click();

    cy.get("#inputEmail3")
      .parents("form")
      .find("button")
      .should("contain", "Sign in")
      .parents("form")
      .find("nb-checkbox")
      .click();
  });
});
