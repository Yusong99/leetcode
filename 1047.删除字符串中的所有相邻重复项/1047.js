/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let arr1 = s.split('')
    let arr2 = []
    for(let i = 0; i< arr1.length; i++) {
        if(arr1[i] === arr2[arr2.length -1]){
            arr2.pop()
        }else{
            arr2.push(arr1[i])
        }
    }
    return arr2.join('')
};

console.log(removeDuplicates('abbaca'));