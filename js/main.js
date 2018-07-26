$(document).ready(function(){
  document.getElementById('hello').addEventListener("click", function(){
    var hello=$('#hello');
    hello.css({
          'font-size': '30px',
          'color': 'red',
          'margin-left': '30 px'
   });
  });
});
