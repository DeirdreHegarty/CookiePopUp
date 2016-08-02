//FADES OUT THE COOKIE NOTIFICATION AND THEN REMOVES IT FROM THE DOM

$(document).ready(function(){

	$('#exitButton').click(function(){
		$('#cookiePopUp').fadeOut("slow", function(){
			$('#cookiePopUp').remove();
		});
	});
});