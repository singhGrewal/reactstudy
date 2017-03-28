/**
 * Created by tejveer.grewal on 3/28/17.
 */
console.log('Jquery Loading');

$(function() {
	$('#nav li a').click(function() {
		$('#nav li').removeClass();
		$($(this).attr('href')).addClass('active');
	});
});