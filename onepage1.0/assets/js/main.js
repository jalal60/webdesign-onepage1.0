$(document).ready(function(){

	//Navbar Toogler Show/hide
	$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
	});




    //Magnific PopUp JS
    $('.project-popup').magnificPopup({
        type: 'image',
        gallery: {
			enabled: true,
		},
    });

    //CounterUp JS
    $('.counterup').counterUp({
        delay: 10,
        time: 1000
    });

    //Slick Slider JS
        $('.testimonial').slick({
            arrows: false,
            dots:true,
            autoplay:true,
            loop:true
        }); 
		
    // Projects Filter
    // init Isotope
    var $grid = $('.project-items').isotope({
        // options
    });
    // filter items on button click
    $('.projects-menu').on( 'click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
    });

    $('.projects-menu').on( 'click', 'li', function() {
        $(this).siblings(".active").removeClass('active');
        $(this).addClass("active");
    })
	
});

//Preloader
$(window).on('load',function(){
    // $("#loading").delay(1000).fadeOut(500);
    $("#loading").fadeOut(500);
});


//Sticky Menu and Scroll to Top
var btn = $('#back-to-top');
btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });

//Sticky Menu and Scroll to Top Functionality
$(window).on('scroll',function(){

        if($(this).scrollTop()>20){
            $('.header-area').addClass('sticky');
        }
        else{
            $('.header-area').removeClass('sticky'); 
        }

        //Scroll to Top
        if ($(this).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
});

