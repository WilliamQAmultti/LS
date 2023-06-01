import { faker } from '@faker-js/faker'
let nameFaker = faker.hacker.adjective()

function obterDataDeHoje() {
    const dataAtual = new Date();
    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0'); 
    const ano = dataAtual.getFullYear();
    const dataFormatada = dia + mes + ano;
    return dataFormatada;
}
const dataAtual = obterDataDeHoje();
let trasmissões = faker.lorem.words(1)
/*
Cadastrar a transmissão não ao vivo;
Colocar como ao vivo;
Entrar na transmissão;
Retirar de ao vivo
Excluindo transmissão
*/
Cypress.Commands.add('pathTransmissions', () =>{//Caminho menu transmissão
    cy.visit('/')
    cy.get('.styles__MenuGroup-sc-hhvtns-6 > .IconAcessar > span').click()
    cy.get('[class="efeNsGhYhSQNju2yjo1voQ=="]').click()
    cy.contains('L&S')
})
Cypress.Commands.add('registerTransmissions', () =>{//Cadastrar transmissão não ao vivo
    cy.visit('https://app-ls.homolog.dev.br/transmissoes')
    cy.get('[class="btn btn-primary-default"]').first().click()
    cy.get('[name="title"]').type(trasmissões).should('be.visible')
    cy.get('[name="date"]').first().type(dataAtual)
    cy.get('[name="start_time"]').first().type('1030') 
    cy.get('#chat_recommendations').select('Day Trade')
    cy.get('[class="select__indicator select__dropdown-indicator css-qj08tm-indicatorContainer"]').click()
    .type('Premium + CTA{enter}')
    cy.get('[name="video_url"]').type('https://www.youtube.com/watch?v=YVpKpueQ7hk')
    cy.get('div[class="rdw-editor-main"]').first().type(trasmissões)
    cy.get('#educational_room').check({force:true})
    cy.get('#main_in_channel').check({force:true})
    cy.get('#open_chat').check({force:true})
    cy.get('#public').check({force:true})
    cy.contains('Salvar').click()
    cy.get('[role="alert"]').should('have.text', 'Transmissão cadastrada com sucesso!')
})
Cypress.Commands.add('editTransmissions', () =>{ //Editando trasmissão para ao vivo ou não
    cy.pathTransmissions()
    cy.visit('https://app-ls.homolog.dev.br/transmissoes')
    cy.get('[class="dropdown"]').first().click()
    cy.contains('Editar').click()
    cy.get('[class="switch-icon-right"]').first().click({force:true})
    cy.contains('Salvar').click()
    cy.get('[role="alert"]').should('have.text', 'Transmissão atualizada com sucesso!')
})
Cypress.Commands.add('AccessTransmission', () => {//Acessar Transmissão
    cy.visit('/')
    cy.get('.styles__MenuGroup-sc-hhvtns-6 > .IconAcessar > span').click()
    cy.contains('william email')
    cy.get('[class="efeNsGhYhSQNju2yjo1voQ=="]').click()
    cy.reload()
    cy.get('[href="/cliente/lives"]').first().click()
    cy.get('[class="mFVQrZ1cj2PUy+1G3oGDtg=="]').first().click()
    cy.contains('Ao Vivo')
    cy.get('[class="t-d4l-pPDEqL0v0IXgdgkw=="]').should('have.text',' Próximas Lives')
})
Cypress.Commands.add('chat', () => {
    cy.get('[placeholder="digite sua mensagem"]').type(nameFaker)
    cy.get('[type="submit"]').first().click()
    //cy.contains(nameFaker).should('be.visible')
})
Cypress.Commands.add('deleteTransmissions',() => {//Deletar transmissão
    cy.pathTransmissions()
    cy.visit('https://app-ls.homolog.dev.br/transmissoes')
    cy.get('[class="dropdown"]').first().click()
    cy.contains('Excluir').click()
    cy.get('[class="btn btn-danger"]').click()
    cy.get('[role="alert"]').should('have.text', 'Transmissão excluída com sucesso!')
})
