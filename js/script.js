$(function(){
	
	$('.js-tab-control').on('click', function(){
		$('.js-tab-control').removeClass('active');
		$(this).addClass('active');

		$('.js-tab').removeClass('active');
		$('.' + $(this).attr('data-tab')).addClass('active');

		return false;
	})
	
});