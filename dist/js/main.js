"use strict";jQuery(function(o){o(".goods1");o.get("./api/main.php",function(a){var s=a.data1,e="";o.each(s,function(a,s){e+='<li class="gbtnp" data-id='+s.goodsid+">",e+='<p class="desc"><a href="#" class="desc">'+s.describe+"</a></p>",e+="<span>￥"+s.price+"</span>",e+='<a href="#" class="pic"><img src='+s.picture+"></a>",e+='<a href="#" class="gbtn">'+s.gbtn+"</a>",e+="</li>"},"json"),o(".goods1").append(e)},"JSON");o(".goods2_1");o.get("./api/main.php",function(a){var s=a.data2,e="";o.each(s,function(a,s){e+="<img src="+s.picture+">"},"json"),o(".goods2_1").append(e)},"JSON");o(".goods4_2_1");o.get("./api/main.php",function(a){var s=a.data4,e="";o.each(s,function(a,s){e+="<li data-id="+s.goodsid+">",e+='<a href="#"><img src='+s.picture+"></a>",e+='<p class="desc"><a href="#" class="desc">'+s.describe+"</a></p>",e+="<span>￥"+s.price+"</span>",e+='<a href="#" class="gbtn2">'+s.gbtn+"</a>",e+="</li>"},"json"),o(".goods4_2_1").append(e)},"JSON");o(".goods5_2_1");o.get("./api/main.php",function(a){var s=a.data5,e="";o.each(s,function(a,s){e+="<li data-id="+s.goodsid+">",e+='<a href="#"><img src='+s.picture+"></a>",e+='<p class="desc"><a href="#" class="desc">'+s.describe+"</a></p>",e+="<span>￥"+s.price+"</span>",e+='<a href="#" class="gbtn2">'+s.gbtn+"</a>",e+="</li>"},"json"),o(".goods5_2_1").append(e)},"JSON");o(".goods6_2_1");o.get("./api/main.php",function(a){var s=a.data6,e="";o.each(s,function(a,s){e+="<li data-id="+s.goodsid+">",e+='<a href="#"><img src='+s.picture+"></a>",e+='<p class="desc"><a href="#" class="desc">'+s.describe+"</a></p>",e+="<span>￥"+s.price+"</span>",e+='<a href="#" class="gbtn2">'+s.gbtn+"</a>",e+="</li>"},"json"),o(".goods6_2_1").append(e)},"JSON");o(".goods7_2_1");o.get("./api/main.php",function(a){var s=a.data7,e="";o.each(s,function(a,s){e+="<li data-id="+s.goodsid+">",e+='<a href="#"><img src='+s.picture+"></a>",e+='<p class="desc"><a href="#" class="desc">'+s.describe+"</a></p>",e+="<span>￥"+s.price+"</span>",e+='<a href="#" class="gbtn2">'+s.gbtn+"</a>",e+="</li>"},"json"),o(".goods7_2_1").append(e)},"JSON");o(".goods11_1");o.get("./api/main.php",function(a){var s=a.data11,e="";o.each(s,function(a,s){e+="<li data-id="+s.goodsid+">",e+='<a href="#"><img src='+s.picture+"></a>",e+='<p class="desc"><a href="#" class="desc">'+s.describe+"</a></p>",e+="<span>￥"+s.price+"</span>",e+='<a href="#" class="gbtn3">'+s.gbtn+"</a>",e+="</li>"},"json"),o(".goods11_1").append(e)},"JSON");var c=o(".asidemid_slide");o.get("./api/main.php",function(a){var s=a.data12,e=s.length,n="",i=0;c.height(65*(e+2)),o.each(s,function(a,s){n+='<li><a class="asidepic" href="#" data-id="'+s.goodsid+'"><img src="'+s.picture+'" alt="" /></a><p class="descol"><a href="#">'+s.describe+'</a></p><p class="evalcol"><a href="#">'+s.eval+"</a></p></li>"},"json"),c.append(n),c.children().eq(0).clone(!0).appendTo(".asidemid_slide"),c.children().eq(1).clone(!0).appendTo(".asidemid_slide");setInterval(function(){10==(i+=2)&&(i=2,c.css("top","0")),c.stop().animate({top:-i/2*130},3e3)},9e3)},"JSON");var a=o(".tuichu"),s=o(".yidenglu");if(""!=window.localStorage.uname){var e=window.localStorage.uname;s.empty().attr("href","javascript:void(0);").text(e),a.css("display","block")}else(window.localStorage.uname="")&&s.empty().attr("href","./html/login.html").text("请登录");a.on("click",function(){a.css("display","none"),window.localStorage.uname="",window.localStorage.upwd="",window.localStorage.Arr="",s.empty().attr("href","./html/login.html").text("请登录")}),setTimeout(function(){var a=o(".gbtn");a.css("display","none"),a.parent().on("mouseover",function(){o(this).children(".gbtn").css("display","block")}).on("mouseout",function(){a.css("display","none")}),o(".goods1").on("click","li",function(){window.localStorage.guid=this.dataset.id,location.href="../html/details.html"})},50),setTimeout(function(){var a=o(".gbtn2");a.css("display","none"),a.parent().on("mouseover",function(){o(this).children(".gbtn2").css("display","block")}).on("mouseout",function(){a.css("display","none")})},100),setTimeout(function(){var a=o(".gbtn3");a.css("display","none"),a.parent().on("mouseover",function(){o(this).children(".gbtn3").css("display","block")}).on("mouseout",function(){a.css("display","none")})},500)});