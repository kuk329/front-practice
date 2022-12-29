// 첫번째 버튼을 누르면 orange 클래스 추가 + 첫번째 div 박스에 show 클래스 추가
// 기존 버튼, div박스에 orange 클래스 show 클래스 제거

// 버튼 0을 누르면
// -모든 버튼에 붙은 orange 클래스명 제거
// 버튼 0 에 orange 클래스명 추가
// -모든 div에 붙은 show 클래스명 제거
// div 0에 show 클래스명 추가

var buttonList = document.querySelectorAll(".tab-button");
var divList = document.querySelectorAll(".tab-content");

// for (let x = 0; x < buttonList.length; x++) {
//   document
//     .querySelectorAll(".tab-button")
//     [x].addEventListener("click", function () {
//       tab_open(x);
//     });
// }

var tab0 = document.querySelectorAll(".tab-button")[0];
var tab1 = document.querySelectorAll(".tab-button")[1];
var tab2 = document.querySelectorAll(".tab-button")[2];

document.querySelector(".list").addEventListener("click", function (e) {
  let target = e.target;
  //   if (target == tab0) {
  //     tab_open(0);
  //   } else if (target == tab1) {
  //     tab_open(1);
  //   } else if (target == tab2) {
  //     tab_open(2);
  //   }
  console.log(e.target.dataset.id);
  tab_open(e.target.dataset.id);
});

function tab_open(idx) {
  var i = 0;
  var j = 0;
  for (i = 0; i < buttonList.length; i++) {
    buttonList[i].classList.remove("orange");
  }

  document.querySelectorAll(".tab-button")[idx].classList.add("orange");

  for (j = 0; j < divList.length; j++) {
    divList[j].classList.remove("show");
  }
  document.querySelectorAll(".tab-content")[idx].classList.add("show");
}
