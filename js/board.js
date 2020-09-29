$(function(){
//gnb
setLayout();
//모바일메뉴
$('.mobile_menu>ul>li>a').toggle(function(){
 $(this).siblings(".submenu").slideDown("fast");
},function(){
 $(this).siblings(".submenu").slideUp("fast");
});
//모바일메뉴 현재메뉴 오픈
open_cur_m_menu();

});
/*모바일메뉴버튼*/
$(function() {
 $("#callNav").click(function() {
  $(".mobile_menu").animate({right:"0px"},300,"easeOutQuart");
  if(!$(this).hasClass('active')) {
   $(this).addClass('active');
  } else {
   $(this).removeClass('active');
   $(".mobile_menu").animate({right:"-250px"},300,"easeOutQuart");
  }
 });
});
/*모바일메뉴버튼*/
//win resize
$(window).resize(function(){
 setLayout();
});

//all_menu출력 및 header height 반응형 처리
function setLayout(){
 var winW = $(window).width();
 var winH = $(window).height();
 var hbn_url = document.location.href;
//alert(hbn_url.search("cate"));
if(hbn_url.search("index.html")>-1 || hbn_url.search("php")==-1){//메인일경우
 $('#gnb ul.menu>li').hover(function(){
  $(".submenu", this).show();
  $(".submenu", this).stop().animate({right:"-120px"},'fast',"easeOutQuart");
  $("#header_wrap_bg").stop().animate({left:"120px"},'fast',"easeOutQuart");
 },function(){
  $(".submenu", this).hide();
  $(".submenu", this).stop().animate({right:"-100px"},'fast',"easeOutQuart");
  $("#header_wrap_bg").stop().animate({left:"0"},'fast',"easeOutQuart");
 });

}else{//서브일경우

 if(winW<=1577){
//초기화
$('#gnb ul.menu>li').unbind("hover");
$("#header_wrap_bg").stop().animate({left:"0"},'fast',"easeOutQuart");
$(".submenu").hide();
$('#gnb ul.menu>li').hover(function(){
 $(".submenu", this).show();
 $(".submenu", this).stop().animate({right:"-120px"},'fast',"easeOutQuart");
 $("#header_wrap_bg").stop().animate({left:"120px"},'fast',"easeOutQuart");
},function(){
 $(".submenu", this).hide();
 $(".submenu", this).stop().animate({right:"-100px"},'fast',"easeOutQuart");
 $("#header_wrap_bg").stop().animate({left:"0"},'fast',"easeOutQuart");
});
}else if(winW>1600){
//초기화
$('#gnb ul.menu>li').unbind("hover");
$("#header_wrap_bg").stop().animate({left:"120px"},'fast',"easeOutQuart");
$("#gnb ul.menu>li a.selected").siblings("div.submenu").show();
$("#gnb ul.menu>li a.selected").siblings("div.submenu").stop().animate({right:"-120px"},'fast',"easeOutQuart");
$('#gnb ul.menu>li').hover(function(){
 $("#gnb ul.menu>li a.selected").siblings("div.submenu").hide();
 $("#gnb ul.menu>li a.selected").siblings("div.submenu").stop().animate({right:"-100px"},'fast',"easeOutQuart");
 $(".submenu", this).show();
 $(".submenu", this).stop().animate({right:"-120px"},'fast',"easeOutQuart");
//$("#header_wrap_bg").stop().animate({left:"120px"},'fast',"easeOutQuart");
},function(){
 $(".submenu", this).hide();
 $(".submenu", this).stop().animate({right:"-100px"},'fast',"easeOutQuart");
 $("#gnb ul.menu>li a.selected").siblings("div.submenu").show();
 $("#gnb ul.menu>li a.selected").siblings("div.submenu").stop().animate({right:"-120px"},'fast',"easeOutQuart");
//$("#header_wrap_bg").stop().animate({left:"0"},'fast',"easeOutQuart");
});
}

}
//height 반응형처리
if(winH>=888){
 $("#header .third").show();
 $("#header .forth").show();
 $("#quick_icon").show();
}else if(winH<888 && winH>755){
 $("#phone").show();
 $("#fax").show();
 $("#header .third").hide();
 $("#header .forth").hide();
 $("#quick_icon").hide();
}else if(winH<=755){
 $("#phone").hide();
 $("#fax").hide();
 $("#quick_icon").hide();
}

}
//모바일메뉴 현재메뉴 오픈
function open_cur_m_menu(){
 var cur_m_menu = $('.mobile_menu>ul>li>a');
 var len_m_menu = cur_m_menu.length;
 for(var i=0; i<len_m_menu; i++){
  if($(cur_m_menu).eq(i).hasClass("selected")){
   $(cur_m_menu).eq(i).siblings(".submenu").show();
  }
 }
}

//quick메뉴 스크롤
$(window).scroll(
 function() {
  var npos = $(window).scrollTop();
//퀵메뉴
if(npos>=376) {
 $('#quick_menu').stop();
 $('#quick_menu').animate({top:(npos-376)+"px"},500,"easeOutQuart");
}else{
 $('#quick_menu').stop();
 $('#quick_menu').animate({top:"24px"},500,"easeOutQuart");
}
}
);
//팝업
var win= null;
function NewWindow(mypage,myname,w,h,scroll){
 var winl = (screen.width-w)/2;
 var wint = (screen.height-h)/2;
 var settings ='height='+h+',';
 settings +='width='+w+',';
 settings +='top='+wint+',';
 settings +='left='+winl+',';
 settings +='scrollbars='+scroll+',';
 settings +='resizable=yes';
 win=window.open(mypage,myname,settings);
 if(parseInt(navigator.appVersion) >= 4){win.window.focus();}
}

function gnbController(mainClass, subClass){
var mainChk = $("#listId>li>a"); // 1st for 문에서 length 를 체크할 항목 기준.
for(var i = 0; i < mainChk.length ; i++){
var subChk = $("#listId>li").eq(i); //변수 i 에 따라 대분류 li가 달라진다
if(subChk.find("a").eq(0).text() == mainClass) { //체크할 항목 "투자정보" 에 도달하면 조건을 건다
//subChk.eq(0).addClass("selected");
subChk.find("a").eq(0).addClass("selected");
subChk.find(".submenu").eq(0).show();
subChk.find(".submenu").eq(0).stop().animate({right:"-120px"},'fast',"easeOutQuart");
$("#header_wrap_bg").stop().animate({left:"120px"},'fast',"easeOutQuart");
for (var z = 0; z < subChk.find("li>a").length; z++){ // 대분류i의 위치에 따른 소분류 length
 if(subChk.find("li>a").eq(z).text() == subClass){
//subChk.find("li").eq(z).addClass("selected");
subChk.find("li>a").eq(z).addClass("selected");
} else {
 subChk.find("li>a").eq(z).removeClass("selected");
}
};
} else {
 subChk.find("a").eq(0).removeClass("selected");
}
};
};
$(function() {
 var winW = $(window).width();
 if (winW < 768) {
  $(".videoCover").css("display","none");
  //$(".pc_video").pause();
  $(".pc_video").addClass("play");
 }
});

/*============================ 포트폴리오 스크립트 ============================*/
$(function() {
	// 포트폴리오 클릭시 ajax 로드 및 레이어 모달 작동 (관리자로 로그인했을 경우는 상세페이지로 이동)

});


// $(function() {
//     $(window).load(function() {
//         var winWidth = $(window).width();
//         if (winWidth < 1367) {
//             $(".portfolio-list").removeClass("portfolio-list");

//         }
// 		if (winWidth > 1367) {
//    //          $(".portfolio-list > li a").click(function(e) {
// 			// 	if(!$("#check_admin").data('admin')) {
// 			// 		e.preventDefault();
// 			// 		var loadURL = $(this).attr('href');
// 			// 		var temp;
// 			// 		var subject;
// 			// 		var client;
// 			// 		var content;

// 			// 		$.ajax({
// 			// 			url: loadURL,
// 			// 			type: 'GET',
// 			// 			async: false,
// 			// 			success: function(data) {
// 			// 				temp = $(data).find('#bo_v').html();
// 			// 				subject = $.trim($(temp).find('#bo_v_title').text());
// 			// 				client = $.trim($(temp).find('#info-client').text());
// 			// 				content = $(temp).find('#bo_v_con').html();

// 			// 				$("#pf-layer > .content > .title > h2, #pf-layer > .content > .title > p, #pf-layer > .content > .inner").html('');
// 			// 				$("#pf-layer > .content > .title > h2").text(subject);
// 			// 				$("#pf-layer > .content > .title > p").text(client);
// 			// 				$("#pf-layer > .content > .inner").html(content);
// 			// 				$("#pf-layer").stop().fadeIn(300);
// 			// 			},
// 			// 			error: function() {
// 			// 				alert('데이터를 불러오는 데 실패하였습니다. \n\n다시 시도해주시기 바랍니다.');
// 			// 			}
// 			// 		});
// 			// 	}
// 			// });

// 			// 레이어모달 닫기
// 			$("#pf-layer > .mask, #pf-layer .btn-close").click(function() {
// 				$("#pf-layer").stop().fadeOut(300);
// 			});
//         }
//     });
// });

// 게시판 카테고리 탭 (2017-08-08 추가)
$(function() {

    // 카테고리 링크 클릭시
    $(document).on('click', '#bo_gall > a', function() {

            if(!$(this).hasClass('open')) {
                $(this).addClass('open');
                $(this).next('ul.tab').css('display','block');
            } else {
                $(this).removeClass('open');
                $(this).next('ul.tab').css('display','none');
            }

    });

	// 카테고리 링크 클릭시
    $(document).on('click', '#bo_list > a', function() {

            if(!$(this).hasClass('open')) {
                $(this).addClass('open');
                $(this).next('ul.tab').css('display','block');
            } else {
                $(this).removeClass('open');
                $(this).next('ul.tab').css('display','none');
            }

    });

});

// 포토갤러리 커스터마이징
$(function() {
    var subject = new Array(); // 갤러리 썸네일 제목 배열변수 선언
    var content = new Array(); // 갤러리 썸네일 내용 배열변수 선언
    var url = new Array(); // 각 썸네일별 링크 저장용 변수
    var thumbCount; // 썸네일 개수 (추출개수)
    var refHeight; // 높이 동기화를 위한 변수
    // 갤러리 초기세팅
    function galleryInit() {
        if($(".portfolio-list2").length > 0) {
            thumbCount = $("#fboardlist .bbsnewf5").length;
            if($(".hoverBox").length > 0) {
                $(".hoverBox").parent('a').remove();
            }
            for(i=0; i<thumbCount; i++) {
                url[i] = $("#fboardlist .bbsnewf5").eq(i).find('a:first').attr('href');
                subject[i] = $("#fboardlist .bbsnewf5").eq(i).find('h3').text();
                content[i] = $("#fboardlist .bbsnewf5").eq(i).find('p').text().replace('[간략설명 : ','').replace(']' ,'');
                // 썸네일 있는 td 내부에 hover 효과를 주기 위한 박스 태그 생성 (각각 썸네일 내에 반복문으로 삽입)
                $("#fboardlist .bbsnewf5").eq(i).find('div.imgBox').append('<a href="' + url[i] + '"><div class="hoverBox"><div class="inner"><h3>' + subject[i] + '</h3><p>' + $.trim(content[i]) + '</p></div></div></a>');
            }
            // 기존에 보여지는 별도 td 의 제목, 내용은 숨김
            //$(".infoArea").css('display','none');
        }
    }
    galleryInit();
});



$(function() {
	$(".faq-list > li > .question").click(function() {
		if(!$(this).parent().hasClass('open')) {
			$(".faq-list > li").removeClass('open');
			$(".faq-list > li > .answer").stop().slideUp(300);
			$(this).parent().addClass('open');
			$(this).siblings('.answer').stop().slideDown(300);
		} else {
			$(this).parent().removeClass('open');
			$(this).siblings('.answer').stop().slideUp(300);
		}
	});
});
