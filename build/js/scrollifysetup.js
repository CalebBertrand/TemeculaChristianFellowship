$(function() {
		$.scrollify({
			section : "div.section",
			scrollSpeed: 1400,
			easing: "easeOutExpo",
			before:function() {
				// $.scrollify.current().children().hide();
			},
			after:function() {
				// $.scrollify.current().children().fadeIn();
			}
		});
	});