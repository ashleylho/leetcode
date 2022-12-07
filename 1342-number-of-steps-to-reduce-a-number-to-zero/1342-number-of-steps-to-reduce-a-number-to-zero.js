/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    var steps = 0;
    var number = num
    while (number > 0) {
        if (number % 2 === 0) {
            number = number/2
            steps++
        } else {
            number -= 1
            steps++
        }
    }
    return steps
};