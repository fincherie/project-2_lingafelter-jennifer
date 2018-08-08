//When you hover on the GRAD FOOD IS BEST section, it changes font color and background color and when you mouse out, it reverts back.

$(document).ready(function(){
  document.getElementById('hello').addEventListener("mouseover", function(){
    var hello=$('#hello');
    hello.css({
          'color': 'red',
          'background-color': 'white',
   });
  });
  document.getElementById('hello').addEventListener("mouseout", function(){
    var hello=$('#hello');
    hello.css({
          'color': 'white',
          'background-color': 'black',
    });
  });
});
