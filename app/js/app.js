(function($){
	$(document).ready(function(){ 


		let prevPos = 0;

		$(window).on('scroll load', function(e){

			if((pageYOffset > $('.header').outerHeight(true) + 150) && pageYOffset < prevPos){
				$('.navbar').removeClass('rollback');
				$('body').removeClass('navbar-rollback');
				
				$('.navbar').addClass('fixed');
				$('body').addClass('navbar-fixed');
			}

			else {

				if($('.navbar').hasClass('fixed')){
					$('.navbar').addClass('rollback');
					$('body').addClass('navbar-rollback');
				}

				$('.navbar').removeClass('fixed');
				$('body').removeClass('navbar-fixed');
			}

			prevPos = pageYOffset;

		});
		
	});
})(jQuery);