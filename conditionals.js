/*
 * Prompt 01:
 *
 * Create a variable and assign it a random number between 0 and 100 using
 * Math.random(). Create a conditional so that if the number is greater than 50,
 * you print the message "That's a big number!"
 */
let num = Math.random();
num = Math.floor(num * 100);

if(num >= 50){
  console.log(`Your number is ${num}. That's a big number`)
}else {
  console.log(`Your number is ${num}. That's a small number`);
  
}

/*
 * Prompt 02:
 *
 * Monkey in the middle! Create a variable and assign it a random number between
 * 0 and 10 using Math.Random(). Create a conditional that:
 *
 *   - prints "small number" if the number is less than 5
 *   - prints "big number" if the number is greater than 5
 *   - otherwise, prints "monkey"
 */
let num2 = Math.random();
num2= Math.floor(num2 * 10)
if(num2 <= 5){
  console.log(num2 + " small number");
}else if(num >5){
  console.log(num2 + " big number");
}else {
  console.log(num2 + "monkey");
}


/*
 * Prompt 03:
 *
 * Driver's Ed! Create a variable that holds a person's age. If their age is
 * greater than 16, print "Here are the keys"; otherwise print "Sorry, you're
 * too young for now."
 */
let age = prompt("Enter your age");
if(age >= 16){
  console.log("Here are the keys");
}else {
  console.log("Sorry, you are too young");
}