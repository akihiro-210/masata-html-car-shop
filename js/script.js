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
          setTimeout(tryScroll, 200);
        }
      };
      setTimeout(tryScroll, 400);
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

$(function(){

// ハンバーガーメニュー
$(".js-hamburger,.js-drawer,.js-circle-bg").click(function () {
    $(".js-hamburger").toggleClass("is-active");
    $(".js-drawer").toggleClass("is-active");
    $(".js-circle-bg").toggleClass("is-active");
    $("body").toggleClass("no-scroll");
    $(".bottom-contact__tel").toggleClass("no-scroll");
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

//スローガン左から右に流れるアニメーション
$(function () {
  const $target = $('.js-slogan-inner');

  if ($target.length) {
    const noto = new FontFaceObserver('Noto Sans JP', { weight: 700 });

    noto.load().then(() => {
      setTimeout(() => {
        $target.addClass('is-animated');
      }, 100);
    }).catch(() => {
      console.warn('Noto Sans JPの読み込みに失敗しました');
    });
  }
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

// スクロールしたらふわっと出てくるアニメーション
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

// 文字数制限
$(document).ready(function() {
  function getLimit(selector) {
    const width = $(window).width();

    // 各セレクタごとのレスポンシブ制限
    switch (selector) {
      case '.js-limit':
        return width <= 768 ? 24 : 24; //スマホ：PC
      case '.js-limit-work':
        return width <= 768 ? 24 : 46;
      case '.js-article':
        return width <= 768 ? 36 : 36;
      case '.js-limit-news':
        return width <= 768 ? 40 : 46;
      default:
        return 20;
    }
  }

  function applyTextLimit() {
    ['.js-limit', '.js-limit-work', '.js-article','.js-limit-news'].forEach(function(selector) {
      $(selector).each(function() {
        const $this = $(this);
        const originalText = $this.data('original-text') || $this.text(); // 元のテキストを保存
        $this.data('original-text', originalText);

        const limit = getLimit(selector);
        if (originalText.length > limit) {
          $this.text(originalText.substring(0, limit) + "...");
        } else {
          $this.text(originalText);
        }
      });
    });
  }

  // 初期実行
  applyTextLimit();

  // ウィンドウリサイズ時にも再実行（レスポンシブ対応）
  $(window).on('resize', function() {
    applyTextLimit();
  });
});

})
