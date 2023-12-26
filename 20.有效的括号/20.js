/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const arr1 = s.split('')
    const arr2 = []
    const len = arr1.length
    if (len <= 1) return false;
    for (let i = 0; i < len; i++) {
        if (arr1[arr1.length - 1] === '(') {
            if (arr2[arr2.length - 1] === ')') {
                arr1.pop()
                arr2.pop()
            } else {
                return false
            }
        }
        else if (arr1[arr1.length - 1] === '{') {
            if (arr2[arr2.length - 1] === '}') {
                arr1.pop()
                arr2.pop()
            } else {
                return false
            }
        }
        else if (arr1[arr1.length - 1] === '[') {
            if (arr2[arr2.length - 1] === ']') {
                arr1.pop()
                arr2.pop()
            } else {
                return false
            }
        }
        else if (arr1[arr1.length - 1] === ']') {
            arr2.push(arr1.pop())
        }
        else if (arr1[arr1.length - 1] === '}') {
            arr2.push(arr1.pop())
        }
        else if (arr1[arr1.length - 1] === ')') {
            arr2.push(arr1.pop())
        }
    }
    return arr2.length === 0
};

var isValid2 = function (s = '') {
    if (s.length % 2 !== 0) return false
    let len = s.length / 2
    for (let i = 0; i < len; i++) {
        s = s.replace('{}', '').replace('[]', '').replace('()', '')
    }
    return s.length === 0
}
console.log(isValid2('{[]}{}'));