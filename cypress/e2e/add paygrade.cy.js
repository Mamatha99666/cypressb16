import data from "../fixtures/login.json"
describe("verify add paygrade", ()=>{

    it("verify add pay grade functionality", ()=>{ 

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee')

        cy.get('input[placeholder="Username"]').type(data.username())
        cy.get('input[type="password"]').type(data.password())
        
        cy.get('button[type="submit"]').click()
        
        cy.contains('Dashboard').should('be.visible')

        

    })
})