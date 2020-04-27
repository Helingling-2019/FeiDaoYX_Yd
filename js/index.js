// 导航
	$(document).ready(function(){
		$('.m_nav ul li').on('mouseover',function(){
			$('.m_nav_list').hide();
	   })
	   $('.m_nav ul .nav_click').on('mouseover',function(){
			$(this).find('.m_nav_list').show();
	   })
	   $('.m_nav').on('mouseout',function(){
		  $('.m_nav_list').hide();
	   }) 
	});
	/* 筛选区 */
	
/* 左轮播图 */
$(function(){
		$(".m_lunbo").slide({titCell:".hd ul",mainCell:".bd ul",effect:"left",autoPlay:true,autoPage:"<li><a></a></li>",interTime:4000,});
	});
	

/* function $(param){
 		if(arguments[1] == true){
			return document.querySelectorAll(param);
 	}else{
			return document.querySelector(param);
 		}
 	}
 					window.onload = function(){
 						var $box = $(".m_lunbo");
 						var $box1 = $("m_lunbo_1 ul li",true);
						var $box2 = $(".m_lunbo_2 ul");
 						var $box3 = $(".m_lunbo_3");
 						var $length = $box1.length;
 						var str = "";
 								for(var i=0; i<$length; i++){
 									if(i==0){
 										str+= "<li class='on'>" + (i+1) + "</li>";
 									}else{
 										str+= "<li>" + (i+1) + "</li>";
 									}
 								}
 								$box2.innerHTML = str;
								
 								//让图片自动轮播
								var currentPage = 1;
						        var timer = setInterval(go,3000);
 								function go(){
									for(var j=0; j<$length; j++){
										$box1[j].style.display = "none";
										$box2.children[j].className = "";
 									}
 									if(currentPage == $length){
										currentPage = 0;
									}
									$box1[currentPage].style.display = "block";
 									$box2.children[currentPage].className = "on";
									currentPage++;
								}
								
								//清除定时器效果
 								for(var k=0;k<$length;k++){
									$box1[k].onmouseover = function(){
										clearInterval(timer);
									};
 									$box1[k].onmouseout = function(){
 										timer = setInterval(go,3000);
 									}
 								}
 								for(var p=0;p<$box3.children.length;p++){
 									$box3.children[p].onmouseover = function(){
 										clearInterval(timer);
 									};
 									$box3.children[p].onmouseout = function(){
										timer = setInterval(go,3000);
 									}
 								}
								for(var u=0;u<$length;u++){
 									$box2.children[u].index = u;
 									$box2.children[u].onmouseover = function(){
 										clearInterval(timer);
 										for(var j=0; j<$length; j++){
 											$box1[j].style.display = "none";
											$box2.children[j].className = "";
 										}
 										this.className = "on";
 										$box1[this.index].style.display = "block";
 										currentPage = this.index + 1;
 									};
 									$box2.children[u].onmouseout = function(){
 										timer = setInterval(go,3000);
 									}
 								}
								
 								//点击左右箭头
								$box3.children[1].onclick = function(){
 									go();
								}
								$box3.children[0].onclick = function(){
 									back();
 								}
 								function back(){
 									for(var j=0; j<$length; j++){
 										$box1[j].style.display = "none";
 										$box2.children[j].className = "";
 									}
 									if(currentPage == 1){
 										currentPage = $length+1;
 									}
									$box1[currentPage-2].style.display = "block";
									$box2.children[currentPage-2].className = "on";
 									currentPage--;
 								}
 					} */