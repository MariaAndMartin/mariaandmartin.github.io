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
function translate(){
	loadJSON(function(response) {
  		// Parse JSON string into object
    	var contentObject = JSON.parse(response);
    	// Get language
    	var lang = detectLang();
    	//find all elements
    	var allElementsId = getAllElements();
    	//translate page
    	if (lang.indexOf("fr")){
    		//translate in french
    		for (i=0 ; i > allElementsId.length; i++){
    			var el = document.getElementById(allElementsId[i]);
    			//check if this element is in the content json details
    			var frContent = contentObject[]
    		}

    	} else {
    		//translate in italian
    	}


 	});


}


translate();