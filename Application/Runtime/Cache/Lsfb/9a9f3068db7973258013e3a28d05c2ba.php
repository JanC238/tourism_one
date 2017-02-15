<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
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
                        <h3 style="margin:0;">订单管理</h3>
                    </div>
                    <div style="margin-top: 10px;margin-left: 10px">
                        <select class="form-control width200 pull-left businExcelId">
                            <option value="0">--选择商家--</option>
                            <?php if(is_array($buser)): $i = 0; $__LIST__ = $buser;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$bu): $mod = ($i % 2 );++$i;?><option value="<?php echo ($bu["id"]); ?>"
                                ><?php echo ($bu["name"]); ?>
                                </option><?php endforeach; endif; else: echo "" ;endif; ?>
                        </select>
                        <input type="date" class="form-control width200 startDate"
                               style="float: left;margin-left: 10px;margin-bottom: 10px"
                               name="startDate" placeholder="开始时间">
                        <input type="date" class="form-control width200 endDate"
                               style="float: left;margin-left: 10px" name="endDate"
                               placeholder="结束时间" value="">
                        <a href="javascript:;" style="float: left;display: block;margin-left: 10px"
                           class="download btn btn-info">导出Excel</a>
                    </div>
                    <div style="clear: both;width:100%; padding:10px 0 10px 10px; margin-top:10px;">
                        <form action="<?php echo U('/UserOrder/index');?>" method="get">
                            <select class="form-control width200 pull-left" name="buserid" id="change">
                                <option value="0">--选择商家--</option>
                                <?php if(is_array($buser)): $i = 0; $__LIST__ = $buser;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$buser): $mod = ($i % 2 );++$i;?><option value="<?php echo ($buser["id"]); ?>"
                                    <?php if($buser["selected"] == 1): ?>selected<?php endif; ?>
                                    ><?php echo ($buser["name"]); ?></option><?php endforeach; endif; else: echo "" ;endif; ?>
                            </select>
                            <select class="form-control width100 pull-left" name="shop_type" id="change"
                                    style="margin-left:10px;">
                                <option value="0">--选择类型--</option>
                                <option value="1"
                                <?php if($shop_type == 1): ?>selected<?php endif; ?>
                                >订餐</option>
                                <option value="2"
                                <?php if($shop_type == 2): ?>selected<?php endif; ?>
                                >外卖</option>
                            </select>
                            <select class="form-control width100 pull-left" name="pay_type" id="change"
                                    style="margin-left:10px;">
                                <option value="0">--支付方式--</option>
                                <option value="1"
                                <?php if($shop_type == 1): ?>selected<?php endif; ?>
                                >Paypal</option>
                                <option value="2"
                                <?php if($shop_type == 2): ?>selected<?php endif; ?>
                                >支付宝</option>
                                <option value="3"
                                <?php if($shop_type == 3): ?>selected<?php endif; ?>
                                >微信</option>
                                <option value="4"
                                <?php if($shop_type == 4): ?>selected<?php endif; ?>
                                >货到付款</option>
                                <option value="5"
                                <?php if($shop_type == 5): ?>selected<?php endif; ?>
                                >优惠券超额</option>
                            </select>
                            <input type="text" value="<?php echo I('get.search');?>" style="margin-left:10px;"
                                   class="form-control width200 pull-left" name="search" placeholder="搜索订单号">
                            <input type="submit" class="btn btn-info pull-left" style="margin-left: 10px" value="搜索">
                        </form>
                        <?php if(I('get.recycle') == 1): ?><a href="<?php echo U('/UserOrder/index',array('recycle'=>1));?>" class="btn btn-infos"
                               style="margin-left: 10px">清空搜索条件</a>
                            <a href="<?php echo U('/UserOrder/index');?>" class="btn btn-infos">回到订单管理</a>
                            <?php else: ?>
                            <a href="<?php echo U('/UserOrder/index');?>" class="btn btn-infos"
                               style="margin-left: 10px">清空搜索条件</a>
                            <a href="<?php echo U('/UserOrder/index',array('recycle'=>1));?>" class="btn btn-infos">查看订单回收站</a><?php endif; ?>
                        <a href="javascript:;" class="btn btn-info batchDel" style="margin-left: 100px;display: none">批量删除</a>
                    </div>
                </div>
            </div>

            <div class="row m-top-md">
                <div class="col-lg-12 col-sm-6">
                    <table width="100%" class="tables m-top-md table-hover table-striped">
                        <tr>
                            <td>序号</td>
                            <td>商家名称</td>
                            <td>订单类型</td>
                            <td>订单号</td>
                            <td>支付方式</td>
                            <td>订单时间</td>
                            <td>订单金额</td>
                            <td>优惠券</td>
                            <td>订单状态</td>
                            <td>操作</td>
                        </tr>
                        <?php if(is_array($rows)): $k = 0; $__LIST__ = $rows;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$row): $mod = ($k % 2 );++$k;?><tr class="text-c delCheck" name="<?php echo ($row["id"]); ?>">
                                <td>
                                    <?php echo ($k); ?>
                                </td>
                                <td><?php echo ($row["busername"]); ?></td>
                                <td>
                                    <?php if($row["shop_type"] == 0): ?>订餐
                                        <?php else: ?>
                                        外卖<?php endif; ?>
                                </td>
                                <td><?php echo ($row["ordernum"]); ?></td>
                                <td>
                                    <?php if($row["pay_type"] == 1): ?>Paypal
                                        <?php elseif($row["pay_type"] == 2): ?>
                                        支付宝
                                        <?php elseif($row["pay_type"] == 3): ?>
                                        微信
                                        <?php elseif($row["pay_type"] == 4): ?>
                                        货到付款<?php endif; ?>
                                </td>
                                <td>下单时间：<?php echo (date("Y-m-d H:i",$row["settime"])); ?><br/>就餐时间：<?php echo (date("Y-m-d H:i",$row["odtime"])); ?>
                                </td>
                                <td><?php echo ($row["money"]); ?>
                                    <?php if($row["actmoney"] != 0): ?>&nbsp;&nbsp;&nbsp;&nbsp;实际支付：<?php echo ($row["actmoney"]); endif; ?>
                                </td>
                                <td><?php echo ($row["coupid"]); ?>
                                    <?php if($row["coupmoney"] != ''): ?>&nbsp;&nbsp;&nbsp;&nbsp;优惠度：<?php echo ($row["coupmoney"]); endif; ?>
                                </td>
                                <td>
                                    <?php if($row["backorder"] == 1): ?>退单&nbsp;&nbsp;&nbsp;&nbsp;<a href="#" class="btn btn-infos btndel">退单查看</a>
                                        <?php elseif($row["state"] == 1): ?>
                                        已接单
                                        <?php elseif($row["state"] == 2): ?>
                                        制作中
                                        <?php elseif($row["state"] == 3): ?>
                                        配送中
                                        <?php elseif($row["state"] == 4): ?>
                                        待评价
                                        <?php elseif($row["state"] == 5): ?>
                                        订单完成<?php endif; ?>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<a
                                        href="<?php echo U('/UserOrder/orderSinger',array('orderid'=>$row['id']));?>"
                                        class="btn btn-infos">订单详情</a>
                                </td>
                                <td>
                                    <a href="javascript:;" class="btn btn-info del" name="<?php echo ($row["id"]); ?>">删除</a>
                                </td>
                            </tr><?php endforeach; endif; else: echo "" ;endif; ?>
                        <tr>
                            <td colspan="99"><?php echo ($pageHtml); ?></td>
                        </tr>
                        </tbody>
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
        if (!shop_type) {
            shop_type = 2;
        }
        var businid = $('.businExcelId').val();
        $.post("<?php echo U('/UserOrder/excel');?>", {
            start: startTime,
            end: endTime,
            shopType: shop_type,
            bid: businid
        }, function (response) {
            if (response.status == 2) {
                alert(response.msg);
                return false;
            }
            location.href = response.url;
        });
    });
</script>
<?php if(I('get.recycle') == 1): ?><script>
        //删除
        $(".del").on("click", function (event) {
            event.stopPropagation();
            if (confirm("确定要彻底删除吗")) {
                $.maskajax('post', "<?php echo U('/UserOrder/delRecycle');?>", {"id": $(this).attr("name")}, function (data) {
                    if (data == 0) {
                        alert('删除出错了');
                    } else {
                        location.reload();
                    }
                }, '删除中');
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
        //删除
        $(".del").on("click", function (event) {
            event.stopPropagation();
            if (confirm("确定要删除吗")) {
                $.maskajax('post', "<?php echo U('/UserOrder/del');?>", {"id": $(this).attr("name")}, function (data) {
                    if (data == 0) {
                        alert('删除出错了');
                    } else {
                        location.reload();
                    }
                }, '删除中');
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
    </script><?php endif; ?>

<script>
    $('.btn').click(function (event) {
        event.stopPropagation();
    });
</script>

</body>
</html>