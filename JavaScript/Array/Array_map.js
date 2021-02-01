

let testArr = [1, 2, 3];
let test = testArr.map(parseInt);
console.log(test);
//[1, NaN, NaN]
// parseInt(string, radix) -> map(parseInt(value, index))
/*  first iteration (index is 0): */ parseInt("1", 0); // 1
/* second iteration (index is 1): */ parseInt("2", 1); // NaN
/*  third iteration (index is 2): */ parseInt("3", 2); // NaN

let map = Array.prototype.map
let a = map.call('Hello World', function (x) {
  return x.chaFromCodeAt(0)
})
// [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]



