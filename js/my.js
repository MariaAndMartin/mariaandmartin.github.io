function detectLang(){
	var userLang = navigator.language || navigator.userLanguage; 
 	return userLang;
}

function loadJSON(callback) {   

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', 'content.json', true); 
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }
 	
function getAllElements(){
	var allElements = document.getElementsByTagName("*");
	var allIds = [];
	for (var i = 0, n = allElements.length; i < n; ++i) {
  		var el = allElements[i];
  		if (el.id) { allIds.push(el.id); }
	}
	return allIds
}
function translate() {

	// Get language
	var lang = detectLang();
	//find all elements
	var allElementsId = getAllElements();

	//translate page
	if (lang.indexOf("fr") > -1) {
		//translate in french
        console.log("launches translatein french");
        translateIn("fr-FR", allElementsId);

	} else if (lang.indexOf("it") > -1) {
		//translate in italian
        console.log("launches translatein italian");
        translateIn("it-IT", allElementsId);
	} else {
        // translate in english
        console.log("launches translatein english");
        translateIn("en-GB", allElementsId);
    }
}

function translateIn(locale, allElementsId) {
    // Parse JSON string into object

    $.getJSON("https://mariaandmartin.github.io/js/content.json", function(json) {
        console.log(json);

        var contentObject = JSON.parse(JSON.stringify(json));

        localeObject = contentObject[locale];

        console.log(localeObject);

        for (i=0 ; i > allElementsId.length; i++) { // loops through the IDs of the page
            
            

            for (j=0; j > localeObject.length; j++) { // loops through the JSON pieces

                if(allElementsId[i] = localeObject[j]) { // if the ID is found within the JSON
                    var el = document.getElementById(allElementsId[i]);
                    el.innerHTML = localeObject[j][0];
                }
            }
            

            // check if this element is in the content json details

       }
    });
}

$(document).ready(function () {
    console.log("launches translate");
    translate();
});