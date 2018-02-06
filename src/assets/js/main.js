//= ../../../node_modules/jquery/dist/jquery.js
//= ../../../node_modules/popper.js/dist/umd/popper.js
//= ../../../node_modules/bootstrap/js/dist/util.js
//= ../../../node_modules/bootstrap/js/dist/tooltip.js
//= ../../../node_modules/bootstrap/js/dist/dropdown.js
//= ../../../node_modules/bootstrap/js/dist/modal.js
//= ../../../node_modules/bootstrap/js/dist/collapse.js
//= ../../../node_modules/bootstrap/js/dist/tab.js
//= ../../../node_modules/slick-carousel/slick/slick.js


//= commons/dropdown.js
//= commons/collapse.js

$(document).ready(function() {
    initCollapse();
    window.onscroll = function() {scrollFunction()};
});