/*========================COUNTDOWN===============================*/

var timer;
var compareDate = new Date();
compareDate.setDate(compareDate.getDate() + 7);
timer = setInterval(function () {
  timeBetweenDates(compareDate);
}, 1000);
function timeBetweenDates(toDate) {
  var dateEntered = toDate;
  var now = new Date();
  var difference = dateEntered.getTime() - now.getTime();
  if (difference <= 0) {
    clearInterval(timer);
  } else {
    var seconds = Math.floor(difference / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 18);
    hours %= 24;
    minutes %= 60;
    seconds %= 60;
    $("#days").text(days);
    $("#hours").text(hours);
    $("#minutes").text(minutes);
    $("#seconds").text(seconds);
  }
}

/*=======================DROPDOWN==============================*/

function show(anything) {
  document.querySelector(".seleer__dropdown-selected").value = anything;
}
let dropdown = document.querySelector(".seller__dropdown");
dropdown.onclick = function () {
  dropdown.classList.toggle("active");
};
$(".seller__dropdown ul li").on("click", function () {
  var filterClass = $(this).data("value");
  $(".seller__slider").slick("slickUnfilter");
  $(".seller__slider").slick("slickFilter", filterClass);
});

/*=========================TABS================================*/

const tabs = document.querySelectorAll(".artworks__tab-button");
const tabs_item = document.querySelectorAll(".artworks__tab-item");
tabs.forEach((tab, index) => {
  tab.addEventListener("click", (e) => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    tabs_item.forEach((content) => {
      content.classList.remove("active");
    });
    tabs_item[index].classList.add("active");
  });
});

/*========================BURGER===============================*/

setInterval(() => {
  if (
    $(window).scrollTop() > 0 &&
    $(".header__top").hasClass("header__top--open") === false
  ) {
    $(".burger").addClass("burger--follow");
  } else {
    $(".burger").removeClass("burger--follow");
  }
}, 0);
$(".burger, .overlay, .header__top a").on("click", function (e) {
  e.preventDefault();
  $(".header__top").toggleClass("header__top--open");
  $(".overlay").toggleClass("overlay--show");
});

/*=======================SELLER-SLIDER==========================*/
$(document).ready(function () {
  $(".seller__slider").slick({
    speed: 1000,
    infinite: false,
    slidesToShow: 3.1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    prevArrow: ".arrow-prev",
    nextArrow: ".arrow-next",
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2.8,
        },
      },
      {
        breakpoint: 900,
        settings: {
          speed: 3000,
          infinite: true,
          autoplay: true,
          slidesToShow: 2.6,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 830,
        settings: {
          speed: 2000,
          infinite: true,
          autoplay: true,
          slidesToShow: 2.3,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 730,
        settings: {
          speed: 1000,
          infinite: true,
          autoplay: true,
          slidesToShow: 2.1,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 660,
        settings: {
          speed: 1000,
          infinite: true,
          autoplay: true,
          slidesToShow: 1.8,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 570,
        settings: {
          speed: 1000,
          infinite: true,
          autoplay: true,
          slidesToShow: 1.5,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 500,
        settings: {
          speed: 1000,
          infinite: true,
          autoplay: true,
          slidesToShow: 1.2,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 400,
        settings: {
          speed: 1000,
          infinite: true,
          autoplay: true,
          slidesToShow: 1,
          autoplaySpeed: 2000,
        },
      },
    ],
  });
});

/*=======================AUCTION--SLIDER==========================*/
$(document).ready(function () {
  $(".auction__slider").slick({
    speed: 1000,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    prevArrow: ".auction__arrows-prev",
    nextArrow: ".auction__arrows-next",
  });
});
/*=======================COLLECTION-SLIDER========================*/
$(document).ready(function () {
  $(".collection__slider").slick({
    dots: true,
    speed: 1000,
    arrows: false,
    // autoplay: true,
    slidesToShow: 3,
    autoplaySpeed: 2000,
    appendDots: $(".collection__dots"),
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 2.6,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2.3,
        },
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 2.1,
        },
      },
      {
        breakpoint: 790,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1.6,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 1.4,
        },
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1.2,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1.1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1.05,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1.03,
        },
      },
    ],
  });
});
