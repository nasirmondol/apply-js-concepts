function inchestoFeet(inches){
    var feet = inches/12;
    return feet;
}


var myInches = 144;
var feet = inchestoFeet(myInches);
// console.log(feet);

var dadiInches = 156;
var feet = inchestoFeet(dadiInches);
// console.log(feet);

var naniInches = 168;
var feet = inchestoFeet(naniInches);
// console.log(feet)

var nanaInChes = 180;
var feet = inchestoFeet(nanaInChes);
// console.log(feet);

function mileTokilometer(miles){
    var kilo = miles * 1.60934;
    return kilo;
}

var myMiles = 10;
var kilo = mileTokilometer(myMiles);
console.log(kilo)