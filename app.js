// chapter  Date Methods (31 to 34)
// 1
var rightNow =  Date();
console.log(rightNow);

//q2
var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
var today = new Date().getMonth();
var currentMonth = monthNames[today];
alert(currentMonth);


//q3
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var day = new Date().getDay();
alert(days[day].slice(0, 3));

//q4
var date = new Date();
var day = date.getDay();
if (day === 0 || day === 6) {
  alert("Its Fun day");
}

//q5
var today = new Date();
var dayOfMonth = today.getDate();
if (dayOfMonth < 16) {
  alert("First fifteen days of the month");
} else {
  alert("Last days of the month");
}

//q6
document.write("<h1>Q6</h1>")
var currentDate = new Date();
var millisecondsSince1970 = currentDate.getTime();
var minutesSinceMidnight1970 = millisecondsSince1970 / (60000);
document.write("<br>Current date:- "+currentDate + "<br>Milliseconds Since 1970:- " + millisecondsSince1970 + "<br>Minutes Since Midnight 1970:- " + minutesSinceMidnight1970 );

//q7
var now = new Date().getHours();
if (now < 12) {
  alert("It's AM");
} else {
  alert("It's PM");
}

//q8
var laterDate = new Date(2020, 11, 31);
alert(laterDate);

//q9
var ramadanStart = new Date(2015, 5, 18); 
var now = new Date();
var diffMilliseconds = now - ramadanStart;
var diffDays = Math.floor(diffMilliseconds / 86400000); // 86400000 milliseconds = 1 day
alert("Number of days past since 1st Ramadan 2015:"+diffDays);

//q10
document.write("<h1>Q10</h1>")
var beginningOf2015 = new Date(2015, 0, 1); 
var currentDate = new Date();
var timeDifference = currentDate.getTime() - beginningOf2015.getTime(); 
var secondsElapsedSince2015 = Math.floor(timeDifference / 1000);
document.write("On reference date:- " + currentDate +" ", secondsElapsedSince2015 + "seconds has been passed since since the beginning of 2015");

//q11
document.write("<h1>Q11</h1>")
var currentDate0 = new Date();
var currentDate1 = new Date();
var currentHour = currentDate1.getHours();
currentDate1.setHours(currentHour + 1);
document.write("Current Date:- ",currentDate0+"1hour ago it was: " + currentDate1);

//q12
var currentDate = new Date();
currentDate.setFullYear(currentDate.getFullYear() - 100);
alert("Date 100 years back: " + currentDate);

//q13
document.write("<h1>Q13</h1>")
var age = +prompt("Please enter your age:");
var currentYear = new Date().getFullYear();
var birthYear = currentYear - age;
document.write("Your birth year is: " + birthYear);

//q14
var customerName = prompt("Enter your name:");
var currentMonth = prompt("Enter the current month:");
var numberOfUnits = +(prompt("Enter the number of units consumed:"));
var chargesPerUnit = +(prompt("Enter the charges per unit:"));
var latePaymentSurchargeRate = +(prompt("Enter the late payment surcharge rate:"));

var netAmountPayable = numberOfUnits * chargesPerUnit;
netAmountPayable = Math.round(netAmountPayable * 100) / 100; 
var latePaymentSurcharge = (netAmountPayable * latePaymentSurchargeRate) / 100;
latePaymentSurcharge = Math.round(latePaymentSurcharge * 100) / 100; 
var grossAmountPayable = netAmountPayable + latePaymentSurcharge;
grossAmountPayable = Math.round(grossAmountPayable * 100) / 100; 

document.write("<h1>Q14</h1>")
document.write("<h2>K-Electric Bill</h2>");
document.write("<p>Customer Name: " + customerName + "</p>");
document.write("<p>Current Month: " + currentMonth + "</p>");
document.write("<p>Number of Units: " + numberOfUnits + "</p>");
document.write("<p>Charges per Unit: " + chargesPerUnit.toFixed(2) + "</p>");
document.write("<p>Net Amount Payable (within Due Date): " + netAmountPayable.toFixed(2) + "</p>");
document.write("<p>Late Payment Surcharge: " + latePaymentSurcharge.toFixed(2) + "</p>");
document.write("<p>Gross Amount Payable (after Due Date): " + grossAmountPayable.toFixed(2) + "</p>");


//ch 31-34
//q1
document.write("<h1>chapter 35-38</h1>")
document.write("<h1>Q1</h1>")
var currentDate = new Date();
document.write(currentDate)   

//q2
document.write("<h1>Q2</h1>")
function fullName() {  
  var firstName = prompt("Enter first name");

  var lastname = prompt("Enter last name");

  document.write(firstName + ' ' + lastname);

 
}
fullName()  

//q3
document.write("<h1>Q3</h1>")
function sum() {  

  var num1 = +prompt("Enter num1");

  var num2 = +prompt("Enter num2");

  document.write(num1 + num2);

 
}

sum() 

//q4
document.write("<h1>Q4</h1>")
document.write("<h2>Calculator</h2>")
var num1 = +(prompt("Enter the first number:"));
var num2 = +(prompt("Enter the second number:"));
var operator = prompt("Enter the operator (+, -, *, /):");

function calculator(num1, num2, operator) {
  var result;
  switch(operator) {
      case '+':
          result = num1 + num2;
          break;
      case '-':
          result =num1 - num2;
     break;
      case '*':
          result = num1 * num2;
          break;
      case '/':
          if (num2 !== 0) {
              result = num1 / num2;
          } else {
              result = "Error: Division by zero";
          }
          break;
      default:
         result = "Error: Invalid operator";
  }
  return result
}
var result = calculator(num1, num2, operator);
document.write("Result: " + result);


//q5
document.write("<h1>Q5</h1>")
function square() {  

  var num3 = +prompt("Enter a number for square");

  var square1 = num3*num3

  document.write(square1);

 
}
square()

//q6
document.write("<h1>Q6</h1>")
var number = +(prompt("Enter a number to calculate its factorial:"));
var result = factorial(number);

function factorial(n) {
  if (n === 0 || n === 1) {
      return 1;
  } else {
      return n * factorial(n - 1);
  }
}
document.write("Factorial of " + number + " is: " + result);

//q7
document.write("<h1>Q7</h1>")
var startNum = +(prompt("Enter the starting number:"));
var endNum = +(prompt("Enter the ending number:"));

function displayCounting(start, end) {
  if (start <= end) {
      for (var i = start; i <= end; i++) {
          document.write(i + "<br>");
      }
  } else {
      for (var i = start; i >= end; i--) {
          document.write(i + "<br>");
      }
  }
}
displayCounting(startNum, endNum);


//q8
document.write("<h1>Q8</h1>")
var base = +(prompt("Enter the base of the right triangle:"));
var perpendicular = +(prompt("Enter the perpendicular of the right triangle:"));

function calculateHypotenuse(base, perpendicular) {
  function calculateSquare(x) {
      return x * x;
  }
  
  var baseSquare = calculateSquare(base);
  var perpendicularSquare = calculateSquare(perpendicular);
  var hypotenuseSquare = baseSquare + perpendicularSquare;
  var hypotenuse = Math.sqrt(hypotenuseSquare);
  
  return hypotenuse;
}
var result = calculateHypotenuse(base, perpendicular);
document.write("Hypotenuse of the right triangle is: " + result.toFixed(2));

//q9
document.write("<h1>Q9</h1>")

function calculateArea1(width, height) {
  return width * height;
}

function calculateArea2() {
  var width = arguments[0];
  var height = arguments[1];
  return width * height;
}

var width1 = +prompt("Enter width 1");
var height1 = +prompt("Enter height 1");
var area1 = calculateArea1(width1, height1);
document.write("Area calculated with arguments as values: " + area1 + "<br>");


var width2 = prompt("Enter width 2");
var height2 = prompt("Enter height 1");
var area2 = calculateArea2(width2, height2);
document.write("Area calculated with arguments as variables: " + area2);


//q10
document.write("<h1>Q10</h1>")
var word = prompt("Enter a word....");
var update = "";

for (var i = word.length - 1; i >= 0; i--) {
  update += word[i];
}

if (word === update) {
  document.write("it is a plaindrome word..");
} else {
  document.write("it is not a plaindrome word..");
}

//q11
document.write("<h1>Q11</h1>")
function capitalizeFirstLetter(str) {
  
  var words = str.split(" ");
  
  for (var i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  

  return words.join(" ");
}

var inputString = 'the quick brown fox';
var outputString = capitalizeFirstLetter(inputString);
document.write("Original string: " + inputString + "<br>");
document.write("Converted string: " + outputString);

//q12
document.write("<h1>Q12</h1>")
function findLongestWord(str) {
  var words = str.split(" ");
  

  var longestWord = "";
  var maxLength = 0;
  
  for (var i = 0; i < words.length; i++) {
      if (words[i].length > maxLength) {
          maxLength = words[i].length;
          longestWord = words[i];
      }
  }
  
  // Return the longest word
  return longestWord;
}

var inputString = 'Web Development Tutorial';
var longestWord = findLongestWord(inputString);
document.write("Longest word in the string '" + inputString + "' is: " + longestWord);

//q13
document.write("<h1>Q13</h1>")
function countOccurrences(str, letter) {
  
  str = str.toLowerCase();
  letter = letter.toLowerCase();

  var count = 0;
  
  for (var i = 0; i < str.length; i++) {
    
      if (str[i] === letter) {
          count++;
      }
  }
  return count;
}

var inputString = 'JSResourceS.com';
var letterToCount = 'o';
var occurrences = countOccurrences(inputString, letterToCount);
document.write("Number of occurrences of '" + letterToCount + "' in '" + inputString + "': " + occurrences);

//q14
document.write("<h1>Q14</h1>")
var radius = +(prompt("Enter the radius of the circle:"));

function calcCircumference(radius) {
  var circumference = 2 * Math.PI * radius;
  document.write("The circumference is " + circumference.toFixed(2) + "<br>");
}

function calcArea(radius) {
  var area = Math.PI * radius * radius;
  document.write("The area is " + area.toFixed(2));
}

calcCircumference(radius);

calcArea(radius);

//ch 38-40
//q1
document.write("<h1>ch 38-40</h1>")
document.write("<h1>Q1</h1>")
function power(a, b) {
  return Math.pow(a, b);
}

// Example usage:
document.write(power(2, 3));


//q2
document.write("<h1>Q2</h1>")

function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      return true;
  } else {
      return false;
  }
}

function checkLeapYear() {
  var year = +prompt("Enter a year:");
      if (isLeapYear(year)) {
          document.write(year + " is a leap year.");
      } 
      else {
          document.write(year + " is not a leap year.");
      }
    }

checkLeapYear();

//q3
document.write("<h1>Q3</h1>")
var a = +prompt("Enter the value of side A")
var b = +prompt("Enter the value of side B")
var c = +prompt("Enter the value of side C")
function calculateSemiPerimeter(a, b, c) {
  return (a + b + c) / 2;
}

function calculateTriangleArea(a, b, c) {
  var S = calculateSemiPerimeter(a, b, c);
  var area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
  return area;
}
var area = calculateTriangleArea(a, b, c);
document.write("Area of the triangle:", area)

//q4
document.write("<h1>Q4</h1>")
var subject1 =+prompt("Enter the marks of subject1")
var subject2 =+prompt("Enter the marks of subject2")
var subject3 =+prompt("Enter the marks of subject3")

function calculateAverage(subject1, subject2, subject3) {
  return (subject1 + subject2 + subject3) / 3;
}


function calculatePercentage(subject1, subject2, subject3) {
  var totalMarks = subject1 + subject2 + subject3;
  var totalSubjects = 3;
  return (totalMarks / (totalSubjects * 100)) * 100;
}


function mainFunction() {

  var average = calculateAverage(subject1, subject2, subject3);
  var percentage = calculatePercentage(subject1, subject2, subject3);

  document.write("Average marks:", average+"<br>");
  document.write("Percentage:", percentage + "%");
}

mainFunction();

//Q5
document.write("<h1>Q5</h1>")
function customIndexOf(word, char) {
  for (var i = 0; i < word.length; i++) {
      if (word[i] === char) {
          return i;
      }
  }
  return -1; 
}

function findIndex() {
  var word = prompt("Enter a word:");
  var char = prompt("Enter a character to find:");

  if (word && char) {
      var index = customIndexOf(word, char);
      if (index !== -1) {
          document.write("Index of '" + char + "' in '" + word + "':", index);
      } else {
          document.write("'" + char + "' not found in '" + word + "'");
      }
  } else {
      document.write("Please enter both word and character.");
  }
}

findIndex();

//q6
document.write("<h1>Q6</h1>")

function deleteVowels(sentence) {
  var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  var result = '';

  for (var i = 0; i < sentence.length; i++) {
      if (!vowels.includes(sentence[i])) {
          result += sentence[i];
      }
  }

  return result;
}

var userInput = prompt("Enter a sentence (not more than 25 characters long):");

if (userInput.length <= 25) {
  var result = deleteVowels(userInput);
  document.write("Sentence after removing vowels:", result);
} else {
  document.write("Please enter a sentence not more than 25 characters long.");
}

//q7
document.write("<h1>Q7</h1>")

function countSuccessiveVowels(text) {
  var count = 0;
  var vowels = "aeiouAEIOU";

  for (var i = 0; i < text.length - 1; i++) {
      var char1 = text[i];
      var char2 = text[i + 1];
      if (vowels.includes(char1) && vowels.includes(char2)) {
          count++;
          switch (char1 + char2) {
              case 'ea':
              case 'ea':
              case 'ui':
                  document.write("Found:", char1 + char2);
                  break;
              default:
                  break;
          }
      }
  }

  return count;
}

var userInput = prompt("Enter a sentence:");
var occurrences = countSuccessiveVowels(userInput);
document.write(userInput+"<br>Occurrences of any two vowels in succession:", occurrences);

//q8
document.write("<h1>Q8</h1>")
function convertToMeters(distance) {
  return distance * 1000;
}

function convertToFeet(distance) {
  return distance * 3280.84;
}

function convertToInches(distance) {
  return distance * 39370.1;
}

function convertToCentimeters(distance) {
  return distance * 100000;
}


var distanceKm = parseFloat(prompt("Enter distance between two cities (in km):"));

var distanceMeters = convertToMeters(distanceKm);
document.write("Distance in meters:", distanceMeters);

var distanceFeet = convertToFeet(distanceKm);
document.write("Distance in feet:", distanceFeet);

var distanceInches = convertToInches(distanceKm);
document.write("Distance in inches:", distanceInches);

var distanceCentimeters = convertToCentimeters(distanceKm);
document.write("Distance in centimeters:", distanceCentimeters);


//q9
document.write("<h1>Q9</h1>")

var hoursWorked = +prompt("Enter the number of hours worked:");

var hoursWorkedNum = +(hoursWorked);

if (hoursWorkedNum > 40) {
  var overtimeHours = hoursWorkedNum - 40;
  var overtimePay = overtimeHours * 12;
  document.write("Your overtime pay is: " + overtimePay);
} else {
  document.write("You did not work any overtime hours.");
}

//q10
document.write("<h1>Q10</h1>")


function calculateNotes(amount) {
  var denominations = [100, 50, 10];
  var remainingAmount = amount;
  var notes = {
    100: 0,
    50: 0,
    10: 0
  };

  for (var i = 0; i < denominations.length; i++) {
    var denomination = denominations[i];
    if (remainingAmount >= denomination) {
      notes[denomination] = Math.floor(remainingAmount / denomination);
      remainingAmount %= denomination;
    }
  }

  return notes;
}
var amount=+(prompt("Enter the amount to be withdrawn:"));
var notes = calculateNotes(amount);
document.write(`You will have ${notes[100]} hundred notes, ${notes[50]} fifty notes, and ${notes[10]} ten notes.`);



//Chapter 31 - 34 (Date &amp; Time)
document.write("<h1>Chapter 31 - 34 (Date &amp; Time)</h1>")
//q1
document.write("<h1>Q1</h1>")
var dObj = new Date();
document.write(dObj)

//q2
document.write("<h1>Q2</h1>")
var dStr = new Date().toString();
document.write(dStr)

//q3
document.write("<h1>Q3</h1>")
var d = new Date();
var dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][d.getDay()];
document.write("Today is " + dayOfWeek) 


//q4
document.write("<h1>Q4</h1>")
var d = new Date();
var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var currentDayIndex = d.getDay();

document.write("The current day is " + dayNames[currentDayIndex] + " (index " + currentDayIndex + ")<br>");

//q5
document.write("<h1>Q5</h1>")
var now = new Date();

var year = now.getFullYear();
var month = now.getMonth() + 1; 
var date = now.getDate();
var day = now.getDay();
var hours = now.getHours();
var minutes = now.getMinutes();
var seconds = now.getSeconds();
var milliseconds = now.getMilliseconds();

document.write("Current Date and Time: " + year + "-" + month + "-" + date + " (Day: " + day + "), " + hours + ":" + minutes + ":" + seconds + "." + milliseconds) 

//q6
document.write("<h1>Q6</h1>")

var later = new Date(2020, 11, 0);
document.write(later);

//q7
document.write("<h1>Q7</h1>")
var dateObject = new Date(1992, 1, 2);
document.write("Date: " + dateObject.toDateString())

//q8
document.write("<h1>Q8</h1>")
document.write(Date.UTC(1980, 0, 1));

//q9
document.write("<h1>Q9</h1>")
var date = new Date();
date.setFullYear(2023);
document.write(date);

//q10
document.write("<h1>Q10</h1>")
function changeMonthToJanuary(inputDate) {
  var newDate = new Date(inputDate);
  newDate.setMonth(0);
  return newDate;
}

var inputDate = new Date(2024, 7, 1); 
var resultDate = changeMonthToJanuary(inputDate);
document.write("Date with the month changed to January: " + resultDate);

//q11
document.write("<h1>Q11</h1>")
function changeDayOfWeek(date, newDayOfWeek) {
  var currentDayOfWeek = date.getDay();
  var diff = newDayOfWeek - currentDayOfWeek;

  date.setDate(date.getDate() + diff);

  return date;
}
var inputDate = new Date(2021, 4, 2); 
var resultDate = changeDayOfWeek(inputDate, 3); 
document.write("Date with the day of the week changed: " + resultDate.toDateString());

//q12
//q13

//q14
document.write("<h1>Q14</h1>")
var age = +prompt("Please enter your age:");
var currentYear = new Date().getFullYear();
var birthYear = currentYear - age;
document.write("Your birth year is: " + birthYear);


//Chapter 35 - 37 (Functions)
document.write("<h1>Chapter 35 - 37 (Functions)</h1>")
//q1
document.write("<h1>Q1(In alert)</h1>")
function displayAlert() {
  
  alert("Hello, this is an alert message!");
  
}
displayAlert()

//q2
document.write("<h1>Q2(In alert)</h1>")

function askName() {
  var userName = prompt("Enter name:");
  return userName;
}
askName()

//q3
document.write("<h1>Q3</h1>")
function greet() {
  document.write("Hello!");
}
function farewell() {
  document.write("Goodbye!");
}
function callOtherFunctions() {
  greet(); 
  farewell(); 
}
callOtherFunctions();

//q4
document.write("<h1>Q4(In alert)</h1>")
function displayName() {
  
  var name = prompt("Enter name:");

  alert("Entered name: " + name);
}
displayName();


//q5
document.write("<h1>Q5(In alert)</h1>")
function concat(variable, string, number) {

  return variable + string + number;
}

var result = concat("A", "B", 123);

alert("Result: " + result);

//q6
document.write("<h1>Q6(In alert)</h1>")
function concatenate(param1, param2) {
  
  var result = param1 + param2;
  alert("Concatenated result: " + result);
}
concatenate("Hello, ", "World!");

//q7
document.write("<h1>Q7(In alert)</h1>")
function multiply(param1, param2, param3) {
  // Multiply the parameters
  var result = param1 * param2 * param3;

  alert("Multiplication result: " + result);
}

multiply(2, 3, 4);

//q8
document.write("<h1>Q8(In alert)</h1>")
function calculateAverage(numbers) {

  if (numbers.length === 0) {
      return "The array is empty.";
  }


  var sum = numbers.reduce((total, num) => total + num, 0);

  var average = sum / numbers.length;

  return average;
}


var numbers = [10, 20, 30, 40, 50];
var result = calculateAverage(numbers);

alert("Average: " + result);

//q9
document.write("<h1>Q9(In alert)</h1>")
function calculateSum(num1, num2) {
 
  var sum = num1 + num2;

  // Return the sum
  return sum;
}

var number1 = +prompt("Enter the number1 ")
var number2 = +prompt("Enter the number1 ")
var result = calculateSum(number1, number2);

alert("Sum: " + result);

//q10
document.write("<h1>Q10</h1>")

function calculateAverage() {
 
  var numbers = [1, 2, 3, 4, 5];
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i];
  }


  var average = sum / numbers.length;

  
  document.write("The average is: " + average);
}

//q11
function myFunction() {
  return 42;
}

var result = myFunction();

//q12
document.write("<h1>Q12</h1>")
function letterCounts(word) {
  var counts = {};

  for (var i = 0; i < word.length; i++) {
      var letter = word[i].toLowerCase();

      if (/[a-z]/.test(letter)) {
          if (counts[letter]) {
              counts[letter]++;
          } else {
              counts[letter] = 1;
          }
      }
  }

  return counts;
}

function countLettersFromUserInput() {

  var word = prompt("Enter a word:");

  if (word !== null && word.trim() !== "") {
     
      var counts = letterCounts(word);
     
      document.write("Letter counts for '" + word + "':");
      for (var letter in counts) {
          document.write(letter + ": " + counts[letter]);
      }
  } else {
      document.write("Invalid input. Please enter a word.");
  }
}

countLettersFromUserInput();

//q13
document.write("<h1>Q13</h1>")
function setYearInDate(dateObj, year) {
  dateObj.setFullYear(year);
}


var currentDate = new Date(); 
document.write("Current date before setting year:", currentDate);
 
setYearInDate(currentDate, 2025);
document.write("Current date after setting year:", currentDate);

//q14
document.write("<h1>Q14</h1>")
function calculateAgeFromUserInput() {
  
  var dateOfBirthString = prompt("Enter your date of birth (YYYY-MM-DD):");

 
  if (dateOfBirthString !== null && dateOfBirthString.trim() !== "") {
     
      var dob = new Date(dateOfBirthString);
      
     
      var currentDate = new Date();
      
     
      var age = currentDate.getFullYear() - dob.getFullYear();
      
      
      if (currentDate.getMonth() < dob.getMonth() || (currentDate.getMonth() === dob.getMonth() && currentDate.getDate() < dob.getDate())) {
          age--;
      }
      
   
      document.write("Your age is:", age);
  } else {
      document.write("Invalid input. Please enter your date of birth.");
  }
}

calculateAgeFromUserInput();


//q15
document.write("<h1>Q15</h1>")
function checkWordPresence(word, array) {
  var lowercaseWord = word.toLowerCase();
  var lowercaseArray = array.map(item => item.toLowerCase());
  
  return lowercaseArray.includes(lowercaseWord);
}

var array = ['zaid','haris','raza','abubakar','hassan','hussain','fatima'];
var word = 'Hussain'; 

var result = checkWordPresence(word, array);
document.write(result); 

//q16
document.write("<h1>Q16</h1>")
function repeatLetter(letter) {
  return letter.repeat(10);
}


var repeatedLetters = repeatLetter('a');
document.write(repeatedLetters); 

//q17
document.write("<h1>Q17</h1>")
function reverseArray(arr) {
  return arr.slice().reverse();
}

var array = ['a', 'b', 'c', 'd', 'e'];
var reversedArray = reverseArray(array);
document.write(reversedArray); 


//Chapter 35 - 37 (Functions)
document.write("<h1>Chapter 38 (Local vs. Global Variables)</h1>")
//q1
document.write("<h1>Q1</h1>")
function greet(name) {
  
  var greeting = "Hello";

  var message = greeting + ", " + name + "!";

  return message;
}

var result = greet("John");
document.write(result); 

//q2
document.write("<h1>Q2</h1>")

var globalVar = "I am a global variable";


function accessGlobalVariable() {
   
  document.write(globalVar);
}

accessGlobalVariable(); 

//Chapter 39, 40 (Switch Statements)
document.write("<h1>Chapter 39, 40 (Switch Statements)</h1>")
//q1
document.write("<h1>Q1</h1>")
var dayOfWeek = "Monday";

switch (dayOfWeek) {
    case "Monday":
        document.write("It's the start of the week.");
        break;
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
        document.write("It's a weekday.");
        break;
    case "Friday":
        document.write("It's almost the weekend!");
        break;
    case "Saturday":
    case "Sunday":
        document.write("It's the weekend!");
        break;
    default:
        document.write("Invalid day of the week.");
}

//q2
document.write("<h1>Q1(In alert)</h1>")
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Multan"];

var cityName = prompt("Enter a city name:");
switch (cityName) {
    case "Karachi":
    case "Lahore":
    case "Islamabad":
    case "Quetta":
    case "Multan":
        alert("The city " + cityName + " is in our list!");
        break;
    default:
        alert("The city " + cityName + " is not in our list.");
}
