import org.python.util.PythonInterpreter;

import java.io.*;
import java.util.Properties;

public class PythonTest {


    public static void main(String[] args) throws IOException, InterruptedException {

        Properties props = new Properties();
        props.put("python.home","D:\\Program Files\\python2.7");
        props.put("python.console.encoding", "UTF-8"); // Used to prevent: console: Failed to install '': java.nio.charset.UnsupportedCharsetException: cp0.
        props.put("python.security.respectJavaAccessibility", "false"); //don't respect java accessibility, so that we can access protected members on subclasses
        props.put("python.import.site","false");

//        Properties preprops = System.getProperties();
        PythonInterpreter.initialize(props, props, new String[0]);
        PythonInterpreter interpreter = new PythonInterpreter();

        InputStream filepy = new FileInputStream("C:\\Users\\USER\\Desktop\\DbDemo.py");
        interpreter.execfile(filepy);  ///执行python py文件
        filepy.close();

//        Process process = Runtime.getRuntime().exec("python  C:\\Users\\USER\\Desktop\\DbDemo.py");
//        InputStream is = process.getInputStream();
//        BufferedReader reader = new BufferedReader(new InputStreamReader(is));
//        String line;
//        while((line = reader.readLine())!= null){
//            System.out.println(line);
//        }
//        process.waitFor();
//        is.close();
//        reader.close();
//        process.destroy();
    }
}
