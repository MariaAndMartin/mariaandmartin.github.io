function detectLang(){
	var userLang = navigator.language || navigator.userLanguage; 
    console.log("userlang is " + userLang);
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

	var lang = detectLang();
	console.log(lang);
	//translate page
	if (lang.indexOf("fr") > -1) {
		//translate in french
        translateIn("fr-FR");

	} else if (lang.indexOf("it") > -1) {
		//translate in italian
        translateIn("it-IT");
	} else {
        // translate in english
        translateIn("en-GB");
    }
}

function translateIn(locale) {
    // Parse JSON string into object
    console.log("executing translatein for " + locale);
    var allElementsId = getAllElements();
    console.log("got all elements");
    $.getJSON("/js/content.json", function(json) {
        console.log("parsing JSON");
        var contentObject = JSON.parse(JSON.stringify(json));
        console.log("parsed the json.");
        localeObject = contentObject[locale];
        //change html language declaration
        var langDecl = document.getElementById("lang");
        langDecl.setAttribute("lang",locale)


        for (i=0 ; i < allElementsId.length; i++) { // loops through the IDs of the page

            for (j=0; j < Object.keys(localeObject).length; j++) { // loops through the JSON pieces
                if(allElementsId[i] == Object.keys(localeObject)[j]) { 
                	// if the ID is found within the JSON
                    var el = document.getElementById(allElementsId[i]);
                    if (allElementsId[i] == "storymapper"){
                    	el.setAttribute("src",localeObject[allElementsId[i]]);
                    } else if (allElementsId[i] == "form"){
                        el.setAttribute("src",localeObject[allElementsId[i]]);
                    } else if(allElementsId[i]=="flights"){
                	  	var flights_data = localeObject[allElementsId[i]];
                	  	el.setAttribute("href", flights_data['href']);
                	  	el.innerHTML = flights_data['innerHTML'];
                    }
                    else{
                    	el.innerHTML = localeObject[allElementsId[i]];
                    }
                    
                } else {
                	continue;
                }
            }
            


       }
    });
}

function addtoStorage(locale) { //get executed when the user clicks on the dropdown1
    localStorage.setItem("locale",locale);
}
