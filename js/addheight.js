// pour définir la taille des sections

$(document).ready(function() {
    jQuery("document").ready(function () {
        // on definit notre variable min_height à la hauteur de notre fenêtre
        var min_height = jQuery(window).height();
        
        // si la section est inférieure min_height on lui donne comme propriété css
        // une hauteur minimale égale à min_height
        
        if (jQuery('section').height() < min_height) {
                    jQuery('section').css({
                        'min-height': +min_height + 'px'
                    });
        }
    });
});