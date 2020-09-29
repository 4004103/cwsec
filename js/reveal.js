$(window).scroll(function() {
 var pos = $(this).scrollTop();
 var win = $(window);
 $(".scrollObj").each(function() {
  var objPos = $(this).offset().top;
  var objh = $(this).height();
  var winh = win.height();
  var _direction = $(this).data('scroll');
  var _delay = $(this).data('delay');
  if(pos+winh > objPos - 100) {
   if(!$(this).hasClass('scrollComplete')) {
    if(_direction==='left') {
     $(this).css({opacity:0, position:'relative', left:'-50px'});
     $(this).delay(_delay).animate({opacity:1, left:''}, 500, 'easeOutCubic');
    } else if(_direction==='right') {
     $(this).css({opacity:0, position:'relative', right:'-50px'});
     $(this).delay(_delay).animate({opacity:1, right:''}, 500, 'easeOutCubic');
    } else if(_direction==='top') {
     $(this).css({opacity:0, position:'relative', top:'50px'});
     $(this).delay(_delay).animate({opacity:1, top:''}, 500, 'easeOutCubic');
    } else if(_direction==='bottom') {
     $(this).css({opacity:0, position:'relative', top:'-50px'});
     $(this).delay(_delay).animate({opacity:1, top:''}, 500, 'easeOutCubic');
    }
    $(this).addClass('scrollComplete');
   }
  }
 });
});