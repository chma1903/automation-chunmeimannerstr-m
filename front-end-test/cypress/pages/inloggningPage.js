/// <reference types="cypress" />

//element
const indexPageTitel ='Testers Hotel'
const inloggningsfältAnvändnamn = ':nth-child(1) > input'
const inloggningsfältLörsendord =':nth-child(2) > input'
const login ='.btn'


//function/metod
function checkTitleOfLoginPage(cy,contentToConfirm){

    cy.title().should('eq',indexPageTitel)
    cy.contains(contentToConfirm)

}


function performValidLogin(cy,username,password,contentToConfirm){
    cy.get(inloggningsfältAnvändnamn).type(username)
    cy.get(inloggningsfältLörsendord).type(password)
    cy.get(login).click()
    cy.contains(contentToConfirm)
}

//export
module.exports = {
    checkTitleOfLoginPage,
    performValidLogin
}
