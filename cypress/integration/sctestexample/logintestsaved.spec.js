// const ind = require ('E:\cypressworkspace\cypress\support\index.js')

///<reference types ="Cypress"/>
describe ("Login into smcuat app", function (){
 it('Login Scenario', function(){
    var i = 0;
    for (i = 0; i < 2; i++) { 
     cy.clearCookies
     cy.clearLocalStorage
     
    // cy.visit('https://smcuat.microland.com')
     cy.visit('https://smcuat.microland.com/Account/microland').get('#headerleft').contains('Welcome to SmartCenter..!!!')
    
    //  cy.goto('include','./Account/microland')
    // cy.get('.title').contains(/^b\w+/)   
    // cy.get('have.header').contains('Welcome to SmartCenter..!!!')
     cy.get('[name="username"]').type('smcengineer')
     cy.get('[name="password"]').type('microland@bng1')
    //  cy.contains('Sign me in').click
     cy.get('#btnSignIn').click()
    
    //  cy.visit('https://smcuat.microland.com/Dashboard/22')
    //  .get('.title').contains('Smart Center | RMC Active Ticket Dashboard')
    //  cy.reload(true)
    //  cy.wait(20000);
     cy.visit('https://smcuat.microland.com/IncidentTicket/Index');

     cy.get('button[onclick="SearchIMticket()"]').click();

     cy.visit('https://smcuat.microland.com/IncidentTicket/CreateIncidentTicket')
     cy.get('button[onclick="SearchIMticket()"]').click();

     cy.get('div#ddlCustomer_chosen').click();

     cy.get('div#ddlCustomer_chosen>div>div>input').type('SMC ASKML {enter}');
     cy.get('#ddlRequestor_chosen').click();
     cy.get('#ddlRequestor_chosen>div>div>input').type('govindasr@microland.com {enter}' );

     cy.get('#ddlRequestorPrimaryLocation_chosen').click();
     cy.get('#ddlRequestorPrimaryLocation_chosen>div>div>input').type('Default {enter}');

     cy.get('#ddlService_chosen').click();
     
     cy.get('#ddlService_chosen>div>div>input').type('AD Self Service Portal {enter}');

     cy.get('#ddlDevice_chosen').click();
     cy.get('#ddlDevice_chosen>div>div>input').type('Generic - 0.0.0.0 {enter}');
     
     
     cy.get('#ddlCategory_chosen').click();
     cy.get('#ddlCategory_chosen>div>div>input').type('Administration Module {enter}');
     cy.wait(1000);
     cy.get('#ddlSubCategory_chosen').click();
     cy.get('#ddlSubCategory_chosen>div>div>input').type('Dashboard {enter}');
     cy.wait(1000);
     cy.get('#ddlClassification_chosen').click();
     cy.get('#ddlClassification_chosen>div>div>input').type('Filters not working {enter}')
     
     cy.get('#ddlImpact_chosen').click();
     cy.get('#ddlImpact_chosen>div>div>input').type('None {enter}');

     cy.get('#ddlPriority_chosen').click();
     cy.get('#ddlPriority_chosen>div>div>input').type('P1 {enter}');
     
     cy.get('#ddlCreationType_chosen').click();
     cy.get('#ddlCreationType_chosen>div>div>input').type('Email {enter}');

     cy.get('#txtTitle').type('Enter the title of the ticket {enter}');
     cy.get('#txtDescription').type('Enter the description of the ticket {enter}');

     cy.get('#btnSubmit').click();
    }
 })


// // describe("Dashboard incident ticket scenario"), function () {
//     it('Navigate to Dashboard', function () {
//         cy.visit('https://smcuat.microland.com/Dashboard/23')
//         //  cy.title.contains('Smart Center | RMC Active Ticket Dashboard')
//         cy.visit('https://smcuat.microland.com/IncidentTicket/Index')
//         //  cy.title.contains('Smart Center | SmartCenter | Incident Ticket')

//     });
// // };
})

