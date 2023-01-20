

//current day at the top of the calender
let today = moment();
$('#currentDay').text(today.format('D MMM YYYY'));
//Delegate event listener to the parent element, 




// **9AM**
//adding tasks
$('#t9').on('click',function(event) {

    let $submitText=$(event.target).siblings('textarea').val()
    if ($submitText===[""]) {
        $('#in9').text('""')
    }
        
    localStorage.setItem("t9",$submitText);
     
 })
 
 $("#in9").text(localStorage.getItem("t9"));

   

//changing colors

if (moment().format('k')==9) {
   $('#in9').css('background',' #ff6961');
   $('#in9').css('color', 'white');

}else if (moment().format('k')<9) {
    $('#in9').css('background',' #77dd77');
    $('#in9').css('color', 'white');
    
}else{
    $('#in9').css('background',' #d3d3d3');
    $('#in9').css('color', 'black');
}
    

// **10AM**
//adding tasks
$('#t10').on('click',function(event) {

    let $submitText=$(event.target).siblings('textarea').val()
    if ($submitText===[""]) {
        $('#in10').text('""')
    }
        
    localStorage.setItem("t10",$submitText);
     
 })
 
 $("#in10").text(localStorage.getItem("t10"));

   

//changing colors

if (moment().format('k')==10) {
   $('#in10').css('background',' #ff6961');
   $('#in10').css('color', 'white');

}else if (moment().format('k')<10) {
    $('#in10').css('background',' #77dd77');
    $('#in10').css('color', 'white');
    
}else{
    $('#in10').css('background',' #d3d3d3');
    $('#in10').css('color', 'black');
}