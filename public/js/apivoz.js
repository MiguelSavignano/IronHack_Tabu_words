

$( document ).ready(function() {


	// function test(recognizedText){
	// 	if ( recognizedText.indexOf("elefante")>-1){
	// 	console.log("DEVUELVO TRUE");
	// 	 return true;
	// 	}
	// };

	function getsWords(){
        var selected_card = getCard(pickRandomCardKey(cards));
        $("#tabu-key").append(selected_card[selected_card.length-1]+"<br>");
        $("#tabu-words").append(selected_card[0]+"<br>");
        $("#tabu-words").append(selected_card[1]+"<br>");
        $("#tabu-words").append(selected_card[2]+"<br>");
        $("#tabu-words").append(selected_card[3]+"<br>");
        return selected_card;
    };

	recognizer.init(); 
	$("#play-button").on ("click", function(){
		tabuWords = getsWords();
		recognizer.start();
	});

	recognizer.onRecognize(function(recognizedText){
		if (containsTabuWord(recognizedText, tabuWords ) ){
			alert("TABU!!!");
			recognizer.stop();
		}

      	console.log(recognizedText);
 	 });
		

	$("#stop-button").on ("click", function(){
		recognizer.stop();
	});
		
});


