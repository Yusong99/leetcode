public class Solution2399 {
    public static void main(String[] args) {
        String s = "abaccb";
        int[] distance = {1,3,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0};
        System.out.println(checkDistances(s,distance));
    }

    public static Boolean checkDistances(String s, int[] distance) {
        int num1 = 0;
        int num2 = 0;
        Boolean flag = true;
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == 'a' && flag){
                num1 = i;
                flag = false;
            }else if (s.charAt(i) == 'a' && !flag){
                num2 = i;
            }
        }
        if (distance[0] == (num2 - num1 -1)){
            return true;
        }
        return false;
    }
}
