function fibonacci(n) {
// your code here
	 let a = 0, b = 1;
    if (n === 0) return a;
    for (let i = 2; i <= n; i++) {
        let temp = b;
        b = a + b;
        a = temp;
    }
    return b;
	
}

module.exports = fibonacci;
