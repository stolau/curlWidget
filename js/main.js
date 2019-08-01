'use strict';

// Example object
/*var object = {
	
	dates :
		["27.7", "28.7", "29.7", "30.7", "31.7", "1.8", "2.8", "3.8", "4.8", "5.8", "6.8"],
	
	values : {
		"name1" : [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, " "],
		"name2" : [10, 9, 8, 7, 6, 5, " ", 4, 3, 2, 1],
		"name3" : [" ", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
	}
}*/


function createLinkButton(content) {
	// Creates button
	// onClick creates downloadable csv file
	
	
	// Download file button
	var linkBtn = document.createElement("BUTTON");
	linkBtn.innerHTML = "download file";
	linkBtn.onclick = function() {
		var encodedUri = encodeURI(content);
		var link = document.createElement("a");
		link.setAttribute("href", encodedUri);
		link.setAttribute("download", "file.csv");
		document.body.appendChild(link);
		link.click();
	}
	return linkBtn;
}
/* TO-DO: preview button for csv content
function createTable(content) {
	var body = document.getElementsByTagName('body')[0];
	var table = document.createElement('table');
	table.style.width = '100%';
	table.setAttribtue('border', '1');
}*/ 

function main(objectArg) {
	/*
		Takes object containing 
		dates : ["1.1", "2.1"],
		
		values : {
			"name" : [10, 9],
			"name2" : [8, 7],
		}
		Creates .csv file and provides downloadable file.
	*/
	
	var maxSize = objectArg["dates"].length;
	
	var dates = objectArg["dates"];
	
	var names = Object.keys(objectArg["values"]);
	var csvContent = "data:text/csv;charset=utf-8,";
	csvContent += "\r\n" + "dates" + ",";
	for(var i = 0; i < names.length; i++) {
		csvContent += names[i] + ",";
	}
	csvContent += "\r\n";
	for(var i = 0; i < maxSize; i++) {
		csvContent += dates[i] + ",";
		for(var j = 0; j < names.length; j++) {
			csvContent += objectArg["values"][names[j]][i] + ",";
		}
		csvContent += "\r\n";
	}
	var btn = createLinkButton(csvContent);
	document.body.appendChild(btn);

}



// main(object);
MashupPlatform.wiring.registerCallback('createCSV', function(content) {main(content)});