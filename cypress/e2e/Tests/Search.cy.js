/// <reference types="cypress" />
import {Given,When,Then} from "cypress-cucumber-preprocessor/steps"
import generics from "../Pages/Generics"
import search from "../Pages/Search"

Given("Visit apple Site {string}",(url)=>{
    generics.getUrl(url);
})
When("Search for {string}",(product)=>{
    search.searchForProduct(product);
})
Then("Verify the {string} displayed",(product)=>{
    search.verifyProduct(product)
})