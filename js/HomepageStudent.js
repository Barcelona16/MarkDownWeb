function setReadonly()
{
			$("#login").html($.cookie('username'));
			$("#email").attr("readonly", true);
			$("#name").attr("readonly", true);
			$("#phoneNumber").attr("readonly", true);
			$("#studentNumber").attr("readonly", true);
			$("#grade").attr("disabled", true);
			$("#personBlog").attr("readonly", true);
			$("#lab").attr("readonly", true);
			$("#introduce").attr("readonly", true);
			$("#department").attr("readonly", true);
			$("#keyword").attr("readonly", true);
			$("#wechatNumber").attr("readonly", true);
			$('#update').css({ "display": "none" });
}
function takeToken()
{
	   var token=$.cookie('token');
		var username=$.cookie('username');
	   $.ajax({
          "url": "/studentGetInfo",
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
			if(data.status==="success")
			{	
				$("#name").val(data.name);
				$("#phoneNumber").val(data.phoneNumber);
				$("#studentNumber").val(data.studentNumber);
				$("#grade").val(data.grade);
				$("#email").val(data.email);
				$("#personBlog").val(data.personBlog);
				$("#lab").val(data.lab);
				$("#introduce").val(data.introduce);
				$("#department").val(data.department);
				$("#wechatNumber").val(data.wechatNumber);
				$("#keyword").val(data.keyword);
			}	
			else
			{
				alert(data.message);
			}			
          }
        }); 
}
function change() 
{
        alert("请填写表单");
        $("#email").attr("readonly", false);
        $("#name").attr("readonly", false);
        $("#phoneNumber").attr("readonly", false);
        $("#studentNumber").attr("readonly", false);
        $("#grade").attr("disabled", false);
        $("#personBlog").attr("readonly", false);
        $("#lab").attr("readonly", false);
        $("#introduce").attr("readonly", false);
		$("#department").attr("readonly", false);
		$("#keyword").attr("readonly", false);
        $("#wechatNumber").attr("readonly", false);
		$('#update').css({ "display": "inline" });
}
function updateClick()
{
	var token=$.cookie('token');
	var username=$.cookie('username');
        alert("正在提交");
        $.ajax({
          "url": "/studentHomepageUpdate",
          "type": "post",
          "data": {
            "name": $("#name").val(),
            "phoneNumber": $("#phoneNumber").val(),
            "studentNumber": $("#studentNumber").val(),
            "grade": $("#grade").val(),
            "email": $("#email").val(),
            "personBlog": $("#personBlog").val(),
            "keyword" : $("#keyword").val(),
            "lab": $("#lab").val(),
            "introduce": $("#introduce").val(),
			"department":$("#department").val(),
			"wechatNumber":$("#wechatNumber").val()
          },
          "success": function(obj) 
		  {
			if(obj.status==="success")
			{
				$("#email").attr("readonly", true);
				$("#name").attr("readonly", true);
				$("#phoneNumber").attr("readonly", true);
				$("#studentNumber").attr("readonly", true);
				$("#grade").attr("disabled", true);
				$("#personBlog").attr("readonly", true);
				$("#lab").attr("readonly", true);
				$("#introduce").attr("readonly", true);
				$("#department").attr("readonly", true);
				$("#wechatNumber").attr("readonly", true);
				$("#keyword").attr("readonly", true);
				alert("提交成功");
			}
			else
			{
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
function autoCompleteKeyword()//关键词订阅列表
{
	var availableTags = ["关键词1","关键词2","关键词3","关键词4","关键词5","关键词6"];
        $( "#keyword" ).autocomplete({
            source:
                    function(request, response) {
                        var results = $.ui.autocomplete.filter(availableTags, request.term);
                        response(results.slice(0, 10));//只显示自动提示的前十条数据
                    },
            messages: {
                noResults: '',
                results: function() {}
            },
        });
}
function autoCompleteLab()//实验室订阅列表
{
	var availableTags = ["高性能所","软件所","媒体所","智能所","网络所"];
        $( "#lab" ).autocomplete({
            source:
                    function(request, response) {
                        var results = $.ui.autocomplete.filter(availableTags, request.term);
                        response(results.slice(0, 10));//只显示自动提示的前十条数据
                    },
            messages: {
                noResults: '',
                results: function() {}
            },
        });
}
function submitCheck()
{
	if($("#name").val()==='')
		alert("请填写姓名");
	else if ($("#studentNumber").val()==='')
		alert("请填写学号");
	else if ($("#phoneNumber").val()==='')
		alert("请填写手机号");
	else if($("#grade").val()==='')
		alert("请选择年级");
	else if ($("#wechatNumber").val()==='')
		alert("请填写微信号");		
	else
		return true;
}
