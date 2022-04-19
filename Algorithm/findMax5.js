let stringResult = " ";

function findMax5(arr) {
  for (let i = 0; i < 5; i++) {
    for (let k = i; k < arr.length; k++) {
      if (arr[i] < arr[k]) {
        let tam = arr[i];
        arr[i] = arr[k];
        arr[k] = tam;
      }
    }
    stringResult += arr[i] + " ";
  }
  console.log("5 Large number in times array is " + stringResult);
}
let arr = [10, 11, 2, 30, 22, 6, 8, 9, 11, 12, 22];
// [14,12,38,17,10,36,12,29,45,34,48,22]
//[3, 4, 5, 3, 2, 3, 10, 11];

findMax5(arr);
