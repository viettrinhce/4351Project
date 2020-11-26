
let userData = null;
let roleData = null;

$.get('/user_info.json')
    .done(data => {
        userData = data;
    });

$.get('/roles_info.json')
    .done(data => {
        roleData = data;
        console.log(roleData);
    });

function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("pwd").value;
    
    for (key in userData.user_data) {
        console.log("==",userData.user_data[key]);
        if (username == userData.user_data[key].username && password == userData.user_data[key].password) {
            localStorage.setItem("u_name",username);
            get_role(userData.user_data[key].job);
            alert("login successfully");

            return true;
        } else {
            // do nothing
        }
    }
    localStorage.setItem("role", "-");
    alert("login fail");
    return false;
}

function get_role(arr){
    console.log("in get_role()");
    var iRole = "";
    for (key in arr) {
        iRole += arr[key] + "-";
    }
    localStorage.setItem("role",iRole);
}