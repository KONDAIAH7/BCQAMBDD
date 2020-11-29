package Runner;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "E:\\TESTING\\Automation\\BCQAMBDDFramework\\src\\main\\java\\Features\\tagging.feature",       //the path of the feature files
		
		glue={"StepDefinations"},     //the path of the step definition files
		
	    monochrome = true,   //console output is Readable format
	    
		format= {"pretty","html:test-outout","json:json_output/cucumber.json","junit:junit_xml/cucumber.xml"},  //to generate different types of reporting
		
	    dryRun=false,
	    tags= {"~@SmokeTest" , "~@RegressionTest" , "~@End2End"})
	    
	    
	  public class TestRunner 
{

	
	
}



//ORed : tags = {"@SmokeTest , @RegressionTest"} -- execute all tests tagged as @SmokeTest OR @RegressionTest
	//ANDed : tags = tags = {"@SmokeTest" , "@RegressionTest"} -- execute all tests tagged as @SmokeTest AND @RegressionTest
	
