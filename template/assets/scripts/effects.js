$(document).ready(function(){
	$('#myMenu').on('shown.bs.offcanvas', function (e) {
		$('#myMenu nav').css({"opacity" : "1"});
	})
	$('#myMenu').on('hidden.bs.offcanvas', function (e) {
		$('#myMenu nav').css({"opacity" : "0"});
	})
});