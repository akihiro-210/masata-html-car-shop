$(function(){

// ヘッダー高さを考慮したページスクロール
  const tempHash = window.location.hash;
  if (tempHash) {
    // ブラウザによる自動スクロールを阻止
    history.replaceState(null, null, window.location.pathname + window.location.search);
    window.scrollTo(0, 0); // Safari用に強制スクロールトップ
  }
  $(window).on("load", function () {
    if (tempHash) {
      const $target = $(tempHash);
      let retryCount = 0;
      const tryScroll = () => {
        const headerHeight = $(".js-header").height();
        if ($target.length && $target.offset()) {
          const position = $target.offset().top - headerHeight;
          $("html, body").animate({ scrollTop: position }, 500, "swing");
          // hashを戻す（必要であれば）
          history.replaceState(null, null, tempHash);
        } else if (retryCount < 3){
          retryCount++;
          setTimeout(tryScroll, 300);
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

// ハンバーガーメニュー
$(".js-hamburger,.js-drawer,.js-circle-bg").click(function () {
    $(".js-hamburger").toggleClass("is-active");
    $(".js-drawer").toggleClass("is-active");
    $(".js-circle-bg").toggleClass("is-active");
    $("body").toggleClass("no-scroll");
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
    reverseDirection: true,
  },
});

// アバウトページスライダー
const aboutSwiper = new Swiper(".about-swiper", {
  loop: true, // ループ有効
  loopedSlides : 6,
  slidesPerView: 'auto',
  speed: 4000, // ループの時間
  allowTouchMove: false, // スワイプ無効
  autoplay: {
    delay: 0, // 途切れなくループ
    disableOnInteraction: false,
  },
    observer: true,
    observeParents: true,
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

});
