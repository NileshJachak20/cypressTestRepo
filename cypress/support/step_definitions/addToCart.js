import{After, Given, When } from "cypress-cucumber-preprocessor/steps";


Given('User has login credential for sauceDemo website using the microsoft edge', function () {
  cy.visit("https://www.saucedemo.com/");
});

When('User navigate to the SauceDemo.com url', function () {
  cy.get('.login_logo').should('be.visible');

});
When(/user enters his (.*) and (.*) in the login field/, function (username, password) {
  //let credentials = dataTable.hashes()[0]["username"];
 
  cy.get('[data-test=username]')
    .type(username);
  cy.get('[data-test=password]')
    .type(password);
  
});

When('user successfully login to the homePage of SauceDemo', function () {
  cy.get('#login-button').click();
  cy.get('[id^=react-burger-menu-btn]').should('be.visible');

});

When('user navigate to product list page', function () {
  cy.get('.bm-burger-button > button').click();
  cy.wait(2000);
  cy.get('#inventory_sidebar_link').click();
});

When('User search product by shirt and add all the filtered product', function () {
  cy.get(".inventory_list .inventory_item").each(inventoryItem => {
    cy.wrap(inventoryItem).find(".inventory_item_desc").each(itemDesc => {
      if (itemDesc.text().toLowerCase().indexOf("shirt") > -1) {
        cy.wrap(itemDesc).parent().next(".pricebar").find("button").click();
      }
    });
  });
});

When('User clicks on the cart link', function () {
  cy.get('.shopping_cart_link').click();
});

When('User verify that the all products with shirt is added in the cart', function () {
  cy.get('.inventory_item_desc').should('contains.text', 'shirt');

});

When('User successfully proceed and checkout the page by clicking checkout button', function () {
  cy.get('[data-test="checkout"]').click();
  cy.get('[placeholder="First Name"]').should('be.visible');
});
