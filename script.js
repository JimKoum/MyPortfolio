for (let i = 0; i < 15; i++) {
    setTimeout(function() { makeDiv(); }, 1000 * i);
}

function makeDiv(){

    //Generate a div with random width height
    var divsize = ((Math.random()*100) + 50).toFixed();

    //Genarate random position for divs
    var posx = (Math.random() * ($(document).width() - divsize)).toFixed();

    $newdiv = $('<div/>').css({
        'width':divsize+'px',
        'height':divsize+'px',
        'left':posx+'px',
        'background-color': '#cfdfe2',
        'border-radius':'5px',
        'position':'absolute',
        'cursor': 'pointer' 
    });

    //Add random css class and delay
    let delay;
    var classNumber = Math.floor(Math.random() * 6) + 1;

    switch(classNumber) {
        case 1:
            $newdiv.addClass( "one" );
            delay = 9600;
          break;
        case 2:
            $newdiv.addClass( "two" );
            delay = 9600;
          break;
          case 3:
            $newdiv.addClass( "three" );
            delay = 8000;
          break;
        case 4:
            $newdiv.addClass( "four" );
            delay = 16000;
          break;
          case 5:
            $newdiv.addClass( "five" );
            delay = 10000;
          break;
        case 6:
            $newdiv.addClass( "six" );
            delay = 12000;
          break;
        default:
            $newdiv.addClass( "one" );
            delay = 9600;
    }
    
    //highlight on hover
    $newdiv.hover(function() {
        $(this).css({
            'background-color': 'white',
            'opacity': '1'
        });
    });

    //on click perform reverse animation
    $newdiv.click(function() {

        //find position/rotation  of div
        var currentPos = $(this).css('top');
        var currentRotate = $(this).css('rotate');

        $(this).css({'top': currentPos});
        $(this).css({'rotate': currentRotate});
        $(this).addClass("rev");

    });


    $newdiv.appendTo( 'body' ).fadeIn(100).delay(delay).fadeOut(5000, function(){
       $(this).remove();
       makeDiv();
    });


}
