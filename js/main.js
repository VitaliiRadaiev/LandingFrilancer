

$(document).ready(function() {
  $(".header_top_menu_link").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 600);
    return false;
  });
});

$(document).ready(function() {
  $(".header_mobile_menu_link").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 600);
    return false;
  });
});

$('.burger').click(function() {
	$('.burger span:nth-child(1)').toggleClass('first');
	$('.burger span:nth-child(2)').toggleClass('second');
	$('.burger span:nth-child(3)').toggleClass('third');
	$('.burger span:nth-child(4)').toggleClass('fourth');
});

$('.header_mobile_menu_link').click(function(event) {
	if(window.pageYOffset < 75) {
		$('.header_mobile').slideDown(600);
		header.classList.remove('header_mobile_fixed');
		$('.burger span:nth-child(1)').remove('first');
		$('.burger span:nth-child(2)').remove('second');
		$('.burger span:nth-child(3)').remove('third');
		$('.burger span:nth-child(4)').remove('fourth');
		b = false;
	}else {
	$('.header_mobile').slideDown(600);
	$('.burger span:nth-child(1)').remove('first');
	$('.burger span:nth-child(2)').remove('second');
	$('.burger span:nth-child(3)').remove('third');
	$('.burger span:nth-child(4)').remove('fourth');
	b = false;
}
	var drop = false;

});
var b = false;

$(document).ready(function() {

	$('.burger').click(function(event) {
		if(b == false) {
			$('.header_mobile').slideToggle(600);
			b = true;
		} else if (b == true) {
			$('.header_mobile').slideToggle(600);
			b = false;
		}
	});

});


	
var header = document.querySelector('.header_top');
window.onscroll = function showHeader () {
var t = false;
	if(b == false && window.pageYOffset > 75 || drop == false && window.pageYOffset > 75) {
		header.classList.add('header_top_fixed');
		header.classList.remove('header_mobile_fixed');
		t = true;
	} else if(b == false && window.pageYOffset < 75) {
		header.classList.remove('header_top_fixed');
	}else if(b == true && window.pageYOffset > 75 && t == true) {
		header.classList.remove('header_mobile_fixed');
	}else if(drop == false && window.pageYOffset > 75) {
		header.classList.remove('header_mobile_fixed');
	}

}

$('.burger').click(function(a) {		
		if( window.pageYOffset < 75) {
		$('.header_top').toggleClass('header_mobile_fixed');
		}
});

$('.header_mobile_menu_link').click(function(event) {
	$('.header_mobile').slideToggle(600);
	$('.burger span:nth-child(1)').toggleClass('first');
	$('.burger span:nth-child(2)').toggleClass('second');
	$('.burger span:nth-child(3)').toggleClass('third');
	$('.burger span:nth-child(4)').toggleClass('fourth');
	drop = false;

});
var drop = true;

