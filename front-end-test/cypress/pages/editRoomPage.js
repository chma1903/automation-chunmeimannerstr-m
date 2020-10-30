/// <reference types="cypress" />
import faker from 'faker'

//element
const categoryFält = ':nth-child(3) > select'
const roomNumberFält = ':nth-child(4) > input'
const floorNumberFält = ':nth-child(5) > input'
const cheakBox = '.checkbox'
const priceFält = ':nth-child(7) > input'
const featuresFält = ':nth-child(8) > select'
const titleOfEditRoom = 'Testers Hotel'
const saveButten = '.blue'
let floorNumber = faker.random.number(4)
let roomNumber = faker.random.number(200)
let price = faker.random.number(20000)



//function 
function checkTitelOfRoomsPage(cy){
    cy.title().should('eq',titleOfEditRoom)
}


function editRoom(cy){
    cy.get(categoryFält).select('Single')
    cy.get(roomNumberFält).clear().type(roomNumber)
    cy.get(floorNumberFält).clear().type(floorNumber)
    cy.get(cheakBox).click()
    cy.get(priceFält).clear().type(price)
    cy.get(featuresFält).select('Ensuite')
}

function saveEditedRoom(cy,contentToConfirm){
    cy.get(saveButten).click()
    cy.contains(contentToConfirm)
}


function checkEditedRoom(cy){
    cy.contains(roomNumber)
    cy.contains(floorNumber)
    cy.contains(price)
}

//export
module.exports = {
    editRoom,
    saveEditedRoom,
    checkTitelOfRoomsPage,
    checkEditedRoom
}