/// <reference types="Cypress" />

describe('search', () => { 
    beforeEach('visit site',()=>{
        cy.visit("https://www.apple.com/in/")
    })
    it('search for iphone',()=>{
        cy.get('#globalnav-menubutton-link-search').click()
        cy.get('.globalnav-searchfield-input').type('iphone')
        cy.get('.globalnav-searchresults-list-item').should('have.length',10)
        cy.get('.globalnav-searchresults-list-item')
        .find('.globalnav-searchresults-list-text')
        .contains('Explore ').click()
        cy.get('li.chapternav-item a').each(($el,index,$list)=>{
            const iphone = $el.find('.chapternav-label').text()
            if(iphone.includes('iPhone 15 Pro')){
                $el.find('.chapternav-label').click()
            }
        })
        cy.get('h2.welcome__video-headline').find('span').should('have.text','iPhone 15 Pro')
        cy.wait(7000)

    }) 
    it('search for mac',()=>{
        cy.get('#globalnav-menubutton-link-search').click()
        cy.get('.globalnav-searchfield-input').type('mac')
        cy.get('.globalnav-searchresults-list-item').should('have.length',10)
        cy.get('.globalnav-searchresults-list-item')
        .find('.globalnav-searchresults-list-text')
        .contains('Explore ').click()
    }) 
    it('search for ipad',()=>{
        cy.get('#globalnav-menubutton-link-search').click()
        cy.get('.globalnav-searchfield-input').type('ipad')
        cy.get('.globalnav-searchresults-list-item').should('have.length',10)
        cy.get('.globalnav-searchresults-list-item')
        .find('.globalnav-searchresults-list-text')
        .contains('Explore ').click()
    })

}
)