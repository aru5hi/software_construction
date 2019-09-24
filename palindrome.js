var assert = require("assert");

function palindrome(str) {
	//INVARIANT : 1. str and strrev are string variables; 2. Returned entity of this function is always boollean.
	str.toLowerCase();
	//PRE : strrev is an empty string before the processing 
	let strrev="";
	for( i of str){
		strrev=strrev+i;
	}
	//POST:strrev is the reverse of input string
	if(str===strrev){
		return true;
	}
	else
	return false;
}
var str="Abcdefedcba";
console.log("palindrome:",palindrome(str));