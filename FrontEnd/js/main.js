(function ($) {
	"use strict";
		$('ul.nav li.dropdown').hover(function() {
		  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
		}, function() {
		  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
		});

	jQuery(document).ready(function($){
		// showcase slider
		$('.showcase_slider').owlCarousel({
      loop:true,
      autoHeight: true,
      autoplay: true,
      nav: false,
      margin:0,
      responsive:{
          0:{
              items:2
          },
          600:{
              items:4
          },
          1000:{
              items:6
          }
      }
	  });
		//bootstrap carousel
		$('.carousel:not(.slow)').carousel({
		    pause: true,
		    interval: 2000
		});

		$('.carousel.slow').carousel({
		    pause: true,
		    interval: 25000
		});
	});

}(jQuery));

$(window).load(function() {
	  $('#carouselPro').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 210,
    itemMargin: 5,
   	touch: true,
    asNavFor: '#sliderPro'
  });
 
  $('#sliderPro').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#carouselPro"
  });

	$('#status').fadeOut(); // will first fade out the loading animation
	$('#loader-wrapper').delay(300).fadeOut('slow'); // will fade out the white DIV that covers the website.
	$('body').delay(350).css({'overflow-x':'hidden'});
	$('.header_area').stick_in_parent();
  // The slider being synced must be initialized first
	$('.room_selector').on('click', function(e){
		e.preventDefault();
		$('.room_selector.selected').removeClass('selected');
		$(this).addClass('selected');
		var roomSelected = $(this).attr('data-target');
		var roomNumber = roomSelected[roomSelected.length-1];
		$('.room_tab').hide();
		$('#'+roomSelected).show(startCarousel(roomNumber));
	})
	$('.suites-room').on('click', function(e){
	    $('.room_selector.selected').removeClass('selected');
        var roomSelected = $(this).attr('href').split('#')[1];
        var toRoom ="#room_"+roomSelected;
        $(toRoom).addClass('selected');
        var roomNumber = roomSelected[roomSelected.length-1];
        $('.room_tab').hide();
        $("html, body").animate({ scrollTop: 0 }, 5);
        $('#'+roomSelected).show(startCarousel(roomNumber));

    })
	function startCarousel(number){
		$('#carousel'+number).flexslider({
	    animation: "slide",
	    controlNav: false,
	    animationLoop: false,
	    slideshow: false,
	    itemWidth: 210,
	    itemMargin: 5,
	    touch: true,
	    asNavFor: '#slider'+number
	  });
	  $('#slider'+number).flexslider({
	    animation: "slide",
	    controlNav: false,
	    animationLoop: false,
	    slideshow: false,
	    sync: '#carousel'+number
	  });
	}

});
