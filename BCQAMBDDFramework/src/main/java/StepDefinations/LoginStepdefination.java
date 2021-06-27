package StepDefinations;

import javax.xml.xpath.XPath;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginStepdefination 
{
	WebDriver driver;
	
	@Given("^user is already on Login Page$")
	public void user_is_already_on_Login_Page()
	{
		System.setProperty("webdriver.chrome.driver", "E:\\TESTING\\Drivers\\chromedriver.exe");
	   driver=new ChromeDriver();
	   driver.get("http://qshell.bluecherry.com/BCQAM_QShell/CGS_PQA/PQA/WEB/#/login");
	   
	}

	@When("^title of login page is BCQAM$")
	public void title_of_login_page_is_BCQAM()
	{
	    String title= driver.getTitle();
	    System.out.println(title);
	    Assert.assertEquals("CGS - BCQAM", title);
	}
	
	//Reg Exp:
//	 //1. \"([^\"]*)\"
//	 //2. \"(.*)\"
	 @Then("^user enters \"(.*)\" and \"(.*)\"$")
	 public void user_enters_username_and_password(String username, String password) throws InterruptedException
	 {
		 Thread.sleep(2000);
			driver.findElement(By.id("inputEmail3")).sendKeys(username);
			driver.findElement(By.id("inputPassword3")).sendKeys(password);
	 } 

	@Then("^user enters username and password$")
	public void user_enters_username_and_password() throws InterruptedException 
	{
		Thread.sleep(2000);
		driver.findElement(By.id("inputEmail3")).sendKeys("admin");
		driver.findElement(By.id("inputPassword3")).sendKeys("jsmith");
		
		
	}

	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button() 
	{
	   driver.findElement(By.cssSelector(".btn-primary")).click();
		
	}

	
	@Then("^user select vendor from list$")
	public void user_select_vendor_from_list() throws InterruptedException 
	{
		Thread.sleep(2000);
		WebElement vendordrop=driver.findElement(By.xpath("//*[@id=\"content\"]/div/ng-view/div/div/div/div[1]/div[2]/form/div[2]/div/div/select"));
		
		Select drop=new Select(vendordrop);
		drop.selectByValue("0");
		
	}

	@Then("^user is on homepage$")
	public void user_is_on_homepage() throws InterruptedException 
	{
		driver.findElement(By.xpath("//body/div[@id='content']/div[1]/ng-view[1]/div[1]/div[1]/div[1]/div[1]/div[2]/form[1]/div[6]/div[1]/button[1]")).click();
		Thread.sleep(5000);
	}
	
	@Then("^user clicks on newinspection button$")
	public void user_clicks_on_newinspection_button() 
	{
	   driver.findElement(By.xpath("//body/div[@id='content']/div[1]/ng-view[1]/div[1]/div[1]/div[1]/div[1]/div[1]/ul[1]/li[2]/button[1]/span[1]/span[1]")).click();	
	}
	
	@Then("^user enters POdetail \"([^\"]*)\"$")
	public void user_enters_POdetail_POnumber(String num) throws InterruptedException 
	{
		Thread.sleep(3000);
	   driver.findElement(By.xpath("//thead/tr[1]/th[8]/input[1]")).sendKeys(num);
	   
	   Actions act=new Actions(driver);
		act.sendKeys(Keys.ENTER).build().perform();
		Thread.sleep(3000);
		
	}
	
	@Then("^user clicks on Inspectionnew$")
	public void user_clicks_on_Inspectionnew() 
	{
		driver.findElement(By.xpath("//tbody/tr[@id='ins_19361561']/td[1]/div[1]/button[1]/span[1]")).click();
	   driver.findElement(By.xpath("//body/div[@id='content']/div[1]/ng-view[1]/div[1]/div[1]/div[1]/div[1]/div[1]/ul[1]/li[1]/button[1]/span[1]/span[3]")).click();
	   
	}
	
	@Then("^user select instype from list$")
	public void user_select_instype_from_list() throws InterruptedException
	{
		WebElement insptype=driver.findElement(By.xpath("//select[@id='Select1']"));
		Select inspdrop=new Select(insptype);
		Thread.sleep(3000);
		inspdrop.selectByValue("6");
	}

	@Then("^user select status from list$")
	public void user_select_status_from_list() throws InterruptedException
	{
	   WebElement status= driver.findElement(By.xpath("//select[@id='Select2']"));
	   Select statusdrop=new Select(status);
		Thread.sleep(3000);
		statusdrop.selectByValue("8");
		
	}

	@Then("^user select inspector from list$")
	public void user_select_inspector_from_list() throws InterruptedException
	{
		 WebElement inspector= driver.findElement(By.xpath("//tbody/tr[2]/td[2]/div[1]/select[1]"));
		 Select inspectordrop=new Select(inspector);
			Thread.sleep(3000);
			inspectordrop.selectByValue("0");
		
	}
	@Then("^user enters inspection details \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	 public void user_enters_inspection_details_alerttext_and_qccomments_and_Comments(String text1, String text2,String text3) throws InterruptedException
	 {
		driver.findElement(By.xpath("//textarea[@id='Textarea1']")).sendKeys(text1);
		driver.findElement(By.xpath("//textarea[@id='Textarea2']")).sendKeys(text2);
		driver.findElement(By.xpath("//textarea[@id='Textarea3']")).sendKeys(text3);
		
		
		
	 }



	
	
	
	
	
	@Then("^close the browser$")
	public void close_the_browser()
	{
		driver.quit();
	}

	
	
	
}
