
// A] if Statement

//1. Check if a number is divisible by 5. If yes, print "Divisible by 5".

let num1 = 25
if(num1 % 5 == 0){
    console.log("Divisible by 5")
}

//2. Check if a person's age is greater than or equal to 60. If true, print "Senior Citizen".

let age = 65
if(age >= 60){
    console.log("Senior Citizen")
}

//3. Check if a given number is greater than 100. If yes, print "Big Number".

let num3 = 150
if(num3 > 100){
    console.log("Big Number")
}

//4. Check if the temperature is less than 10. If true, print "Very Cold".

let temperature = 5
if(temperature < 10){
    console.log("Very Cold")
}

//5. Check if a student scored full marks (100). If yes, print "Perfect Score".

let score = 100
if(score == 100){
    console.log("Perfect Score")
}

//6. Check if a number is negative. If it is, print "Negative Number".

let num6 = -8
if(num6 < 0){
    console.log("Negative Number")
}

//7. Check if a user has entered an empty string. If the string is empty, print "No input provided".

let userinput = ""
if(userinput == ""){
    console.log("No input provided")
}

//8. Check if a given year is divisible by 100. If yes, print "Century Year".

let year = 1900
if(year % 100 == 0){
    console.log("Century Year")
}

//9. Check if a number is both positive and even using a single if condition. If true, print "Positive Even Number".

let num9 = 12
if(num9 > 0 && num9 % 2 == 0){
    console.log("Positive Even Number")
}

//10. Check if marks is greater than or equal to 35 and less than or equal to 100. If true, print "Valid Marks".

let marks = 72
if(marks >= 35 && marks <= 100){
    console.log("Valid Marks")
}


// B] if...else Statement

//1. Check whether a number is even or odd.

let num11 = 7
if(num11 % 2 == 0){
    console.log("Even")
}
else{
    console.log("Odd")
}

//2. Check if a person is eligible to vote (age >= 18). Print "Eligible" or "Not Eligible".

let voterAge = 17
if(voterAge >= 18){
    console.log("Eligible")
}
else{
    console.log("Not Eligible")
}

//3. Check whether a number is positive or negative.

let num13 = -4
if(num13 >= 0){
    console.log("Positive")
}
else{
    console.log("Negative")
}

//4. Check if a student has passed or failed based on marks (pass mark = 35).

let studentMarks = 30
if(studentMarks >= 35){
    console.log("Passed")
}
else{
    console.log("Failed")
}

//5. Check whether a given character is an uppercase letter or not. (Hint: Use character comparison)

let char = "G"
if(char >= "A" && char <= "Z"){
    console.log("Uppercase letter")
}
else{
    console.log("Not an uppercase letter")
}

//6. Check if a number is divisible by 3 or not. Print appropriate messages.

let num16 = 10
if(num16 % 3 == 0){
    console.log("Divisible by 3")
}
else{
    console.log("Not divisible by 3")
}

//7. Take a password as input. If the password is "admin123", print "Login Successful", otherwise print "Incorrect Password".

let pass = "admin123"
if(pass == "admin123"){
    console.log("Login Successful")
}
else{
    console.log("Incorrect Password")
}

//8. Check whether a given year is a leap year or not using the basic rule (divisible by 4).

let leapYear = 2024
if(leapYear % 4 == 0){
    console.log("Leap Year")
}
else{
    console.log("Not a Leap Year")
}

//9. Find the greater of two numbers using if...else.

let first = 40
let second = 25
if(first > second){
    console.log(first + " is greater")
}
else{
    console.log(second + " is greater")
}

//10. Check if a number is positive, negative, or zero using only if...else.

let num20 = 0
if(num20 > 0){
    console.log("Positive")
}
else{
    if(num20 < 0){
        console.log("Negative")
    }
    else{
        console.log("Zero")
    }
}