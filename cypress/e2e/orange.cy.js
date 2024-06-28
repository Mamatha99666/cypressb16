import login from '../fixtures/login.json'
import loginpage from '../../pageobjects/login.po'


describe('verify addemployee functionality',  () => {

beforeEach(() => {


       // cy.login()
       // })

       cy.session('Login session', () =>{

cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
cy.get(loginpage.usernameInput()).type(username)
cy.get(loginpage.passwordInput()).type(password)
cy.get(loginpage.loginBtn()).click()
       })
    })

        it('verify addemployee valid fields', () => {
        cy.contains('PIM').click()
        cy.contains('Add Employee').click()
        cy.get('input[name="firstName"]').type('mohith')
        cy.get('input[name="lastName"]').type('n')

        cy.get('button[type="submit"]').click()


    })

    it('verify addemployee mandatory fields', () => {

        
        
        cy.contains('PIM').click()

        

        cy.contains('Add Employee').click()//

        

        cy.get('button[type="submit"]').click()

        cy.contains('Required').should('be.visible')

})

})