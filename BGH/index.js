import fullpage from './js/fullpage.min'
const $ = window.$
window.addEventListener('DOMContentLoaded', function() {
    var myFullpage = new fullpage('#fullpage', {
        anchors: ['anchor1', 'anchor2', 'anchor3', 'anchor4', 'anchor5', 'anchor6', 'anchor7', 'anchor8', 'anchor9'],
        menu: '.lst-pagenav',
        scrollingSpeed: 600,
        onLeave: function({index}, nextIndex, direction){
            // console.log(index, 'leave' , nextIndex);

            if (nextIndex == 9) {
                $('.lst_pagenav').addClass('end');
                $('.ico_mouse').addClass('end');
            }else{
                $('#section' +index).find('.intro').animate({'opacity':0,'margin-top':80}, 700);
                $('.lst_pagenav').removeClass('end');
                $('.ico_mouse').removeClass('end');
            }
        },
        afterLoad: function(anchorLink, {index}){
            // console.log(index, 'load');
            
            $('#section' +index).find('.intro').animate({'opacity':1,'margin-top':0}, 500);
        },
        afterRender: function(){
            // $('#video')[0].play();
        },
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE'
    });     
})