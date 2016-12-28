import java.io.BufferedWriter;
import java.io.FileWriter;
import java.util.Calendar;
import java.util.GregorianCalendar;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

/**
	@author Kristian.Sooklal


 **/
public class SeleniumTestTellCharleysSurveyUtility {
	private static final String BASE_URL = "http://tellcharleys.com";
	private static final String STORE_NUMBER = "00810";
	private static final GregorianCalendar CALENDAR = new GregorianCalendar();
	private static final int HOUR = 12, MINUTE = 12;
	private static final String PM = "PM";

	private static String FILE_NAME = "CharleysCouponCodeSUCCESS.txt";

	private WebDriver chromeDriver = null;

	{
		System.setProperty("webdriver.chrome.driver", "chromedriver.exe");
		chromeDriver = new ChromeDriver();
	}
	
	@Test
	public void goThroughSurvey() {
		try {
		chromeDriver.get(BASE_URL);

		Thread.sleep(2500);

		chromeDriver.findElement(By.id("ContentControl_fvSurvey_txtStoreNumber")).sendKeys(STORE_NUMBER);

		int month = CALENDAR.get(Calendar.MONTH) + 1;
		String monthString = (month < 10) ? "0" + month : month + "";

		int day = CALENDAR.get(Calendar.DAY_OF_MONTH);
		String dayString = (day < 10) ? "0" + day : "" + day;

		int year = CALENDAR.get(Calendar.YEAR);
		String yearString = year + "";

		String dateString = monthString + "/" + dayString + "/" + yearString;

		chromeDriver.findElement(By.id("ContentControl_fvSurvey_txtVisitDate")).sendKeys(dateString);

		chromeDriver.findElement(By.id("ContentControl_fvSurvey_ddlVisitTimeHH")).sendKeys("" + HOUR);

		chromeDriver.findElement(By.id("ContentControl_fvSurvey_ddlVisitTimeMM")).sendKeys("" + MINUTE);

		chromeDriver.findElement(By.id("ContentControl_fvSurvey_ddlVisitTimeAMPM")).sendKeys("" + PM);

		chromeDriver.findElement(By.id("ContentControl_fvSurvey_rblVisitType_1")).click();

		chromeDriver.findElement(By.id("ContentControl_fvSurvey_rblFirstVisit_1")).click();

		chromeDriver.findElement(By.id("ContentControl_fvSurvey_btnStart")).click();

		Thread.sleep(3000);

		chromeDriver.findElement(By.id("ContentControl_fvSection_gvQuestions_ctl02_rblQuestionResponse_1")).click();

		chromeDriver.findElement(By.id("ContentControl_fvSection_gvQuestions_ctl03_rblQuestionResponse_1")).click();

		chromeDriver.findElement(By.id("ContentControl_fvSection_btnContinue")).click();

		Thread.sleep(2500);

		chromeDriver.findElement(By.id("ContentControl_fvSection_gvQuestions_ctl02_rblQuestionResponse_1")).click();

		chromeDriver.findElement(By.id("ContentControl_fvSection_gvQuestions_ctl03_rblQuestionResponse_0")).click();

		chromeDriver.findElement(By.id("ContentControl_fvSection_btnContinue")).click();

		Thread.sleep(2500);

		chromeDriver.findElement(By.id("ContentControl_fvSection_gvQuestions_ctl02_rblQuestionResponse_0")).click();

		chromeDriver.findElement(By.id("ContentControl_fvSection_gvQuestions_ctl03_rblQuestionResponse_0")).click();

		chromeDriver.findElement(By.id("ContentControl_fvSection_gvQuestions_ctl04_rblQuestionResponse_0")).click();

		chromeDriver.findElement(By.id("ContentControl_fvSection_gvQuestions_ctl05_rblQuestionResponse_0")).click();

		chromeDriver.findElement(By.id("ContentControl_fvSection_gvQuestions_ctl06_rblQuestionResponse_0")).click();

		chromeDriver.findElement(By.id("ContentControl_fvSection_gvQuestions_ctl06_rblQuestionResponse_1")).click();

		chromeDriver.findElement(By.id("ContentControl_fvSection_btnContinue")).click();

		Thread.sleep(2500);

		chromeDriver.findElement(By.id("ContentControl_fvSection_gvQuestions_ctl02_rblQuestionResponse_1")).click();

		chromeDriver.findElement(By.id("ContentControl_fvSection_gvQuestions_ctl03_rblQuestionResponse_1")).click();

		chromeDriver.findElement(By.id("ContentControl_fvSection_gvQuestions_ctl04_rblQuestionResponse_1")).click();

		chromeDriver.findElement(By.id("ContentControl_fvSection_btnContinue")).click();

		Thread.sleep(2500);

		chromeDriver.findElement(By.id("ContentControl_fvSection_gvQuestions_ctl02_rblQuestionResponse_1")).click();

		chromeDriver.findElement(By.id("ContentControl_fvSection_gvQuestions_ctl03_rblQuestionResponse_1")).click();

		chromeDriver.findElement(By.id("ContentControl_fvSection_gvQuestions_ctl04_rblQuestionResponse_1")).click();

		chromeDriver.findElement(By.id("ContentControl_fvSection_gvQuestions_ctl05_rblQuestionResponse_1")).click();

		chromeDriver.findElement(By.id("ContentControl_fvSection_gvQuestions_ctl06_rblQuestionResponse_1")).click();

		chromeDriver.findElement(By.id("ContentControl_fvSection_btnContinue")).click();

		Thread.sleep(2500);

		chromeDriver.findElement(By.id("ContentControl_fvSection_gvQuestions_ctl02_rblQuestionResponse_1")).click();

		chromeDriver.findElement(By.id("ContentControl_fvSection_gvQuestions_ctl03_rblQuestionResponse_1")).click();

		chromeDriver.findElement(By.id("ContentControl_fvSection_btnContinue")).click();

		Thread.sleep(2500);

		chromeDriver.findElement(By.id("ContentControl_fvSection_gvQuestions_ctl02_rblQuestionResponse_1")).click();

		chromeDriver.findElement(By.id("ContentControl_fvSection_btnContinue")).click();

		Thread.sleep(2500);

		chromeDriver.findElement(By.id("ContentControl_fvSection_gvQuestions_ctl02_rblQuestionResponse_5")).click();

		chromeDriver.findElement(By.id("ContentControl_fvSection_btnContinue")).click();

		Thread.sleep(2500);
		chromeDriver.findElement(By.id("ContentControl_fvSection_btnContinue")).click();
		
		Thread.sleep(2500);
		chromeDriver.findElement(By.id("ContentControl_fvSection_btnContinue")).click();
		
		Thread.sleep(3000);

//		WebDriverWait wait = new WebDriverWait(chromeDriver, 1000);
//		WebElement element = wait.until(ExpectedConditions.presenceOfElementLocated(By.linkText("Make Transfer")));

		String coupon = chromeDriver.findElement(By.id("ContentControl_fvFinal_lblCouponCode")).getText();

		System.out.println("CHARLEY'S COUPON CODE: " + coupon);
		writeToFile(coupon);
		} catch(Exception e){
			e.printStackTrace();
			writeToFile(e.getMessage(), false);
		} finally {
			chromeDriver.close();
		}
	}

	public static void waitUntilElementVisible(WebDriverWait wait, String string) {
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.id(string)));
	}

	public static void pressDownArrowAndEnter(final WebDriver webDriver) {
		new Actions(webDriver).sendKeys(Keys.chord(Keys.ARROW_DOWN)).perform();
		new Actions(webDriver).sendKeys(Keys.chord(Keys.ENTER)).perform();
	}

	public static void pressDownArrow(final WebDriver webDriver) {
		new Actions(webDriver).sendKeys(Keys.chord(Keys.ARROW_DOWN)).perform();
	}
	
	private static boolean writeToFile(String code, boolean success){
		try {
			String fileName = FILE_NAME;
			String fileContent = "CHARLEY'S COUPON CODE: " + code;
			
			if (!success){
				fileName = "CHARLEYS_TEST_FAILURE.txt";
				fileContent = "Test Failed:\n" + code;
			}
			
			FileWriter fileWriter = new FileWriter(FILE_NAME);
			BufferedWriter bufferedWriter = new BufferedWriter(fileWriter);
			bufferedWriter.newLine();
			bufferedWriter.write(fileContent);
		
			bufferedWriter.close();
			fileWriter.close();
			return true;
		} catch(Exception ex) {
			System.out.println("Unable to insert Charley's Coupon code \"" + code + "\" to a file.");
			return false;
		}
	}

	private static boolean writeToFile(String code){
		return writeToFile(code, true);
	}
}