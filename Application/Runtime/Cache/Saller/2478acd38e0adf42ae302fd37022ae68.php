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
<!-- Datepicke
<link href="/Public/admin/css/datepicker.css" rel="stylesheet"/>	r -->
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
    <script src="/Public/echart/echarts.min.js"></script>
    <style>
        .circle {
            padding: 20px;
            position: relative;
        }

        .circle strong {
            position: absolute;
            top: 0;
            font-size: 30px;
            width: 100%;
            height: 100%;
            padding-right: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .fixlist {
            padding: 0px;
            max-height: 300px;
            overflow-y: scroll;
            height: 227px;
        }

        .fixlist ul li {
            border-left: none;
            border-right: none;
        }

        .fixlist ul li img {
            max-width: none;
        }

        .fixlist .media-right,
        .media-body {
            vertical-align: middle;
        }

        .fixlist .media-right .fa {
            font-size: 22px;
            color: #a2a2a2;
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
									<a href="/saller.php/" id="showds">
										<span class="m-left-xs">首页</span>
									</a>
								</li>
								<li>
									<a href="<?php echo U('/BusinAccount/logout');?>" id="showds">
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
<script src="/Public/uploadify/jquery.js" type="text/javascript"></script>
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
										<a href="/saller.php/<?php echo ($lc["url"]); ?>" <?php if($menuId == $lc['id']): ?>style="background-color:#368EE0; color:#FFF"<?php endif; ?>><span class="submenu-label"><?php echo ($lc["name"]); ?></span></a>
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
                <div class="col-sm-12">
                    <div class="panel panel-default">
                        <div class="row">
                            <div class="col-sm-2">
                                <img src="/Public/admin/main/admin.png" class="headerimg">
                            </div>
                            <div class="col-sm-4">
                                <div class="name"><?php echo ($userRow["name"]); ?></div>
                                <hr>
                                <div class="info">
                                    <!--<span style="color:#378EE0;">账户余额：50</span>&nbsp;&nbsp;-->
                                    <!--<a href="" style="color:#378EE0;">充值</a>&nbsp;&nbsp;-->
                                    <!--<a href="" style="color:#378EE0;">提交</a>&nbsp;&nbsp;-->
                                    上次登录时间：<?php echo (date("Y-m-d H:i:s",$lastLogin)); ?>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <!--<div class="row" style="height:140px;display:flex;align-items:center">-->
                                <!--<div class="col-sm-3" style="padding-left:0px;padding-right:20px;">-->
                                <!--<ul class="figure-list">-->
                                <!--<li>-->
                                <!--<figure style="background-color:#ffb53e">-->
                                <!--<a href="#">-->
                                <!--<div class="figurecontainer">-->
                                <!--<i class="icon-qian iconfont"></i>-->
                                <!--<p>钱包</p>-->
                                <!--</div>-->
                                <!--</a>-->
                                <!--</figure>-->
                                <!--</li>-->
                                <!--</ul>-->
                                <!--</div>-->
                                <!--<div class="col-sm-3" style="padding-left:0px;padding-right:20px;">-->
                                <!--<ul class="figure-list">-->
                                <!--<li>-->
                                <!--<figure style="background-color:#1ebfaf">-->
                                <!--<a href="<?php echo U('/Sale/index');?>">-->
                                <!--<div class="figurecontainer">-->
                                <!--<i class="icon-dashujuzhinengyuce iconfont"></i>-->
                                <!--<p>财务明细</p>-->
                                <!--</div>-->
                                <!--</a>-->
                                <!--</figure>-->
                                <!--</li>-->
                                <!--</ul>-->
                                <!--</div>-->
                                <!--<div class="col-sm-3" style="padding-left:0px;padding-right:20px;">-->
                                <!--<ul class="figure-list">-->
                                <!--<li>-->
                                <!--<figure style="background-color:#f92440">-->
                                <!--<a href="#">-->
                                <!--<div class="figurecontainer">-->
                                <!--<i class="icon-jilu iconfont"></i>-->
                                <!--<p>提现记录</p>-->
                                <!--</div>-->
                                <!--</a>-->
                                <!--</figure>-->
                                <!--</li>-->
                                <!--</ul>-->
                                <!--</div>-->
                                <!--<div class="col-sm-3" style="padding-left:0px;padding-right:20px;">-->
                                <!--<ul class="figure-list">-->
                                <!--<li>-->
                                <!--<figure style="background-color:#368ee0">-->
                                <!--<a href="">-->
                                <!--<div class="figurecontainer">-->
                                <!--<i class="icon-caozuorizhi iconfont"></i>-->
                                <!--<p>日志</p>-->
                                <!--</div>-->
                                <!--</a>-->
                                <!--</figure>-->
                                <!--</li>-->
                                <!--</ul>-->
                                <!--</div>-->
                                <!--</div>-->
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3">
                    <!--<div class="panel sizepanel panel-default">-->
                    <!--<h3>容量</h3>-->
                    <!--<div class="progress">-->
                    <!--<div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: <?php echo ($fb); ?>%">-->
                    <!--<span class="sr-only"><?php echo ($fb); ?>% Complete</span>-->
                    <!--</div>-->
                    <!--</div>-->
                    <!--<div>总容量<?php echo ($totalsize); ?>M/剩余容量<?php echo ($namespacesize); ?>M</div>-->
                    <!--</div>-->
                </div>
            </div>
            <div class="row">
                <!--<div class="col-sm-12">-->
                <!--<div class="panel panel-default">-->
                <!--<div class="panel-body">访问网站： <a href="http://www.lsfbweb.com" target="_blank">http://www.lsfbweb.com</a>&nbsp;&nbsp;服务支持：蓝色风暴科技-->
                <!--　国际余额：<?php echo ($International["balance"]); ?>元　　 国内余额：<?php echo ($China["overage"]); ?>条-->
                <!--</div>-->
                <!--</div>-->
                <!--</div>-->
            </div>
            <div class="row">
                <div class="col-sm-3">
                    <div class="well">
                        <div class="blue-panel">
                            <div class="num"><?php echo ($counts["today"]); ?></div>
                            <div class="description">今日访客</div>
                        </div>
                        <ul class="list-group">
                            <li class="list-group-item"><span class="badge"><?php echo ($counts["lastday"]); ?></span>昨天</li>
                            <li class="list-group-item"><span class="badge"><?php echo ($counts["seven"]); ?></span>最近七天</li>
                            <li class="list-group-item"><span class="badge"><?php echo ($counts["total"]); ?></span>总访问</li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="well">
                        <div class="blue-panel">
                            <div class="num"><?php echo ($todayCount); ?></div>
                            <div class="description">今日订单</div>
                        </div>
                        <ul class="list-group">
                            <li class="list-group-item"><span class="badge"><?php echo ($yesterdayCount); ?></span>昨天</li>
                            <li class="list-group-item"><span class="badge"><?php echo ($weekCount); ?></span>最近七天</li>
                            <li class="list-group-item"><span class="badge"><?php echo ($allCount); ?></span>总订单数</li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm-3">
                    <!--<div class="well">-->
                    <!--<div class="blue-panel">-->
                    <!--<div class="num">30</div>-->
                    <!--<div class="description">今日消息</div>-->
                    <!--</div>-->
                    <!--<ul class="list-group">-->
                    <!--<li class="list-group-item"><span class="badge">14</span>昨天</li>-->
                    <!--<li class="list-group-item"><span class="badge">14</span>最近七天</li>-->
                    <!--<li class="list-group-item"><span class="badge">14</span>总访问</li>-->
                    <!--</ul>-->
                    <!--</div>-->


                    <div class="row">
                        <div class="col-sm-12">
                            <div class="panel panel-default">
                                <div class="panel-heading">订单信息</div>
                                <div class="panel-body fixlist">
                                    <ul class="list-group">
                                        <!--<li class="list-group-item">-->
                                        <!--<div class="media">-->
                                        <!--<div class="media-left">-->
                                        <!--<a href="#">-->
                                        <!--<img class="media-object" data-src="holder.js/64x64" alt="64x64" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PCEtLQpTb3VyY2UgVVJMOiBob2xkZXIuanMvNjR4NjQKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNTYwYzQyZDUyNCB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE1NjBjNDJkNTI0Ij48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIxMy40Njg3NSIgeT0iMzYuNSI+NjR4NjQ8L3RleHQ+PC9nPjwvZz48L3N2Zz4="-->
                                        <!--data-holder-rendered="true" style="width: 64px; height: 64px;">-->
                                        <!--</a>-->
                                        <!--</div>-->
                                        <!--<div class="media-body">-->
                                        <!--<h4 class="media-heading">艾佰佳儿奶粉...</h4> 2016-07-05-->
                                        <!--</div>-->
                                        <!--<div class="media-right">-->
                                        <!--<i class="fa fa-eye"></i>-->
                                        <!--</div>-->
                                        <!--</div>-->
                                        <!--</li>-->
                                        <?php if(is_array($orders)): $i = 0; $__LIST__ = $orders;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$order): $mod = ($i % 2 );++$i;?><li class="list-group-item"><span class="badge"><?php echo (date('Y-m-d H:i',$order["paytime"])); ?> <?php echo str_replace('a','&ensp;',str_pad($order['actmoney'],5,'a',STR_PAD_LEFT));?>元</span><?php echo ($order["businName"]); ?>
                                            </li><?php endforeach; endif; else: echo "" ;endif; ?>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!--<div class="col-sm-6">-->
                        <!--<div class="panel panel-default">-->
                        <!--<div class="panel-heading">订单信息</div>-->
                        <!--<div class="panel-body fixlist">-->
                        <!--<ul class="list-group">-->
                        <!--<li class="list-group-item"><span class="badge">14</span>昨天</li>-->
                        <!--<li class="list-group-item"><span class="badge">14</span>最近七天</li>-->
                        <!--<li class="list-group-item"><span class="badge">14</span>总访问</li>-->
                        <!--<li class="list-group-item"><span class="badge">14</span>总访问</li>-->
                        <!--<li class="list-group-item"><span class="badge">14</span>总访问</li>-->
                        <!--<li class="list-group-item"><span class="badge">14</span>总访问</li>-->
                        <!--<li class="list-group-item"><span class="badge">14</span>总访问</li>-->
                        <!--<li class="list-group-item"><span class="badge">14</span>总访问</li>-->
                        <!--<li class="list-group-item"><span class="badge">14</span>总访问</li>-->
                        <!--<li class="list-group-item"><span class="badge">14</span>总访问</li>-->
                        <!--</ul>-->
                        <!--</div>-->
                        <!--</div>-->
                        <!--</div>-->
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-sm-6">
                    <div class="panel panel-default">
                        <div class="panel-heading">流量统计</div>
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="redcircle circle">
                                        <strong><?php echo ($counts["today"]); ?></strong>
                                    </div>
                                    <p class="text-center">今日访客</p>
                                </div>
                                <div class="col-md-4">
                                    <div class="bluecircle circle">
                                        <strong><?php echo ($counts["lastday"]); ?></strong>
                                    </div>
                                    <p class="text-center">昨日访客</p>
                                </div>
                                <div class="col-md-4">
                                    <div class="greencircle circle">
                                        <strong><?php echo ($counts["total"]); ?></strong>
                                    </div>
                                    <p class="text-center">总访客</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--<div class="col-sm-6">-->
                <!--<div class="row">-->
                <!--<div class="col-sm-6">-->
                <!--<div class="panel panel-default">-->
                <!--<div class="panel-heading">订单信息</div>-->
                <!--<div class="panel-body fixlist">-->
                <!--<ul class="list-group">-->
                <!--&lt;!&ndash;<li class="list-group-item">&ndash;&gt;-->
                <!--&lt;!&ndash;<div class="media">&ndash;&gt;-->
                <!--&lt;!&ndash;<div class="media-left">&ndash;&gt;-->
                <!--&lt;!&ndash;<a href="#">&ndash;&gt;-->
                <!--&lt;!&ndash;<img class="media-object" data-src="holder.js/64x64" alt="64x64" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PCEtLQpTb3VyY2UgVVJMOiBob2xkZXIuanMvNjR4NjQKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNTYwYzQyZDUyNCB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE1NjBjNDJkNTI0Ij48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIxMy40Njg3NSIgeT0iMzYuNSI+NjR4NjQ8L3RleHQ+PC9nPjwvZz48L3N2Zz4="&ndash;&gt;-->
                <!--&lt;!&ndash;data-holder-rendered="true" style="width: 64px; height: 64px;">&ndash;&gt;-->
                <!--&lt;!&ndash;</a>&ndash;&gt;-->
                <!--&lt;!&ndash;</div>&ndash;&gt;-->
                <!--&lt;!&ndash;<div class="media-body">&ndash;&gt;-->
                <!--&lt;!&ndash;<h4 class="media-heading">艾佰佳儿奶粉...</h4> 2016-07-05&ndash;&gt;-->
                <!--&lt;!&ndash;</div>&ndash;&gt;-->
                <!--&lt;!&ndash;<div class="media-right">&ndash;&gt;-->
                <!--&lt;!&ndash;<i class="fa fa-eye"></i>&ndash;&gt;-->
                <!--&lt;!&ndash;</div>&ndash;&gt;-->
                <!--&lt;!&ndash;</div>&ndash;&gt;-->
                <!--&lt;!&ndash;</li>&ndash;&gt;-->
                <!--<?php if(is_array($orders)): $i = 0; $__LIST__ = $orders;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$order): $mod = ($i % 2 );++$i;?>-->
                <!--<li class="list-group-item"><span class="badge"><?php echo ($order["actmoney"]); ?>元</span><?php echo ($order["businName"]); ?></li>-->
                <!--<?php endforeach; endif; else: echo "" ;endif; ?>-->
                <!--</ul>-->
                <!--</div>-->
                <!--</div>-->
                <!--</div>-->
                <!--&lt;!&ndash;<div class="col-sm-6">&ndash;&gt;-->
                <!--&lt;!&ndash;<div class="panel panel-default">&ndash;&gt;-->
                <!--&lt;!&ndash;<div class="panel-heading">订单信息</div>&ndash;&gt;-->
                <!--&lt;!&ndash;<div class="panel-body fixlist">&ndash;&gt;-->
                <!--&lt;!&ndash;<ul class="list-group">&ndash;&gt;-->
                <!--&lt;!&ndash;<li class="list-group-item"><span class="badge">14</span>昨天</li>&ndash;&gt;-->
                <!--&lt;!&ndash;<li class="list-group-item"><span class="badge">14</span>最近七天</li>&ndash;&gt;-->
                <!--&lt;!&ndash;<li class="list-group-item"><span class="badge">14</span>总访问</li>&ndash;&gt;-->
                <!--&lt;!&ndash;<li class="list-group-item"><span class="badge">14</span>总访问</li>&ndash;&gt;-->
                <!--&lt;!&ndash;<li class="list-group-item"><span class="badge">14</span>总访问</li>&ndash;&gt;-->
                <!--&lt;!&ndash;<li class="list-group-item"><span class="badge">14</span>总访问</li>&ndash;&gt;-->
                <!--&lt;!&ndash;<li class="list-group-item"><span class="badge">14</span>总访问</li>&ndash;&gt;-->
                <!--&lt;!&ndash;<li class="list-group-item"><span class="badge">14</span>总访问</li>&ndash;&gt;-->
                <!--&lt;!&ndash;<li class="list-group-item"><span class="badge">14</span>总访问</li>&ndash;&gt;-->
                <!--&lt;!&ndash;<li class="list-group-item"><span class="badge">14</span>总访问</li>&ndash;&gt;-->
                <!--&lt;!&ndash;</ul>&ndash;&gt;-->
                <!--&lt;!&ndash;</div>&ndash;&gt;-->
                <!--&lt;!&ndash;</div>&ndash;&gt;-->
                <!--&lt;!&ndash;</div>&ndash;&gt;-->
                <!--</div>-->
                <!--</div>-->
                <!--</div>-->
                <!--</div>-->
            </div>
        </div>
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
        <script src="/Public/lib/circle-progress.js"></script>
        <script>
            $('.redcircle').circleProgress({
                value: 1,
                size: $('.redcircle').width(),
                fill: {
                    color: "#fd4444"
                }
            });
            $('.bluecircle').circleProgress({
                value: 1,
                size: $('.bluecircle').width(),
                fill: {
                    color: "#368ee0"
                }
            });
            $('.greencircle').circleProgress({
                value: 1,
                size: $('.greencircle').width(),
                fill: {
                    color: "#1ebfaf"
                }
            });
        </script>
</body>

</html>