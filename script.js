function fibonacci(n) {
// your code here
	if (n == 0 || n == 1) {
        return n;
    }
    // Element 1
    let element1 = 0;
    // Element 2
    let element2 = 1;
    // Move the 2 elements window till one index before the nth.
    for (let i = 2; i < n; i++) {
        // Move the 2 elements window forward.
        let temp = element2;
        element2 = element1 + element2;
        element1 = temp;
    }
    // Return the nth Fibonacci by summing Fibonacci n-1 and n-2
    return element1 + element2;
	
	
}

module.exports = fibonacci;
