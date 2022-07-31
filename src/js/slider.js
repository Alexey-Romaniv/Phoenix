$(document).ready(function(){
	$('.reviews__slider-big').slick({
		asNavFor:'.reviews__slider-small',
		
		arrows:false,
		responsive:[
			{
			breakpoint: 768,
			settings:{
				arrows:true,
			}
			}
		],
		mobileFirst:true, //max-width
	});
	$('.reviews__slider-small').slick({
		slidesToShow:3,
		arrows:true,
		responsive:[
			{
			breakpoint: 768,
			settings:{
				arrows:false,
				slidesToShow:7,
			}
		}
		],
		mobileFirst:true,
		asNavFor:'.reviews__slider-big',
	});
});

