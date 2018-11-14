    function RegisterRightNow() {
        var passW = document.getElementById("password").value;
        var repassW = document.getElementById("retype-password").value;
        if(passW === repassW){
            $.ajax({
                "url": "/rightNowRegister",
                "type": "post",
                "data": {
                    "username": $("#username").val(),     //用户名
                    "email": $("#email").val(),            //邮箱
                    "status": $("#status").val(),          //身份
                    "password": $("#password").val()      //密码
                },
                "success": function(state) {
                    if(state.status == "failure") {
                        alert(state.message);
                    }
                    else {
                        window.location.href='login.html';
                    }
                    console.log(state);
                },
                "error": function(XMLHttpRequest,textStatus,errorThrown) {
                    alert(XMLHttpRequest.status+" "+textStatus);
                },
                "dataType": "json",
                "async": true
            });
        }
        else {
            alert("两次输入的密码不一致");
        } 
    }
    function Alert(){
        alert("请登录！");
    }
	function logout()
    {
	   $.cookie('username', '', { expires: -1 });
	   alert("退出成功，返回登录页面");
	   window.location.href="login.html";
    }