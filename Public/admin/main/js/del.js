$(document).ready(function(){
	var id=$("input[name='id']").val();
	
	$(".wpimg").live("click",function(){
		var img=$(this).attr('id');//图片名称
		var k=$(this).attr('title');
		$.post(app+"/Teach/index/action/teditpostdel",{"id":id,"img":img,"cla":"user_data_wepimg"},function(data){
			if(data==null){
				$("#img1").val(1);
			}else{
				$("#img1").val(data);
			}
			$(".dl"+k).html('');
		});
	});
	$(".hoaimg").live("click",function(){
		var img=$(this).attr('id');//图片名称
		var k=$(this).attr('title');
		$.post(app+"/Teach/index/action/teditpostdel",{"id":id,"img":img,"cla":"user_data_hoaimg"},function(data){
			if(data==null){
				$("#img2").val(1);
			}else{
				$("#img2").val(data);
			}
			$(".dl2"+k).html('');
		});
	});
	$(".bwtimg").live("click",function(){
		var img=$(this).attr('id');//图片名称
		var k=$(this).attr('title');
		$.post(app+"/Teach/index/action/teditpostdel",{"id":id,"img":img,"cla":"user_data_bwtimg"},function(data){
			if(data==null){
				$("#img3").val(1);
			}else{
				$("#img3").val(data);
			}
			$(".dl3"+k).html('');
		});
	});
	$(".rgimg").live("click",function(){
		var img=$(this).attr('id');//图片名称
		var k=$(this).attr('title');
		$.post(app+"/Teach/index/action/teditpostdel",{"id":id,"img":img,"cla":"user_data_rgimg"},function(data){
			if(data==null){
				$("#img4").val(1);
			}else{
				$("#img4").val(data);
			}
			$(".dl4"+k).html('');
		});
	});
	$(".csimg").live("click",function(){
		var img=$(this).attr('id');//图片名称
		var k=$(this).attr('title');
		$.post(app+"/Teach/index/action/teditpostdel",{"id":id,"img":img,"cla":"user_data_csimg"},function(data){
			if(data==null){
				$("#img5").val(1);
			}else{
				$("#img5").val(data);
			}
			$(".dl5"+k).html('');
		});
	});
	$(".expimg").live("click",function(){
		var img=$(this).attr('id');//图片名称
		var k=$(this).attr('title');
		$.post(app+"/Teach/index/action/teditpostdel",{"id":id,"img":img,"cla":"user_data_expimg"},function(data){
			if(data==null){
				$("#img6").val(1);
			}else{
				$("#img6").val(data);
			}
			$(".dl6"+k).html('');
		});
	});
	$(".bimg").live("click",function(){
		var img=$(this).attr('id');//图片名称
		var k=$(this).attr('title');
		$.post(app+"/Teach/index/action/teditpostdel",{"id":id,"img":img,"cla":"user_data_bimg"},function(data){
			if(data==null){
				$("#img8").val(1);
			}else{
				$("#img8").val(data);
			}
			$(".dl8"+k).html('');
		});
	});
});