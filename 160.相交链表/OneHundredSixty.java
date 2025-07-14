import java.util.ArrayList;

public class OneHundredSixty {
    public static void main(String[] args) {

    }

    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        ArrayList<Integer> listA = new ArrayList<>();
        while (headA != null) {
            listA.add(headA.val);
            headA = headA.next;
        }
        while (headB != null) {
            for (int i = 0; i < listA.size(); i++) {
                if (headB.val == listA.get(i)) {return headB;}
            }
            headB = headB.next;
        }
        return null;
    }
    public static class ListNode {
        int val;
        ListNode next;
        ListNode(int x) {
            val = x;
            next = null;
        }
    }
}