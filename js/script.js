$(document).ready(function(){
    $('.tab_content').hide();
    $('.tab_content:first-child').show();
    $('.tabs li').click(function(){
        $('.tabs li').removeClass('active_1');
        $(this).addClass('active_1');
        const current_tab=$(this).attr('data-attr');
        $('.tab_content').fadeIn('slow').hide();
        $('.'+current_tab).fadeIn('slow').show();
        
    });
});

$(document).ready(function(){
    $('.tab_content_1').hide();
    $('.tab_content_1:first-child').show();
    $('.tabs1 li').click(function(){
        $('.tabs1 li').removeClass('active_1');
        $(this).addClass('active_1');
        const current_tab1=$(this).attr('data-attr');
        $('.tab_content_1').fadeIn('slow').hide();
        $('.'+current_tab1).fadeIn('slow').show();
        
    });
});