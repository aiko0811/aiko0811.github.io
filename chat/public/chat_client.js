$(document).ready(function(){
	
	var socket = io();


    $("#chat-start").click(function(){
    	$.ajax({
		    url: "get_archive",
		    success: function(data){
			    $("#chat-log ul li").remove();
			    for(var i=0;i<data.length;i++)
			    {
				    var msg = data[i];
				    if(msg.username == $("#chat-name").val())
		            {
			             $("#chat-log ul").append("<li class='me-line'><b>" + msg.username + "</b>: " + msg.text + "</li>");
		            }else{
			             $("#chat-log ul").append("<il class='them-line'><b>" + msg.username + "</b>: " + msg.text + "</li>");
		            }
			    }
		    }

	    });

    });

    $.ajax({
  		url : "http://api.wunderground.com/api/9bddf79585429e29/geolookup/conditions/q/MA/Boston.json",
  		dataType : "jsonp",
  		success : function(parsed_json) {
  		var location = parsed_json['location']['City'];
  		var temp_f = parsed_json['current_observation']['temp_f'];
  		alert("Current temperature in " + location + " is: " + temp_f);
  		}
  	});

    
	
	$("#chat-form").submit(function(){
		var messageObject = {};
		messageObject.username = $("#chat-name").val();
		messageObject.text = $("#chat-input").val();
		messageObject.emoji = $("#chat-input").val();

		socket.emit("chat message", messageObject);
		$("#chat-input").val("");
		$("#chat-input").val("");
		return false;

	});

	$("#chat-input").emojioneArea({
  		pickerPosition: "top",
  		filtersPosition: "bottom",
    	tones: false,
    	autocomplete: false,
    	inline: true,
    	hidePickerOnBlur: false
  	});
	

	
	socket.on('chat message',function(msg){
		if(msg.username == $("#chat-name").val())
		{
			$("#chat-log ul").append("<li class='me-line'><b>" + msg.username + "</b>: " + msg.text + "</li>");
		}else{
			$("#chat-log ul").append("<il class='them-line'><b>" + msg.username + "</b>: " + msg.text + "</li>");
		}
		
		});
});