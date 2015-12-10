// mouvement fluide

$(function (){
    // au click de chaque lien on fait appelle à la fonction animate de jquery
    $("nav a").on("click", function(e) {
        e.preventDefault();
        // hash permet de cibler le href de nos liens
        var hash = this.hash;
        $("html, body").animate({
            scrollTop: $(this.hash).offset().top}, 1000, function () {
                window.location.hash = hash;
            });
    });
});