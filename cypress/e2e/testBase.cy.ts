import Login from 'cypress/support/models/login';
import Payment from 'cypress/support/models/payment';

describe('Login', function () {
  const login = new Login();
  it('Sign in', function () {
    login.automaticLogin();
    login.logout();
  });
});

describe('Payment List', () => {
  const login = new Login();
  it('Payment List', () => {
    login.automaticLogin();
    cy.contains('Payments').should('exist');
    login.logout();
  });

  it('Payment Modal show', () => {
    login.automaticLogin();
    cy.get('#newPayment').click();
    cy.contains('Fill in the new Payment details').should('exist');
  });
});

describe('Payment Insert', () => {
  const payment = new Payment();
  const login = new Login();
  it('Payment is insert', () => {
    login.automaticLogin();
    cy.get('#newPayment').click();
    payment.paymentSet();
  });
});

describe('Payment Edit', () => {
  const payment = new Payment();
  const login = new Login();
  it('Payment is edit', () => {
    login.automaticLogin();
    payment.paymentEdit();
  });
});

describe('Payment Delete', () => {
  const payment = new Payment();
  const login = new Login();
  it('Payment is delete', () => {
    login.automaticLogin();
    payment.paymentDelete();
  });
});

describe('Payment Search', () => {
  const login = new Login();
  it('Payment is here', () => {
    login.automaticLogin();
    cy.contains('paula').should('exist');
    cy.get('#search').click();
    cy.get('#search').type('paula');

    cy.contains('paula').should('exist');
  });
});

describe('Navigation ', () => {
  const login = new Login();
  it('Payment Navigation', () => {
    login.automaticLogin();
    cy.get('.pagination > :nth-child(3)').click();
    cy.get('.pagination > :nth-child(4)').click();
    cy.get('.pagination > :nth-child(2)').click();
  });
});
