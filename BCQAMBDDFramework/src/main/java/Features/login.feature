Feature: BCQAM Login Feature

#without Examples Keyword


#Scenario: BCQAM login test Scenario
#Given  user is already on Login Page
#When title of login page is BCQAM
##Then user enters username and password
#Then user enters "admin" and "jsmith"
#Then user clicks on login button
#Then user select vendor from list
#Then user is on homepage

#With Examples Keyword

Scenario Outline: BCQAM login test Scenario

Given  user is already on Login Page
When title of login page is BCQAM
Then user enters "<username>" and "<password>"
Then user clicks on login button
Then user select vendor from list
Then user is on homepage
Then close the browser



Examples:

	| username | password |
	| admin    | jsmith   |
	|kondaiah  |  test@123|
	|  Srinivas    | test@123  | 