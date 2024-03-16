function fibonacci(n) {
// your code here
	 let a = 0, b = 1;
    if (n === 1) return a;
	if (n === 2) return b;
    for (let i = 3; i <= n; i++) {
        let temp = b;
        b = a + b;
        a = temp;
    }
    return b;
	
}

module.exports = fibonacci;
