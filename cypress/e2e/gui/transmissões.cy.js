describe('Transmissões', () => {
    beforeEach(function () {
        cy.sessionLogin()
    })
    it.only('Cadastrar Transmissão', () => {
        cy.pathTransmissions()
        cy.registerTransmissions()
    })
    it.only('Alterar trasmissão para ao vivo', () => {
        cy.editTransmissions()
    })
    it.only('Acessar Transmissão e enviar mensagem no chat', () => {
        cy.AccessTransmission()
       //cy.chat()
    })
    it.only('Retirando de ao vivo', () => {
        cy.editTransmissions()
    })
    it.only('Excluir Trasmissão', () => {
        cy.deleteTransmissions()
    })
})