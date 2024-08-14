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

    //Add random css class
    var classNumber = Math.floor(Math.random() * 6) + 1;

    switch(classNumber) {
        case 1:
            $newdiv.addClass( "one" );
          break;
        case 2:
            $newdiv.addClass( "two" );
          break;
          case 3:
            $newdiv.addClass( "three" );
          break;
        case 4:
            $newdiv.addClass( "four" );
          break;
          case 5:
            $newdiv.addClass( "five" );
          break;
        case 6:
            $newdiv.addClass( "six" );
          break;
        default:
            $newdiv.addClass( "one" );
    }
    
    //highlight on hover
    $newdiv.hover(function() {
        $(this).css({
            'background-color': 'white',
            'opacity': '1'
        });
    });

    let flag = 0;
    //on click perform reverse animation
    $newdiv.click(function() {

        //find position/rotation  of div
        var currentPos = $(this).css('top');
        var currentRotate = $(this).css('rotate');

        $(this).css({'top': currentPos});
        $(this).css({'rotate': currentRotate});

        if (flag == 0){

          //find and remove previous class
          var getClass = this.className;
          $(this).removeClass(getClass);

          $(this).addClass("rev");
          flag = 1;

        }else{

          //find and remove previous class
          var getClass = this.className;
          $(this).removeClass(getClass);

          $(this).addClass("rev-two");
          flag = 0;

        }

    });    

    $newdiv.appendTo('body');

}

setInterval(makeDiv, 1000);
