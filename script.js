<script>
$('body').keydown(function(e) {
    if (e.keyCode == 27) {
        <button> href="Aaditay Agarwal CV Dec 2021.pdf" target="_blank"></button>
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
