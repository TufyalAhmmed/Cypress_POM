export class LoginPage{

    user = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    pass = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
    login = '.oxd-button'
   
   
    enterUsername(username){
        cy.get(this.user).type(username)
    }

    enterPassword(password){
        cy.get(this.pass).type(password)
    }

    clickLogin(){
        cy.get(this.login).click()
    }

}