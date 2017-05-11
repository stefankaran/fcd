$(document).ready(function() {

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

  // after.tpl
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

});
