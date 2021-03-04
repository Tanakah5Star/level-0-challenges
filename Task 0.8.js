function convertToHoursMinutes(number){
    var display= "";
    var hours = Math.floor(number/60);
    var minutes  = number % 60;
    
       if(hours != 0){
          display += hours +" "+((hours==1)?"hour":"hours")+", ";
       }
           if(minutes != 0){
              display += minutes +" "+((minutes==1)?"minute.":"minutes.");
            }
            return display;
 }
 console.log(convertToHoursMinutes(70);
