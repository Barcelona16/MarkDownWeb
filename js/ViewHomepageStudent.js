function setReadonly() //初始化设为只读
      {
        $("#login").html($.cookie('username'));
        $("#email").attr("readonly", true);
        $("#name").attr("readonly", true);
    //    $("#phoneNumber").attr("readonly", true);
        $("#studentNumber").attr("readonly", true);
        $("#grade").attr("readonly", true);
        $("#personBlog").attr("readonly", true);
        $("#lab").attr("readonly", true);
        $("#introduce").attr("readonly", true);
        $('#update').css({
          "display": "none"
        });
      }
      function takeToken() 
	  {
        var username = $.cookie('viewUsername');
        $.ajax({
          "url": "/studentGetInfo",
          "type": 'post',
          "data": {
            "username": username
          },
          "dataType": 'json',
          "timeout": 20000,
          error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert(XMLHttpRequest.status + " " + textStatus);
          },
          "success": function(data) {
			  if(data.status==="success")
			  {
            //这里解析json并填表
				$("#name").val(data.name);
            //$("#phoneNumber").val(data.phoneNumber);
				$("#studentNumber").val(data.studentNumber);
				$("#grade").val(data.grade);
				$("#email").val(data.email);
				$("#personBlog").val(data.personBlog);
				$("#lab").val(data.lab);
				$("#introduce").val(data.introduce);
			  }
			  else
			  {
				  alert(data.message);
			  }
          }
        });
      }
	  function logout()
{
	$.cookie('username', '', { expires: -1 });
	alert("退出成功，返回登录页面");
	window.location.href="login.html";
}