/**
 * One
 */
public class One {

    public static void main(String[] args) {
    }

    public int[] twoSum(int[] nums, int target) {
        for (int i = 0; i < nums.length; i++) {
            // 这里j不需要设置nums.length-1因为这是索引的范围不会空指针
            for (int j = i + 1; j < nums.length; j++) {
                if ((nums[i] + nums[j]) == target) {
                    int[] res = new int[] { i, j };
                    return res;
                }
            }
        }
        return null;
    }
}