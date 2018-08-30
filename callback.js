function findWaldo(arr, cb) {
  arr.forEach(function(person, index) {
    if (person === "Waldo") {
      cb(person, index, arr);
    }
  });
}
function actionWhenFound(person, index) {
  console.log("Found Waldo at index " + index + "!");
};
findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);