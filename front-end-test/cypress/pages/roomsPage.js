/// <reference types="cypress" />

//element
const backKnapp = ':nth-child(3) > .btn'
const TitelOfRoomsPage = 'Tester Hotel'
const createNewRoomsButten = 'h2 > .btn'
const alternativKnapp = ':nth-child(2) > .action > img'
const deleteKnapp = '.menu > :nth-child(2)'
const editKnapp = '.menu > :nth-child(1)'

//function
function checkTitelOfRoomsPage(cy){
    cy.title().should('eq',TitelOfRoomsPage)
}


function navigateToIndexPage(cy,contentToConfirm){
    cy.get(backKnapp).click()
    cy.contains(contentToConfirm)
} 

function navigateToCreateNewRoomPage(cy,contentToConfirm){
    cy.get(createNewRoomsButten).click()
    cy.contains(contentToConfirm)

}

function deleteFuntion(cy,contentToConfirm){
    cy.get(alternativKnapp).click()
    cy.get(deleteKnapp).click()
    cy.contains(contentToConfirm)
}

function editFuntion(cy){
    cy.get(alternativKnapp).click()
    cy.get(editKnapp).click()
    
}

function cheakdeletedRoom(cy){
    cy.get(alternativKnapp).should('not.exist')
}


//export
module.exports = {
    navigateToIndexPage,
    checkTitelOfRoomsPage,
    navigateToCreateNewRoomPage,
    deleteFuntion,
    editFuntion,
    cheakdeletedRoom
}