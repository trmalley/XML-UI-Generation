
var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange=function() {
	console.log("HERE");
  if (xhttp.readyState==4 && xhttp.status==200) {
	xhttp.open("GET", "file:///C:/Users/Documents/Interface Generation/libs/ui.xml", false);
	xhttp.send();
	createUI(xhttp);//(this);	
  }
}


function createUI(xml){
	console.log("HERE");
	var xmlDoc = xml.responseXML;
	parser = new DOMParser();
	xmlDoc = parser.parseFromString(xml.responseXML,"applixation/xml");
	var x;    
    var txt = "";
    var y;
    y = xmlDoc.getElementsByTagName("entryresult");//.childNodes[0];
    x = y[1].getElementsByTagName("title")[0].childNodes[0].nodeValue;
    alert(x);
}