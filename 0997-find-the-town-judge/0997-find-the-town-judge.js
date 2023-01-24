/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    let people = {}
    let trusted = {}
    let judge = -1
    for (let i = 1; i <= n; i++) {
        people[i] = 0
        trusted[i] = 0
    }
    for (let person of trust) {
        people[person[0]]++
        trusted[person[1]]++
    }
    for (let key in people) {
        if (people[key] === 0) {
            if ((n - trusted[key]) === 1)
            judge = key
        }            
    }
    return judge
};