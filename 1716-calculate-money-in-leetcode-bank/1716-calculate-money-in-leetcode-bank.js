/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    let total = 0
    let deposit = 1
    let week = 0
    for (var i = 0; i < n; i++) {
        if (i % 7 === 0 || i === 0) {
            week += 1
            deposit = week
        } else {
            deposit += 1
        }
        total += deposit
    }
    return total
};