// wait for the browser to be ready
$('document').ready( init );

function init() {

	// Change thr text iside the h1
	// With JS
	var h1 = document.querySelector('h1');
	h1.innerHTML = 'Change by javascript';
	// Agian with jQuery
	$('h1').html('Changed again by jQuery'); 

	// Add zebra striping to the unordered list
	// Using JS	
	var lis = document.querySelectorAll('li:nth-child(2n)');

	for (var i=0; i<lis.length; i++) {
		lis[i].style.backgroundColor = 'red';
	} 

	// Using jQuery
	$('li:nth-child(2n)').css('background-color', 'blue');

	// Listen for clicks on the menu button
	$('#menu').click(function(){
		$('ul').slideToggle();
	});




}








