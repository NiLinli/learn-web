var arr1 = [1, 2, 5];
var arr2 = [2, 3, 7];


function combineTwoArr(arr1, arr2) {
  var a = 0, b = 0;
  var newArr = [];
  for(var i = 0; i < 2 * arr1.length; i ++) {
    if(arr1[a] <= arr2[b]) {
      newArr.push(arr1[a++]);
    } else {
      newArr.push(arr2[b++]);
    }
  }

  console.log(newArr);
}

combineTwoArr(arr1, arr2);