Feature: BCQAM Newinspection Creation

Scenario: BCQAM Newinspection create Scenario

Given  user is already on Login Page
When title of login page is BCQAM
Then user enters username and password
| username | password|
|Admin     |jsmith   |
Then user clicks on login button
Then user select vendor from list
Then user is on homepage
Then user clicks on newinspection button
Then user enters POdetail 
Then user clicks on Inspectionnew
Then user select instype from list
Then user select status from list
Then user select inspector from list
Then user enters inspection details 
|alerttext|qccomments|comments|
|Test     |123       |1449622 |



#Then close the browser

