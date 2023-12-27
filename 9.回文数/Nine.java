/**
 * Nine
 */
public class Nine {
    public static void main(String[] args) {
        System.out.println(isPalindrome(123));
    }

    public static boolean isPalindrome(int x) {
        char[] str = Integer.toString(x).toCharArray();
        char[] str1 = new char[str.length];
        for (int i = str.length - 1, j = 0; i >= 0; i--, j++) {
            str1[j] = str[i];
        }
        System.out.println(str);
        System.out.println(str1);
        for (int k = 0; k < str.length; k++) {
            if (str[k] != str1[k]) {
                return false;
            }
        }
        return true;
    }
}