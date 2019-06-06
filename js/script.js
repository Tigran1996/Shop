//burger menu
$(".menu-main-menu-container").attr('id', 'menuid');
var burgerMenu = document.getElementById('burger-menu');
var overlay = document.getElementById('menuid');
burgerMenu.addEventListener('click',function(){
    this.classList.toggle("close");
    overlay.classList.toggle("overlay");

});
$(document).on("click",function(){
    $(".overlay").css("overflow","hidden")
})
$(".hover").mouseleave(
    function () {
        $(this).removeClass("hover");
    }
);
//burger end
// range
$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 8000,
      values: [ 2375, 6000 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
  } );