function convertToHoursMinutes(number){
    var display= " ";
    var hours = Math.floor(number/60);//Uses Math.floor method to determin how many hours are in the number.
    var minutes  = number % 60;//Uses the Modulus operator to get minutes remaining on the number.
   
       if(hours != 0){
          display += hours +" "+((hours==1)?"hour":"hours")+", ";
       }
           if(minutes != 0){
              display += minutes +" "+((minutes==1)?"minute.":"minutes.");
            }
            return display;
 }
convertToHoursMinutes(70);
