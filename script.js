$('body').keydown(function(e) {
    if (e.keyCode == 27) {
        // put your code here if any (that will run after Esc pressed).
        alert('Esc Pressed');
    }    
});

var e = $.Event("keydown", {
    keyCode: 27
});
    
$('#esc').click(function() {
    $("body").trigger(e);
});
