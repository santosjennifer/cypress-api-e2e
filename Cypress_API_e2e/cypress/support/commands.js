import "cypress-localstorage-commands";

Cypress.Commands.add('login', () =>{
    cy.request({
        method: 'POST',
        url: Cypress.env('url_token'),
        form: true, //sets to application/x-www-form-urlencoded
        headers: {
            Authorization: Cypress.env('authorization'),
        },       
        body: {
            grant_type: 'client_credentials'              
        }      
    })   
    .then(response =>{
        expect(response.status).to.eql(200)
        localStorage.setItem('token', response.body.access_token)
        expect(localStorage.getItem('token')).not.null      
    });
});

Cypress.Commands.add('getArtist', (idArtist) =>{
    cy.request({
        method: 'GET',
        url: `/artists/${idArtist}`,
        headers: {
            Authorization:  "Bearer " + localStorage.getItem('token')
        },
        failOnStatusCode: false 
    })
});

Cypress.Commands.add('getSearch', (type, q) =>{
    cy.request({
        method: 'GET',
        url: `/search?type=${type}&q=${q}`,
        headers: {
            Authorization:  "Bearer " + localStorage.getItem('token')
        },
        failOnStatusCode: false     
    })
});