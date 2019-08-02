'use strict';
/* gets Following information in order to create curl
	Does used URL and used methods get implemented here?
{
	{
		"exampleName": {
			Headers : {
				header1,
				...
				headerX
			},
			url: url,
		},
		"exampleName2": {
			Headers : {
				header1,
				...
				headerX
			},
			url: url,
			method: methord,
			url2: url2,
		},
		
	}
	
}
*/

function getInfo(info) {

	var names = Object.keys(info);
	for(var i = 0; i < names.length; i++) {
		var curl = "curl -X 'GET' -H 'Accept: application/json'";
		var headers = info[names[i]]["Headers"];
		var headers = Object.keys(headers);
		for(var j = 0; j < headers.length; j++) {
			console.log(info[names[i]]["Headers"]);
			curl = curl + " -H '" + headers[j] + ": " + info[names[i]]["Headers"][headers[j]] +  "'";
		}
		curl = curl + " '" + info[names[i]]["url"] + "'";
		
		var curlText = document.createElement("TEXTAREA");
		curlText.innerHTML = curl;
		console.log(MashupPlatform.widget.context.get('widthInPixels'));
		curlText.style.width = (MashupPlatform.widget.context.get('widthInPixels') -10) + 'px';
		document.body.appendChild(curlText);
	}
	
}


MashupPlatform.wiring.registerCallback('printCurl', function(data) {getInfo(data)});
