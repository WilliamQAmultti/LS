import './commands'
import './transmissoes'


Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

Cypress.Commands.add('loginAdm', () => {
  cy.request({
    method: 'POST',
    url: 'https://api-liberta.homolog.dev.br/api/login',
    body: {
      "email": "ls@multti.com",
      "password": 123456
    }
  }).then((interception) => {
    Cypress.env('token', interception.body.access_token)
    cy.log(Cypress.env('token'))
  })

})

  Cypress.Commands.add('mass', () => {
    cy.request({
      method: 'POST',
      url: 'https://api-liberta.homolog.dev.br/api/create-video',
      headers: {
        "authorization": `Bearer ${Cypress.env('token')}`
      },
      body: {
        "create_chat": 1,
        "title": "teste agora 5",
        "slug": "sas",
        "abstract": "opop",
        "url_video": "https://www.youtube.com/watch?v=TExr6pDL9jo",
        "description": "teste",
        "show_on_ls_play": 1,
        "show_on_intranet": 1,
        "live": undefined,
        "public": 1,
        "exclusive_access": 0,
        "hybrid": 0,
        "free_video_url": "https://www.youtube.com/watch?v=TExr6pDL9jo",
        "video_date": '',
        "free_video_end": '',
        "open_chat": 1,
        "youtube": 0,
        "open_or_transfer_account": 0,
        "company_id": 1,
        "entry_time": '',
        "end_time": '',
        "every_day": 1,
        "card_image_description": '',
        "active": 1,
        "listed": 1,
        "order": 0,
        "header_image": 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVQIHWNgAAAAAgAB4iG8MwAAAABJRU5ErkJggg==',
        "date": '2023-05-10'
      }

    })
  })

