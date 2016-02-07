

/*$('#rsvp').one('submit',function(){
    var response = "entry.69463734=" + encodeURIComponent($('[name=group1]').val());
    var dietary = "entry.2034397929=" + encodeURIComponent($('#dietary').val());
    var baseURL = 'https://docs.google.com/forms/d/1Nc3aCH5E5p-_17PmCJxURf-Rks5X0QxsHY_o4ElHdNM/formResponse?';
    var submitRef = '&submit=Submit';
    var submitURL = (baseURL + response +"&" + dietary + "&" + submitRef);
    console.log(submitURL);
    $(this)[0].action=submitURL;});*/

function submitForm(form){
    var url = "https://docs.google.com/forms/d/1Nc3aCH5E5p-_17PmCJxURf-Rks5X0QxsHY_o4ElHdNM/formResponse?";
    var payload = new Object();
    for (i=0; i < form.elements.length -1; i++){
        if (form[i].type =="radio"){
            //process the radio button values
            if (form[i].checked == true){
                // we found the selected radio button
                var entryId = form[i].name;
                var value = encodeURI(form[i].id);
                payload[entryId] = value;
            }
        } else if (form[i].type == "textarea"){
            //process the text area
            var entryId = form[i].name;
            var value = encodeURI(form[i].value);
            payload[entryId] = value;
        }
    }
    // create httprequest object
    var req = new XMLHttpRequest();
    var params = "";
    // create url for the request
    for (var k in payload){
        var params = params.concat(String(k),"=",String(payload[k]),"&");
    }
    var submitURL = url.concat(params,"submit=Submit");
    console.log(submitURL)
    req.open("GET",submitURL,true);
    req.setRequestHeader("Access-Control-Allow-Origin","*")
    req.send();
}

