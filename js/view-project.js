    $(document).ready(function(){
        var token = $.cookie('token');
        var username = $.cookie('username');
        var taskName= $.cookie('taskName');
        var status = $.cookie('status');
        $("#login").html(username);
        if(status == "Teacher"){
            $("#signup").attr("style","display:none;");
        }
        $.ajax({
            "url": "/subjectGetInfo",
            "type": 'post',
            "data": {
                "subject":taskName                //需要获取课题名称为taskName的所有信息
            },
            "success": function(data) {
                if(data.status == "success"){
                    $("#subject").val(data.subject);
                    $("#keyword").val(data.keyword);
                    $("#number").val(data.number);
                    $("#date").val(data.date);
                    $("#requirement").val(data.requirement);
                    $("#information").val(data.information); 
                }
                else 
                    alert(data.message);         
            },
            "error": function(XMLHttpRequest,textStatus,errorThrown) {
                alert(XMLHttpRequest.status+" "+textStatus);
            },
            "dataType": "json",
            "async": true
        });
    });
    function SignUp(){
        window.location.href='submitSignup.html';
    }
    function HomePage(){
        if($.cookie('status') == "Student") 
            window.location.href='HomepageStudent.html';
        else 
            window.location.href='HomepageTeacher.html';
    }
    function Task(){
        if($.cookie('status') == "Student") 
            window.location.href='taskStudent.html';
        else 
            window.location.href='taskTeacher.html';
    }
	function logout()
    {
	   $.cookie('username', '', { expires: -1 });
	   alert("退出成功，返回登录页面");
	   window.location.href="login.html";
    }