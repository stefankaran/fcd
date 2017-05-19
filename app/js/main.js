$(document).ready(function() {

  sliderPhone('.b-related__slider', 2);
  sliderPhone('.program-category__slider', 2);
  programCount();

  sliderCustom('.b-slider--video__slider', 3, 3);
  sliderCustom('.b-slider--partners__slider', 7, 3);

  // sliderHero('.c-hero');

  //----- Trigger active class
  // trigger == button
  // el      == elements where active class will be added
  triggerActive = function(trigger, el) {
    var $active = ('active');
    var $trigger = $(trigger);

    // Store all el in array
    var $elements = [];
    for (var i = 0; i < el.length; i++) {
      $elements[i] = (el[i]);
    }

    // On trigger, all elements from array toggle class
    $trigger.click(function() {
      $.each($elements, function(i, elem) {
        $(elem).toggleClass($active);
      });
    });
  };

  // header.tpl
  triggerActive('.c-nav-trigger', ['.b-header']);


  // search.tpl
  // function functionName() {
  //
  // }
  $(".c-search__input").focus(function() {
    $(this).closest('.b-header__bottom').addClass("c-search--open");
  }).blur(function() {
    $(this).closest('.b-header__bottom').removeClass("c-search--open");
  })

  // header.tpl
  // function functionName() {
  //
  // }
  var navStickyTrigger = $('.c-nav-trigger--sticky');
  var bHeaderTop = $('.b-header__top--fixed-desk');
  var bHeaderTopHeight = bHeaderTop.height();
  $(window).scroll(function() {
    if ($(window).scrollTop() > bHeaderTopHeight && $(window).width() <= 1023) {
      navStickyTrigger.fadeIn();
    } else {
      navStickyTrigger.fadeOut();
    }
  });

  //----- Init slider only on mobile
  function sliderPhone(sliderName, slideCount) {
    $(sliderName).each(function() {
      $(this).slick({
        responsive: [{
          breakpoint: 99999,
          settings: "unslick"
        }, {
          breakpoint: 768,
          settings: {
            infinite: true,
            slidesToShow: slideCount,
            slidesToScroll: 1,
            dots: false,
            arrows: false
          }
        }]
      });
    });
  }

  // //----- Slider Hero
  function sliderHero(sliderName) {
    $(sliderName).each(function() {
      $(this).slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="icon icon--arrow-slider icon--arrow-left"></div>',
        nextArrow: '<div class="icon icon--arrow-slider icon--arrow-right"></div>',
      });
    });
  }

  //----- Init slider with custom fun
  function sliderCustom(sliderName, slideCountDesktop, slideCountTablet) {
    $(sliderName).each(function() {
      $(this).slick({
        infinite: true,
        slidesToShow: slideCountDesktop,
        slidesToScroll: 1,
        prevArrow: '<div class="icon icon--arrow-slider icon--arrow-left"></div>',
        nextArrow: '<div class="icon icon--arrow-slider icon--arrow-right"></div>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: slideCountTablet
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              arrows: false
            }
          }
        ]
      });
    });
  }

  function programCount() {
    // elements
    var bProgram = $('.program-category');
    var cProgram = $('.c-program');

    // classes
    var bProgramDeskLayot = ('program-category--layout-desk');
    var bProgramTabLayot = ('program-category--layout-tab');

    $(bProgram).each(function() {
      var cProgramCount = $(this).find(cProgram).length; // c-program count in every program-category block
      if (cProgramCount > 4 && $(window).width() >= 1024) { // Desktop condition
        $(this).addClass(bProgramDeskLayot);
      } else if (cProgramCount > 3 && ($(window).width() >= 768 && $(window).width() < 1024)) { // Tablet condition
        $(this).addClass(bProgramTabLayot);
      }
    });
  }

});
