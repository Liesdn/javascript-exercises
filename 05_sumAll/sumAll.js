const sumAll = function(a, b) {
	let total = 0;
	if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) return 'ERROR';
	if (a > b){
		let temp = a;
		a = b;
		b = temp;
	}
	for (let i = a; i <= b; i++){
		total += i;
	}
	return total;
};

// Do not edit below this line
module.exports = sumAll;
