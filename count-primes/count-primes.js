/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let array = []
    let primes = 0
    for (let i = 0; i < n; i++) {
        array[i] = true
    }
    
    for (let i = 2; i * i < n; i++ ) {
        if (array[i]) {
            for (let j = 2; j * i < n; j++) {
                array[i * j] = false
            }
        }
    }
        
    let k = 2
    while (k < array.length) {
        if (array[k]) {
            primes++
        }
        k++
    }
    return primes
};