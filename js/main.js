//When you click on About Us, the font size and color will change and Grad Parties will appear after the heading

$(document).ready(function(){
  document.getElementById('hello').addEventListener("click", function(){
    var hello=$('#hello');
    hello.css({
          'color': 'red',
   });
   hello.after('GRad Parties');
  });
});
