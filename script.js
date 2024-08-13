for (let i = 0; i < 10; i++) {
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
        'background-color': '#cfdfe2',
        'border-radius':'5px',
        'position':'absolute',
        'left':posx+'px'
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


    $newdiv.appendTo( 'body' ).fadeIn(100).delay(delay).fadeOut(200, function(){
       $(this).remove();
       makeDiv();
    });

}