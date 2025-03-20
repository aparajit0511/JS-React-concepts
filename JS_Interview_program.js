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
