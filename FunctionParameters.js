function area_of_triangle(base, height) {
	
	var answer = 0.5 * base * height

	return answer
}

var result = area_of_triangle(10,20)
var answer = area_of_triangle(30,40)
var result2 = area_of_triangle(10,40)

print(result)
print(answer)	
print(result2)	

function print(answer){
	console.log("Area of triangle: " + answer)

}	