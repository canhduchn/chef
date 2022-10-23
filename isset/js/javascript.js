var a = document.querySelector(".nav_bar");
var b = document.querySelector(".nav_menu");
a.onclick=function(){
    var c = b.clientHeight===0;
    console.log (c);
    if(c){
        b.style.display= 'block';
    }else{
        b.style.display= 'none';
    }
}
var x = window.matchMedia("(max-width: 780px)")
var c = document.querySelectorAll('.nav_menu li a[href*="#"]');

for (var i=0;i<c.length;i++){
    var d = c[i];
    d.onclick = function(){
        if (!y && x.matches) { // If media query matches
            var y = this.nextSibling && d.nextElementSibling.classList.contains('nav_menu_drop');
            b.style.display= 'none'
          } else {
            b.style.display= 'block';
          }
        // b.style.display= 'none';
    }
}