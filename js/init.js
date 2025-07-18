//Hook up the tweet display

$(document).ready(function() {
						   
	$(".countdown").countdown({
				date: "25 aug 2025 14:30:00",
				format: "on"
			},
			
			function() {
				// callback function
			});

});	
