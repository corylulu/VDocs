window.addEventListener("load", function (loadEvt) {
    let elements = document.getElementsByClassName("usermanual-collapsible");
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', function(evt) {
            if(evt.target.classList.contains("usermanual-collapsible")) {
                evt.target.classList.toggle("collapsed");
                evt.preventDefault();
                evt.stopPropagation();
            }
        }, false);
    }
});