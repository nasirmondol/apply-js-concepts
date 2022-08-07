function isEven(number){
    if(number %2 == 0){
        return true;
    }
    return false;
}

const myNumber = 1451;
const isMyNumberEven = isEven(myNumber);
// console.log(isMyNumberEven);

function isOdd(number2){
    if(number2 % 2 != 0){
        return true
    }
    return false;
}

const herNumber = 46;
const isHerNumberOdd = isOdd(herNumber);
console.log(isHerNumberOdd);