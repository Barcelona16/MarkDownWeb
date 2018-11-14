	$(document).ready(function(){
        $("#login").html(username);
        $.ajax({
            "url": "/signupGetStudentInfo",
            "type": 'post',
            "data": {
                "username": $.cookie('username'),               //教师用户名
                "studentName": $.cookie('studentName'),         //学生名
                "taskname": $.cookie('taskName')                //项目名
            },
            "success": function(data) {
                if(data.status == "success"){
                    $("#myname").html(data.name);
                    $("#grade").html(data.grade);
                    $("#major").html(data.department);
                    $("#idnumber").html(data.studentNumber);
                    $("#wechat").html(data.wechatNumber);
                    $("#phone").html(data.phoneNumber);
                    $("#blog").html(data.personBlog); 
                    $("#email").html(data.email);
                    $("#introduce").val(data.introduce);
                    $("#reason").val(data.reason);     
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
	function Pass(){
		$.ajax({
			"url": "/passSignup",
			"type": "post",
			"data": {
				"username": $.cookie('username'),               //教师用户名
                "studentName": $.cookie('studentName'),         //学生名
				"taskname": $.cookie('taskName')		        //项目名
			},
			"success": function(state)
			{
				if(state.status == "success")
                    window.location.href = "audit.html";
                else
                    alert(state.message);
			},
			"error": function(XMLHttpRequest, textStatus, errorThrown) 
			{
				alert(XMLHttpRequest.status + " " + textStatus);
			},
			"dataType": "json",
			"async": true
		});
	}
    function Fail(){
        $.ajax({
            "url": "/failSignup",
            "type": "post",
            "data": {
                "username": $.cookie('username'),               //教师用户名
                "studentName": $.cookie('studentName'),         //学生名
                "taskname": $.cookie('taskName')                //项目名
            },
            "success": function(state)
            {
                if(state.status == "success")
                    window.location.href = "audit.html";
                else
                    alert(state.message);           
            },
            "error": function(XMLHttpRequest, textStatus, errorThrown) 
            {
                alert(XMLHttpRequest.status + " " + textStatus);
            },
            "dataType": "json",
            "async": true
        });
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
