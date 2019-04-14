jQuery(function($) {
    // var $middpic = $(".box_original");
    // var $minnpic = $(".box_list");
    var $goodsname = $(".cm h2");
    var $goodsprice = $(".goodsprice");

    $.get("../api/main.php", function(res) {
        var de = res.data1;
        var i = window.localStorage.guid;
        // var middpicstr = ''; 
        // var minnpicstr = '';       
        var goodsnamestr = '';
        var goodspricestr = '';

        goodsnamestr += '' + de[i - 1].describe + '';
        goodspricestr += '' + de[i - 1].price + '';

        $goodsname.append(goodsnamestr);
        $goodsprice.append(goodspricestr);

        $(".goods_img").fangda($(".goods_img"), {
            width: 330,
            height: 330,
            imgsrc: [
                "." + de[i - 1].picture,
                "." + de[i - 1].picture,
                "." + de[i - 1].picture,
                "." + de[i - 1].picture,
                "." + de[i - 1].picture
            ]
        })
    }, 'JSON')

    var $tuichu = $(".tuichu");
    var $yidenglu = $(".yidenglu");
    if (window.localStorage.uname != '') {
        var name = window.localStorage.uname;
        $yidenglu.empty().attr("href", "javascript:void(0);").text(name);
        $tuichu.css("display", "block");
    } else if (window.localStorage.uname != '') {
        $yidenglu.empty().attr("href", "../html/login.html").text("请登录");
    }
    $tuichu.on("click", function() {
        $tuichu.css("display", "none");
        window.localStorage.uname = '';
        window.localStorage.upwd = '';
        window.localStorage.Arr = '';
        $yidenglu.empty().attr("href", "../html/login.html").text("请登录");
    })
// ==========================================
    var $shopping = $(".shopping");
    $shopping.on("click",function(){
        location.href = "./shoppingcart.html";
    })
 
// ======================================
    var $buyBtn = $(".buyBtn");
    // console.log($buyBtn);
    $buyBtn.on("click",function(){
        $.get("../api/main.php", function(res) {
            // console.log(res);
            var de = res.data1;
            // console.log(de);
            // var i = window.localStorage.guid;
            var i = window.localStorage.guid;
            console.log(i);
            var u = window.localStorage.uname;
            console.log(u);
            $.get("../api/shoppingcart.php",{"goodsid":i,"uname":u},function(res){
                // console.log(res);




            },'JSON') 
       
        // console.log(de);
        // $.get("../api/shoppingcart.php",{})
        },'JSON')
    })

})