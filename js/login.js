    function LogInStudent() {
        $.ajax({
            "url": "/studentLogIn",
            "type": "post",
            "data": {
                "username": $("#username").val(),       //用户名
                "password": $("#password").val()        //密码
            },
            "success": function(state) {
                if(state.status == "failure") {
                    alert(state.message);
                }
                else {
                    $.cookie("token", state.token, {path:'/'});
                    $.cookie("username", $("#username").val(), {path:'/'});
                    $.cookie("status", "Student", {path:'/'});

                    window.location.href='HomepageStudent.html';
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
    function LogInTeacher() {
        $.ajax({
            "url": "/teacherLogIn",
            "type": "post",
            "data": {
                "username": $("#username").val(),       //用户名
                "password": $("#password").val(),       //密码
            },
            "success": function(state) {
                if(state.status === "failure") {
                    alert(state.message);
                }
                else {
                    $.cookie("token", state.token, {path:'/'});
                    $.cookie("username", $("#username").val(), {path:'/'});
                    $.cookie("status", "Teacher", {path:'/'});

                    window.location.href='HomepageTeacher.html';
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
    function Alert(){
        alert("请登录！");
    }
	function logout()
    {
	   $.cookie('username', '', { expires: -1 });
	   alert("退出成功，返回登录页面");
	   window.location.href="login.html";
    }