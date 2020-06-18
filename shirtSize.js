/*S	Width	Length	Sleeve
S	18"	28"	8.13"
M	20"	29"	8.38"
L	22"	30"	8.63"
XL	24"	31"	8.88"
2XL	26"	33"	9.63"
3XL	28"	34"	10.13"

Use the sizing chart above, create a series of logical expressions that prints the size of a t-shirt based on the measurements of shirtWidth, shirtLength, and shirtSleeve. Valid sizes include S, M, L, XL, 2XL, and 3XL.
*/

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 26;
var shirtLength = 33;
var shirtSleeve = 9.63;

//(shirtWidth >= 28) || (shirtLength >= 33) || (shirtSleeve >= 9.63)

if (
  (shirtWidth >= 18 && shirtWidth < 20) ||
  (shirtLength >= 28 && shirtLength < 29) ||
  (shirtSleeve >= 8.13 && shirtSleeve < 8.38)
) {
  console.log("S");
} else if (
  (shirtWidth >= 20 && shirtWidth < 22) ||
  (shirtLength >= 29 && shirtLength < 30) ||
  (shirtSleeve >= 8.38 && shirtSleeve < 8.63)
) {
  console.log("M");
} else if (
  (shirtWidth >= 22 && shirtWidth < 24) ||
  (shirtLength >= 30 && shirtLength < 31) ||
  (shirtSleeve >= 8.63 && shirtSleeve < 8.88)
) {
  console.log("L");
} else if (
  (shirtWidth >= 24 && shirtWidth < 26) ||
  (shirtLength >= 31 && shirtLength < 33) ||
  (shirtSleeve >= 8.88 && shirtSleeve < 9.63)
) {
  console.log("XL");
} else if (
  (shirtWidth >= 26 && shirtWidth < 28) ||
  (shirtLength >= 33 && shirtLength < 34) ||
  (shirtSleeve >= 9.63 && shirtSleeve < 10.13)
) {
  console.log("2XL");
} else if (shirtWidth >= 28 || shirtLength >= 33 || shirtSleeve >= 9.63) {
  console.log("3XL");
} else {
  console.log("NA");
}
