class Triangle{
	constructor(base, height){
		this.base = base;
		this.height = height;
	}
	calcArea(){
		return 0.5 * (this.height * this.base);
	}
}
const triangle = new Triangle (50,60);
console.log(triangle.calcArea());