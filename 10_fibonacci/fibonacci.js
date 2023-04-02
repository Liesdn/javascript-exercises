const fibonacci = function(n) {
	let a = 0;
	let b = 1;
	if(n < 0) return 'OOPS';
	if(n === 0) return 0;
	for (let i = 1; i < n; i++){
		let temp = b;
		b = b + a;
		a = temp;
	}
	return b;
};

// Do not edit below this line
module.exports = fibonacci;
