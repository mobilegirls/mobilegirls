$(function() {
    smoothScroll(500);
    says();    
    contant();
    conHover();
});


function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top - ( $(window).height() - $(this).outerHeight(true) ) / 2

	        }, duration);
	    }
	});
}

function says() {
    $('.says-wrap').first().addClass('active-says');
    $('.says-controls span').first().addClass('active-control');
    
    $('.says-controls span').click(function() {
        var $this = $(this),
            $siblings = $this.parent().children(),
            position = $siblings.index($this);
    
    $('.says-wrap').removeClass('active-says').eq(position).addClass('active-says');
    $siblings.removeClass('active-control');
    $this.addClass('active-control');
});
 
}

var form = $('.contant form').hide();

function contant() {
    
    $('.contant .contant-title').click(function() {
        form.slideToggle();
        return false;
    });
}



function conHover() {
    
    $('.contantHover').click(function() {
        form.show(2500);
    });

}

