Feature: Search in apple site  

Scenario: Search for iPhone 
    Given Visit apple Site "https://www.apple.com/in/"
    When Search for "iPhone" 
    Then Verify the "iPhone" displayed 

Scenario: Search for Mac 
    Given Visit apple Site "https://www.apple.com/in/"
    When Search for "Mac" 
    Then Verify the "Mac" displayed 

Scenario: Search for iPad 
    Given Visit apple Site "https://www.apple.com/in/"
    When Search for "iPad" 
    Then Verify the "iPad" displayed 