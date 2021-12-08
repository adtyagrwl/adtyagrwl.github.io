<script>
$('body').keydown(function(e) {
    if (e.keyCode == 27) {
        <a> href="Aaditay Agarwal CV Dec 2021.pdf" target="_blank"></a>
        alert('Esc Pressed');
    }    
});

var e = $.Event("keydown", {
    keyCode: 27
});
    
$('#esc').click(function() {
    $("body").trigger(e);
});
</script>
