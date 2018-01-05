/**
 * 主线程和子线程轮流执行
 */
public class TraditionalThreadTest {
    public static void main(String[] args) {
        new TraditionalThreadTest().init();

    }

    public void init() {
        final Job job = new Job();
        new Thread(new Runnable() {
            @Override
            public void run() {
                for (int i = 0; i < 10; i++) {
                    job.sub();
                }
            }
        }).start();

        for (int i = 0; i < 10; i++) {
            job.main();
        }
    }


    class Job {
        private boolean flag = true;
        public synchronized void main() {
            if (!flag){
                try {
                    this.wait();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
            for (int i = 0; i < 10; i++) {
                System.out.println("main--------------------:i:" + i);
            }
            flag = false;
            this.notify();
        }

        public synchronized void sub() {
            if (flag){
                try {
                    this.wait();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
            for (int i = 0; i < 10; i++) {
                System.out.println("sub:i:" + i);
            }
            flag = true;
            this.notify();

        }
    }
}
