function getFactorial(number){
    let factorial = 1;
    for(let i = 1; i <= number; i++){
        factorial = factorial * i;
    }
    return factorial;

}

let fact = 8;
let factCalculate = getFactorial(fact);
console.log(factCalculate)

let fact2 = 15;
let factView = getFactorial(fact2);
console.log(factView);