let $nineHour=$('#t9')

//current day at the top of the calender
let today = moment();
$('#currentDay').text(today.format('D MMM YYYY'));
//Delegate event listener to the parent element, 




// 9AM
$nineHour.on('click',function(event) {
    
    let $submitText=$(event.target).siblings('textarea').val()
    localStorage.setItem("t9",$submitText);
   
    console.log($submitText);


})

$("#in9").text(localStorage.getItem("t9"))

