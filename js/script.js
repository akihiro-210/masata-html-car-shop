$(function(){

// ヘッダー高さを考慮したページスクロール
document.addEventListener("DOMContentLoaded", () => {
  const tempHash = window.location.hash;
  if (tempHash) {
    // ブラウザによる自動スクロールを阻止
    history.replaceState(null, null, window.location.pathname + window.location.search);
    window.scrollTo(0, 0); // Safari用に強制スクロールトップ
  }

  $(window).on("load", function () {
    if (tempHash) {
      const $target = $(tempHash);
      // DOMが完全に反映されていないケースへの対処
      const tryScroll = () => {
        const headerHeight = $(".js-header").height();
        if ($target.length && $target.offset()) {
          const position = $target.offset().top - headerHeight;
          $("html, body").animate({ scrollTop: position }, 500, "swing");
          // hashを戻す（必要であれば）
          history.replaceState(null, null, tempHash);
          } else {
            setTimeout(tryScroll, 100);
          }
      };
      setTimeout(tryScroll, 600);
    }
  });
  // ページ内リンクのクリック
  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();
    const href = $(this).attr("href");
    const target = $(href === "#" || href === "" ? "html" : href);
    const headerHeight = $(".js-header").height();
    const position = target.offset().top - headerHeight;
    $("html, body").animate({ scrollTop: position }, 500, "swing");
  });
});

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
    // disableOnInteraction: false,
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

// 要素までスクロールしたらふわっと出てくるアニメーション

var pos = 0,
winScrollTop = 0;

function fadeAnime() {

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
}

$(window).scroll(function () {
fadeAnime();
});

$(window).on("load", function () {
fadeAnime();
});

})
