/**
 * Created by PC on 2017/5/14.
 */
$(function(){
    var $sidebar=$("#sidebar");
    var offset=$sidebar.offset();
    $(window).scroll(function(){
        var scrollTop=$(window).scrollTop();
        if(offset.top<scrollTop){
            $sidebar.addClass("fixed");
        }else{
            $sidebar.removeClass("fixed");
        }
    });

})