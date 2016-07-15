$(document).ready(function(){
   $("next-color").click(function(){
   	//rgb(0-255,0-255,0-255)
   	 
   	 var randomRed = generateRandomColor(); 
   	 var randomGreen = generateRandomColor();
   	 var randomBlue = generateRandomColor(); 

   	 var randomColor = "rgb(" + randomRed + "," + randomGreen + "," +randomBlue + ")";
   	 $("#rhyme").css({"background-color":randomColor});
   	});
});
   function generateRandomColor()
   {
	return Math.round(Math.random() *150);
   }

