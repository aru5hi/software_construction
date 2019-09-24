const assert= require("assert");

class score{
score=[];
	add_scores(score1,score2,score3){
		if(score1<0 || score1>50 || score2<0 || score2>50 || score3<0 || score3>50)
			throw new Error("rangeException");
		this.score.push(score1);
		this.score.push(score2);
		this.score.push(score3);
	}
	getResult(){
		let avg_score=0;
		for(let i of this.score){
			avg_score=avg_score+i;
		}
		avg_score=avg_score/3;
		assert(avg_score>=0 && avg_score<=100,"Scores invalid");
		 console.log("Your grade is:");
		if(avg_score>=80) console.log("A");
		else if(avg_score<=79 && avg_score>=65) console.log("B");
		else if(avg_score<=64 && avg_score>=50) console.log("C");
		else if(avg_score<=49 && avg_score>=40) console.log("D");
		else if(avg_score<=39 && avg_score>=0) console.log("E");


	}
}

let student_marks=new score();

try{
	student_marks.add_scores(45,55,50);
	student_marks.getResult();
}
catch(error){
	console.log("You have an "+" "+error);
}
