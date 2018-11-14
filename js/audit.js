    $(document).ready(function() {
        var username = $.cookie('username');
        var taskName = $.cookie('taskName');
        $("#login").html(username);
        $("h1").html(taskName);

        $.ajax({
            "url": "/fetchSignUpList",
            "type": "post",
            "data": {
                "taskname": $.cookie('taskName') //项目名
            },
            "success": function(lists) {
                if(lists.status == "success"){
                    for (var i = 0; i < lists.list.length; i++) {
                        var list = lists.list[i];
                        var number = i + 1;
                        $("#tableBody").append('<tr><td>'+number+'</td><td id="studentName'+i+'">'+list.studentName+'</td><td id="grade'+i+'">'+list.grade+'</td><td id="studentID'+i+'">'+list.studentID+'</td><td><a class="btn btn-outline-primary" id="infoBtn'+i+'" onclick="moreInfo('+i+')">查看报名表</a></td></tr>');
                    }   
                }
                else
                    alert(lists.message);
            },
            "error": function(XMLHttpRequest, textStatus, errorThrown) {
                alert(XMLHttpRequest.status + " " + textStatus);
            },
            "dataType": "json",
            "async": true
        });
    });
    function moreInfo(number) {
        var studentName = $("#studentName"+number).html();
        $.cookie("studentName", studentName, {path:'/'});
        window.location.href = 'checkSignup.html';
    }
	function logout()
    {
	   $.cookie('username', '', { expires: -1 });
	   alert("退出成功，返回登录页面");
	   window.location.href="login.html";
    }