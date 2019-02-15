$(document).ready(function () {
    chrome.tabs.executeScript( {
        code: "window.getSelection().toString();"
    }, 
    function(selection) {
        var selection = selection[0];
        var url = 'http://www.deepl.com/';
        if(selection!=""){
            url = "https://www.deepl.com/translator#en/de/"+selection;
            $("#Frame").attr('src',url);  
        }
    });
});
