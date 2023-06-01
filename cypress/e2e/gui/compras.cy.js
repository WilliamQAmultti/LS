describe('Compras', () => {
  beforeEach(function () {
    cy.sessionLogin()
  })
  it.only('Realizar Compra coom cartão de crédito', () => {
    cy.paymentCreditCard()
  })
  it.only('Realizar Compra no Boleto', () => {
    cy.paymentSlip()
  })
  it.only('Realizar Compra TED', () => {
    cy.paymentTed()
  })
  it.only('Realizar Compra no Pix', () => {
    cy.paymentPix()
  })
})