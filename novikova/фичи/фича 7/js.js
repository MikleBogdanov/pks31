var script = document.createElement('script');
2
script.type = 'text/javascript';
3
script.src = 'http://code.jquery.com/jquery-1.8.3.js';
4
document.head.appendChild(script);


$(function(){
	$('.block').draggable();
})

