$(document).ready(function(){
    $('#gameHint').click(function(){
        $('#hintNotes').toggle(2000);
    })
})

$(document).ready(function(){
    $('.guess_submit').click(function(){
        $('#hintNotes').hide();
    })
})

