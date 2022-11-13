Feature: Adding products to the cart and checkout

  Scenario Outline: User can successfully login and proceed to checkout after adding products
    Given User has login credential for sauceDemo website using the microsoft edge
    And User navigate to the SauceDemo.com url
    And user enters his <username> and <password> in the login field
    And user successfully login to the homePage of SauceDemo
    And user navigate to product list page
    And User search product by shirt and add all the filtered product
    And User clicks on the cart link
    And User verify that the all products with shirt is added in the cart
    Then User successfully proceed and checkout the page by clicking checkout button

    Examples: 
      | username        | password     |
      | standard_user   | secret_sauce |
      #| performance_glitch_user | secret_sauce |
