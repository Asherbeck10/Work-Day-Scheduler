let $buttonListEl=$('.input-group')

//current day at the top of the calender
let today = moment();
$('#currentDay').text(today.format('D MMM YYYY'));
//Delegate event listener to the parent element, 





$buttonListEl.on('click',function(event) {
    
    let $submitText=$(event.target).siblings('input').val()


    console.log($submitText)
})



