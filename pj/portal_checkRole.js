$(document).ready(function() {  
    var sRole = localStorage.getItem("role");
    var aRole = sRole.split("-");
    console.log(aRole.length);
    for(key in aRole){
        if (aRole[key] == "hr") {
            
        };
        switch(aRole[key]) {
            case "sp":
              jQuery("#portal_support").css("display", "block");
              break;
            case "fn":
              jQuery("#portal_finance").css("display", "block");
              break;
            case "sl":
              jQuery("#portal_sales").css("display", "block");
              break;
            case "hr":
              jQuery("#portal_hr").css("display", "block");
              break;
              case "tn":
              jQuery("#portal_tn").css("display", "block");
              break;
            default:
              // code block
          }
    }
    
}); 
