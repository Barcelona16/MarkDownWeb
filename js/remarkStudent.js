    $(document).ready(function(){
        var subject = $.cookie('taskName');
        var username = $.cookie('username');
        $("#subject").val(subject); 
        $("#login").html(username);
    });
    function Submit(){
        $.ajax({
            "url": "/studentSubmitRemark",
            "type": "post",
            "data": {
                "subject": $("#subject").val(),         //研究课题
                "remark": $("#remark").val(),           //任务评价
                "username": $.cookie('username')        //评价人
            },
            "success": function(state) {
                if(state.status == "success")
                    window.location.href='taskStudent.html';
                else
                    alert(state.message);
            },
            "error": function(XMLHttpRequest,textStatus,errorThrown) {
                alert(XMLHttpRequest.status+" "+textStatus);
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