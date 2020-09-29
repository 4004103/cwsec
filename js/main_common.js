$(function(){

	//Owl Carousel Trigger(Main bottom logos)
	var owl = $('.owl-carousel');

	  /* 하단배너! */
	  $('.loop').owlCarousel({
		center: false,
		items: 1,

		loop: true,
		slideWidth:100,
		margin: 30,
		nav: true,
		dot:false,
		autoplay: 3000,
		autoplayHoverPause: true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:5
			}
		}
	  });

	$('.play').on('click', function() {
	owl.trigger('play.owl.autoplay', [3000]); 
		console.log('play');
	})
	$('.stop').on('click', function() {
		owl.trigger('stop.owl.autoplay');
			console.log('stop');
	});


	$('.play').on('keypress', function(e) {
		if(e.which == '32'){
			owl.trigger('play.owl.autoplay', [3000]);
			console.log('play');
		}
	})
	$('.stop').on('keypress', function(e) {

		if(e.which == '32'){
			owl.trigger('stop.owl.autoplay');
			console.log('stop');
		}
	});

	  $( ".owl-prev").html('<i class="fa fa-chevron-left"><span class="sr-only">이전</span></a></i>');
	  $( ".owl-next").html('<i class="fa fa-chevron-right"><span class="sr-only">다음</span></i>');

	//Scroll to top
	$(window).scroll(function() {
		if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
			$('#return-to-top').fadeIn(200);    // Fade in the arrow
		} else {
			$('#return-to-top').fadeOut(200);   // Else fade out the arrow
		}
	});
	$('#return-to-top').click(function() {      // When arrow is clicked
		$('body,html').animate({
			scrollTop : 0                       // Scroll to top of body
		}, 500);
	});

	//이미지 체크박스 웹접근성으로 인하여 라벨 스페이스 입력시 체크되도록
	$(function(){
		$("input[type='checkbox'] + label").attr("tabindex","0");
	});


	$("input[type='checkbox'] + label").keypress(function(e){
		if(e.which == 32){
			if($(this).prev("input[type='checkbox']").attr("checked") != "checked")
				$(this).prev("input[type='checkbox']").attr("checked",true);
			else
				$(this).prev("input[type='checkbox']").attr("checked",false);
		}
	});

	if (matchMedia("screen and (min-width: 769px)").matches) {
	  // 769px 이상에서 사용할 JavaScript
		$(function(){
			//slide way
			var $nav = $(".navbar")
			var $nav_list = $(".nav-item > a");
			$nav_list.on("mouseover focus", function(e) {
				$nav.addClass("on");
			});
			$nav.on("mouseleave", function(e) {
				$nav.removeClass("on");
			});
			$(".dropdown-menu-right > a").on("blur", function() {
				$nav.removeClass("on");
			});
		});
	}



	$(function(){

		  $('#myCarousel').owlCarousel({
			loop:true,
			items: 1,
			nav:true,
			autoplay: 3000,
			autoplayHoverPause: true,
			rewind: true,
			dotsContainer: '#carousel-custom-dots'
		  });

		  $('#myCarousel_m').owlCarousel({
			loop:true,
			items: 1,
			nav:true,
			autoplay: 3000,
			autoplayHoverPause: true,
			rewind: true
		  });

		$('.owl-dot').click(function () {
		  $('#myCarousel').trigger('to.owl.carousel', [$(this).index(), 300]);
		});		  

	});

	$('.sub_location ul li .sp_down').on('click focus',function(){

		var state = $(this).next('ul').css("display");

		$('.sub_location ul li .sp_down + ul').hide('fast');
		$('.sub_location ul').removeClass('on');


		if(state == "none"){
			$(this).next('ul').show('fast');
			$(this).parents('ul').addClass('on');
		}
	});



	$(".subnav1>li>div").click(function() {
		$(".subnav").slideUp();
		if($(this).next("ul").length){
			$(this).next().slideToggle("slow");
			return false;
		}
 
	});

	//submenu
    $("#mysubmenu a").on("click", function(e){ //링크 클릭시
        var $data_midtxt = $(this).attr("data-midtxt");
        if( $data_midtxt ){
            $.cookie('sub_midtxt', $data_midtxt, { path: '/' });
        } else {
            $.cookie('sub_midtxt', null, { path: '/' });
        }
    });

});