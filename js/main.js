$(document).ready(function() {

    var chk1 = $(".mts2-chkb-same[data-chk='1']");
    var chk2 = $(".mts2-chkb-same[data-chk='2']");
    var chk3 = $(".mts2-chkb-same[data-chk='3']");
    chk1.on('change', function() {
        chk1.prop('checked', this.checked);
    });

    chk2.on('change', function() {
        chk2.prop('checked', this.checked);
    });

    chk3.on('change', function() {
        chk3.prop('checked', this.checked);
    });
    $(function() {


        var $chkbxFilter_tags = [
            "mts2-creditcard-filter-categorya",
            "mts2-creditcard-filter-categoryb",
            "mts2-creditcard-filter-categoryc",
            "mts2-creditcard-filter-categorycred",
            "mts2-creditcard-filter-categorydebet"
        ];
        var $chkbxFilter_blocks = [".mts2-card-creditcards"];

        var $chkbxFilter_all = $("#all");
        $chkbxFilter_all.click(function() {
            $(".sort").prop("checked", false);
            $chkbxFilter_all.prop("checked", true);
        });

        $(".sort").click(function() {
            $(".mts2-plastic-card-nav__tab-switch").click(function() {
                $(".mts2-plastic-card-nav__tab-switch").removeClass("active");
                $(this).addClass("active");
                if ($(".mts2-active-indicator").hasClass("active")) {
                    $('.mts2-section-creditcard-selector__heading').text('Кредитные карты')
                } else {
                    $('.mts2-section-creditcard-selector__heading').text('Дебетовые карты')
                }
            });

            $.each($chkbxFilter_tags, function() {
                if ($("." + this).is(":checked") || $("#" + this).is(":checked")) {
                    // $("." + this).prop('checked', true);
                    $("#result " + $chkbxFilter_blocks + ":not(." + this + ")").addClass("hidden-plastic-not-" + this);

                    $chkbxFilter_all.prop("checked", false).parent().removeClass("selected");

                } else if ($("." + this).not(":checked") || $("#" + this).not(":checked")) {

                    $("#result " + $chkbxFilter_blocks + ":not(." + this + ")").removeClass("hidden-plastic-not-" + this);
                }
            });
            if ($(".sort:checked").length == 0) {
                $chkbxFilter_all.prop("checked", true).parent().addClass("selected");
                $(".sort").parent().removeClass("selected");
            }
        });
    });


    $(".collapsemts").collapse({
        toggle: false
    });

    $(".mts2menubutton").on("click", function() {
        $(".collapsemts").collapse("toggle");
        $(".mts2menubutton").toggleClass("active");
    });

    $(".mts2-navigation__search2").on("click", function() {
        // $('.mts2-navigation-lower__logo-mobile-img').animate({"opacity": "toggle"});
        $(".mts-2mobile-input-menu").fadeToggle(300);
    });

    $('.mts2-section-advantage__card').click(function(){
        console.log('hello');
        $(this).toggleClass('active-advantage');
        $(this).find('.mts2-section-advantage__card-mobile').slideToggle();
    });

    $(".mts2-sub-footer__toggler").click(function() {
        var showSubFooter = $(".mts2-sub-footer-seo");
        $(this).toggleClass("active");
        if (showSubFooter.hasClass("active")) {
            showSubFooter.removeClass("active");
            showSubFooter.slideUp();
        } else {
            showSubFooter.addClass("active");
            showSubFooter.slideDown();
        }
    });

    window.sr = ScrollReveal({
        duration: 700,
        origin: "center",
        reset: false,
        mobile: false,
        viewFactor: 0.01
    });
    // sr.reveal('.mts-reveal');
    sr.reveal(".mts-reveal", {
        duration: 800,
        reset: false,
        viewFactor: 0.01
    });
    sr.reveal(
        ".mts-reveal-order", {
            duration: 800,
            reset: false,
            viewFactor: 0.01
        },
        120
    );

   
});