// JavaScript Document
var i;
shops.forEach(function(s){
	$(`#new3 .row`).append(`
		<div class="col-lg-4 col-md-6 col-12">
              <div class="card">
				  <div class="ibox">
                	<img class="card-img-top" src="${s.img}" alt="Card image cap">
				  </div>
                <div class="card-body">
                  <h5 class="card-title">${s.tit}</h5>
                  <p class="card-text">${s.say1}</p>
                  <span class="butp"><button type="button" class="btn btn-success" id="my${s.no}">More</button></span>
                </div>
              </div>
            </div>
	`);
	$("#new2").append(`
		<div class="modal fade" id="${s.no}">
		  	<div class="modal-dialog">
			  	<div class="modal-content">
					<div class="modal-header">
						<h2 class="fontred">${s.tit}</h2>
					</div>
					
					<div class="modal-body">
						<div class="ibox2" style="background-image: url('${s.img}')"></div>
						${s.mon}
						${s.say2}
					</div>
					
					<div class="modal-footer butp">
						<button type="button" class="btn btn-success like"><span class='glyphicon glyphicon-heart'></span>喜歡</button>
						<button type="button" class="btn btn-danger" data-dismiss="modal"><span class='glyphicon glyphicon-remove'></span>返回</button>
					</div>
					
				</div>
			  </div>
		  </div>
	`);
	$(`#my${s.no}`).click(function(){
		$(`#${s.no}`).modal();
	});
});
$(".like").click(function(){
	$(this).children("span").toggleClass("fontred");
});
$("#totop").click(function(){
	$("html,body").animate({
		scrollTop:0
	},500);
});
$(".nav-link").click(function(){
	var targetId=$(this).attr("href");
	var sectionTop=$(targetId).offset().top;
	if($(window).width()<400){
		sectionTop-sectionTop-100
	}
	$("html,body").animate({
		scrollTop:sectionTop
	},500);
});
$(".card").hover(function(){
	$(this).addClass("cmove");
},function(){
	$(this).removeClass("cmove");
});



$(".add").each(function(index){
	$(this).click(function(){
		var t=$(".num").eq(index).val();
		var n=parseInt(t)+1;
		$(".num").eq(index).val(n);
		$(".disnum").eq(index).html(n);
	
	});
});

$(".num").each(function(index){
	$(this).change(function(){
		var t=$(".num").eq(index).val();
		
		var n=parseInt(t);
		$(".num").eq(index).val(n);
		$(".disnum").eq(index).html(n);
	});
});

$(".minus").each(function(index){
	$(this).click(function(){
		var t=$(".num").eq(index).val();
		var n=parseInt(t)-1;
		if(n>1){
			$(".num").eq(index).val(n);
			$(".disnum").eq(index).html(n);
		}else{
			$(".num").eq(index).val(0);
			$(".disnum").eq(index).html(0);
		}
		
	});
});

$("#carbtn").click(function(){
	var allnum=0;
	var allnum2=0;
	for(n=0;n<=8;n++){
		var t=$(".num").eq(n).val();
		allnum=allnum+parseInt(t);
	}
	allnum2=allnum*500;
	$("#carnum").html(allnum);
	$("#carnum2").html(allnum2);
	$(".num").val(0);
	$(".disnum").html(0);
});



function login(){
	$("#loginbut").html('<span class="glyphicon glyphicon-user"></span>B016會員歡迎登入，您的登入位置為<span class="fontred">中壢區</span>');
}



var r=true;
$(".rbody").delay(1000).fadeOut("slow");
$("#robot").click(function(){
	sleep();
});
function sleep(){
	$(".rbody").toggle(function(){
		$(".rbody").css({'opacity':'1','height':'400'});
		if(r){
			$("#robot img").attr("scr","images/robot2.png");
			r=!r;
		}else{
			$("#robot img").attr("scr","images/robot.png");
			r=!r;
		}
		
		
	});
}
function keyin(event){
	var keyCode=event.which;
	if(keyCode==13){
		$("#rsayto").append('<div class="talk">'+document.getElementById("rsay").value+'＜＜</div>');
		$("#rsay").val("");
		answer();
	}
}
function answer(){
	setTimeout(function(){
		$("#rsayto").append(QA());
		var e=document.getElementById("rsay");
		e.scrollTop=e.scrollHeight;
		e.scrollLeft=e.scrollLeft;
	},500);
}
function QA(){
	c=Math.floor(Math.random()*3);
	if(c%3==0){
		return '<div class="rtxt">＞＞歡迎光臨本站，有任何疑問都可以透過我傳達喔。</div>';
	}
	if(c%3==1){
		return '<div class="rtxt">＞＞我是翻轉小農機器人如果我的答覆不如您預期，聯絡我們會有專人解答喔。</div>';
	}
	if(c%3==2){
		return '<div class="rtxt">＞＞謝謝您的建議及回覆，您的肯定是我們最大的鼓勵。</div>';
	}
}














