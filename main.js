
// $('body').scrollspy({ 
//     target: '#navbar-example2' 
// })

$(document).ready(function(){

  var scroll_pos = 0;
  $(document).scroll(function(){
    scroll_pos= $(this).scrollTop();
    if(scroll_pos > 610) {
      $("nav a").css('color','black');
      $("nav li a:hover").css('color','deeppink')
    }
    else
    {
      $("nav a").css('color','white');
      $("nav li a:hover").css('color','deeppink');
    }

  }) 
})



function autoType(elementClass, typingSpeed){
    var thhis = $(elementClass);
    thhis.css({
      "position": "relative",
      "display": "inline-block"
    });
    thhis.prepend('<div class="cursor" style="right: initial;"></div>');
    thhis = thhis.find(".text-js");
    var text = thhis.text().trim().split('');
    var amntOfChars = text.length;
    var newString = "";
    thhis.text("|");
    setTimeout(function(){
      thhis.css("opacity",1);
      thhis.prev().removeAttr("style");
      thhis.text("");
      for(var i = 0; i < amntOfChars; i++){
        (function(i,char){
          setTimeout(function() {        
            newString += char;
            thhis.text(newString);
          },i*typingSpeed);
        })(i+1,text[i]);
      }
    },1500);
  }
  
  $(document).ready(function(){
    // Now to start autoTyping just call the autoType function with the 
    // class of outer div
    // The second paramter is the speed between each letter is typed.   
    autoType(".type-js",100);
  });