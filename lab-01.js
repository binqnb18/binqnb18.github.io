// a. In ra màn hình console tất cả các phần tử của mảng
arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// for( let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }
//b. Tính tổng các phần tư trong mảng

// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4];
// let sum = 0;
// for(let i = 0; i < arr.length; i++){
//     sum += arr[i];
// }
// console.log(sum);

//c. Tìm phần tử lớn nhất, phần tử nhỏ nhất trong mảng
// let = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4];
// let max = arr[0];
// let min = arr[0];
// for(let i = 1; i < arr.length; i++){
//     if(arr[i] > max){
//         max = arr[i];
//     }
//     if(arr[i] < min){
//         min = arr[i];
//     }
// }
// console.log("Phan tu lon nhat la: " + max);
// console.log("phan tu nho nhat la: " + min);

//d. Tính trung bình cộng các phần tử trong mảng
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4];
// let sum = 0;
// for(let i = 0; i < arr.length; i++){
//     sum += arr[i];
// }
// let average = sum / arr.length;
// console.log("Trung binh cong la: " + average);

var arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4];
var len = arr.length;

for (var i = 0; i < len / 2; i++) {
  // Hoán đổi vị trí của hai phần tử: arr[i] và arr[len - 1 - i]
  var temp = arr[i];
  arr[i] = arr[len - 1 - i];
  arr[len - 1 - i] = temp;
}

console.log("Mảng sau khi đảo ngược: " + arr);