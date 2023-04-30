export default class payment {
  paymentSet() {
    return (
      cy.get('#firstName').type('test'),
      cy.get('#lastName').type('test'),
      cy.get('#title').type('test'),
      cy.get('#value').type('10'),
      cy.get('#isPayed').should('not.be.checked'),
      cy.get('#isPayed').click(),
      cy.get('#isPayed').should('be.checked'),
      cy.get('#submitModal').click(),
      cy.contains('test').should('exist')
    );
  }

  clearInputs(){
    cy.get('#firstName').clear();
    cy.get('#lastName').clear();
    cy.get('#title').clear();

  }
  paymentEdit() {
    cy.contains('Payments').should('exist');
    if (cy.contains('test').should('exist')) {
      cy.get('#dropdownBasic1').click();
      cy.get(
        ':nth-child(1) > :nth-child(6) > .table-actions > .d-inline-block > .dropdown-menu > :nth-child(1)'
      ).click();
      cy.contains('Fill in the new Payment details').should('exist');
        this.clearInputs();
      cy.get('#firstName').type('Alex');
      cy.get('#lastName').type('Antonio');
      cy.get('#title').type('Developer');

      cy.get('#submitModal').click();
    }
    cy.contains('Alex Antonio').should('exist');
  }

  paymentDelete() {
    cy.contains('Payments').should('exist');
    if (cy.contains('Alex Antonio').should('exist')) {
      cy.get('#dropdownBasic1').click();
      cy.get(
        ':nth-child(1) > :nth-child(6) > .table-actions > .d-inline-block > .dropdown-menu > :nth-child(2)'
      ).click();
      cy.get('.confirm-modal').click();
      cy.contains('Alex Antonio').should('not.exist')
    } else {}
  }
  paymentDeleteTest() {
    if (cy.contains('test').should('exist')) {
      cy.get('#dropdownBasic1').click();
      cy.get(
        ':nth-child(1) > :nth-child(6) > .table-actions > .d-inline-block > .dropdown-menu > :nth-child(2)'
      ).click();
      cy.get('.confirm-modal').click();
    }else{}
  }
}
