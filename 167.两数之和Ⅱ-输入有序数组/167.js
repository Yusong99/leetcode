/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let right = numbers.length - 1
    let left = 0
    while(left < right) {
        let sum = numbers[left] + numbers[right]
        if(sum<target){
            left++
        }else if(sum>target){
            right--
        }else{
            return [left+1, right+1]
        }
    }
};

console.log(twoSum([2,3,4], 6));