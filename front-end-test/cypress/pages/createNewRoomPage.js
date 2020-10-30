/// <reference types="cypress" />
import faker from 'faker'


//element
const categoryFält = ':nth-child(1) > select'
const roomNumberFält = ':nth-child(2) > input'
const floorNumberFält = ':nth-child(3) > input'
const cheakBox = '.checkbox'
const priceFält = ':nth-child(5) > input'
const featuresFält = ':nth-child(6) > select'
const titleOfCreateNewRoomPage = 'Testers Hotel'
const saveButten = '.blue'
let floorNumber = faker.random.number(4)
let roomNumber = faker.random.number(200)
let price = faker.random.number(20000)


//funcion/metod
function cheaktitleOfCreateNewRoomPage(cy,contentToConform){
    cy.titile().should('eq',titleOfCreateNewRoomPage)
    cy.contains(contentToConform)
}

function infyllningAvFörmulär(cy){
    cy.get(categoryFält).select('Double')
    cy.get(roomNumberFält).type(roomNumber)
    cy.get(floorNumberFält).type(floorNumber)
    cy.get(cheakBox).click()
    cy.get(priceFält).type(price)
    cy.get(featuresFält).select('balcony')
}

function saveNyrooms(cy,contentToConform){
    cy.get(saveButten).click()
    cy.contains(contentToConform)
}

function checkNyRoom(cy){
    cy.contains(roomNumber)
    cy.contains(floorNumber)
    cy.contains(price)
}


//export
module.exports = {
    cheaktitleOfCreateNewRoomPage,
    infyllningAvFörmulär,
    saveNyrooms,
    checkNyRoom    
}
