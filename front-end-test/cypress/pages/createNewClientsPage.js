/// <reference types="cypress" />
import faker from 'faker'


//element
const nameField = ':nth-child(1) > input'
const emailField = ':nth-child(2) > input'
const telephoneField = ':nth-child(3) > input'
const saveButten = '.blue'
let name = faker.name.findName();
let email = faker.internet.email();
let telephone = faker.phone.phoneNumber();



//function/metod
function infyllningAvFörmuläret(cy){
    cy.get(nameField).type(name)
    cy.get(emailField).type(email)
    cy.get(telephoneField).type(telephone)
}

function saveClents(cy,contentToConform){
    cy.get(saveButten).click()
    cy.contains(contentToConform)
}


function checkNewClients(cy){
    cy.contains(name)
    cy.contains(email)
    cy.contains(telephone)
}

//export

module.exports = {
    infyllningAvFörmuläret,
    saveClents,
    checkNewClients
}

