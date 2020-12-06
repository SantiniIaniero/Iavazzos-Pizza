$(function() {
    $('.filter').click(function(){
        const category = $(this).attr('id');
        if(category == 'all') {
            $('.menu-item').show('1000');
        } else {
            $('.menu-item').not('.'+category).hide('1000');
            $('.menu-item').filter('.'+category).show('1000');
        }
    });
})

$(function() {
    $("#paymentButton").click(function(){
        $("#paymentModal").modal("show");
    });
});