import java.util.*;

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

    public List<List<String>> groupAnagrams(String[] strs) {
        Map<String, List<String>> map = new HashMap<String, List<String>>();
        for (String str : strs) {
            int[] counts = new int[26];
            int length = str.length();
            for (int i = 0; i < length; i++) {
                counts[str.charAt(i) - 'a']++;
            }
            // 将每个出现次数大于 0 的字母和出现次数按顺序拼接成字符串，作为哈希表的键
            StringBuffer sb = new StringBuffer();
            for (int i = 0; i < 26; i++) {
                if (counts[i] != 0) {
                    sb.append((char) ('a' + i));
                    sb.append(counts[i]);
                }
            }
            String key = sb.toString();
            List<String> list = map.getOrDefault(key, new ArrayList<String>());
            list.add(str);
            map.put(key, list);
        }
        return new ArrayList<List<String>>(map.values());
    }
}