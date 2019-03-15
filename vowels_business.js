/* checks index of letter
get the length of word
loop from zero to length of word 
value = index of letter
check if letter is same as the one we are checking
print its index
check if letter is a vowel

initialized var count
increament it when you find a vowel
log number of times vowel appears
if vowel does not appear, tell user
*/

/* check if vowel is in word
make an array of vowels
loop through array of vowels
check if the letter is in the word
print its position
*/



const outbox = "ttyyppll";
// const outbox = "outboxedu";
const check = "o";

const vowels = ['a', 'e', 'o', 'u', 'i']; //change to a word

var vowel_checker = (word) => {
	// checks if word has vowels
	var exists = 0;
	for (a = 0; a < vowels.length; a++) {
		var vowel = vowels[a]; //a
		// console.log(vowel)
		if (word.includes(vowel)) {
			// console.log(vowel);
			exists ++;
			var timesarray = times_counter(word, vowel);
			[times_exists, indexes] = times_counter(word, vowel);

			if (times_exists>1) {
				console.log("yay! vowel "+vowel+" apears more than once at indexes ", indexes)
			} else {
				console.log(vowel + " appears less")
			}
		} else {
			// console.log(vowel + " is not in "+word)
		};
	}
	if (exists==0) {
		console.log("there is no vowel in "+ word);
	}
};


const times_counter = (name, letter) => {
	// loop through indexes of letters in words
	var count = 0;
	var indexes = [];
	for (j=0; j<name.length; j++) {
		// get current letter using index
		var current_letter = name[j];
		// check if letter is equal to the one being checked
		if (current_letter===letter){
			// log its index in a message
			indexes.push(j);
			count++;
			// console.log(count, "count")
		}
	};
	// var message = "Letter '"+letter+"' appears " + count + " times";
	// console.log(message)
	// console.log(count, "count");
	return [count, indexes];
}

vowel_checker(outbox, check);
console.log("===================================")
vowel_checker("outboxedu", check);