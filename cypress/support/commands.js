// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
Cypress.Commands.add('testUnix', (endPoint, parameter, respBody, respStatus) => {
    cy.request({
        url: `/${endPoint}?${parameter}`,
        method: 'GET',
        failOnStatusCode: false,
    }).should((response) => {
        expect(response.status).to.be.equal(respStatus)
        expect(response.duration).to.be.lessThan(300)
        expect(response.body).to.deep.contain(respBody)
    })
})