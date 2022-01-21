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

      if (index == 3) {
        $(".peopleImg").addClass("fadeIn");
      }
      if (index === 4) {
        $(".forthImg").addClass("fadeIn");
      }
      if (index === 5) {
        $(".fifthImg").addClass("fadeIn");
      }
    },
    afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
      console.log("현재 슬라이드 번호는" + slideIndex);
    },
  });
});
