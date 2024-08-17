/// <reference types="cypress" />
class   SearchPage{
    searchForProduct(productName){
        cy.get('#globalnav-menubutton-link-search').click()
        cy.get('.globalnav-searchfield-input').type(productName)
        cy.get('.globalnav-searchresults-list-item').should('have.length',10)
        cy.get('.globalnav-searchresults-list-item')
        .find('.globalnav-searchresults-list-text')
        .contains('Explore ').click()
    }

    verifyProduct(productName){
        cy.get('.section-welcome > .section-content-responsive > .section-header > .section-header-headline')
        .should('have.text',productName)
    }
}
const search = new SearchPage();
export default search;