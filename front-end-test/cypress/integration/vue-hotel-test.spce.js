/// <reference types="cypress" />
import faker from 'faker'
import * as loginFuncs from '../pages/inloggningPage'
import * as indexFuncs from '../pages/indexPage'
import * as roomsFuncs from '../pages/roomsPage'
import * as createNewRoomFuncs from '../pages/createNewRoomPage'
import targets from '../pages/targets'
import * as clientsFuncs from '../pages/clientsPage'
import * as createNewClientsFuncs from '../pages/createNewClientsPage'
import * as editRoomsFuncs from '../pages/editRoomPage'
import { editFuntion } from '../pages/roomsPage'





describe('test suite',function(){
        

    beforeEach(()=>{
        cy.visit(targets.base_url)
        loginFuncs.checkTitleOfLoginPage(cy,'Login')
    })


    //test case 01
    it('Perform login and logut' ,function(){
        loginFuncs.performValidLogin(cy,targets.username,targets.password,'Overview')
        indexFuncs.logout(cy,'Login')
    })

    //test case 02
    it('navigate to all pages',function(){
        loginFuncs.performValidLogin(cy,targets.username,targets.password,'Overview')
        indexFuncs.navigateToRoomsPage(cy,'Rooms')
        roomsFuncs.navigateToIndexPage(cy,'Tester Hotel Overview')
        indexFuncs.navigateToClientsPage(cy,'Clients')
        roomsFuncs.navigateToIndexPage(cy,'Tester Hotel Overview')
        indexFuncs.navigateToBillsPage(cy,'Bills')
        roomsFuncs.navigateToIndexPage(cy,'Tester Hotel Overview')
        indexFuncs.navigateToReservationsPage(cy,'Reservations')
        roomsFuncs.navigateToIndexPage(cy,'Tester Hotel Overview')
        indexFuncs.logout(cy,'Login')
    })

       //Test case 03
       it('edit a room',function(){
        loginFuncs.performValidLogin(cy,targets.username,targets.password,'Overview')
        indexFuncs.navigateToRoomsPage(cy,'Rooms')
        roomsFuncs.editFuntion(cy)
        editRoomsFuncs.editRoom(cy)
        editRoomsFuncs.saveEditedRoom(cy,'Rooms')
        editRoomsFuncs.checkEditedRoom(cy)
        indexFuncs.logout(cy,'Login')
    })

    //Test case 04
    it('delete a room',function(){
        loginFuncs.performValidLogin(cy,targets.username,targets.password,'Overview')
        indexFuncs.navigateToRoomsPage(cy,'Rooms')
        roomsFuncs.deleteFuntion(cy,'Rooms')
        roomsFuncs.cheakdeletedRoom(cy)
        indexFuncs.logout(cy,'Login')
    }) 
   

    //Test case 05
    it('create a new Clients',function(){
        loginFuncs.performValidLogin(cy,targets.username,targets.password,'Overview')
        indexFuncs.navigateToClientsPage(cy,'Clients')
        clientsFuncs.navigateToCreateNewClients(cy,'New Client')
        createNewClientsFuncs.infyllningAvFörmuläret(cy)
        createNewClientsFuncs.saveClents(cy,'Clients')
        createNewClientsFuncs.checkNewClients(cy)
        indexFuncs.logout(cy,'Login')
    })
    
    
    //Test case 06
    it('create a new room',function(){
        loginFuncs.performValidLogin(cy,targets.username,targets.password,'Overview')
        indexFuncs.navigateToRoomsPage(cy,'Rooms')
        roomsFuncs.navigateToCreateNewRoomPage(cy,'New Room')
        createNewRoomFuncs.infyllningAvFörmulär(cy)
        createNewRoomFuncs.saveNyrooms(cy,'Rooms')
        createNewRoomFuncs.checkNyRoom(cy)
        indexFuncs.logout(cy,'Login')
    })
})