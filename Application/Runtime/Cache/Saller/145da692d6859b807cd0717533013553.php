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
                <div class="pageheader" style="padding:0px 10px 10px 10px; border-bottom:0px; background:#FFF">
                    <div style="border-bottom:1px #D8DBDB solid; padding:5px;font: 12px/1.5 Microsoft YaHei,Helvitica,Verdana,Arial,san-serif;">
                        <?php if(I('get.recycle') == 1): ?><h3 style="margin:0;">订单回收站</h3>
                            <?php else: ?>
                            <h3 style="margin:0;">订单</h3><?php endif; ?>

                    </div>
                    <div class="" style="margin-left: 10px;margin-top: 20px">
                        <div>
                            <a href="<?php echo U('/UserOrder/orderList',array('shop_type'=>1));?>"
                               style="margin-bottom: 10px;float: left"
                            <?php if((I('get.shop_type') == 1)): ?>class='btn btn-info'
                                <?php else: ?>
                                class='btn btn-infos'<?php endif; ?>
                            >订餐</a>
                            <a href="<?php echo U('/UserOrder/orderList',array('shop_type'=>2));?>"
                               style="margin-bottom: 10px;margin-left: 10px;float: left"
                            <?php if((I('get.shop_type') == 2) or (!I('get.shop_type'))): ?>class='btn btn-info'
                                <?php else: ?>
                                class='btn btn-infos'<?php endif; ?>
                            >外卖</a>
                            <a href="<?php echo U('/UserOrder/checkOrder');?>" class="btn btn-info"
                               style="margin-bottom: 10px;margin-left: 55px;float: left">订单验证</a>
                            <div style="clear: both">
                                <input type="date" class="form-control width200 startDate"
                                       style="float: left;margin-left: 0px;margin-bottom: 10px"
                                       name="startDate" placeholder="开始时间">
                                <input type="date" class="form-control width200 endDate"
                                       style="float: left;margin-left: 10px" name="endDate"
                                       placeholder="结束时间" value="">
                                <a href="javascript:;" style="float: left;display: block;margin-left: 10px"
                                   class="download btn btn-info">导出Excel</a>
                            </div>
                        </div>
                        <div style="clear: both">
                            <form action="" method="get">
                                <!--<select name="shop_type" class="form-control pull-left" style="width: 150px">-->
                                <!--<option value="0">&#45;&#45;订单类型&#45;&#45;</option>-->
                                <!--<option value="1"-->
                                <!--<?php if(I('get.shop_type') == 1): ?>selected='selected'<?php endif; ?>-->
                                <!--&gt;订餐</option>-->
                                <!--<option value="2"-->
                                <!--<?php if(I('get.shop_type') == 2): ?>selected='selected'<?php endif; ?>-->
                                <!--&gt;外卖</option>-->
                                <!--</select>-->
                                <select name="pay_type" class="form-control pull-left"
                                        style="width: 150px">
                                    <option value="0">--请选择支付方式--</option>
                                    <option value="1"
                                    <?php if(I('get.pay_type') == 1): ?>selected='selected'<?php endif; ?>
                                    >PayPal</option>
                                    <option value="2"
                                    <?php if(I('get.pay_type') == 2): ?>selected='selected'<?php endif; ?>
                                    >支付宝</option>
                                    <option value="3"
                                    <?php if(I('get.pay_type') == 3): ?>selected='selected'<?php endif; ?>
                                    >微信</option>
                                    <option value="4"
                                    <?php if(I('get.pay_type') == 4): ?>selected='selected'<?php endif; ?>
                                    >货到付款</option>
                                    <option value="5"
                                    <?php if(I('get.pay_type') == 5): ?>selected='selected'<?php endif; ?>
                                    >优惠券超额</option>
                                </select>
                                <input title="搜索订单生成时间" type="date" class="form-control pull-left settime"
                                       style="width: 150px;margin-left: 10px" name="settime"
                                       value="<?php echo I('get.settime');?>">
                                <input type="text" class="form-control pull-left" style="width: 150px;margin-left: 10px"
                                       name="ordernum" value="<?php echo I('get.ordernum');?>" placeholder="输入搜索订单号">
                                <input type="text" name="username" value="<?php echo I('get.username');?>"
                                       class="form-control pull-left" style="width: 150px;margin-left: 10px"
                                       placeholder="输入搜索会员账号">
                                <input type="submit" class="btn btn-info pull-left" style="margin-left: 10px"
                                       value="搜索">
                            </form>

                            <?php if(I('get.recycle') == 1): ?><a href="javascript:;" class="btn btn-info delAll"
                                   style="margin-left: 10px">清空回收站</a>
                                <a href="<?php echo U('/UserOrder/orderList',array('recycle'=>1));?>" class="btn btn-infos"
                                   style="margin-left: 10px">清空搜索条件</a>
                                <a href="<?php echo U('/UserOrder/orderList');?>" class="btn btn-infos"
                                   style="margin-left: 10px">回到订单管理</a>
                                <?php else: ?>
                                <a href="<?php echo U('/UserOrder/orderList');?>" class="btn btn-infos"
                                   style="margin-left: 10px">清空搜索条件</a>
                                <a href="<?php echo U('/UserOrder/orderList',array('recycle'=>1));?>"
                                   class="btn btn-infos">查看订单回收站</a><?php endif; ?>
                            <a href="javascript:;" class="btn btn-info batchDel"
                               style="margin-left: 100px;display: none">批量删除</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row m-top-md">
                <div class="col-lg-12 col-sm-6">
                    <table width="100%" class="tables m-top-md table-hover table-striped">
                        <tr>
                            <td>序号</td>
                            <td>会员</td>
                            <td>支付方式</td>
                            <td>订单号</td>
                            <td>订单金额</td>
                            <td>实际金额</td>
                            <td>生成时间</td>
                            <td>完成时间</td>
                            <td>订单类型</td>
                            <td>订单状态(外卖)</td>
                            <td>查看订单详情</td>
                            <td>操作</td>
                        </tr>
                        <?php if(is_array($rows)): $k = 0; $__LIST__ = $rows;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$row): $mod = ($k % 2 );++$k;?><tr class="text-c delCheck" name="<?php echo ($row["id"]); ?>">
                                <td><?php echo ($k); ?></td>
                                <td>
                                    <?php if(is_array($users)): $i = 0; $__LIST__ = $users;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$user): $mod = ($i % 2 );++$i; if(($user["id"]) == $row['uid']): echo ($user["username"]); endif; endforeach; endif; else: echo "" ;endif; ?>
                                </td>
                                <td>
                                    <?php echo ($payType[$row['pay_type']]); ?>
                                </td>
                                <td><?php echo ($row["ordernum"]); ?></td>
                                <td class="totalMoney"><?php echo ($row["money"]); ?></td>
                                <td class="actMoney"><?php echo ($row["actmoney"]); ?></td>
                                <td><?php echo (date('Y-m-d H:i:s',$row["settime"])); ?></td>
                                <td>
                                    <?php if($row['endtime'] == 0): ?>未完成
                                        <?php else: ?>
                                        <?php echo (date('Y-m-d H:i:s',$row["endtime"])); endif; ?>
                                </td>

                                <td>
                                    <?php echo ($shopType[$row['shop_type']]); ?>
                                </td>
                                <td>
                                    <?php if(($row["shop_type"]) == "1"): echo ($orderStatus[$row['orderstatus']]); endif; ?>
                                    <?php if(($row['backorder']) == "1"): ?>(已退单)<?php endif; ?>
                                </td>
                                <td>
                                    <a href="<?php echo U('/UserOrder/orderDetails',array('oid'=>$row['id']));?>"
                                       class="btn btn-info orderDetails">查看订单详情</a>
                                </td>
                                <td>
                                    <?php if(in_array('UserOrder/del',businPer()) OR busin()['state'] == 2): ?><a href="javascript:;" class="btn btn-info del" name="<?php echo ($row["id"]); ?>">删除</a><?php endif; ?>
                                </td>
                            </tr><?php endforeach; endif; else: echo "" ;endif; ?>
                        </tbody>
                        <tr>
                            <td colspan="999">
                                <span id="total">总金额：<?php echo ($totalMoney); ?>元 |</span>
                                <span id="act" style="margin-left: 0px">实付总金额：<?php echo ($actMoney); ?>元</span>
                            </td>
                        </tr>
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
    $('.download').click(function () {
        var startTime = $('.startDate').val();
        var endTime = $('.endDate').val();
        var shop_type = "<?php echo I('get.shop_type');?>";
        if(!shop_type) {
            shop_type = 2;
        }
        $.post("<?php echo U('/UserOrder/excel');?>", {start: startTime, end: endTime,shopType:shop_type}, function (response) {
            if(response.status == 2) {
                alert(response.msg);
                return false;
            }
            location.href = response.url;
        });
    });
</script>
<?php if(I('get.recycle') == 1): ?><script>
        $('.del').click(function (event) {
            event.stopPropagation();
            var id = $(this).attr('name');
            if (confirm('确认彻底删除吗?')) {
                $.post('<?php echo U("/UserOrder/delRecycle");?>', {'id': id}, function (data) {
                    if (data == 0) {
                        alert('删除失败');
                    } else {
                        alert('删除成功');
                        location.reload();
                    }
                });
            }
        });
        //批量删除
        $(function () {
            $('.delCheck').click(function () {
                var delCheck = $(this).attr('delCheck');
                if (delCheck == 'true') {
                    $(this).css('background-color', '');
                    $(this).css('color', '');
                    $(this).attr('delCheck', 'false');
                } else {
//                    $(this).css('background-color', '#fc7e7e');
                    $(this).css('background-color', 'rgba(149, 155, 166, 0.95)');
                    $(this).css('color', '#fff');
                    $(this).attr('delCheck', 'true');
                }
                $.each($('.delCheck'), function (i, v) {
                    var value = $(v).attr('delCheck');
                    if (value == 'true') {
                        $('.batchDel').css('display', '');
                        return false;
                    } else {
                        $('.batchDel').css('display', 'none');
                    }
                });
            });

            $('.batchDel').click(function () {
                var ids = [];
                $.each($('.delCheck'), function (i, v) {
                    var value = $(v).attr('delCheck');
                    if (value == 'true') {
                        ids.push($(v).attr('name'));
                    }
                });
                if (confirm('确认彻底删除吗？')) {
                    $.post('<?php echo U("/UserOrder/batchRecycleDel");?>', {'ids': ids}, function (data) {
                        if (data == 0) {
                            alert('删除出错了');
                        } else {
                            alert('删除成功');
                            location.reload();
                        }
                    });
                }
            });
        });


    </script>
    <?php else: ?>
    <script>
        $(function () {
//        var totalMoney = 0;
//        var actMoney = 0;
//        $('.totalMoney').each(function (i, v) {
//            totalMoney += parseInt($(v).html());
//        });
//        var totalHtml = '总金额:' + totalMoney + '元  |';
//        $('#total').html(totalHtml);
//        $('.actMoney').each(function (i, v) {
//            actMoney += parseInt($(v).html());
//        });
//        var actHtml = '实付总金额:' + actMoney + '元';
//        $('#act').html(actHtml);

            $('.del').click(function () {
                var id = $(this).attr('name');
                event.stopPropagation();
                if (confirm('确认删除吗?')) {
                    $.post('<?php echo U("/UserOrder/del");?>', {'id': id}, function (data) {
                        if (data == 0) {
                            alert('删除失败');
                        } else {
                            alert('删除成功');
                            location.reload();
                        }
                    });
                }
            });
            //批量删除
            $(function () {
                $('.delCheck').click(function () {
                    var delCheck = $(this).attr('delCheck');
                    if (delCheck == 'true') {
                        $(this).css('background-color', '');
                        $(this).css('color', '');
                        $(this).attr('delCheck', 'false');
                    } else {
//                        $(this).css('background-color', '#fc7e7e');
                        $(this).css('background-color', 'rgba(149, 155, 166, 0.95)');
                        $(this).css('color', '#fff');
                        $(this).attr('delCheck', 'true');
                    }
                    $.each($('.delCheck'), function (i, v) {
                        var value = $(v).attr('delCheck');
                        if (value == 'true') {
                            $('.batchDel').css('display', '');
                            return false;
                        } else {
                            $('.batchDel').css('display', 'none');
                        }
                    });
                });

                $('.batchDel').click(function () {
                    var ids = [];
                    $.each($('.delCheck'), function (i, v) {
                        var value = $(v).attr('delCheck');
                        if (value == 'true') {
                            ids.push($(v).attr('name'));
                        }
                    });
                    if (confirm('确认删除吗')) {
                        $.post('<?php echo U("/UserOrder/batchDel");?>', {'ids': ids}, function (data) {
                            if (data == 0) {
                                alert('删除出错了');
                            } else {
                                alert('删除成功');
                                location.reload();
                            }
                        });
                    }
                });
            });
        });
    </script><?php endif; ?>
<script>
    //    $('.orderDetails').click(function (event) {
    //        event.stopPropagation();
    //    });

    $('.btn').click(function (event) {
        event.stopPropagation();
    });
</script>

<script>
    $('.delAll').click(function () {
        if (confirm('确认清空回收站？')) {
            $.post('<?php echo U("/UserOrder/delAll");?>', {}, function (res) {
                if (res == 1) {
                    alert('回收站已清空');
                    location.reload();
                } else {
                    alert('清空回收站失败');
                }
            });
        }
    });
</script>
</body>
</html>