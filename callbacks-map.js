var yvrWishList = ["Tacofino", "Kissa Tanto", "Ask for Luigi", "Rangoli"];
  /* var length = restsToTry.map(function(restToTry) {
    return restToTry.length;
  });
*/

// yvrWishList.map(item => {
//     console.log(item);
//   });
// console.log(upperCase);

function map(arr, cb) {  // This is the map method used to apply a function to each item in the arr
  for (var item in arr) {
    cb(arr[item]);
  }
}

function printValue(hungry) {
  console.log(hungry);
}

//function upperCase(item) {
//  console.log(item.toUpperCase());
//}

map(yvrWishList, printValue);
//map(yvrWishList, upperCase);
