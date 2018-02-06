function menuNavInit() {
    $('.header-nav-regionNav-link').click(function(e) {
        e.preventDefault();
        console.log("click");
        $(this).collapse();
    });
}
