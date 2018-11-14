    function Alert(){
        alert("请登录！");
    }
	function logout()
	{
		$.cookie('username', '', { expires: -1 });
		alert("退出成功，返回登录页面");
		window.location.href="login.html";
	}