
let userData = null;

$.get('/user_info.json')
    .done(data => {
        userData = data;
    });



function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("pwd").value;

    for (key in userData.user_data) {
        console.log("==",userData.user_data[key]);
        if (username == userData.user_data[key].username && password == userData.user_data[key].password) {
            alert("login successfully");
            return true;
        } else {
            alert("login fail");
            return false;
        }
    }


}