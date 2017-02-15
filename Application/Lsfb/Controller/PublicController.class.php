<?php
namespace Lsfb\Controller;

use Think\Controller;

class PublicController extends Controller
{


    public function _initialize()
    {
        header("Content-Type:text/html; charset=utf-8");
        //mysql_query("set names utf8");
        import("ORG.Net.UploadFile");
        import("ORG.Util.extend");
        import("ORG.Util.Page");
        import("ORG.Util.Easemob");
        $time = date(DATE_RFC822);
        $this->assign('time', $time);
        $url = $_SERVER['REQUEST_URI'];
        $this->menu();
        if (method_exists($this, '_const4control')) {
            $this->_const4control();
        }
    }

    public function mult_unique($array)
    {
        $return = array();
        foreach ($array as $key => $v) {
            if (!in_array($v, $return)) {
                $return[$key] = $v;
            }
        }
        return $return;
    }
	//总数
	public function counts(){
		$total = M("total")->where("id=1")->find();
		$nowtime = strtotime(date("Y-m-d 00:00:00"));
		if( $total['times'] < $nowtime ){
			$last_filename = './Public/vlog/'.date("Y-m-d",strtotime("-1 day")).'.txt';//昨天
			if( file_exists($last_filename) ){
				$lastday = $this->count_line($last_filename);
			}else{
				$lastday = 0;
			}
			$totalnum['total'] = $total['total'] + $lastday;//数量叠加
			$totalnum['times'] = strtotime(date("Y-m-d H:i:s"));
			M("total")->where("id=1")->save($totalnum);
		}
		//访问统计
		//最近7天
		$filename='./Public/vlog/'.date("Y-m-d").'.txt';
		$filename1='./Public/vlog/'.date("Y-m-d",strtotime("-1 day")).'.txt';
		$filename2='./Public/vlog/'.date("Y-m-d",strtotime("-2 day")).'.txt';
		$filename3='./Public/vlog/'.date("Y-m-d",strtotime("-3 day")).'.txt';
		$filename4='./Public/vlog/'.date("Y-m-d",strtotime("-4 day")).'.txt';
		$filename5='./Public/vlog/'.date("Y-m-d",strtotime("-5 day")).'.txt';
		$filename6='./Public/vlog/'.date("Y-m-d",strtotime("-6 day")).'.txt';
		$sevenum = 0;//七天数量
		if( file_exists($filename) ){
			$sevenum += $this->count_line($filename);
		}else{
			$sevenum += 0;
		}
		if( file_exists($filename1) ){
			$sevenum += $this->count_line($filename1);
			$lastday = $this->count_line($filename1);;
		}else{
			$sevenum += 0;
			$lastday = 0;
		}
		if( file_exists($filename2) ){
			$sevenum += $this->count_line($filename2);
		}else{
			$sevenum += 0;
		}
		if( file_exists($filename3) ){
			$sevenum += $this->count_line($filename3);
		}else{
			$sevenum += 0;
		}
		if( file_exists($filename4) ){
			$sevenum += $this->count_line($filename4);
		}else{
			$sevenum += 0;
		}
		if( file_exists($filename5) ){
			$sevenum += $this->count_line($filename5);
		}else{
			$sevenum += 0;
		}
		if( file_exists($filename6) ){
			$sevenum += $this->count_line($filename6);
		}else{
			$sevenum += 0;
		}
		//今日提统计
		if( file_exists($filename) ){
			$todaynum = $this->count_line($filename);
		}else{
			$todaynum = 0;
		}
		//总统计
		$totals = M("total")->where("id=1")->find();
		$zong = $totals['total'] + $todaynum;
		$arr['today'] = $todaynum;
		$arr['lastday'] = $lastday;
		$arr['seven'] = $sevenum;
		$arr['total'] = $zong;
		return $arr;
	}
	//获取文件多少行
	function count_line($file){
		$fp=fopen($file, "r");
		$i=0;
		while(!feof($fp)) {
			//每次读取4M
		    if($data=fread($fp,1024*1024*4)){
		    	//计算读取到的行数
		      	$num=substr_count($data,"\n");
		      	$i+=$num;
		    }
		}
		fclose($fp);
		return $i;
	}
    /**
     * 菜单显示所用数据
     */
    public function menu()
    {
        $adMenuModel = M('AdMenu');

        $userInfo = session('USER_INFO');
//        $userInfo['id'] = 1;
        if ($userInfo['id'] == 1) {//超级管理员
            //获取顶级分类
            $menus = $adMenuModel->where(array('tid' => 0, 'set' => 1))->order('sort desc')->select();
            $this->assign('menus', $menus);
            $id = I('get.id');
            if (empty($id)) {
                $url = CONTROLLER_NAME . '/';
                $row = $adMenuModel->where(array('url' => array('like', $url . '%')))->order('sort desc')->find();
                if ($row) {
                    $id = $row['tid'];
                } else {
                    $id = $menus[0]['id'];
                }
//                $id = $menus[0]['id'];
            }
            //获取左边菜单列表
            $leftMenus = $adMenuModel->where(array('tid' => $id, 'pid' => 0, 'set' => 1))->order('sort desc')->select();
            //获取左侧二级菜单列表
            foreach ($leftMenus as $key => $leftMenu) {
                $leftMenus[$key]['_child'] = $adMenuModel->where(array('pid' => $leftMenu['id'], 'set' => 1))->order('sort desc')->select();
            }
            //通过控制器名来判断当前页面属于哪个菜单
            $url = CONTROLLER_NAME . '/';
            $row = $adMenuModel->where(array('url' => array('like', $url . '%')))->find();
            if ($row) {
                $this->assign('menuId', $row['id']);
                $this->assign('menuPid', $row['pid']);
                $this->assign('menuTid', $row['tid']);
            } else {
                $this->assign('menuTid', $id);
            }
            $this->assign('leftMenus', $leftMenus);
        } else {
            //获取该用户拥有的权限
            $permissions = session('PERMISSIONS');

            foreach ($permissions as $permission) {
                $data[] = substr($permission, 0, strpos($permission, '/'));
            }
            //左侧菜单列表
            $userPermissions = array_unique($data);
            //获取菜单
            foreach ($userPermissions as $userPermission) {
                $userPermission = $userPermission . '/';
                $haveMenus[] = $adMenuModel->where(array('url' => array('like', $userPermission . '%')))->order('sort desc')->find();
            }
            //取得所有的tid，用于顶级分类
            foreach ($haveMenus as $haveMenu) {
                $tids[] = $haveMenu['tid'];
            }
            $tids = array_unique($tids);
            //所有的顶级分类
            foreach ($tids as $tid) {
                $menus[] = $adMenuModel->where(array('id' => $tid, 'set' => 1))->order('sort desc')->find();
            }
            $id = I('get.id');
            if (empty($id)) {
                $url = CONTROLLER_NAME . '/';
                $row = $adMenuModel->where(array('url' => array('like', $url . '%')))->order('sort desc')->find();
                if ($row) {
                    $id = $row['tid'];
                } else {
                    $id = $menus[0]['id'];
                }
//                $id = $menus[0]['id'];
            }
            //开始获取权限内的所有左侧菜单
            foreach ($permissions as $rePermission) {
                $row = $adMenuModel->where(array('tid' => $id, 'url' => array('like', "%" . $rePermission . "%")))->order('sort desc')->find();
                if ($row) {
                    $allLeftMenus[] = $row;
                }
            }
            //获取左侧一级菜单列表
            foreach ($allLeftMenus as $allLeftMenu) {
                $row = $adMenuModel->where(array('pid' => 0, 'id' => $allLeftMenu['pid'], 'set' => 1))->order('sort desc')->find();
                if ($row) {
                    $reLeftMenus[] = $row;
                }
            }
            for ($i = 0; $i <= count($reLeftMenus); ++$i) {
                if ($reLeftMenus[$i]['id'] == $reLeftMenus[$i - 1]['id']) {
                    unset($reLeftMenus[$i - 1]);
                }
            }
            //获取左侧二级菜单列表
            foreach ($reLeftMenus as $key => $secondLeftMenu) {
                foreach ($userPermissions as $value) {
                    $row = $adMenuModel->where(array('pid' => $secondLeftMenu['id'], 'url' => array('like', $value . '%'), 'set' => 1))->order('sort desc')->find();
                    if ($row) {
                        $reLeftMenus[$key]['_child'][] = $row;
                    }
                }
            }
//            dump($reLeftMenus);
//            exit;
//            //获取全部左侧菜单
//            $id = I('get.id');
//            if (empty($id)) {
//                $url = $leftMenusPermissions[0];
//                $row = $adMenuModel->where(array('url' => array('like', $url . '%')))->find();
//                $id = $row['tid'];
////                $id = $menus[0]['id'];
//            }
//            $allLeftMenus = $adMenuModel->where(array('id' => $id))->select();
//            dump($allLeftMenus);
//            exit;
//            foreach ($leftMenusPermissions as $key => $leftMenusPermission) {
//                $res = $adMenuModel->where(array('url' => array('like', $leftMenusPermission . '%')))->find();
//                if (isset($res['pid'])) {
//                    $leftMenus[] = $adMenuModel->where(array('id' => $res['pid'], 'set' => 1))->find();
//                } else {
//                    $leftMenus[] = $adMenuModel->where(array('tid' => $res['tid'], 'set' => 1))->find();
//                }
//            }
//
//            for ($i = 1; $i <= count($leftMenus) + 1; ++$i) {
//                if ($leftMenus[$i]['id'] == $leftMenus[$i - 1]['id']) {
//                    unset($leftMenus[$i - 1]);
//                }
//            }
//            //获取左侧二级菜单列表
//            foreach ($leftMenus as $key => $leftMenu) {
//                foreach ($leftMenusPermissions as $value) {
//                    $row = $adMenuModel->where(array('pid' => $leftMenu['id'], 'url' => array('like', $value . '%'), 'set' => 1))->find();
//                    if ($row) {
//                        $leftMenus[$key]['_child'][] = $row;
//                    }
//                }
//            }
//
//            //获取顶级分类
//            foreach ($leftMenus as $leftMenu) {
//                $menus[] = $adMenuModel->where(array('id' => $leftMenu['tid'], 'set' => 1))->find();
//            }
//
//            for ($i = 1; $i <= count($menus); ++$i) {
//                if ($menus[$i]['id'] == $menus[$i - 1]['id']) {
//                    unset($menus[$i - 1]);
//                }
//            }

            $this->assign('menus', $menus);
            //通过控制器名来判断当前页面属于哪个菜单
            $url = CONTROLLER_NAME . '/';
            $row = $adMenuModel->where(array('url' => array('like', $url . '%')))->find();
            if ($row) {
                $this->assign('menuId', $row['id']);
                $this->assign('menuPid', $row['pid']);
                $this->assign('menuTid', $row['tid']);
            } else {
                $this->assign('menuTid', $id);
            }

            $this->assign('leftMenus', $reLeftMenus);

        }

    }

//    public function topmenu()
//    {
//        $uid = $_SESSION["APPuserid"];
//        $uid = 1;
//        if (empty($uid)) {
//            $this->redirect('/Login/login');
//        } else {
//            if ($uid == 1) {
//                $topid = $_GET['id'];
//                $topmenu = M("ad_leftmenu")->where("left_menu_tid=0")->order("left_menu_sort desc")->select();
//                $url = $_SERVER['REQUEST_URI'];
//                //判断栏目是哪个
//                $urls = explode('pic.php/', $url);
//                $adurl1 = explode("/", $urls[1]);
//                $this->assign("action", $adurl1[0]);
//                $this->assign("funct", $adurl1[1]);
//                //左边和顶部
//                $urld = $adurl1[0] . '/' . $adurl1[1] . '/' . $adurl1[2] . '/' . substr($adurl1[3], 0, 1);
//                if (!empty($adurl1[0]) && !empty($adurl1[2])) {
//                    $uf = M("ad_leftmenu")->where("left_menu_url like '%" . $urld . "%'")->find();
//                } else {
//                    $tid = $topmenu[0]['left_menu_id'];
//                    $uf = M("ad_leftmenu")->where("left_menu_tid=" . $tid)->find();
//                }
//                if ($uf) {
//                    $this->assign("leftid", $uf['left_menu_pid']);
//                    $this->assign("lefttid", $uf['left_menu_id']);
//                    $this->assign("id", $uf['ad_leftmenu']);
//                }
//                for ($i = 0; $i < count($topmenu); $i++) {
//                    if ($topmenu[$i]['left_menu_id'] == $uf['left_menu_tid']) {
//                        //选中的部分
//                        $topmenu[$i]['checked'] = 'checked';
//                    } else {
//                        $topmenu[$i]['checked'] = '';
//                    }
//                }
//                $this->assign("topmenu", $topmenu);
//
//                if ($uf) {
//                    $topid = $uf['left_menu_tid'];
//                }
//                //当前的url栏目
//                $ylist = M("ad_leftmenu")->where("left_menu_pid=0 and left_menu_set=1 and left_menu_tid=" . $topid)->order("left_menu_sort desc")->select();
//
//                for ($y = 0; $y < count($ylist); $y++) {
//                    $ylist[$y]["_child"] = M("ad_leftmenu")->where("left_menu_set=1 and left_menu_pid=" . $ylist[$y]['left_menu_id'])->order("left_menu_sort desc")->select();
//                }
//                $this->assign("ylist", $ylist);
//            } else {
//                $topid = $_GET['id'];
//                $jorl = M("ad_match")->where("ad_match_rid=" . $uid)->select();//会员拥有的栏目
//                for ($i = 0; $i < count($jorl); $i++) {
//                    $joid .= $jorl[$i]['ad_match_cid'] . ",";
//                }
//                $jormenu = M("ad_leftmenu")->field("distinct left_menu_tid as tid")->where("left_menu_id in (" . substr($joid, 0, -1) . ")")->select();//会员能看的顶级栏目
//                for ($i = 0; $i < count($jormenu); $i++) {
//                    $tid .= $jormenu[$i]['tid'] . ",";
//                }
//                $jormenu1 = M("ad_leftmenu")->field("left_menu_pid as pid")->where("left_menu_id in (" . substr($joid, 0, -1) . ")")->select();//会员能看的顶级栏目
//                for ($i = 0; $i < count($jormenu1); $i++) {
//                    $pid .= $jormenu1[$i]['pid'] . ',';
//                }
//                $topmenu = M("ad_leftmenu")->where("left_menu_id in (" . substr($tid, 0, -1) . ")")->order("left_menu_sort desc")->select();
//                $url = $_SERVER['REQUEST_URI'];
//                //判断栏目是哪个
//                $urls = explode('pic.php/', $url);
//                $adurl1 = explode("/", $urls[1]);
//                $this->assign("action", $adurl1[0]);
//                $this->assign("funct", $adurl1[1]);
//                //左边和顶部
//                $urld = $adurl1[0] . '/' . $adurl1[1] . '/' . $adurl1[2] . '/' . substr($adurl1[3], 0, 1);
//                if (!empty($adurl1[0]) && !empty($adurl1[2])) {
//                    $uf = M("ad_leftmenu")->where("left_menu_url like '%" . $urld . "%'")->find();
//                } else {
//                    $tid = $topmenu[0]['left_menu_id'];
//                    $uf = M("ad_leftmenu")->where("left_menu_tid=" . $tid)->find();
//                }
//                if ($uf) {
//                    $this->assign("leftid", $uf['left_menu_pid']);
//                    $this->assign("lefttid", $uf['left_menu_id']);
//                    $this->assign("id", $uf['ad_leftmenu']);
//                }
//                for ($i = 0; $i < count($topmenu); $i++) {
//                    if ($topmenu[$i]['left_menu_id'] == $uf['left_menu_tid']) {
//                        //选中的部分
//                        $topmenu[$i]['checked'] = 'checked';
//                    } else {
//                        $topmenu[$i]['checked'] = '';
//                    }
//                }
//                $this->assign("topmenu", $topmenu);
//
//                if ($uf) {
//                    $topid = $uf['left_menu_tid'];
//                }
//                //当前的url栏目
//                $ylist = M("ad_leftmenu")->where("left_menu_pid=0 and left_menu_set=1 and left_menu_tid=" . $topid . " and left_menu_id in (" . substr($pid, 0, -1) . ")")->order("left_menu_sort desc")->select();
//                for ($y = 0; $y < count($ylist); $y++) {
//                    $ylist[$y]["_child"] = M("ad_leftmenu")->where("left_menu_set=1 and left_menu_pid=" . $ylist[$y]['left_menu_id'] . " and left_menu_id in (" . substr($joid, 0, -1) . ")")->order("left_menu_sort desc")->select();
//                }
//                $this->assign("ylist", $ylist);
//            }
//            //dump($ylist);
//            $this->id = $topid;
//        }
//    }

    //单图上传
    public
    function imgupload()
    {
        import("ORG.Net.UploadFile");
        $upload = new \Think\Upload();// 实例化上传类
        $upload->maxSize = 3145728 * 200;// 上传文件大小限制
        $upload->allowExts = array('jpg', 'gif', 'png', 'jpeg');// 文件后缀名
        $upload->rootPath = "./Public/images/";// 保存的路径
        $upload->autoSub = false;// 关闭子目录保存上传文件
        $info = $upload->upload();
        if ($info) {
            foreach ($info as $file) {
                $data['img'] = $file['savename'];
            }
        }
        $this->ajaxReturn($data);
    }

    //视频上传

    //uploadify上传
    public
    function ups()
    {
        $time = date(DATE_RFC822);
        $this->assign('time', $time);
    }

    public
    function uploadify()
    {
        if (@$_REQUEST['SESSION_ID'] && ($session_id = $_REQUEST['SESSION_ID']) != session_id()) {
            session_destroy();
            session_id($session_id);
            @session_start();
        }
        // 文件保存目录路径
        $save_path = './Public/images/';
        // $save_path = $_SERVER['DOCUMENT_ROOT'].'/image/';
        // 文件暂存目录路径
        $temp_path = './Public/images/';
        //$temp_path = $_SERVER['DOCUMENT_ROOT'].'/image/';
        // 文件网络目录
        $save_url = './Pulic/images/';
        //$save_url =  'http://127.0.0.1/image/';
        // $save_url =  'http://i.7aba.com/';

        //定义允许上传的文件扩展名
        $ext_arr = array(
            'image' => array('gif', 'jpg', 'jpeg', 'png', 'bmp', 'mp4', 'mp3', 'flv'),
        );
        // 最大文件大小
        $max_size = 2097152 * 1000;

        // PHP上传失败
        if (!empty($_FILES['Filedata']['error'])) {
            switch ($_FILES['Filedata']['error']) {
                case '1':
                    $error = '超过php.ini允许的大小。';
                    break;
                case '2':
                    $error = '超过表单允许的大小。';
                    break;
                case '3':
                    $error = '图片只有部分被上传。';
                    break;
                case '4':
                    $error = '请选择图片。';
                    break;
                case '6':
                    $error = '找不到临时目录。';
                    break;
                case '7':
                    $error = '写文件到硬盘出错。';
                    break;
                case '8':
                    $error = 'File upload stopped by extension。';
                    break;
                case '999':
                default:
                    $error = '未知错误。';
            }
            $this->ajax_msg(0, 1111);
        }

        // 有上传文件时
        if (empty($_FILES) === false) {
            // 原文件名
            $file_name = $_FILES['Filedata']['name'];
            // 服务器上临时文件名
            $tmp_name = $_FILES['Filedata']['tmp_name'];
            // 文件大小
            $file_size = $_FILES['Filedata']['size'];
            // 检查文件名
            if (!$file_name) {
                $this->ajax_msg(0, '请选择文件');
            }
            // 检查目录
            if (@is_dir($save_path) === false) {
                $this->ajax_msg(0, '3333');
            }
            // 检查目录写权限
            if (@is_writable($save_path) === false) {
                $this->ajax_msg(0, '上传目录没有写权限');
            }
            // 检查是否已上传
            if (@is_uploaded_file($tmp_name) === false) {
                $this->ajax_msg(0, '上传失败');
            }
            // 检查文件大小
            if ($file_size > $max_size) {
                $this->ajax_msg(0, '上传文件大学超过限制');
            }
            // 检查目录名
            $dir_name = empty($_GET['dir']) ? 'image' : trim($_GET['dir']);
            if (empty($ext_arr[$dir_name])) {
                $this->ajax_msg(0, '目录名不正确');
            }
            // 获得文件扩展名
            $temp_arr = explode('.', $file_name);
            $file_ext = array_pop($temp_arr);
            $file_ext = trim($file_ext);
            $file_ext = strtolower($file_ext);
            // 检查扩展名
            if (in_array($file_ext, $ext_arr[$dir_name]) === false) {
                $this->ajax_msg(0, '上传文件扩展名是不允许的扩展名，只允许' . implode(',', $ext_arr[$dir_name]) . '格式');
            }
            // 创建文件夹
            $ymd = date('Ymd');
            // 新文件名
            $new_file_name = date('YmdHis') . rand(10000, 99999) . '.' . $file_ext;
            // 移动文件
            $file_path = $save_path . $new_file_name;
            $file_url = $save_url . $new_file_name;
            if (move_uploaded_file($tmp_name, $file_path) === false) {
                $this->ajax_msg(0, '上传文件失败');
            }
            //$filebs=$_POST['filebs'];
            @chmod($file_path, 0644);
            $this->ajax_msg(1, $new_file_name);
        } else {
            $this->ajax_msg(0, '无法上传文件');
        }
    }

    function ajax_msg($status, $message, $width, $height)
    {
        header('Content-Type:application/json; charset=utf-8');
        if (!empty($width)) {
            exit(json_encode(array('status' => $status, 'message' => $message, 'width' => $width, 'height' => $height)));
        } else {
            exit(json_encode(array('status' => $status, 'message' => $message)));
        }
    }

    public
    function delimg()
    {
        $id = $_POST['id'];
        $img = $_POST['img'];
        $img = explode(",", $img);
        $imgd = '';
        for ($i = 0; $i < count($img); $i++) {
            if (!empty($img[$i])) {
                if ($id == $img[$i]) {
                    unlink("./Public/images/" . $img[$i]);
                } else {
                    $imgd .= $img[$i] . ",";
                }
            }
        }
        $this->ajaxReturn(substr($imgd, 0, -1));
    }
}

?>