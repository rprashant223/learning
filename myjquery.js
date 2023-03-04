
$(document).ready(function () {
    $('.odd').click();
    $('.odd').click(function () {
        console.log('you clicked',this);
       
        
    });
   // $('#wiki').hide(1800,function(){
    //    console.log('its done');
   // })
    $('#but').click(function(){
        $('#wiki').fadeToggle(2000);
    })
});
