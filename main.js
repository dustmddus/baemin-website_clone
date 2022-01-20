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
      if (index == 1 || index == 7) {
        $("#fixAppDown").addClass("hidden");
      }

      if (index == 2) {
        $("#bike").addClass("moveBike");
        $("#fixAppDown").removeClass("hidden");
      }
    },
    afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
      console.log("현재 슬라이드 번호는" + slideIndex);
    },
  });
});
