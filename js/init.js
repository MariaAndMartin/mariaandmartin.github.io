(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    console.log(document.getElementById("ENoption"));
    document.getElementById("ENoption").addEventListener("click", function () {translateIn('en-GB');},false);
    document.getElementById("FRoption").addEventListener("click", function () {translateIn('it-IT');},false);
    document.getElementById("IToption").addEventListener("click", function () {translateIn('fr-FR');},false);
    translate();
  }); // end of document ready
})(jQuery); // end of jQuery name space	