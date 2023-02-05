const timer = document.getElementById("stopwatch");
var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;

function startTimer(){
    if (stoptime == true){ // if stoptime ture mean time is stop  then assg false stoptime 
        stoptime = false;
        timerCycle();
    }
}
function stopTimer(){
    if(stoptime == false){ 
       stoptime = true;
    }
}
function timerCycle(){
    if(stoptime == false){  // line no. 19  false represet time is running 
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);
        sec = sec + 1;
         if (sec == 60){ // sec == 60 then min is 1min then sec is go 0
            min = min + 1;
            sec = 0;
         }
         if (min == 60){
            hr = hr + 1;
            min = 0;
            sec = 0;
         }
         if (sec < 0){
            sec = "0" + sec;
         }
         if(min < 0 ){
            min = "0" + min; // 09 concate 

         }
         if(hr < 0 ){
            min = "0" + hr;
         }
         timer.innerHTML = hr + ":" + min + ":" + sec;

         setTimeout("timerCycle()",1000);
    }
}