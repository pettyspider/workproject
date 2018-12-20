function locateAt(e){
    e =  document.getElementById(e);/*以id命名的锚点*/  
    
    y = e.offsetTop;    
    while(e=e.offsetParent){ y += e.offsetTop;}  
    y-=96;/*悬浮菜单的高度*/  
    window.scrollTo(0,y);  
}
$(function () {
  $(window).scroll(function(){
      
        if ($(window).scrollTop()>100){
            $("#totop").fadeIn(1500);
        }
        else
        {
            $("#totop").fadeOut(1500);
        }
    });
    //当点击跳转链接后，回到页面顶部位置
    $("#totop").click(function(){
        $('body,html').animate({scrollTop:0},1000);
        return false;
    });
});