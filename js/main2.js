//Changes form color when it is clicked on

var fform = document.getElementById('clicker');
fform.addEventListener('click', function(){
   var colors = document.getElementsByClassName('form')
   var colors=$('.form');
    colors.css   ({
        'background-color': 'dimgray',
        'color': 'white',
    });
});
