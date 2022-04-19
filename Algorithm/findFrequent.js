function findFrequent(arr) {
  let arrItemFrequency = [];
  arr.sort();
  arrItemFrequency.push({
    key: arr[0],
    count: 1,
  });
  // handle problem
  for (let i = 1; i < arr.length; i++) {
    if (arrItemFrequency[arrItemFrequency.length - 1].key === arr[i]) {
      arrItemFrequency[arrItemFrequency.length - 1].count++;
    } else {
      arrItemFrequency.push({
        key: arr[i],
        count: 1,
      });
    }
  }

  // print Result
  let getItemMax = {
    key: "",
    count: 0,
  };
  for (let i = 1; i < arrItemFrequency.length; i++) {
    if (getItemMax.count < arrItemFrequency[i].count) {
      getItemMax.key = arrItemFrequency[i].key;
      getItemMax.count = arrItemFrequency[i].count;
    }
  }

  console.log(
    "Item " +
      '"' +
      getItemMax.key +
      '"' +
      " that appears most in the array is " +
      getItemMax.count
  );
}

let arr = [false, "up", "down", "left", "right", true, false];
//[false, "up", "down", "left", "right", true, false]
//[null, "hello", true, null]

findFrequent(arr);
