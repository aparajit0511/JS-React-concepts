// check for palindrome

var str1 = "madam";
// var str1 = str.split("");
// console.log(str1)
var left = 0,
  right = str1.length - 1;

while (left < right) {
  if (str1[left] !== str1[right]) {
    console.log("String not palindrome");
    break;
  }
  left += 1;
  right -= 1;
}

console.log("String is palindrome");

//-----------------------------------------------------------------------------

// reverse a string
var sentence1 = "Today is a good Day";
var sentence = sentence1.split(" ");
var reversedString = "";

for (var i = 0; i < sentence.length; i++) {
  word = sentence[i];
  newStr = "";
  for (let j = 0; j < word.length; j++) {
    newStr = word[j] + newStr;
  }
  reversedString = reversedString + newStr + " ";
}

console.log(reversedString);

//-----------------------------------------------------------------------------

// frequency of elements ans most repeated element
var nums = [1, 1, 2, 3, 3, 3, 4, 5, 5, 8, 10];
var freq = {};

for (var i = 0; i < nums.length; i++) {
  if (nums[i] in freq) {
    freq[nums[i]] += 1;
  } else {
    freq[nums[i]] = 1;
  }
}

console.log(freq);
var max = 0;
var ans = 0;

for (var [key, value] of Object.entries(freq)) {
  if (value > max) {
    max = value;
    ans = key;
  }
}

console.log("Element " + ans + " repeats " + max + " times");
