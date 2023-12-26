/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let ans = [] // 要返回出去的最终结果
    let len = nums.length
    nums.sort((a,b)=>a-b)
    if(len<3 || nums[0]>0) return ans
    for (let i = 0; i < nums.length; i++) {
        let L = i+1
        let R = len-1
        while(L<R){
            let sum = nums[i] + nums[L] + nums[R]
            if(nums[i] === nums[i-1]) break
            if(nums[L] === nums[L+1] && L+1 !== R && sum <= 0){
                L++
                continue
            }
            if(nums[R] === nums[R-1] && R-1 !== L && sum >= 0){
                R--
                continue
            }
            if(sum > 0) {R--}
            else if(sum<0) {L++}
            else if(sum === 0){
                ans.push([nums[i], nums[L], nums[R]])
                L++
                R--
            }
        }
    }
    return ans
};

console.log(threeSum([0,0,0,0]));