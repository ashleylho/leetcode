/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    var total = 0;
    for (var i = 0; i < accounts.length; i++) {
        var subtotal = 0
        for (var j = 0; j < accounts[i].length; j++) { 
            subtotal += accounts[i][j];
            if (subtotal > total) {
                total = subtotal;
            }
        }
    }
    return total;
};