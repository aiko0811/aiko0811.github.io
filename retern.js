var n = 0; //Holid a place for a number, make it equal zero at first

$(document).ready(function(){ //When the document is ready
	for(var i=0;i<10;i++) //Start a loop. 1) Start at 0,2) Fo until ten. 3) Increment by one.
	{ //Denote what to do in the loop.
		$("#container").append("<div class='block'></div>"); //Take the container, appending a div with the class "block".
		var block = $(".block").last(); //Hold a place. Make it equal to the most recently added block.
	 //Call the "move the block right" function and pass the most recently added block.
	 moveBlockRight(block);
	 console.log("move the block!");
	}//Closing the for loop
});//Closing the ready event function

function moveBlockRight(block)
{
	n++;100%//Incrementing n (which is the block count).
	// 1)Take the most recently added block.
	// 2)Make it visible (over hald a second).
	// 3)Wait for one second per block count.
	// 4)Move it right 500px;
	block.fadeIn(500).delay(1000*n).animate({"left":"500px"});
}