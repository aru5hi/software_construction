const assert=require("assert");

class calories{
	calorie;fat;fibre;
	constructor(input_calorie,input_fat,input_fibre){
		this.calorie=input_calorie;
		this.fat=input_fat;
		this.fibre=input_fibre;
	}
	adjust_calories(){
		let ad_cal=(this.calorie/50)+(this.fat/12)*(this.fibre/5);
		assert(ad_cal>0,"INVALID INPUT");
		console.log("your calorie count:",ad_cal);
	}
}

var x= new calories(90,20,11);
x.adjust_calories();