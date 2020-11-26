$(document).ready(function() {  
    var sRole = localStorage.getItem("role");
    var aRole = sRole.split("-");
    console.log(aRole.length);
    for(key in aRole){
        if (aRole[key] == "hr") {
            
        };
        switch(aRole[key]) {
            case "hr":
              jQuery("#portal_support").css("display", "block");
              break;
            case "ac":
              jQuery("#portal_finance").css("display", "block");
              break;
            default:
              // code block
          }
    }
    
}); 