console.log('Jquery Loading');

$(function() {
	console.log('Jquery Loading');
	$('#nav li a').click(function() {
		$('#nav li').removeClass();
		$($(this).attr('href')).addClass('active');
	});
});