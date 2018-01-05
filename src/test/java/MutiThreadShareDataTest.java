public class MutiThreadShareDataTest {
    public static void main(String[] args) {
        JobThread jobThread = new JobThread();
        new Thread(jobThread).start();
        new Thread(jobThread).start();
    }

}
class JobThread implements Runnable{
    private int i = 100;
    @Override
    public void run() {
        while (i > 0){
            i--;
            System.out.println(Thread.currentThread().getName() + "剩下：" + i);
        }
        System.out.println("end");
    }
}
