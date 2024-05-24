// JavaScript Document


$(function() {
		$('#main-menu').smartmenus({
			mainMenuSubOffsetX: -1,
			mainMenuSubOffsetY: 4,
			subMenusSubOffsetX: 6,
			subMenusSubOffsetY: -6
		});
	});
	
	
	
$('.flexslider').flexslider({
    animation: "fade",
	slideshowSpeed: 7000,
	animationSpeed: 2500  
});		




$(function () {
  $('[data-toggle="tooltip"]').tooltip();

})


 $(document).ready(function() {
        $('.fancybox').fancybox();
    });
	
jQuery(function () {
		$('.page-wrapper table').addClass('table table-striped ').wrap( "<div class='table-responsive'></div>" );

    });	
	
	