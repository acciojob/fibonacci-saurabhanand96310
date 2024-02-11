function fibonacci(num) {
// your code here
	let a=0,b=1,c;
	for(let i=1;i<=num;i++){
		c=a+b;
		a=b;
		b=c;
	}
	console.log(a);
	
	
}

module.exports = fibonacci;
