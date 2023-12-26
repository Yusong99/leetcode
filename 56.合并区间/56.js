/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    let res = []
    let prev = intervals[0]
    if (intervals.length === 1) return intervals
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] <= prev[1]) {
            prev[1] = Math.max(intervals[i][1], prev[1])
        } else {
            res.push([...prev])
            prev = intervals[i]
        }
    }
    res.push([...prev])
    return res
};

console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]));