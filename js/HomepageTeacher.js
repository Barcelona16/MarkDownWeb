function setReadonly()
{
		$("#login").html($.cookie('username'));
        $("#email").attr("readonly", true);
        $("#name").attr("readonly", true);
        $("#phoneNumber").attr("readonly", true);
        $("#teacherNumber").attr("readonly", true);
      //  $("#labList").attr("readonly", true);
        $("#personBlog").attr("readonly", true);
        $("#lab").attr("readonly", true);
        $("#introduce").attr("readonly", true);
		$("#wechatNumber").attr("readonly", true);
		$('#up').css({ "display": "none" });
}
function takeToken()
{
	    var token=$.cookie('token');
		var username=$.cookie('username');
        $.ajax({
          "url": "/teacherGetInfo",
          "type": 'post',
          "data": {
			"username":username
          },
          "dataType": 'json',
          "timeout": 20000,
          error: function(XMLHttpRequest, textStatus, errorThrown) 
		  {
			alert(XMLHttpRequest.status+" "+textStatus);
		  },
          "success": function(data) {
            //这里解析json并填表
              if(data.status === 'success') {
                  $("#name").val(data.name);
                  $("#phoneNumber").val(data.phoneNumber);
                  $("#teacherNumber").val(data.teacherNumber);
                 // $("#labList").val(data.labList);
                  $("#email").val(data.email);
                  $("#personBlog").val(data.personBlog);
                  $("#lab").val(data.lab);
                  $("#introduce").val(data.introduce);
                  $("#wechatNumber").val(data.wechatNumber);
              }
              else{
                  alert(data.message);
              }
          }
        }); 
}
function editClick()
{
        $("#email").attr("readonly", false);
        $("#name").attr("readonly", false);
        $("#phoneNumber").attr("readonly", false);
        $("#teacherNumber").attr("readonly", false);
       // $("#labList").attr("readonly", false);
        $("#personBlog").attr("readonly", false);
        $("#lab").attr("readonly", false);
        $("#introduce").attr("readonly", false);
		$("#wechatNumber").attr("readonly", false);
		$('#up').css({ "display": "inline" });
}
function upClick()
{
	    var token=$.cookie('token');
		var username=$.cookie('username');
        alert("正在提交");
        $.ajax({
          "url": "/teacherHomepageUpdate",
          "type": "post",
		  "timeout": 20000,
          "data": {
            "name": $("#name").val(),
            "phoneNumber": $("#phoneNumber").val(),
            "teacherNumber": $("#teacherNumber").val(),
            //"labList": $("#labList").val(),
            "email": $("#email").val(),
            "personBlog": $("#personBlog").val(),
            "lab": $("#lab").val(),
            "introduce": $("#introduce").val(),
			"wechatNumber": $("#wechatNumber").val()
			
          },
          "success": function(obj) {
              if(obj.status === 'success') {
                  alert("提交成功");
                  $("#email").attr("readonly", true);
                  $("#name").attr("readonly", true);
                  $("#phoneNumber").attr("readonly", true);
                  $("#teacherNumber").attr("readonly", true);
                 // $("#labList").attr("readonly", true);
                  $("#personBlog").attr("readonly", true);
                  $("#lab").attr("readonly", true);
                  $("#introduce").attr("readonly", true);
                  $("#wechatNumber").attr("readonly", true);
                  console.log(obj)
              }
              else{
                  alert(obj.message);
              }
          },
          "error": function(obj) {
            alert("提交失败");
            console.log(obj)
          },
          "dataType": "json",
          "async": true
        });
}
function logout()
{
	$.cookie('username', '', { expires: -1 });
	alert("退出成功，返回登录页面");
	window.location.href="login.html";
}