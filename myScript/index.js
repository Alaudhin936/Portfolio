$(document).ready(function () {
  let progrssId = $("#prog");

  runWords();
  $('.img-textt').css('height','40vh').css('padding','5px')
  $(".img-textt").hide();
$(".image-container").mouseover(function () {
  $(this).css('boxShadow','0 0 5px purple')
  $(this).find(".img-text").fadeOut(100); 

  
  $(this).find(".img-textt").show().css({
    display: "flex",
    alignItems: "center",
    color: "white",
    flexDirection: "column",
    justifyContent: "center",
    gap: "15px",
    animationName: "fromTopp",
    animationDuration: "1s",
    animationFillMode: "forwards",
  }); 
});

$(".image-container").mouseleave(function () {
  $(this).find(".img-textt").fadeOut(1000); 
  $(this).find("img").show().css({
    animationName: "fromTopp",
    animationDuration: "1s",
    animationFillMode: "forwards",
  }); 
  $(this).css('boxShadow','none')
  $(this).find(".img-text").fadeIn(100); 
});

  function runWords() {
    $(".left2").css("display", "none");
    $(".right-2").css("display", "none");
    $("#moreBtn").click(function () {
      window.scrollBy({
        top: "600",
        behavior: "smooth",
      });
    });
    let storedWord = null;
    const design = $(".design");
    design.text("Creating A Website").css("color", "purple");

    function timeOut() {
      const words = [
        "Creating A Website",
        "Helping In Backend",
        "Strong Bootstrap Designs",
        "FullStack Developer",
      ];
      let randNum;
      let randNumWords;
      do {
        randNum = Math.floor(Math.random() * words.length);
        randNumWords = words[randNum];
      } while (randNumWords === storedWord);

      storedWord = randNumWords;
      design.text(randNumWords).css({
        color: "purple",
        position: "absolute",
      });
      design.hide().fadeIn(1000).fadeout(2000);
    }
    setInterval(timeOut, 2000);
  }
  let content = $(".port");
  let navBar = $(".bg-custom");
  let myImg = $(".myImg");
  let topleft = $(".top-left-img");

  $(window).on("scroll", function () {
    if (window.scrollY > $("#section1").outerHeight() / 6) {
      $(".left2").css("display", "block");
      $(".right-2").css("display", "block");
    }
  });
  let isScrolled = false;
  let myArr = [
    { q: 0, y: 95, isScrolled: false, element: ".html-css div" },
    { q: 0, y: 92, isScrolled: false, element: ".js-style div" },
    { q: 0, y: 90, isScrolled: false, element: ".query-angular div" },
    { q: 0, y: 95, isScrolled: false, element: ".b-strap div" },
    { q: 0, y: 84, isScrolled: false, element: ".php-lara div" },
    { q: 0, y: 84, isScrolled: false, element: ".my-sql div" },
  ];
  $(window).on("scroll", function () {
    if (
      window.scrollY >
      $("#section2").outerHeight() + $("#section1").outerHeight() / 4
    ) {
      $.each(myArr, function (i, det) {
        if (!det.isScrolled) {
          setInterval(() => {
            if (det.q < det.y) {
              det.q++;
              $(det.element).css("width", `${det.q}%`);
              $(det.element).text(`${det.q}%`);
            }
          }, 100);
          isScrolled = true;
        }
      });
    }
    if (window.scrollY > 50) {
      navBar.css("backgroundColor", "black");
      myImg.css("display", "none");
      topleft.css("display", "none");
    } else {
      navBar.css("backgroundColor", "transparent");
      myImg.css("display", "block");
      content.css("color", "white");
      if (window.innerWidth > 700) {
        topleft.css("display", "block");
      }
    }
    let currLink1 = $(".navbar-nav a:first");
    if (
      window.scrollY >
      ($(currLink1.attr("href")).position().top +
        $(currLink1.attr("href")).outerHeight()) /
        2
    ) {
      $(".contt").css({
        color: "white",
        opacity: "1",
      });
    } else {
      $(".contt").css({
        color: "rgb(174, 164, 164)",
        opacity: "0.7",
      });
    }

    var scrollPos = $(document).scrollTop();
    let scrollHeight = window.scrollY;
    let windoWHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    let percentageWidth = (scrollHeight / windoWHeight) * 100;
    progrssId.css("width", `${percentageWidth}%`);
    $(".navbar-nav a").each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (
        refElement.position().top / 1.4 <= scrollPos &&
        refElement.position().top + refElement.height() > scrollPos
      ) {
        $(".navbar-nav a").css("color", "rgb(174, 164, 164)");
        currLink.css("color", "white");
      }
    });
    $(".navbar-nav a").css("color", "rgb(174, 164, 164");
    $(".navbar-nav a").on("click", function () {
      $(".navbar-nav a").css("color", "rgb(174, 164, 164)");
      $(this).css("color", "white");
      console.log(closestDotSpan);
      closestDotSpan.css("display", "block");
    });
  });
  $(".progress-circle").css("transition", "0.2s ease-in-out");
  $(".progress-circle").mouseover(function () {
    let x = $(this).data("val");
    let y = 0;
    setInterval(() => {
      y++;
      if (y < x) {
        $(this).css("--percentage", `${y}%`);
      }
    }, 10);
  });
});
