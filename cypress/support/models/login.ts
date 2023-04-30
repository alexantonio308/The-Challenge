
export default class login {

  username() {
    return cy.get('#floatingInputGroup2');
  }
  usernameSet(){
    return cy.get('#floatingInputGroup2').type('picpay-web');
  }
  password() {
    return cy.get('#floatingPassword');
  }
  passwordSet(){
    return cy.get('#floatingPassword').type('picpay@123');
  }
  loginEnter() {
    return cy.get('#loginButton').contains('Login').click();
  }
  logout() {
    return cy.get('#userDropdown').click(), cy.get('#logoutButton').click();
  }

  automaticLogin(){
    cy.visit('/')
    this.username().type('picpay-web');
    this.password().type('picpay@123');
    this.loginEnter();
  }
}


