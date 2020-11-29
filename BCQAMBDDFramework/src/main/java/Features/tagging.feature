@FunctionalTest
Feature: BCQAM application testing

@SmokeTest @RegressionTest
Scenario: Login with correct username and correct password
Given This is a valid login test

@RegressionTest
Scenario: Login with incorrect username and correct password
Given This is a invalid login test

@SmokeTest
Scenario: Create a newinspection
Given This is a contact test case

@SmokeTest
Scenario: Verify summary
Given This is a summary test case

@SmokeTest @RegressionTest
Scenario: Verify themes
Given clicking on themes links

@SmokeTest
Scenario: Verify settings
Given This is setting test

@SmokeTest @End2End
Scenario: Verify reject
Given This is a reject test

@End2End
Scenario: validate a report
Given This is a report test

@End2End
Scenario: Application Logout
Given This is a logout test

Scenario: browser closed
Given This is a close broswer test