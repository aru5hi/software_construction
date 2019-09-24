var assert=require("assert");

function sum(arr){
	
	let sum1=0;
	for(let i=0;i<arr.length; i++){
	assert(arr[i]>0,"invalid array element");
	sum1=sum1+arr[i];
	}
	assert(sum1>0,"error");
	return sum1;
}
let arr=[19,2,3];
console.log(sum(arr));