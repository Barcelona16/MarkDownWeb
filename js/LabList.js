function moreInfo(number) 
{
      //跳转到查看任务界面
      alert("查看" + $("#taskName" + number).html());
      $.cookie("taskName", $("#taskName" + number).html(), {
        path: '/'
      });
      window.open("view-project.html", "_blank");
      // $("#taskName"+number).html("你好");
}
    function updateTable(page) 
	{
      if (page == 0) 
	  {
		var sign = $("#pg1").html();
		if(sign>=1)
		{
			for (var x = 1; x <= 9; x++) 
			{
				$("#pg" + x).html(parseInt($("#pg" + x).html()) - 1);
			}
		}
      } 
	  else if (page == 10) 
	  {
        for (var x = 1; x <= 9; x++) 
		{
          $("#pg" + x).html(parseInt($("#pg" + x).html()) + 1);
        }
      } 
	  else 
	  {
        var sign = $("#pg" + page).html();
        $("#pg1").html(parseInt(sign));
        for (var x = 2; x <= 9; x++) 
		{
          $("#pg" + x).html(parseInt(sign) + 1);
          sign = parseInt(sign) + 1;
        }
      }
      //发送请求
      var pageNumber = $("#pg1").html();
      var token = $.cookie("token");
      var username = $.cookie("username");
      var keyword = $("#key").val();
      $.ajax({
        "url": "/LabList",
        "type": "post",
        "data": {
          "keyword": keyword, //搜索关键词 默认为''
          "pageNumber": pageNumber //当前页数 1-正无穷
        },
        "success": function(state) {
          if (state.status == "failure") {
            alert(state.message);
            window.location.href = 'LabList.html';
            console.log(state);
          } else 
		  {
			alert("拉取数据成功");
		  
            $.each(state.result, function(id, obj)
			{
			    let idx = id + 1;
				alert(obj.teacherName);
				$("#taskName"+idx).html(obj.taskName);
				$("#teacherName"+idx).html(obj.teacherName);
				$("#labName"+idx).html(obj.labName);
				$("#taskStatus"+idx).html(obj.taskStatus);
				$("#peopleNumber"+idx).html(obj.peopleNumber);
		
			});
          }
        },
        "error": function(XMLHttpRequest, textStatus, errorThrown) {
          window.location.href = 'LabList.html';
          alert(XMLHttpRequest.status + " " + textStatus);
        },
        "dataType": "json",
        "async": true
      });
    }
function HomePage()
{
      if($.cookie('status') == "Student")
	  window.location.href='HomepageStudent.html';
      else 
	  window.location.href='HomepageTeacher.html';
}

function Task()
{
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
function viewHomepage(num)
{
	alert("查看" + $("#teacherName" + num).html());
	$.cookie("viewUsername", $("#teacherName" + num).html(), {
        path: '/'
      });
      window.open("viewHomepageTeacher.html", "_blank");
}
function search()
{
	alert("老子在搜索");
	updateTable(1);
}