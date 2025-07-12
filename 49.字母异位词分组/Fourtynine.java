import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;

public class Fourtynine {
    public static void main(String[] strs) {
        strs = new String[]{"eat", "tea", "tan", "ate", "nat", "bat"};
        List<List<String>> result = new ArrayList<>();
        String[] nums1 = new String[strs.length];
        for (int i = 0; i < nums1.length; i++) {
            char[] chars = strs[i].toCharArray();
            Arrays.sort(chars);
            nums1[i] = new String(chars);
        }
        for (int i = 0; i < nums1.length; i++) {
            if (strs[i] != null) {
                List<String> temp = new ArrayList<>();
                temp.add(strs[i]);
                for (int j = i+1; j < nums1.length; j++){
                    if (Objects.equals(nums1[i], nums1[j])) {
                        temp.add(strs[j]);
                        strs[j] = null;
                    }
                }
                result.add(temp);
            }
        }
        System.out.println(result);
    }
}