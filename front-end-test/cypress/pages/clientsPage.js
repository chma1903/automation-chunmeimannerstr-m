/// <reference types="cypress" />

//element

const createNewClientsButten = 'h2 > .btn'



//function/metod

function navigateToCreateNewClients(cy,contentToConform){
    cy.get(createNewClientsButten).click()
    cy.contains(contentToConform)
}





//export
module.exports = {
    navigateToCreateNewClients
}