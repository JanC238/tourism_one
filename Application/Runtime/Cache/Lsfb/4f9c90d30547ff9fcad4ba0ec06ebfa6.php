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
    <style>.m-top-md {
        margin-top: 10px;
        font: 12px/1.5 Microsoft YaHei, Helvitica, Verdana, Arial, san-serif
    }</style>
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
                        <h3 style="margin:0;">商家管理</h3>
                    </div>
                </div>
            </div>

            <div class="row m-top-md">
                <div style="width:100%; padding:10px 0 10px 10px; margin-bottom:10px;margin-left: 5px">
                    <?php if(in_array('BusinAccount/add',per()) OR user()['id'] == 1): ?><a href="<?php echo U('/BusinAccount/add');?>" class="btn btn-add"><i class="fa fa-plus"></i> 添加</a><?php endif; ?>
                </div>
                <div class="col-lg-12 col-sm-6" style="margin-bottom: 20px;">
                    <form action="" method="get">
                        <input type="text" value="<?php echo I('get.search');?>" class="form-control width200 pull-left"
                               name="search" placeholder="请输入搜索商家的登陆名或用户名">
                        <input type="submit" class="btn btn-info pull-left" style="margin-left: 10px" value="搜索">
                    </form>
                    <!--<a href="<?php echo U('/BusinAccount/index',array('shop_type'=>1));?>" class="btn btn-infos" style="margin-left: 20px">订餐</a>-->
                    <!--<a href="<?php echo U('/BusinAccount/index',array('shop_type'=>2));?>" class="btn btn-infos">外卖</a>-->
                    <!--<a href="<?php echo U('/BusinAccount/index',array('shop_type'=>3));?>" class="btn btn-infos">两者</a>-->
                    <a href="<?php echo U('/BusinAccount/index',array('shop_type'=>1),'',false);?>" <?php if(I('get.shop_type') == 1): ?>class="btn btn-info"<?php else: ?>class="btn btn-infos"<?php endif; ?>
                       style="margin-left: 20px">订餐</a>
                    <a href="<?php echo U('/BusinAccount/index',array('shop_type'=>2),'',false);?>" <?php if(I('get.shop_type') == 2): ?>class="btn btn-info"<?php else: ?>class="btn btn-infos"<?php endif; ?> >外卖</a>
                    <a href="<?php echo U('/BusinAccount/index',array('shop_type'=>3),'',false);?>" <?php if(I('get.shop_type') == 3): ?>class="btn btn-info"<?php else: ?>class="btn btn-infos"<?php endif; ?>>两者</a>
                    <a href="<?php echo U('/BusinAccount/index');?>"  <?php if(I('get.shop_type') == ''): ?>class="btn btn-info"<?php else: ?>class="btn btn-infos"<?php endif; ?>>全部</a>
                </div>
                <table width="99%" class="tables m-top-md table-hover table-striped">
                    <tr>
                        <td colspan="9999">管理员列表</td>
                    </tr>
                    <tr class="text-c">
                        <td>序号</td>
                        <td>登录名</td>
                        <td>用户名</td>
                        <td>德文用户名</td>
                        <td>商家类型</td>
                        <td>上次登录</td>
                        <td>推荐排序</td>
                        <td>登陆状态</td>
                        <td>分配地区</td>
                        <td>操作</td>
                    </tr>
                    <?php if(is_array($rows)): $k = 0; $__LIST__ = $rows;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vb): $mod = ($k % 2 );++$k;?><tr class="text-c">
                            <td><?php echo ($k); ?></td>
                            <td><?php echo ($vb["account"]); ?></td>
                            <td>
                                <?php if(is_array($users)): $i = 0; $__LIST__ = $users;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$user): $mod = ($i % 2 );++$i; if(($user["id"]) == $vb['userid']): echo ($user["name"]); endif; endforeach; endif; else: echo "" ;endif; ?>
                            </td>
                            <td>
                                <?php if(is_array($users)): $i = 0; $__LIST__ = $users;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$user): $mod = ($i % 2 );++$i; if(($user["id"]) == $vb['userid']): echo ($user["Gm_name"]); endif; endforeach; endif; else: echo "" ;endif; ?>
                            </td>
                            <!--<td>-->
                            <!--<?php if(is_array($roles)): $i = 0; $__LIST__ = $roles;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$role): $mod = ($i % 2 );++$i;?>-->
                            <!--<?php if(($role["id"]) == $vb["roleid"]): ?>-->
                            <!--<?php echo ($role["name"]); ?>-->
                            <!--<?php endif; ?>-->
                            <!--<?php endforeach; endif; else: echo "" ;endif; ?>-->
                            <!--</td>-->
                            <td>
                                <?php echo ($shop_type[$vb['shop_type']]); ?>
                            </td>
                            <td>
                                <?php echo (date('Y-m-d H:i:s',$vb["reg_time"])); ?>
                            </td>
                            <td>
                                <?php if($vb['recommend']): ?>推荐:<?php echo ($vb["recommend"]); endif; ?>
                            </td>
                            <td>
                                <?php if(in_array('BusinAccount/change',per()) OR user()['id'] == 1): if($vb["state"] == 0): ?><a href="javascript:;"
                                           class="btn btn-infos radius btnset" name="<?php echo ($vb["id"]); ?>">可登陆</a>
                                        <?php elseif($vb["state"] == 1): ?>
                                        <a href="javascript:;"
                                           class="btn btn-info radius btnset" name="<?php echo ($vb["id"]); ?>">禁登陆</a>
                                        <?php else: ?>
                                        <a href="javascript:;"
                                           class="btn btn-infos radius">超级管理员</a><?php endif; endif; ?>
                            </td>

                            <td>
                                <?php if(in_array('BusinAccount/allotRegion',per()) OR user()['id'] == 1): ?><a href="<?php echo U('/BusinAccount/allotRegion',array('bid'=>$vb['id']));?>"
                                       class="btn btn-infos">分配地区</a><?php endif; ?>
                            </td>
                            <!--<td>-->
                            <!--<?php if(in_array('BusinAccount/allotRole',per()) OR user()['id'] == 1): ?>-->
                            <!--<a href="<?php echo U('/BusinAccount/allotRole',array('aid'=>$vb['id']));?>"-->
                            <!--class="btn btn-infos radius">角色分配</a>-->
                            <!--<?php endif; ?>-->
                            <!--</td>-->

                            <td>

                                <?php if(in_array('BusinAccount/edit',per()) OR user()['id'] == 1): ?><a title="编辑" href="<?php echo U('/BusinAccount/edit',array('bid'=>$vb['id']));?>"
                                       class="btn btn-info"
                                    ><i class="icon-edit"></i>编辑</a><?php endif; ?>
                                <?php if(in_array('BusinAccount/businUser',per()) OR user()['id'] == 1): ?><a title="绑定" href="<?php echo U('/BusinAccount/businUser',array('bid'=>$vb['id']));?>"
                                       class="btn btn-infos"
                                    ><i class="icon-trash "></i>查看商家详细信息</a><?php endif; ?>
                                <?php if(in_array('BusinAccount/edit',per()) OR user()['id'] == 1): ?><a title="删除" href="javascript:;" name="<?php echo ($vb["id"]); ?>" class="btn btn-infos del"
                                    ><i class="icon-trash "></i>删除</a><?php endif; ?>
                            </td>
                        </tr><?php endforeach; endif; else: echo "" ;endif; ?>
                    <tr>
                        <td colspan="999">
                            <?php echo ($pageHtml); ?>
                        </td>
                    </tr>
                </table>
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
<script>
    //删除
    $(".del").on("click", function () {
        if (confirm("确定要删除账号吗")) {
            $.maskajax('post', "<?php echo U('BusinAccount/del');?>", {"id": $(this).attr("name")}, function (data) {
                if (data === 0) {
                    alert('删除失败');
                } else {
                    location.reload();
                }
            }, '账号删除中');
        }
    });
    //设置
    $(".btnset").on('click', function () {
        $.maskajax('post', "<?php echo U('BusinAccount/change');?>", {"id": $(this).attr("name")}, function (data) {
            if (data === 0) {
                alert('更改失败');
            } else {
                location.reload();
            }
        }, '账号变更中');
    });
</script>
</body>
</html>