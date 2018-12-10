/**
 * Created by mokgoon on 2017-09-24.
 */

$( document ).ready(function() {

    // Sub Menu Drop Down Event 20171019
    $('.subMenu > li >a').on('click', function(){
        var subMenuChild = $(this).next('.sub-drop-menu')
        if($(subMenuChild).hasClass('active')){
            $('.subMenu .sub-drop-menu').hide().removeClass('active');
        }else{
            $(this).parents('ul').siblings('ul').find('.sub-drop-menu').hide().removeClass('active')
            $(subMenuChild).show().addClass('active');
        }
    });

    // tab
    $('#tab > li > a').on('click',function(e){
        var tabIdx = $(this).parent().index();
        $('#tab-content > div').hide();
        $('#tab-content > div').eq(tabIdx).show();
        $('#tab > li > a').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });
    // tab2
    $('#lawTab > .g-circle').on('click',function(){
        var tabIdx = $(this).index();
        $('#lawTabCnt > div').hide();
        $('#lawTabCnt > div').eq(tabIdx).show();
        $('#lawTab > div').removeClass('active');
        $(this).addClass('active');
    });
    //tab3
    $('.fair-wrap > ul > li > a').on('click',function(e){
            var tabIdx = $(this).parent().index();
            $('.fair-wrap > section > div').hide();
            $('.fair-wrap > section > div').eq(tabIdx).show();
            $('.fair-wrap > ul > li > a').removeClass('active');
            $(this).addClass('active');
            e.preventDefault();
        });
    // typography animation
    //var textObj = $('#tpgAni > span');

    /*
    // Nav
    $('#nav > a').on('click',function(){
        $('.sub-nav').toggle();
    });
    */

    /*20171019*/
    // Nav
    nav();

    if($('.sub-header').length > 0) {
        subMenuBar();
    }

});

// ProgressBar Loding...
document.onreadystatechange = function(e) {
    if (document.readyState == "interactive") {
        var all = document.getElementsByTagName("*");
        for (var i = 0, max = all.length; i < max; i++) {
            set_ele(all[i]);
        }
    }
}

function check_element(ele) {
    var all = document.getElementsByTagName("*");
    var totalele = all.length;
    var per_inc = 100 / all.length;

    if ($(ele).on()) {
        if ($('#progress_width').length>0) {
            var prog_width = per_inc + Number(document.getElementById("progress_width").value);
            document.getElementById("progress_width").value = prog_width;
            $("#bar1").animate({
                width: prog_width + "%"
            }, 10, function () {
                if (prog_width > 99) {
                    $("#bar1").css('height', '1px').css('background-color', '#FFF').css('opacity', '0.2');
                }
            });
        }
    } else {
        set_ele(ele);
    }
}

function set_ele(set_element) {
    check_element(set_element);
}

function subMenuBar(){/*20171019*/
    var $menuBar = $('section.sub-section section.menu-bar');
    var $menuBarTop = $menuBar.position().top;
    $(window).on('scroll', function(){
        var scrTop = $('html,body').scrollTop();
        if($menuBarTop <= scrTop){
            $menuBar.addClass('fixed');
        }else{
            $menuBar.removeClass('fixed');
        }
    })
}

function nav(){/*20171019*/
    $('#nav').on('mouseenter',function(){
        $('.sub-nav').addClass('open').stop(true,false).animate({
            'height':'249px'
        },700,'easeOutQuint');
    });
    $('.sub-nav').on('mouseleave',function(){
        $('.sub-nav').stop(true,false).animate({
            'height':'0px'
        },700,'easeOutQuint',function(){
            $('.sub-nav').removeClass('open')
        });
    });
}