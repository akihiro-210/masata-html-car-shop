$(function(){

// ハンバーガーメニュー
$(".js-hamburger,.js-drawer,.js-circle-bg").click(function () {
    $(".js-hamburger").toggleClass("is-active");
    $(".js-drawer").toggleClass("is-active");
    $(".js-circle-bg").toggleClass("is-active");
  });

// メインスライダー
const swiper = new Swiper(".mv__swiper", {
  loop: true,
  effect: "Slide",
  direction: "vertical",
  speed: 1000,
  allowTouchMove: false,
  autoplay: {
    delay: 3000,
  },
});

// アバウトページスライダー
const aboutSwiper = new Swiper(".about-swiper", {
  loop: true, // ループ有効
  loopedSlides : 6,
  slidesPerView: 2, // 一度に表示する枚数
  speed: 4000, // ループの時間
  allowTouchMove: false, // スワイプ無効
  breakpoints:{
    376:{
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 0, // 途切れなくループ
    disableOnInteraction: false,
  },
});
// var aboutswiper = new Swiper('.about-swiper', {
//   slidesPerView: 'auto',
//   spaceBetween: 20,
//   loop: true,
//   speed: 3000, // アニメーション速度
//   autoplay: {
//     delay: 0,
//     disableOnInteraction: false,
//     reverseDirection: false // 右から左
//   },
//   grabCursor: true,
// });

// 要素までスクロールしたらふわっと出てくるアニメーション

var pos = 0,
winScrollTop = 0;

function fadeAnime() {
// $(".fade-in-trigger").each(function () {
//   var elemPos = $(this).offset().top + 50;
//   var scroll = $(window).scrollTop();
//   var windowHeight = $(window).height();
//   if (scroll >= elemPos - windowHeight) {
//     $(this).addClass("fade-in");
//   }
// });

$(".fade-up-trigger").each(function () {
  var elemPos = $(this).offset().top + 100;
  var scroll = $(window).scrollTop();
  var windowHeight = $(window).height();
  if (scroll >= elemPos - windowHeight) {
    $(this).addClass("fade-up");
  }
});

$(".fade-down-trigger").each(function () {
  var elemPos = $(this).offset().top + 100;
  var scroll = $(window).scrollTop();
  var windowHeight = $(window).height();
  if (scroll >= elemPos - windowHeight) {
    $(this).addClass("fade-down");
  }
});

$(".fade-left-trigger").each(function () {
  var elemPos = $(this).offset().top + 100;
  var scroll = $(window).scrollTop();
  var windowHeight = $(window).height();
  if (scroll >= elemPos - windowHeight) {
    $(this).addClass("fade-left");
  }
});

$(".fade-right-trigger").each(function () {
  var elemPos = $(this).offset().top + 100;
  var scroll = $(window).scrollTop();
  var windowHeight = $(window).height();
  if (scroll >= elemPos - windowHeight) {
    $(this).addClass("fade-right");
  }
});

// $(".show-trigger").each(function () {
//   var elemPos = $(this).offset().top + 50;
//   var scroll = $(window).scrollTop();
//   var windowHeight = $(window).height();
//   if (scroll >= elemPos - windowHeight) {
//     $(this).fadeIn();
//   }
// });

// $(".hide-trigger").each(function () {
//   winScrollTop = $(window).scrollTop();
//   if (winScrollTop <= pos) {
//     if (!window.matchMedia("(max-width: 768px)").matches) {
//       $(".hide-trigger").slideDown();
//       $(".header__name").slideDown();
//     } else {
//       $(".hide-trigger").slideDown();
//       $(".header__name").slideDown();
//       $(".hamburger").fadeIn();
//     }
//   } else {
//     if (!window.matchMedia("(max-width: 768px)").matches) {
//       $(".hide-trigger").slideUp();
//       $(".header__name").slideUp();
//       $(".header__inner").removeClass("delay-no3");
//     } else {
//       $(".hide-trigger").slideUp();
//       $(".header__name").slideUp();
//       $(".hamburger").fadeOut();
//     }
//   }

//   pos = winScrollTop;
// });
}

$(window).scroll(function () {
fadeAnime();
});

$(window).on("load", function () {
fadeAnime();
});


})
