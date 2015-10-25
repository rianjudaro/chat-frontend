$(document).ready(function(){
	$('.top-bar').on('click',function(e) {
        e.preventDefault();
		$(this).toggleClass('top-bar-toggle');
		$('.content-list').toggleClass('content-list-toggle')
	});
});