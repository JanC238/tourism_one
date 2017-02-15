<?php if (!defined('THINK_PATH')) exit();?>﻿<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>蓝色风暴-管理后台</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="">
<meta name="author" content="">
<!-- Bootstrap core CSS -->
<!--<link href="/Public/admin/bootstrap/css/bootstrap.min.css" rel="stylesheet">-->
<link href="//cdn.bootcss.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">

<!-- Font Awesome -->
<link href="/Public/admin/css/font-awesome.min.css" rel="stylesheet">
<!-- ionicons -->
<link href="/Public/admin/css/ionicons.min.css" rel="stylesheet">
<!-- Morris -->
<link href="/Public/admin/css/morris.css" rel="stylesheet"/>	
<!-- Datepicker -->
<link href="/Public/admin/css/datepicker.css" rel="stylesheet"/>	
<!-- Animate -->
<link href="/Public/admin/css/animate.min.css" rel="stylesheet">
<!-- Owl Carousel -->
<link href="/Public/admin/css/owl.carousel.min.css" rel="stylesheet">
<link href="/Public/admin/css/owl.theme.default.min.css" rel="stylesheet">
<!-- Simplify -->
<link href="/Public/admin/css/simplify.min.css" rel="stylesheet">
<!-- Notify进度条 -->
<link href="/Public/lib/nprogress/nprogress.min.css" rel="stylesheet">
<!--通知-->
<link href="/Public/lib/toastr/toastr.min.css" rel="stylesheet">
<!--layer-->
<link rel="stylesheet" href="/Public/lib/layer/skin/layer.css">
<!--layer-lsfb-->
<link rel="stylesheet" href="/Public/lib/layer/skin/layer_lsfb.min.css">
<!--icon-->
<link rel="stylesheet" href="/Public/lib/icon/iconfont.css">

<link href="/Public/admin/css/base.css" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="/Public/admin/time/jquery.datetimepicker.css"/>


<style>
.btn.btn-info {
    font: 12px/1.5 Microsoft YaHei,Helvitica,Verdana,Arial,san-serif;
    background: #368EE0;
    border: 1px solid #368EE0;
}
</style>
    <link href="/Public/admin/css/base.css" rel="stylesheet">
    <style>
        .m-top-md {
            margin-top: 10px;
            font: 12px/1.5 Microsoft YaHei, Helvitica, Verdana, Arial, san-serif
        }

        .m-top-mdd, .btn.btn-info {
            margin-top: 10px;
            font: 14px/1.5 Microsoft YaHei, Helvitica, Verdana, Arial, san-serif
        }

        td {
            width: 50px !important;
        }
    </style>
</head>
<body class="overflow-hidden">
<div class="wrapper preload">
    <style>
.topa{background:#307EC7;}
</style>
<header class="top-nav">
	<div class="top-nav-inner">
		<div class="nav-header" style="padding-top:3px;">
			<img src="/Public/admin/images/logo.png" height="40"/>
		</div>
		<div class="nav-container">
			<!-- <button type="button" class="navbar-toggle pull-left sidebar-toggle" style="margin-top:3px; margin-bottom:0px;" id="sidebarToggleLG">
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button> -->
			<ul class="nav-notification">	
				<li class="nav-item navmenulogo"><i class="fa fa-list-ul"></i></li>
				<?php if(is_array($menus)): $k = 0; $__LIST__ = $menus;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$menu): $mod = ($k % 2 );++$k;?><li class="nav-item"><a <?php if($menu['id'] == $menuTid): ?>class="topa"<?php endif; ?> href="<?php echo U('/Index/index',array('id'=>$menu['id']));?>" style="padding:16px 17px;"><?php echo ($menu["name"]); ?></a></li><?php endforeach; endif; else: echo "" ;endif; ?>
				<!-- <li class="search-list">
				<div class="search-input-wrapper">
					<div class="search-input">
						<input type="text" class="form-control input-sm inline-block">
						<a href="#" class="input-icon text-normal"><i class="ion-ios7-search-strong"></i></a>
					</div>
				</div>
				</li> -->
			</ul>
			<div class="pull-right m-right-sm">
				<div class="user-block hidden-xs">
					<a href="#" id="userToggle" data-toggle="dropdown">
						<img src="/Public/admin/images/logout.png" alt="" class="inline-block user-profile-pic">
						<div class="user-detail inline-block">管理员<i class="fa fa-caret-down"></i></div>
					</a>
					<div id="showd" class="panel border dropdown-menu user-panel">
						<div class="panel-body paddingTB-sm">
							<ul>
								<li>
									<a href="/pic.php/" id="showds">
										<span class="m-left-xs">首页</span>
									</a>
								</li>
								<li>
									<a href="<?php echo U('AdAccount/logout');?>" id="showds">
										<span class="m-left-xs">退出</span>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div><!-- ./top-nav-inner -->	
</header>
    <style>
.leftlitop{border-top: 1px solid #E4E4E4}
.leftlibottom{border-bottom: 1px solid #E4E4E4}
.leftlileft{border-left:1px #E4E4E4 solid; height:42px; width:100%;}
</style>
<script src="/Public/uploadify/jQuery.js" type="text/javascript"></script>
<script>
$(document).ready(function(){
	$(".openable").hover(function(){
		var id=$(this).attr("data-for");
		
		var img=$("#img"+id).attr("data-for");
		$("#img"+id).attr("src",img);
	},function(){
		var id=$(this).attr("data-for");
			
		if($(this).hasClass('open')){
			var img=$("#img"+id).attr("data-for");
			$("#img"+id).attr("src",img);
		}else{
			var img=$("#img"+id).attr("data-fod");
			$("#img"+id).attr("src",img);
		}
		
	});
	$('.sidebar-menu .openable > a').on('click',function(){
		console.log('123')
		setTimeout(function(){
			$('.accordion>li').each(function(v,element){
			if($(element).hasClass('open')||$(element).hasClass('active')){
				console.log(element)
				var imgelement = $(element).find('.menu-icon img')
				var img = imgelement.attr("data-for");
				imgelement.attr('src',img)
			}else{
				var imgelement = $(element).find('.menu-icon img')
				var img = imgelement.attr("data-fod");
				imgelement.attr('src',img)
				
			}
		})
		},200)
		
	})
});
</script>
<aside class="sidebar-menu fixed">
	<div class="sidebar-inner scrollable-sidebar">
		<div class="main-menu">
			<ul class="accordion">
			<?php if(is_array($leftMenus)): $k = 0; $__LIST__ = $leftMenus;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$leftMenu): $mod = ($k % 2 );++$k;?><li data-for="<?php echo ($k); ?>" <?php if($menuPid == $leftMenu['id']): ?>class="openable bg-palette<?php echo ($k); ?> active"<?php else: ?>class=" openable bg-palette<?php echo ($k); ?>"<?php endif; ?>>
					<a href="#">
						<span class="menu-content block">
							<span class="menu-icon">
								<?php if($menuPid == $leftMenu['id']): ?><img id="img<?php echo ($k); ?>" src="/Public/admin/images/biao/icon-<?php echo ($k); ?>s.png"  data-fod='/Public/admin/images/biao/icon-<?php echo ($k); ?>s.png' data-for="/Public/admin/images/biao/icon-<?php echo ($k); ?>s.png"/>
								<?php else: ?>
									<img id="img<?php echo ($k); ?>" src="/Public/admin/images/biao/icon-<?php echo ($k); ?>.png"  data-fod='/Public/admin/images/biao/icon-<?php echo ($k); ?>.png' data-for="/Public/admin/images/biao/icon-<?php echo ($k); ?>s.png"/><?php endif; ?>
							</span>
							<span class="text m-left-sm"><?php echo ($leftMenu["name"]); ?></span>
							<span class="submenu-icon"></span>
						</span>
					</a>
					<?php if($leftMenu['_child'] != ''): ?><ul class="submenu" <?php if($menuPid == $leftMenu['id']): ?>style="display:block"<?php endif; ?>>
							<?php if(is_array($leftMenu['_child'])): $d = 0; $__LIST__ = $leftMenu['_child'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$lc): $mod = ($d % 2 );++$d;?><li style="padding-left:48px; background:#FFF; height:42px; border:0px;">
									<div class="leftlileft leftlibottom leftlitop">
										<a href="/pic.php/<?php echo ($lc["url"]); ?>" <?php if($menuId == $lc['id']): ?>style="background-color:#368EE0; color:#FFF"<?php endif; ?>><span class="submenu-label"><?php echo ($lc["name"]); ?></span></a>
									</div>
								</li><?php endforeach; endif; else: echo "" ;endif; ?>
						</ul><?php endif; ?>
				</li><?php endforeach; endif; else: echo "" ;endif; ?>
			</ul>
		</div>	
	</div><!-- sidebar-inner -->
</aside>
    <div class="main-container">
        <div class="padding-md">
            <div class="row">
                <div class="pageheader" style="padding:0px 10px 10px 10px; border-bottom:0px; background:#FFF">
                    <div style="border-bottom:1px #D8DBDB solid; padding:5px;font: 12px/1.5 Microsoft YaHei,Helvitica,Verdana,Arial,san-serif;">
                        <h3 style="margin:0;">时间说明</h3>
                    </div>

                </div>
            </div>

            <div class="row m-top-md">
                <div class="col-lg-12 col-sm-6">
                    <form class="Huiform" id="loginform" action="" method="post">
                        <table width="100%" class="tabled table-bordered m-top-md" border='0'>
                            <tbody>
                            <tr>
                                <td>时间说明</td>
                                <td>
                                    <textarea name="introduce" style="width: 800px;height: 400px" id="editor"><?php echo ($row["introduce"]); ?></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td>时间说明(德文)</td>
                                <td>
                                    <textarea name="Gm_introduce" style="width: 800px;height: 400px" id="editor1"><?php echo ($row["Gm_introduce"]); ?></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <input type="submit" value="提交" class="btn btn-info">
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>

        </div><!-- ./padding-md -->
    </div><!-- /main-container -->
</div><!-- /wrapper -->

<!-- Le javascript
================================================== -->
<!-- Placed at the end of the document so the pages load faster -->
<!-- Jquery -->

<script src="/Public/admin/js/jquery-1.11.1.min.js"></script>
<!-- Velocity -->
<script src="//cdn.bootcss.com/velocity/1.2.3/velocity.min.js"></script>
<script src="//cdn.bootcss.com/velocity/1.2.3/velocity.ui.min.js"></script>
<!-- Bootstrap -->
<script src="/Public/admin/bootstrap/js/bootstrap.min.js"></script>


<!-- Slimscroll -->
<script src='/Public/admin/js/jquery.slimscroll.min.js'></script>

<!-- Morris -->
<script src='/Public/admin/js/rapheal.min.js'></script>
<script src='/Public/admin/js/morris.min.js'></script>

<!-- Datepicker -->
<script src='/Public/admin/js/uncompressed/datepicker.js'></script>

<!-- Sparkline -->
<script src='/Public/admin/js/sparkline.min.js'></script>

<!-- Skycons -->
<script src='/Public/admin/js/uncompressed/skycons.js'></script>

<!-- Popup Overlay -->
<script src='/Public/admin/js/jquery.popupoverlay.min.js'></script>

<!-- Easy Pie Chart -->
<script src='/Public/admin/js/jquery.easypiechart.min.js'></script>

<!-- Sortable -->
<script src='/Public/admin/js/uncompressed/jquery.sortable.js'></script>

<!-- Owl Carousel -->
<script src='/Public/admin/js/owl.carousel.min.js'></script>

<!-- Modernizr -->
<script src='/Public/admin/js/modernizr.min.js'></script>

<!-- Simplify -->
<script src="/Public/admin/js/simplify/simplify.js"></script>
<!--<script src="/Public/admin/js/simplify/simplify_dashboard.js"></script>-->

<!-- Notify -->
<script src="/Public/lib/nprogress/nprogress.min.js"></script>
<script src="/Public/lib/toastr/toastr.min.js"></script>
<!--layer-->
<script src="/Public/lib/layer/layer.js"></script>
<script src="/Public/lib/mask/mask.js"></script>
<script src="/Public/admin/time/jquery.datetimepicker.js"></script>



<script>
		toastr.options.timeOut = 200
    // var a = $.mask('123')
		// NProgress.start()
		// toastr.info("加载中，请稍后");
    // setTimeout(function() {
    //     a.remove()
		// 		NProgress.done()
		// 		toastr.success("加载成功");
    // }, 6000)
    $(function() {
        $('.chart').easyPieChart({
            easing: 'easeOutBounce',
            size: '140',
            lineWidth: '7',
            barColor: '#7266ba',
            onStep: function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });
        $('.sortable-list').sortable();
        $('.todo-checkbox').click(function() {
            var _activeCheckbox = $(this).find('input[type="checkbox"]');
            if (_activeCheckbox.is(':checked')) {
                $(this).parent().addClass('selected');
            } else {
                $(this).parent().removeClass('selected');
            }
        });
        //Delete Widget Confirmation
        $('#deleteWidgetConfirm').popup({
            vertical: 'top',
            pagecontainer: '.container',
            transition: 'all 0.3s'
        });
        $(".user-detail").on("click", function() {
            $("#showd").css("display", "block");
        });
    });
</script>
<script type="text/javascript" charset="utf-8" src="/Public/edit/ueditor.config.js"></script>
<script type="text/javascript" charset="utf-8" src="/Public/edit/ueditor.all.min.js"></script>
<!--建议手动加在语言，避免在ie下有时因为加载语言失败导致编辑器加载失败-->
<!--这里加载的语言文件会覆盖你在配置项目里添加的语言类型，比如你在配置项目里配置的是英文，这里加载的中文，那最后就是中文-->
<script type="text/javascript" charset="utf-8" src="/Public/edit/lang/zh-cn/zh-cn.js"></script>
<script type="text/javascript">

    //实例化编辑器
    //建议使用工厂方法getEditor创建和引用编辑器实例，如果在某个闭包下引用该编辑器，直接调用UE.getEditor('editor')就能拿到相关的实例
    var ue = UE.getEditor('editor');
    var ue = UE.getEditor('editor1');

</script>
</body>
</html>