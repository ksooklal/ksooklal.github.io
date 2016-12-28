import org.junit.runner.JUnitCore;
import org.junit.runner.Result;
import org.junit.runner.notification.Failure;

public class TestRunner {
	public static void main(String[] args) {
		Result result = null;
	  
		try{ 
			result = JUnitCore.runClasses(SeleniumTestTellCharleysSurveyUtility.class);
		
			for (Failure failure : result.getFailures()) {
				System.out.println(failure.toString());
			}
		
		
		} catch (Exception e){
		
		} finally {
			System.out.println("TEST PASSED?: " + ((result != null && result.wasSuccessful()) ? "YES": "NO"));
		}
	}
}