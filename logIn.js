const user = [
    {
        "id": 1,
        "email": "coucou@gmail.com",
        "password": "coucou"
    },
    {
        "id": 2,
        "email": "luffy@gmail.com",
        "password": "mugiwara"
    },
    {
        "id": 3,
        "email": "zoro@gmail.com",
        "password": "mugiwara"
    }
]

document.getElementById("signButton").addEventListener("click", function(event) {
    event.preventDefault(); 

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    console.log(email);
    console.log(password);

    document.getElementById("email").value = "";
    document.getElementById("password").value = ""; 
   
    var mailChecked = true;

    if (mailChecked === validateEmail(email)){
        checkUserMail()
    }

});

function checkUserMail(){
    var html="" 
    console.log("check user email")
    for (var i = 0; i < user.length; i++) {
        var userMail = user[i].email
        html += "<p>" + user[i].id + user[i].name + "</p>"
        console.log(userMail)
    }
}

function validateEmail(inputText){
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(inputText.match(mailformat)){// && inputText.match(userMail)){
        alert("You have entered a valid email address!");    //The pop up alert for a valid email address
        document.form.email.focus();
        return true;
    } 
    else{
        alert("You have entered an invalid email address!");    //The pop up alert for an invalid email address
        document.form.email.focus();
        return false;
    }
} 