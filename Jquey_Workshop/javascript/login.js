$(document).ready(function () {
    $("button").click(()=>{
        var user=$('input[name="user"]').val();
        var password=$('input[name="password"]').val();
        $.ajax({
            type: "GET",
            url: "http://localhost:3000/Users",
            success: function (x) {
                if (x.Users.user_id==user && x.Users.password==password) {
                    alert("Login Suceesful")
                    window.location.href("../html/register.html")
                } else {
                    alert("You have entered wrong credentials")
                }
            },
            error:(x)=>{
                alert("this is error")
            }
        });
    })
});