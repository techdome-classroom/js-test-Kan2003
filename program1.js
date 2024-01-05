/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = []; 
	const parenthesis = { 
		"(": ")", 
		"[": "]", 
		"{": "}", 
	}; 

	for (let char of s) { 
		if (parenthesis[char]) { 
			stack.push(char); 
		} else if ( 
			char === ")" || 
			char === "]" || 
			char === "}"
		) { 
			if ( 
				parenthesis[stack.pop()] !== 
				char 
			) { 
				return false; 
			} 
		} 
	} 

	return stack.length === 0;
};

module.exports = { isValid };


