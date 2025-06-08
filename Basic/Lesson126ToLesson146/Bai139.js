//Viết chương trình JavaScript để sắp xếp các chuỗi của một mảng chuỗi cho trước theo thứ tự độ dài tăng dần.
let rsb139 = document.getElementById("rsb139");
function b139(arr) {
  let result = arr.sort((a, b) => {
    return a.length - b.length;
  });
  console.log(result);
}
b139(["xyz", "acd", "aa", "bb", "zzz", "", "a", "b"]);
