$(document).ready(function () {
    const $projects = $(".project");
    const $skills = $(".skill");
    const $banners = $(".image-banner");
    const $body = $("body");
    const $themeToggle = $("#theme-toggle");

    // Initialize Slick Sliders (same as before)
    $(".image-slider-analysis").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
    });

    $(".image-slider-strategic").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
    });

    $(".image-slider-sorting").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
    });

    // Function to handle opening the correct banner and highlighting skills (same as before)
    function openBannerAndHighlightSkills(project) {
        $banners.removeClass("open");
        $skills.removeClass("active");

        $(`[data-banner="${project}"]`).addClass("open");

        if (project === "image-analysis") {
            $(`[data-skill="Python"]`).addClass("active");
            //   $(`[data-skill="PyTorch"]`).addClass("active");
        } else if (project === "strategic-decision") {
            $(`[data-skill="Python"]`).addClass("active");
        } else if (project === "sorting-algorithm") {
            $(`[data-skill="C++"]`).addClass("active");
        }
    }

    // Project title click handlers (same as before)
    $(".open-banner-link").click(function () {
        const project = $(this).parent().data("project");
        openBannerAndHighlightSkills(project);
    });

    $(".close-banner-btn").click(function () {
        $banners.removeClass("open");
        $skills.removeClass("active");
    });

    // Theme Toggle
    $themeToggle.click(function () {
        $body.toggleClass("dark-theme");
        if ($body.hasClass("dark-theme")) {
            $(this).text("Switch to Light Mode");
        } else {
            $(this).text("Switch to Dark Mode");
        }
    });
});