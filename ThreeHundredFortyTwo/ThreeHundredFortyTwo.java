public class ThreeHundredFortyTwo {
    public static boolean isPowerOfFour(int n) {
        if (n == 1 ) return true;
        if (n % 4 != 0) {return false;}
        while ( n > 0 ) {
            n /= 4;
            if (n % 4 != 0 && n != 1) {return false;}
            if (n == 1 ) return true;
        }
        return false;
    }

    public static void main(String[] args) {
        System.out.println(isPowerOfFour(20));
    }
}
