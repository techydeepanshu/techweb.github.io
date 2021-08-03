$('.portfolio-item').isotope({
// options
itemSelector: '.item',
layoutMode: 'fitRows'
});

$('.portfolio-menu ul li').click(function(){
    $('.portfolio-menu ul li').removeClass('active');
    $(this).addClass('active');

    let selector = $(this).attr('data-filter');
    $('.portfolio-item').isotope({
        filter:selector
    });
    return false;
});