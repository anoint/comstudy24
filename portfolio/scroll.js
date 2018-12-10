var speed = 700;

function scrolling(obj)
{
    if(!obj)
    {console.log('22');
        $('html, body').animate({scrollTop:0}, speed);
    } else {console.log('33');
        var posTop = $(obj).offset().top - 80;
        $('html, body').animate({scrollTop:posTop}, speed)
    }
};

$("ul li a").click(function(){
    var direction = $(this).attr("href");
    console.log('11');
    scrolling( direction );
    return false;
});