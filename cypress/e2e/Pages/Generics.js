/// <reference types="cypress" />
class GenericsPage{
    getUrl(url){
        cy.visit(url)
    }
}
const generics = new GenericsPage();
export default generics;