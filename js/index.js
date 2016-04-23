$(function(){
        $("#name").focus();
    })
var key=true;
$(".sign_in").click(function(){
    key=true;
    $("#email").show();
});
$(".log_in").click(function(){
    key=false;
    $("#email").hide();
});
/*function check() {
    if(key) {
        signIn()
    }
    else{
        logIn();
    }
}*/
/*function logIn() {
    if ($('#name').val() == "" && $('#password').val() == "") {
        alert('请输入用户名和密码');
        $('#name').focus();
    }
    else if ($('#name').val() == "" && $('#password').val() != "") {
        alert('请输入用户名');
        $('#name').focus();
    }
    else if ($('#name').val() != "" && $('#password').val() == "") {
        alert('请输入密码');
        $('#password').focus();
    }
    else {
        $.ajax({
            url: "package.json",
            type: "GET",
            data: {
                "type": "login",
                "UserAccount": $("#name").val(),
                "UserPassword": $("#password").val()
            },
            dataType: "json",
            success: function (res) {
                if (res.errorCode == "0") {
                    window.location.href = "main.html";
                } else {
                    alert('用户名或密码错误');
                    $('#name').focus();
                }
            }
        });
    }
}
function signIn() {
    if ($('#name').val() == "" && $('#password').val() == "") {
        alert('请输入用户名和密码');
        $('#ame').focus();
    }
    else if ($('#name').val() == "" && $('#password').val() != "") {
        alert('请输入用户名');
        $('#name').focus();
    }
    else if ($('#name').val() != "" && $('#password').val() == "") {
        alert('请输入密码');
        $('#password').focus();
    }
    else {
        $.ajax({
            url: "package.json",
            type: "Post",
            data: {
                "type": "post",
                "UserAccount": $("#name").val(),
                "UserPassword": $("#password").val(),
                "Useremail": $("#email").val()
            },
            dataType: "json",
            success: function (res) {
                if (res.errorCode == "0") {
                    window.location.href = "main.html";
                } else {
                    alert("非常抱歉，但是好像输入的数据有问题喔");
                    $('#name').focus();
                }
            }
        });
    }
}*/