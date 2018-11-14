    $(document).ready(function(){
        var username = $.cookie('username');
        $("#login").html(username);
		markdownEdit();
    });
    function release() {
        var token = $.cookie('token');
        var username = $.cookie('username');
        $.ajax({
            "url": "/releaseProject",
            "type": "post",
            "data": {
                    "subject": $("#subject").val(),         //研究课题
                    "background": $("#background").val(),   //背景
                    "keyword": $("#keyword").val(),         //关键词
                    "number": $("#number").val(),           //招募人数
                    "date": $("#date").val(),               //截止日期
                    "requirement": $("#requirement").val(), //能力要求
                    "information":acen_edit.getValue()   //详细信息
            },
            "success": function(state) {
                if(state.status == "success")
                    window.location.href = "taskTeacher.html";
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
	function markdownEdit()
	{
		var imgUrl='';//上传图片返回的url			
		var acen_edit = ace.edit('information');//左侧编辑框
		acen_edit.setTheme('ace/theme/chrome');
		acen_edit.getSession().setMode('ace/mode/markdown');
		acen_edit.renderer.setShowPrintMargin(false);
				
		$("#information").keyup(function() {//给左侧编辑框添加事件，，当键盘抬起时，右侧实时显示左侧的md内容
			$("#preview").html(marked(acen_edit.getValue()));
		});
				

		function f_commit() 
		{
			console.log($('#group').val());
		}
				//DownPanel是我自己写的一个提示，当鼠标移到该dom上，回显示相关提示
				$('#bold').DownPanel({
					render: '<span style="color:#ffffff;">加粗</span>',
					background: '#000000',
					top: ($('#bold').offset().top + 40),
					left: ($('#bold').offset().left)
				});
				$('#code').DownPanel({
					render: '<span style="color:#ffffff;">插入代码</span>',
					background: '#000000',
					top: ($('#code').offset().top + 40),
					left: ($('#code').offset().left)
				});
				$('#hyperlink').DownPanel({
					render: '<span style="color:#ffffff;">插入超链接</span>',
					background: '#000000',
					top: ($('#hyperlink').offset().top + 40),
					left: ($('#hyperlink').offset().left)
				});
				$('#image').DownPanel({
					render: '<span style="color:#ffffff;">插入图片</span>',
					background: '#000000',
					top: ($('#image').offset().top + 40),
					left: ($('#image').offset().left)
				});
				$('#italic').DownPanel({
					render: '<span style="color:#ffffff;">斜体</span>',
					background: '#000000',
					top: ($('#italic').offset().top + 40),
					left: ($('#italic').offset().left)
				});
				
				//左侧插入，用户插入一些特定方法
				function insertText(val) {
					acen_edit.insert(val); //光标位置插入
				}
				
				//选择图片后，用于显示图片路径
				function setFile(){
					$('#fileName').val($('#file').val());
				}
				
				//上传图片到服务器，返回图片地址
				function uploadFile(){
					imgUrl='https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white.png';
					$('#showImg').attr('src','https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white.png');
				}
				
				//插入图片弹窗取消
				function f_cancel(){
					$('#dialog').hide();
				}
				
				//插入图片
				function insert(){
					$('#dialog').hide();
					insertText('![这里写图片描述]('+imgUrl+')')
				}
				
				//显示弹窗
				function showDialog(){
					$('#dialog').show();
				}
}