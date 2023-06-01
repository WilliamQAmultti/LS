describe('Cadastros', () => {
    beforeEach(function () {
        cy.sessionLogin()
    })

    it('Cadastro de curso', () => {
        cy.courseRegistration()
        cy.salesSetup()
        cy.courseSettings()
        cy.courseModality()
        cy.courseDisplay()
    })
    it('Cadastro de livro', () => {
        cy.bookRegistration()
    })
    it('Excluir livro', () => {
        cy.deleteEbook()
    })
    it('Excluir curso', () => {
        cy.deleteCourse()
    })
    it('Cadastrar empresa', () => {
        cy.createCompany()
    })
    it('Excluir empresa', () => {
        cy.deleteCompany()
    })
})