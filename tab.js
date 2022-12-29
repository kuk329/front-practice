// 첫번째 버튼을 누르면 orange 클래스 추가 + 첫번째 div 박스에 show 클래스 추가
// 기존 버튼, div박스에 orange 클래스 show 클래스 제거

// 버튼 0을 누르면
// -모든 버튼에 붙은 orange 클래스명 제거
// 버튼 0 에 orange 클래스명 추가
// -모든 div에 붙은 show 클래스명 제거
// div 0에 show 클래스명 추가

document
  .querySelectorAll(".tab-button")[0]
  .addEventListener("click", function () {
    var buttonList = document.querySelectorAll(".tab-button");
    var divList = document.querySelectorAll(".tab-content");
    var i = 0;
    var j = 0;
    for (i = 0; i < buttonList.length; i++) {
      buttonList[i].classList.remove("orange");
    }

    document.querySelectorAll(".tab-button")[0].classList.add("orange");

    for (j = 0; j < divList.length; j++) {
      divList[j].classList.remove("show");
    }
    document.querySelectorAll(".tab-content")[0].classList.add("show");
  });

// $(".tab-button")
//   .eq(0)
//   .on("click", function () {
//     $(".tab-button").removeClass("orange");
//     $(".tab-button").eq(0).addClass("orange");
//   });
