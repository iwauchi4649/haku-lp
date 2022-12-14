/*
 * ====================================================================
 * Grow Template
 * @package  Grow Template
 * @author   GrowGroup.Inc <info@grow-group.jp>
 * @license  MIT Licence
 * ====================================================================
 */

(function ($) {
  var growApp = function () {

  };

  /************************
   * please insert your code
   *************************/
  growApp.prototype.myCode = function () {
  }

  growApp.prototype.enterAnimation = function () {
    let $loader = $('.c-loader');
    if (!$loader.length === 0) {
      return false;
    }

    function changeClass(el, className, time) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          el.addClass(className);
          resolve(className);
        }, time);
      });
    }

    var loaderFunction = function () {
      // ここから実行
      if ($loader) {
        changeClass($loader, "is-active", 1000).then(function () {
          changeClass($loader, "is-close", 2000).then(function () {
            changeClass($loader, "is-hidden", 1000).then(function () {

            });
          });
        });
      }
    };

    // first entry only
    if (!sessionStorage.getItem('loading')) {
      sessionStorage.setItem('loading', true);
      loaderFunction();
    } else {
      // テストはこちらをコメントアウト外す
      // loaderFunction();
      $loader.addClass('is-already');
    }
  };

  growApp.prototype.slidebarButton = function () {
    if ($("body").hasClass('top')) {
      var button = $(".c-slidebar-menu a");

      button.on("click", function() {
        $("body").removeClass("is-slidebar-active");
      });
    }
  };

  growApp.prototype.floatingButton = function () {
    let $target = $(".c-floating");

    $(window).scroll(function(){
      var top = $(".l-offer,.l-footer").offset().top; // ターゲットの位置取得
      var position = top - $(window).height();  // 発火させたい位置

      if ($(window).width() <= 750) {
        if($(window).scrollTop() > position){
          $target.fadeOut("slow");
        }else{
          $target.fadeIn("slow");
        }
      };
    })
  };

  $(function () {
    var app = new growApp();
    app.myCode();
    app.enterAnimation();
    app.slidebarButton();
    app.floatingButton();
  });
})(jQuery);
