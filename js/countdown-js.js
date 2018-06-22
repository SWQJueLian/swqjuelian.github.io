// set the date we're counting down to

var target_date = new Date('2018-04-06').getTime();

 

// variables for time units

var days, hours, minutes, seconds;

 

// get tag element

var countdown = document.getElementById('countdown');

 

// update the tag with id "countdown" every 1 second

setInterval(function () {

 

    // find the amount of "seconds" between now and target

    var current_date = new Date().getTime();

    var seconds_left = (target_date - current_date) / 1000;

 

    // do some time calculations

    days = parseInt(seconds_left / 86400);

    seconds_left = seconds_left % 86400;

     

    hours = parseInt(seconds_left / 3600);

    seconds_left = seconds_left % 3600;

     

    minutes = parseInt(seconds_left / 60);

    seconds = parseInt(seconds_left % 60);
  

    // format countdown string + set tag value
    if(days>=0){
       Math.abs(days);
     
       Math.abs(hours);
     
       Math.abs(minutes);
     
       Math.abs(seconds);
     
       countdown.innerHTML = '<font color="#fff">已经完成倒计时：</font><br>'+'<span class="days">' + days +  ' <b>日</b></span> <span class="hours">' + hours + ' <b>时</b></span> <span class="minutes">'

       + minutes + ' <b>分</b></span> <span class="seconds">' + seconds + ' <b>秒</b></span>';  
    }else{
        countdown.innerHTML = '<font color="#fff">距离蜕变：</font><br>'+'<span class="days">' + days +  ' <b>日</b></span> <span class="hours">' + hours + ' <b>时</b></span> <span class="minutes">'

       + minutes + ' <b>分</b></span> <span class="seconds">' + seconds + ' <b>秒</b></span>';  
    }



 

}, 1000);
