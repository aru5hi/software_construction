const assert=require("assert");
// var standard_input = process.stdin;
// standard_input.setEncoding('utf-8');
class student{
	name="";
	score=[];
	constructor(user_name){
		this.name=user_name;
	}
	add_score(x){
		// assert(this.score.length>5,"You have entered marks for all the subjects");
		assert(x>=0 && x<=50, "marks out of range");
		this.score.push(x);
	}
	total(){
		let sum=0;
		for(var i=0;i<5;i++){
			sum=sum+Number(this.score[i]);}
		assert(sum>=0, "Invalid score");
		console.log("Total score:"+sum);
	}
	display_score(){
		console.log("your scores: "+this.score);
	}
}


var student_1=new student("Arushi")
console.log("Welcome "+student_1.name+"!");
student_1.add_score(40);
student_1.add_score(50);
student_1.add_score(1);
student_1.add_score(29);
student_1.add_score(30);
student_1.display_score();
student_1.total();
