$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("E:/TESTING/Automation/BCQAMBDDFramework/src/main/java/Features/tagging.feature");
formatter.feature({
  "line": 2,
  "name": "BCQAM application testing",
  "description": "",
  "id": "bcqam-application-testing",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.scenario({
  "line": 40,
  "name": "browser closed",
  "description": "",
  "id": "bcqam-application-testing;browser-closed",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 41,
  "name": "This is a close broswer test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefination.this_is_a_close_broswer_test()"
});
formatter.result({
  "duration": 110911899,
  "status": "passed"
});
});