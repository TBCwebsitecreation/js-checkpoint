
/*
 * Prompt 01:
 *
 * Create a variable called firstName and assign it a string of your first name.
 * Create a variable called lastName and assign it a string of your last name.
 * Create a variable called full name and assign it your full name using the
 * firstName and lastName variables.
 */
let firstName = "Rubina";
let lastName = "Ramesh";
let fullName = firstName + " " + lastName;
console.log(fullName);
/*
 * Prompt 02:
 *
 * Create a variable holding the sentence "She sells sea shells by the sea
 * shore", but by adding one word to the string at a time.
 */
let str = "She"
console.log(str);
str += " sells"
console.log(str);
str += " sea";
console.log(str);
str += " shells";
console.log(str);
str += " by";
console.log(str);
str += ' sea';
console.log(str);
str += ' the';
console.log(str);
str += ' sea';
console.log(str);
str += ' shore';
console.log(str);

/*
 * Prompt 03:
 *
 * Check if the string in the sentence variable includes the word 'fox'
 */

let sentence = 'The quick brown fox jumped over the lazy dog.';
console.log(sentence);
let sent = sentence.includes('fox')
console.log(`the word fox is present in the string is ${sent}`);
/*
 * Prompt 04:
 *
 * Use the replace method to replace 'Andy Dwyer' with your name.
 */

let andy = 'The best character on Parks and Rec is Andy Dwyer - hands down!';
let rubina = andy.replace("Andy Dwyer", "Rubina Ramesh");
console.log(rubina);
/*
 * Prompt 05:
 *
 * Create the string "eeny, meeny, miny, moe" by concatenating the strings
 * together using the concat method
 */
let eeny = 'eeny';
let meeny = 'meeny';
let miny = 'miny';
let moe = 'moe';
let join = eeny.concat(meeny,miny,moe)
console.log(join);
/*
 * Prompt 06:
 *
 * Split the string below into an array of characters
 */

let toArray = 'Goodnight Moon';
let split_str = toArray.split(" ")
console.log(split_str);
split_str = toArray.split('');
console.log(split_str);
