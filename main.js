$(function () {
  $("#fullpage").fullpage({
    //options here
    navigation: true,
    navigationPosition: "right",
    sectionsColor: [
      "#2AC1BC",
      "#2AC1BC",
      "#2AC1BC",
      "#2AC1BC",
      "#2AC1BC",
      "#2AC1BC",
      "#FFFFFF",
    ],
    afterLoad: function (anchorLink, index) {
      console.log("현제 섹션 번호는  " + index);
      //   if (index == 5) {
      //     alert("마지막입니다.");
      //   }
    },
    afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
      console.log("현재 슬라이드 번호는" + slideIndex);
    },
  });
});
