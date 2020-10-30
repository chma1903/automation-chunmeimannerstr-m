/// <reference types="cypress" />


//element
const roomsView  = ':nth-child(1) > .btn'
const cliensView  = '.blocks > :nth-child(2) > .btn'
const billsView  = ':nth-child(3) > .btn'
const reservationsView  = ':nth-child(4) > .btn'
const logOut = '.user > .btn'

//function/metod


function logout(cy,contentToConfirm){
    cy.get(logOut).click()
    cy.contains(contentToConfirm)

}


function navigateToRoomsPage(cy,contentToConfirm){

    cy.get(roomsView).click()
    cy.contains(contentToConfirm)
}

function navigateToClientsPage(cy,contentToConfirm){

    cy.get(cliensView).click()
    cy.contains(contentToConfirm)
}

function navigateToBillsPage(cy,contentToConfirm){

    cy.get(billsView).click()
    cy.contains(contentToConfirm)
}


function navigateToReservationsPage(cy,contentToConfirm){

    cy.get(reservationsView).click()
    cy.contains(contentToConfirm)
}







//export
module.exports = {
    logout,
    navigateToRoomsPage,
    navigateToClientsPage,
    navigateToBillsPage,
    navigateToReservationsPage
    
}