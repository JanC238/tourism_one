<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>成都蓝色风暴科技</title>
<script src="/lsfb/tourism_one/Public/admin/js/jquery.min.1.8.1.js"></script>
</head>
<style>
*{margin:0 auto;padding:0;list-style-type:none;}
body{background-color: #2F85DF;}
.content{width: 1000px; height: 100%;  margin-top:10%; text-align: center;}
.inp_divone{ width: 314px; height: 44px;margin-bottom: 20px;background-image: url('/lsfb/tourism_one/Public/admin/main/border.png'); }
.true_login{ margin-top:30px; }
.right_yuan{ cursor:pointer; float: right;width: 40px; height: 40px; margin-top: 3px; margin-right: 7px; background-image: url('/lsfb/tourism_one/Public/admin/main/write.png');
-moz-transition: -moz-transform 0.5s; /* Firefox 4 */
-webkit-transition:-webkit-transform 0.5s; /* Safari and Chrome */
-o-transition:-o-transform 0.5s; /* Opera */}
.right_yuan:HOVER{
transform:rotate(180deg);
-moz-transform:rotate(180deg); /* Firefox 4 */
-webkit-transform:rotate(180deg); /* Safari and Chrome */
-o-transform:rotate(180deg); /* Opera */}
.inputs{color:white; width: 270px; height: 34px; margin-top: 5px; border: 1px solid #2F85DF;outline:none; background-color:#2F85DF; }
input::-webkit-input-placeholder {color:white;}
input:-moz-placeholder {color:white;}
.end{ width:100%; bottom: 0px; text-align: center; margin-bottom: 0px; color: white;font-family: Microsoft YaHei; font-size: 12px; position: fixed; bottom: 15px;}
</style>
<script>
$(document).ready(function(){
	//点击登录  
	$(".right_yuan").live("click",function(){
		$.post("<?php echo U('/AdAccount/login');?>",{"name":$("#name").val(),"pwd":$("#pwd").val()},function(data){
			if(data==1){
				$("#name").val("禁登录!");
			}else if(data==2){
				$("#name").val("账号，密码错误!");
			}else{
				location.href="/lsfb/tourism_one/pic.php/Index/index";
			}
		})
	})	;
	//enter 登录
	$(document).keydown(function (event) {
    	if (event.keyCode == 13) {
        	$.post("<?php echo U('/AdAccount/login');?>",{"name":$("#name").val(),"pwd":$("#pwd").val()},function(data){
				if(data==1){
					$("#name").val("禁登录!");
				}else if(data==2){
					$("#name").val("账号，密码错误!");
				}else{
					window.location.href="/lsfb/tourism_one/pic.php/Index/index";
				}
			});
        }
    });
})
</script>
<body>
  <div class="content">
     <div><img src="/lsfb/tourism_one/Public/admin/main/logo.png" /></div>
      <div class="true_login">
        <div class="inp_divone" style="">
          <input type="text" class="inputs" id="name" name="name" placeholder="请输入账号"  onfocus="if(this.value == '账号，密码错误!') this.value = ''" onblur="if(this.value =='') this.value = '账号，密码错误!'" />
        </div>
        <div class="inp_divone" >
        <input type="password" class="inputs" id="pwd" name="pwd" style="width: 220px;" placeholder="请输入密码"  />
         <div class="right_yuan" ></div>
        </div>
        
      </div>
      
  </div>
  <div class="end">
    忘记密码？ |  ©2014 LSFB . All rights reserved 蜀ICP备13015520号
  </div>
</body>
</html>