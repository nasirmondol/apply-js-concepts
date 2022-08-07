function isLeapYear(year){
    if(year % 4 == 0){
        return true;
    }
    else{
        return false;
    }
}

// const myYear = 2100;
// const myYearLeapYear = isLeapYear(myYear);
// console.log(myYearLeapYear);

// const yourYear = 2100;
// const yourYearLeapYear = isLeapYear(yourYear);
// console.log(yourYearLeapYear);

function leapYear3(year) {
    if ((year % 4 == 0) && (year % 100 != 0)) {
      console.log('TRUE');
    } 
    else if (year % 400 == 0) {
      console.log('TRUE');
    } 
    else {
      console.log('FALSE');
    }
  }

  const myYear = 2100;
  const isYearLeapYear = leapYear3(myYear);
//   console.log(isYearLeapYear);

