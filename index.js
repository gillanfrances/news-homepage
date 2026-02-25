$(document).ready(function() {
    const $nav = $('#mainNav');
    const $overlay = $('#menuOverlay');
    const $body = $('body');

    function toggleMenu() {
        $nav.toggleClass('active');
        $overlay.fadeToggle(300); 
        
        if ($nav.hasClass('active')) {
            $body.css('overflow', 'hidden');
        } else {
            $body.css('overflow', 'auto');
        }
    }

    $('#openMenu, #closeMenu, #menuOverlay').on('click', function() {
        toggleMenu();
    });
});