#include <vector>
using namespace std;
class Solution
{
public:
    int minNumber(vector<int> &nums1, vector<int> &nums2)
    {
        vector<bool> arr1(10), arr2(10);
        int mini1 = 10, mini2 = 10;

        for (int i : nums1)
        {
            mini1 = min(mini1, i); // 找最小元素
            arr1[i] = true;        // 找有哪些元素，为了判断是否有相同元素
        }
        for (int j : nums2)
        {
            mini2 = min(mini2, j);
            arr2[j] = true;
        }
        for (int i = 0; i < 10; i++)
        {
            if (arr1[i] && arr2[i])
                return i; // 有相同元素，则返回第一个找到的（最小的）那个
        }

        return (mini1 < mini2) ? (10 * mini1 + mini2) : (10 * mini2 + mini1); // 没有相同元素，返回ab或ba
    }
};
