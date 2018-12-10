/**
 * Created by youjoo on 2018-11-22.
 */

$( document ).ready(function () {

    nav();
  
        $('.lst-pagenav ul li span.bi-normal').click( function (){
             
            $('.lst-pagenav ul li span.bi-on').css('display', 'none');
            $(this).closest('li').find('span.bi-on').css('display','block');
            $(this).css('display','none');
            console.log($(this).closest('li').find('span.bi-on'));

        });
    
});
function nav()
{
    $('#nav').on('mouseenter', function() {
        $('.sub-nav').addClass('open').stop(true, false).animate({
                 'height' : '249px'
                //'display' : 'block' 
        },350);
        $('.sub-nav .sub-nav-wrap .sub-li > li').css('display','inline-block');
    });
    
    $('.sub-nav').on('mouseleave', function() {
        $('.sub-nav').stop(true, false).animate({
                'height':'0px'
           // 'display' : 'none'
        },350, function() { 
            $('.sub-nav').removeClass('open');
        $('.sub-nav .sub-nav-wrap .sub-li > li').css('display','none');
        });
    });
}