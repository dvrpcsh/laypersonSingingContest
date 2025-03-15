import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Scanner;
import java.util.StringTokenizer;

public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int a = Integer.parseInt(st.nextToken());
        st = new StringTokenizer(br.readLine());
        int b[] = new int[a];
        int sum = 0;

        for(int i=0; i<a; i++) {
            b[i] = Integer.parseInt(st.nextToken());
        }

        st = new StringTokenizer(br.readLine());
        int c = Integer.parseInt(st.nextToken());

        for(int i=0; i<a; i++) {
            if(b[i] == c) {
                sum++;
            }
        }

        System.out.print(sum);
    }
}
