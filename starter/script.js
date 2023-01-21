

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

if (moment().format('H')==9) {
   $('#in9').css('background',' #ff6961');
   $('#in9').css('color', 'white');

}else if (moment().format('H')<9) {
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

if (moment().format('H')==10) {
   $('#in10').css('background',' #ff6961');
   $('#in10').css('color', 'white');

}else if (moment().format('H')<10) {
    $('#in10').css('background',' #77dd77');
    $('#in10').css('color', 'white');
    
}else{
    $('#in10').css('background',' #d3d3d3');
    $('#in10').css('color', 'black');
}
// **11AM**
//adding tasks
$('#t11').on('click',function(event) {

    let $submitText=$(event.target).siblings('textarea').val()
    if ($submitText===[""]) {
        $('#in11').text('""')
    }
        
    localStorage.setItem("t11",$submitText);
     
 })
 
 $("#in11").text(localStorage.getItem("t11"));

   

//changing colors

if (moment().format('H')==11) {
   $('#in11').css('background',' #ff6961');
   $('#in11').css('color', 'white');

}else if (moment().format('H')<11) {
    $('#in11').css('background',' #77dd77');
    $('#in11').css('color', 'white');
    
}else{
    $('#in11').css('background',' #d3d3d3');
    $('#in11').css('color', 'black');
}

// **12AM**
//adding tasks
$('#t12').on('click',function(event) {

    let $submitText=$(event.target).siblings('textarea').val()
    if ($submitText===[""]) {
        $('#in12').text('""')
    }
        
    localStorage.setItem("t12",$submitText);
     
 })
 
 $("#in12").text(localStorage.getItem("t12"));

   

//changing colors

if (moment().format('H')==12) {
   $('#in12').css('background',' #ff6961');
   $('#in12').css('color', 'white');

}else if (moment().format('H')<12) {
    $('#in12').css('background',' #77dd77');
    $('#in12').css('color', 'white');
    
}else{
    $('#in12').css('background',' #d3d3d3');
    $('#in12').css('color', 'black');
}

// **13AM**
//adding tasks
$('#t13').on('click',function(event) {

    let $submitText=$(event.target).siblings('textarea').val()
    if ($submitText===[""]) {
        $('#in13').text('""')
    }
        
    localStorage.setItem("t13",$submitText);
     
 })
 
 $("#in13").text(localStorage.getItem("t13"));

   

//changing colors

if (moment().format('H')==13) {
   $('#in13').css('background',' #ff6961');
   $('#in13').css('color', 'white');

}else if (moment().format('H')<13) {
    $('#in13').css('background',' #77dd77');
    $('#in13').css('color', 'white');
    
}else{
    $('#in13').css('background',' #d3d3d3');
    $('#in13').css('color', 'black');
}

// **14AM**
//adding tasks
$('#t14').on('click',function(event) {

    let $submitText=$(event.target).siblings('textarea').val()
    if ($submitText===[""]) {
        $('#in14').text('""')
    }
        
    localStorage.setItem("t14",$submitText);
     
 })
 
 $("#in14").text(localStorage.getItem("t14"));

   

//changing colors

if (moment().format('H')==14) {
   $('#in14').css('background',' #ff6961');
   $('#in14').css('color', 'white');

}else if (moment().format('H')<14) {
    $('#in14').css('background',' #77dd77');
    $('#in14').css('color', 'white');
    
}else{
    $('#in14').css('background',' #d3d3d3');
    $('#in14').css('color', 'black');
}

// **15AM**
//adding tasks
$('#t15').on('click',function(event) {

    let $submitText=$(event.target).siblings('textarea').val()
    if ($submitText===[""]) {
        $('#in15').text('""')
    }
        
    localStorage.setItem("t15",$submitText);
     
 })
 
 $("#in15").text(localStorage.getItem("t15"));

   

//changing colors

if (moment().format('H')==15) {
   $('#in15').css('background',' #ff6961');
   $('#in15').css('color', 'white');

}else if (moment().format('H')<15) {
    $('#in15').css('background',' #77dd77');
    $('#in15').css('color', 'white');
    
}else{
    $('#in15').css('background',' #d3d3d3');
    $('#in15').css('color', 'black');
}

// **16AM**
//adding tasks
$('#t16').on('click',function(event) {

    let $submitText=$(event.target).siblings('textarea').val()
    if ($submitText===[""]) {
        $('#in16').text('""')
    }
        
    localStorage.setItem("t16",$submitText);
     
 })
 
 $("#in16").text(localStorage.getItem("t16"));

   

//changing colors

if (moment().format('H')==16) {
   $('#in16').css('background',' #ff6961');
   $('#in16').css('color', 'white');

}else if (moment().format('H')<16) {
    $('#in16').css('background',' #77dd77');
    $('#in16').css('color', 'white');
    
}else{
    $('#in16').css('background',' #d3d3d3');
    $('#in16').css('color', 'black');
}

// **17AM**
//adding tasks
$('#t17').on('click',function(event) {

    let $submitText=$(event.target).siblings('textarea').val()
    if ($submitText===[""]) {
        $('#in17').text('""')
    }
        
    localStorage.setItem("t17",$submitText);
     
 })
 
 $("#in17").text(localStorage.getItem("t17"));

   

//changing colors

if (moment().format('H')==17) {
   $('#in17').css('background',' #ff6961');
   $('#in17').css('color', 'white');

}else if (moment().format('H')<17) {
    $('#in17').css('background',' #77dd77');
    $('#in17').css('color', 'white');
    
}else{
    $('#in17').css('background',' #d3d3d3');
    $('#in17').css('color', 'black');
}
