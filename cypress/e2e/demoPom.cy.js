///<reference types="cypress"/>
import { LoginPage } from "./pages/logiinPage"
const logiinPage = new LoginPage()

it('Login Test1', () =>{
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    logiinPage.enterUsername('Admin')
    logiinPage.enterPassword('admin123')
    logiinPage.clickLogin()
 

})

it('Login Test2', () =>{
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    logiinPage.enterUsername('Admin')
    logiinPage.enterPassword('admin123')
    logiinPage.clickLogin()
 

})