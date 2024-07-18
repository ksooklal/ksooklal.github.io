import java.awt.event.KeyEvent;
import java.time.LocalDateTime;
import java.awt.*;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class USPSIPAddressDnsLookupAPI  {
    public static void main(String[] args) throws Exception{
        //TIP Press <shortcut actionId="ShowIntentionActions"/> with your caret at the highlighted text
        // to see how IntelliJ IDEA suggests fixing it.
        int x = (int) MouseInfo.getPointerInfo().getLocation().getX();
        int y = (int) MouseInfo.getPointerInfo().getLocation().getY();
        long time = 38;

        LocalDateTime start = LocalDateTime.now();
        while (start.plusMinutes(time).isAfter(LocalDateTime.now())) {
            Robot robot = new Robot();
            if (LocalDateTime.now().getMinute() % 2 == 0) {
                robot.keyPress(KeyEvent.VK_SPACE);
                robot.mouseMove(x + 3, y + 3);
                System.out.println("Moving +3 x and +3 y at time: " + LocalDateTime.now());
            } else {
                robot.keyPress(KeyEvent.VK_SPACE);
                robot.mouseMove(x - 3, y - 3);
                System.out.println("Moving -3 x and -3 y at time: " + LocalDateTime.now());
            }
            Thread.sleep(67900);
        }
    }
}