/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let row = 1;
    let coins = n;
    let completedRows = 0;
    while (coins >= row) {
        coins = coins - row
        row++
        completedRows++
    }
    return completedRows
};