    $(document).ready(function(){
        var username = $.cookie('username');
        $("#login").html(username);

        $.ajax({
            "url": "/fetchStudentProject",
            "type": "post",
            "data": {
                "username": $.cookie('username')               //用户名
            },
            "success": function(projects) {   
                if(projects.status == "success"){
                    for(var i = 0; i < projects.result.length; i++){
                        var project = projects.result[i];
                        var number = i + 1;
                        $("#tableBody").append('<tr><td>'+number+'</td><td id="taskName'+i+'">'+project.taskName+'</td><td id="teacherName'+i+'">'+project.teacherName+'</td><td id="labName'+i+'">'+project.labName+'</td><td id="taskStatus'+i+'">'+project.taskStatus+'</td><td id="peopleNumber'+i+'">'+project.peopleNumber+'</td><td><a class="btn btn-outline-primary" id="infoBtn'+i+'" onclick="moreInfo('+i+')">查看详情</a></td></tr>');
                    }    
                }
                else
                    alert(projects.message);  
            },
            "error": function(XMLHttpRequest,textStatus,errorThrown) {
                alert(XMLHttpRequest.status+" "+textStatus);
            },
            "dataType": "json",
            "async": true
        });
    });
    function moreInfo(number){
        var taskName = $("#taskName"+number).html();
        $.cookie("taskName", taskName, {path:'/'});
        window.location.href='view-project.html';
    }
	function logout()
    {
	   $.cookie('username', '', { expires: -1 });
	   alert("退出成功，返回登录页面");
	   window.location.href="login.html";
    }