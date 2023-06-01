
describe('Diversos', () => {
  beforeEach(function () {
    cy.sessionLogin()
  })
  it('Verificação dos Menus da plataforma', () => {
    cy.checkSideMenu()
  })
  it('Cadastro de usuário', () => {
    cy.exitPlatform()
    cy.registerUser()
  })
  it('Realizar logof', () => {
    cy.logoff()
  })
})