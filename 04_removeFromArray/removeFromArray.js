const removeFromArray = function(array, ...removeArgs) {
	const newArray = [];
	array.forEach((item) =>  {
		if (!removeArgs.includes(item)){
			newArray.push(item);
		}
	});
	return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
