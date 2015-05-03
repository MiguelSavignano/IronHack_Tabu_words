function containsTabuWord(recognizedSentence, tabuWords){
    var sentence_array = recognizedSentence.split(" ");
    var i;
    console.log("FUNTION containsTabuWord"); 	

    for (i = 0; i < sentence_array.length; i++){
        if (tabuWords.indexOf(sentence_array[i]) > -1){
      	 console.log("CONTAINS WORD"); 	
         return true;
     }
    }    
}