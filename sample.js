// Open select2 dropdown fields on focus
var select2_open;
$(document).on( 'focus', '.select2-selection--single', function(e) {
    select2_open = $(this).parent().parent().siblings( 'select' );
    select2_open.select2( 'open' );
});

// fix for ie11
if (/rv:11.0/i.test(navigator.userAgent)) {
    $(document).on( 'blur', '.select2-search__field', function(e) {
        select2_open.select2( 'close' );
    });
}
