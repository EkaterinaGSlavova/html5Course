function FizzBuzz() {
	for (var i=0; i<101; i++) {
		if (i%3) {
			console.log("Fizz");
		}
		if (i%5) {
			console.log("Buzz");
		}
		if (i%3 && i%5) {
			console.log("FizzBuzz");
		}
	}
}