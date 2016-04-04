/**
 * Created by jeremyperkins on 3/25/16.
 */
$(function() {

    var $hamburger = $('hamburger-menu');

    $hamburger.on('click', function() {
        var $linkContainer = $('.dropdown-menu');
        $linkContainer.removeClass('.dropdown-menu');
    });
});
