for (let i = 1; i < 101; i++) {

    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log(`Number ${i} - FizzBuzz`);
    } else if (i % 3 == 0) {
        console.log(`Number ${i} - Fizz`);
    } else if (i % 5 == 0) {
        console.log(`Number ${i} - Buzz`);
    } else {
        console.log(`Number ${i}`);
    }

}