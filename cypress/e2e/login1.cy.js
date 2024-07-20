import data from "../fixtures/login.json"

describe('verify login functionality', () => {
    it('verify login with valid creds', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

cy.get('input[placeholder="Username"]').type(data.username())
cy.get('input[type="password"]').type(data.password())

cy.get('button[type="submit"]').click()

cy.contains('Dashboard').should('be.visible')
cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

cy.contains('PIM').click()
cy.contains('Add Employee').click()
cy.get('input[name="firstName"]').type(data.firstname())
cy.get('input[name="lastName"]').type(data.lastname())
cy.get('button[type="submit"]').click()
cy.contains('Successfully Saved').should('be.visible')

cy.wait(5000)

//cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/207')


    })
    


it('verify addemployee mandatory fields', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

cy.get('input[placeholder="Username"]').type(data.username())
cy.get('input[type="password"]').type(data.password())
cy.get('button[type="submit"]').click()

cy.contains('Dashboard').should('be.visible')
cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

cy.contains('PIM').click()
cy.contains('Add Employee').click()

cy.get('button[type="submit"]').click()

cy.contains('Required').should('be.visible')

cy.wait(5000)

//cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/207')


  })

})