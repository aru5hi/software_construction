function reverse(str) {
	//INVARIANT : str and strrev are string variable s
	//PRE : strrev is an empty string before the processing
	let strrev='';
	for(let i of str){
		strrev=i+strrev;
	}
	//POST:strrev is the reverse of input string	
	return strrev;
}

var str="wqhfncuhj";
console.log(reverse(str));