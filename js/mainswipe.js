$(function() {
 var mIdx = 0;
 var mCount = $("#mainVisual ul.imgList li").length;
 var mSize,
  mTimer;
 var mInterval = 3000;
 var mLast = false;
    function mainSwipe(indicator) {
     mSize = $("#mainVisual ul.imgList li").width();
     if(mIdx<0) {
      mIdx = mCount - 1;
     } else if(mIdx>=mCount) {
      mIdx = 0;
      mLast = true;
      $("#mainVisual ol.indicator li .bar").css('width','0px');
     } else {
      mLast = false;
     }
     if(indicator===true) {
      $("#mainVisual ol.indicator li").eq(mIdx).find('.bar').stop(true,false).animate({width:'100%'}, mInterval, function() {
    $("#mainVisual ul.imgList").stop(true,false).animate({left:-(mSize*mIdx) + 'px'}, 500, 'easeInCubic');
       if(mLast===true) {
        $("#mainVisual ol.indicator li .bar").css('width','0px');
       }
      });
  } else {
      $("#mainVisual ol.indicator li .bar").stop().css('width','0px');
      $("#mainVisual ol.indicator li").eq(mIdx).find('.bar').css('width','100%');
   $("#mainVisual ul.imgList").stop(true,false).animate({left:-(mSize*mIdx) + 'px'}, 500, 'easeInCubic');
  }
  $("#visualTab ol li").removeClass('on');
  $("#visualTab ol li").eq(mIdx).addClass('on');
 }
 function main_stop() {
  $("#mainVisual ul.imgList").stop();
  clearInterval(mTimer);
 }
 mTimer = setInterval(function() { mIdx++; mainSwipe(true); }, mInterval);
 $("#mainVisual .prev").click(function(e) {
  if(!$("#mainVisual ul.imgList").is(':animated')) {
   e.preventDefault();
   main_stop();
   mIdx--;
   mainSwipe(false);
  }
 });
 $("#mainVisual .next").click(function(e) {
  if(!$("#mainVisual ul.imgList").is(':animated')) {
   e.preventDefault();
   main_stop();
   mIdx++;
   mainSwipe(false);
  }
 });
 $("#mainVisual ol.indicator li, #visualTab ol li").click(function(e) {
  var _idx = $(this).index();
  if(!$("#mainVisual ul.imgList").is(':animated')) {
   e.preventDefault();
   main_stop();
   mIdx = _idx;
   mainSwipe(false);
   if($(this).parents('#visualTab').length > 0) {
    $("#visualTab ol li").removeClass('on');
    $(this).addClass('on');
   }
  }
 });
 function swipe_init() {
  var winSize = $(window).width();
  mSize = $("#mainVisual ul.imgList li").width();
  $("#mainVisual ul.imgList > li").css({width:winSize + 'px'});
  $("#mainVisual ul.imgList").css({left:-(mSize*mIdx) + 'px'});
 }
 $(function() {
  swipe_init();
  mainSwipe(true);
 })
 $(window).resize(function() {
  swipe_init();
 });
});