Feature: BCQAM Newinspection Creation

Scenario Outline: BCQAM Newinspection create Scenario

Given  user is already on Login Page
When title of login page is BCQAM
Then user enters "<username>" and "<password>"
Then user clicks on login button
Then user select vendor from list
Then user is on homepage
Then user clicks on newinspection button
Then user enters POdetail "<POnumber>"
Then user clicks on Inspectionnew
Then user select instype from list
Then user select status from list
Then user select inspector from list
Then user enters inspection details "<alerttext>" and "<qccomments>" and "<Comments>"


#Then close the browser

Examples:

	| username | password |POnumber|alerttext|qccomments|Comments|
	| admin    | jsmith   |1449622 | Test    |Test123   |1449622 |