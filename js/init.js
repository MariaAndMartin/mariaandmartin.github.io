(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();


    // if there is local storage activated: add event listeners. Else: dont display the dropdown.

    if(typeof(Storage) !== "undefined") {
    	// Code for localStorage/sessionStorage.
    	document.getElementById("ENoption").addEventListener("click", function () {addtoStorage('en-GB'); translateIn('en-GB');},false);
    	document.getElementById("IToption").addEventListener("click", function () {addtoStorage('it-IT'); translateIn('it-IT');},false);
    	document.getElementById("FRoption").addEventListener("click", function () {addtoStorage('fr-FR'); translateIn('fr-FR');},false);
	} else {
	    // no local storage = no dropdown displayed.
	    $('#dropdown1').hide();
	}

	if (!localStorage.locale || typeof(Storage) == "undefined") {
		translate();
	} else {     // else: translatein the locale in local storage

		translateIn(localStorage.locale);
	}
    
  }); // end of document ready
})(jQuery); // end of jQuery name space	