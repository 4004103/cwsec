$(function () {
  'use strict'

  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open')
  })
/*
	$('[data-toggle="offcanvas"]').click(function(){
		$('.offcanvas-collapse').slideToggle('fast');
	});*/

})