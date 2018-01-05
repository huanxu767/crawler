import java.util.Random;

public class ThreadLocalTest {
    private static ThreadLocal<Integer> x = new ThreadLocal();

    public static void main(String[] args) {
        for (int i = 0; i < 2; i++) {
            new Thread(new Runnable() {
                @Override
                public void run() {
                    int data = new Random().nextInt();
                    System.out.println(Thread.currentThread().getName() + ":" + data);
                    MyThreadScopeData.getInstance().setName(data + "");
                    MyThreadScopeData.getInstance().setAge(data);
                    new A().get();
                    new B().get();

                }
            }).start();
        }
    }

    static class A {
        public void get() {
            System.out.println(Thread.currentThread().getName() + ":" + MyThreadScopeData.getInstance().getName() + " " + MyThreadScopeData.getInstance().getAge());
        }
    }

    static class B {
        public void get() {
            System.out.println(Thread.currentThread().getName() + ":" + MyThreadScopeData.getInstance().getName() + " " + MyThreadScopeData.getInstance().getAge());
        }
    }
}

class MyThreadScopeData {
    private String name;
    private int age;
    private static ThreadLocal<MyThreadScopeData> map = new ThreadLocal<>();

    private MyThreadScopeData() {
    }

    public static MyThreadScopeData getInstance() {
        MyThreadScopeData instance = map.get();
        if (instance == null) {
            instance = new MyThreadScopeData();
            map.set(instance);
        }
        return instance;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }
}

