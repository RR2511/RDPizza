import { getCardHeaders } from '../support/app.po';

describe('RD Pizza Service', () => {
  beforeEach(() => {
    cy.server();
    cy.fixture('pizzas.json').as('pizzasJSON');
    cy.route('GET', '/api/pizzas', '@pizzasJSON').as('getPizzas');

    cy.visit('/products');
    cy.wait(['@getPizzas']);
  });

  it('should display welcome message', () => {
    getCardHeaders().should('have.length', 3);
    getCardHeaders().contains("Blazin' Inferno");
    getCardHeaders().contains("Seaside Surfin'");
    getCardHeaders().contains("Blazin' Inferno");
  });
});
