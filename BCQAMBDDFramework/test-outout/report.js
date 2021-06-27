$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("E:/TESTING/Automation/BCQAMBDDFramework/src/main/java/Features/login.feature");
formatter.feature({
  "line": 1,
  "name": "BCQAM Login Feature",
  "description": "",
  "id": "bcqam-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#without Examples Keyword"
    },
    {
      "line": 6,
      "value": "#Scenario: BCQAM login test Scenario"
    },
    {
      "line": 7,
      "value": "#Given  user is already on Login Page"
    },
    {
      "line": 8,
      "value": "#When title of login page is BCQAM"
    },
    {
      "line": 9,
      "value": "##Then user enters username and password"
    },
    {
      "line": 10,
      "value": "#Then user enters \"admin\" and \"jsmith\""
    },
    {
      "line": 11,
      "value": "#Then user clicks on login button"
    },
    {
      "line": 12,
      "value": "#Then user select vendor from list"
    },
    {
      "line": 13,
      "value": "#Then user is on homepage"
    },
    {
      "line": 15,
      "value": "#With Examples Keyword"
    }
  ],
  "line": 17,
  "name": "BCQAM login test Scenario",
  "description": "",
  "id": "bcqam-login-feature;bcqam-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "title of login page is BCQAM",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user select vendor from list",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "user is on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "bcqam-login-feature;bcqam-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 31,
      "id": "bcqam-login-feature;bcqam-login-test-scenario;;1"
    },
    {
      "cells": [
        "admin",
        "jsmith"
      ],
      "line": 32,
      "id": "bcqam-login-feature;bcqam-login-test-scenario;;2"
    },
    {
      "cells": [
        "kondaiah",
        "test@123"
      ],
      "line": 33,
      "id": "bcqam-login-feature;bcqam-login-test-scenario;;3"
    },
    {
      "cells": [
        "Srinivas",
        "test@123"
      ],
      "line": 34,
      "id": "bcqam-login-feature;bcqam-login-test-scenario;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 32,
  "name": "BCQAM login test Scenario",
  "description": "",
  "id": "bcqam-login-feature;bcqam-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "title of login page is BCQAM",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user enters \"admin\" and \"jsmith\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user select vendor from list",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "user is on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefination.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 6277311100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefination.title_of_login_page_is_BCQAM()"
});
formatter.result({
  "duration": 16563600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 13
    },
    {
      "val": "jsmith",
      "offset": 25
    }
  ],
  "location": "LoginStepdefination.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 2241516000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 89568500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefination.user_select_vendor_from_list()"
});
formatter.result({
  "duration": 2151562400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefination.user_is_on_homepage()"
});
formatter.result({
  "duration": 5138949000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefination.close_the_browser()"
});
formatter.result({
  "duration": 791712200,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "BCQAM login test Scenario",
  "description": "",
  "id": "bcqam-login-feature;bcqam-login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "title of login page is BCQAM",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user enters \"kondaiah\" and \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user select vendor from list",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "user is on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefination.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 3455441100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefination.title_of_login_page_is_BCQAM()"
});
formatter.result({
  "duration": 5036600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kondaiah",
      "offset": 13
    },
    {
      "val": "test@123",
      "offset": 28
    }
  ],
  "location": "LoginStepdefination.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 2217753000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 63317700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefination.user_select_vendor_from_list()"
});
formatter.result({
  "duration": 2134668600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefination.user_is_on_homepage()"
});
formatter.result({
  "duration": 5101762900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefination.close_the_browser()"
});
formatter.result({
  "duration": 803062900,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "BCQAM login test Scenario",
  "description": "",
  "id": "bcqam-login-feature;bcqam-login-test-scenario;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "title of login page is BCQAM",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user enters \"Srinivas\" and \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user select vendor from list",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "user is on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefination.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 4074345700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefination.title_of_login_page_is_BCQAM()"
});
formatter.result({
  "duration": 4097400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Srinivas",
      "offset": 13
    },
    {
      "val": "test@123",
      "offset": 28
    }
  ],
  "location": "LoginStepdefination.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 2214922200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 80667600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefination.user_select_vendor_from_list()"
});
formatter.result({
  "duration": 2139201800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefination.user_is_on_homepage()"
});
formatter.result({
  "duration": 5112042600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefination.close_the_browser()"
});
formatter.result({
  "duration": 789141600,
  "status": "passed"
});
});