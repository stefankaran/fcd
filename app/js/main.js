$(document).ready(function() {

    stickyPosition(170, 70);

    function stickyPosition(offTop, offBottom) {
        var stickyEl = $('.c-soc-content');
        var stickyEnd = $(".stickyEnd");
        if ($(window).width() >= 768) {
            stickyEl.dwSticky({$stEnd: stickyEnd, offsetTop: offTop, offsetBot: offBottom});
        }
    }


    // article single
    sliderProgramRelated();
    sliderHero('.p-article__slider');
    // article single End


  sliderPhone('.hp-tag--tertiary__slider', 1);

  sliderPhone('.b-related__slider', 2);
  sliderPhone('.program-category__slider', 2);
  programCount();

  sliderCustom('.b-slider--video__slider', 3, 3);
  sliderCustom('.b-slider--partners__slider', 7, 3);

  smoothScroll('.hp-viewer__btn');

dropDownMenu();

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

  // everyTplWhereIsShareBox.tpl
  triggerActive('.c-soc-content__trigger', ['.c-soc-content']);
  socialShare();

  function socialShare() {
      var socialShare = $('.c-soc-content');
      var bHeaderTop = $('.b-header__top--fixed-desk');
      var bHeaderTopHeight = bHeaderTop.height();
      $(window).scroll(function() {
          if ($(window).width() <= 750) {
              if ($(window).scrollTop() > bHeaderTopHeight) {
                  socialShare.fadeIn(750);
              } else {
                  socialShare.fadeOut(750);
              }
          }
      });
  }

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
      navStickyTrigger.fadeIn(750);
    } else {
      navStickyTrigger.fadeOut(750);
    }
  });


  // // Program related slider / Slide length
  // function sliderProgramRelatedSlides() {
  //     var slider = $('.b-program-related__slider');
  //     var sliderSlide = $('.b-program-related__slider__slide');
  //
  //     console.log(sliderSlide.length);
  // }

  //----- Program related slider
  function sliderProgramRelated() {

      var slider = $('.b-program-related__slider');
      var sliderSlide = $('.b-program-related__slide');
      var sliderSlideCount = sliderSlide.length;
      var slickList = $('.b-program-related__slider .slick-list');
      var slidesNum = ('slideNum-' + sliderSlideCount);

      var desktop = 1023;
      var tablet = 768;

      var ww = $(window).width();

      // Slick init
      slider.slick({
          responsive: [{
              breakpoint: 99999,
              settings: "unslick"
          }, {
              breakpoint: 1024,
              settings: {
                  infinite: false,
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  dots: false,
                  arrows: false
              }
          }]
      });

      // Desktop layout
      if (ww >= desktop && sliderSlideCount == 3) {
          slider.addClass(slidesNum);
      }

      // Tablet layout
      if (ww >= tablet && ww <= desktop) {
          if (sliderSlideCount == 3) {
              slider.addClass(slidesNum);
          } else if (sliderSlideCount == 2) {
              slider.addClass(slidesNum);
          }
      }

  }

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

  function smoothScroll(element) {

      // Header heigh
      var headerHeight = $('.b-header__top').height();

      $(element).on('click', function(event){
          event.preventDefault();

          $('html, body').animate({
              scrollTop: ($(window).width() >= 1023 ? $( $.attr(this, 'href') ).offset().top - headerHeight + 1 : $( $.attr(this, 'href') ).offset().top + 1)
          }, 750);
      });

    //   // Header heigh
    //   var headerHeight = $('.b-header__top').height();
    //
    //   // Add smooth scrolling to all links
    //   $(element).on('click', function(event) {
    //
    //       // Make sure this.hash has a value before overriding default behavior
    //       if (this.hash !== "") {
    //           // Prevent default anchor click behavior
    //           event.preventDefault();
    //
    //           // Store hash
    //           var hash = this.hash;
    //
    //           // Using jQuery's animate() method to add smooth page scroll
    //           // Minus Header Height - Because header position is fixed - ONLY ON DESKTOP
    //           // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    //           $('html, body').animate({
    //             //   scrollTop: ($(window).width() >= 1023 ? $(hash).offset().top - headerHeight + 1 : $(hash).offset().top + 1)
    //               scrollTop: $(hash).offset().top - 100
    //           }, 750, function(){
    //
    //               // Add hash (#) to URL when done scrolling (default click behavior)
    //               window.location.hash = hash;
    //           });
    //
    //       } // End if
    //   });

  }


function dropDownMenu() {

    function DropDown(el) {
        this.dd = el;
        this.placeholder = this.dd.children('.c-dd__selected');
        this.opts = this.dd.find('.c-dd__menu > .c-dd__item');
        this.val = '';
        this.index = -1;
        this.initEvents();
    }
    DropDown.prototype = {
        initEvents: function() {
            var obj = this;

            obj.dd.on('click', function(event) {
                $(this).toggleClass('active');
                return false;
            });

            obj.opts.on('click', function() {
                var opt = $(this);
                obj.val = opt.text();
                obj.index = opt.index();
                obj.placeholder.text(obj.val);
            });
        },
        getValue: function() {
            return this.val;
        },
        getIndex: function() {
            return this.index;
        }
    }

    // Init
    var profession = new DropDown($('#profession'));
    var school     = new DropDown($('#school'));
    var domains    = new DropDown($('#domains'));

}




});
