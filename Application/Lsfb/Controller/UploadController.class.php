<?php
namespace Lsfb\Controller;

use Think\Controller;

class UploadController extends Controller
{

    //图片上传处理
    public function imguploads($tp, $tpnum, $num)
    {
        $img = $_POST['list_img'];
        $imgnum = $_POST['list_imgnum'];
        if ($img) {
            for ($i = 0; $i < count($img); $i++) {
                $imgs .= $img[$i] . ",";
                $imgnums .= $imgnum[$i] . ",";
            }
            $data[$tp] = substr($imgs, 0, -1);
            $data[$tpnum] = substr($imgnums, 0, -1);
            return $data;
        } else {
            if ($num == 1) {

            } else {
                $data[$tp] = '';
                $data[$tpnum] = '';
                return $data;
            }
        }
    }

    //单文件上传
    public function imgupload()
    {
        import("ORG.Net.UploadFile");
        $upload = new \Think\Upload();// 实例化上传类
        $upload->maxSize = 1048576;// 上传文件大小限制
        $upload->allowExts = array('jpg', 'gif', 'png', 'jpeg', 'mp4');// 文件后缀名
        $upload->rootPath = "./Public/images/";// 保存的路径
        $upload->autoSub = false;// 关闭子目录保存上传文件
        $info = $upload->upload();
        if ($info) {
            foreach ($info as $file) {
                $data['img'] = $file['savename'];
            }
            $data['id'] = 1;
            $data['title'] = $data['img'];
        } else {
            $data['img'] = '0';
        }
        echo json_encode($data);
    }

    //菜品步骤上传
    public function imguploadcp()
    {
        import("ORG.Net.UploadFile");
        $upload = new \Think\Upload();// 实例化上传类
        $upload->maxSize = 1048576;// 上传文件大小限制
        $upload->allowExts = array('jpg', 'gif', 'png', 'jpeg');// 文件后缀名
        $upload->rootPath = "./Public/images/";// 保存的路径
        $upload->autoSub = false;// 关闭子目录保存上传文件
        $info = $upload->upload();
        if ($info) {
            foreach ($info as $file) {
                $data['img'] = $file['savename'];
            }
            $data['id'] = 1;
            $data['title'] = $data['img'];
        } else {
            $data['img'] = '0';
        }
        $this->ajaxreturn($data);
    }

    public function videoupload()
    {
        import("ORG.Net.UploadFile");
        $upload = new \Think\Upload();// 实例化上传类
        $upload->maxSize = 3145728 * 200;// 上传文件大小限制
        $upload->allowExts = array('mp4,avi');// 文件后缀名
        $upload->rootPath = "./Public/video/";// 保存的路径
        $upload->autoSub = false;// 关闭子目录保存上传文件
        $info = $upload->upload();
        if ($info) {
            foreach ($info as $file) {
                $data['video'] = $file['savename'];
            }
            $data['id'] = 1;
            $data['title'] = $data['video'];
        } else {
            $data['video'] = '0';
        }
        $this->ajaxreturn($data);
    }

    //图片列表
    public function listimg()
    {
        $dir = "./Public/images/";
        $list = $this->myreaddir($dir);
        if ($list) {
            for ($i = 0; $i < count($list); $i++) {
                $lists[$i]['img'] = $list[$i];
                $lists[$i]['title'] = $list[$i];
                $lists[$i]['id'] = 1;
            }
            $num['num'] = 2;
            $num['list'] = $lists;
        } else {
            $num['num'] = 1;
        }
        echo json_encode($num);
    }

    public function myreaddir($dir)
    {
        $handle = opendir($dir);
        $i = 0;
        while ($file = readdir($handle)) {
            if (($file != ".") and ($file != "..")) {
                $list[$i] = $file;
                $i = $i + 1;
            }
        }
        closedir($handle);
        return $list;
    }

    //图片裁剪$file_paths:图片路径及名称
    public function imgcut($file_paths)
    {
        @chmod($file_paths, 0644);
        $imgwidth = getimagesize($file_paths);
        $height = $imgwidth[1];
        if ($height > 220) {
            $width = $imgwidth[0];
            if ($width >= 220) {
                $this->thum($file_paths, 220, 220);
            } else {
                $this->thum($file_paths, 220, 220);
            }
        } else {
            $this->thum($file_paths, 220, 220);
        }
    }

    /**
     * @name thum    缩略图函数
     * @param    sting $img_name 图片路径
     * @param    int $max_width 略图最大宽度
     * @param    int $max_height 略图最大高度
     * @param    sting $suffix 略图后缀(如"img_x.jpg"代表小图,"img_m.jpg"代表中图,"img_l.jpg"代表大图)
     * @return   void
     */
    function thum($img_name, $max_width, $max_height, $suffix)
    {
        $img_infos = getimagesize($img_name);
        $img_height = $img_infos[0];//图片高
        $img_width = $img_infos[1];//图片宽
        $img_extension = '';//图片后缀名
        switch ($img_infos[2]) {
            case 1:
                $img_extension = 'gif';
                break;
            case 2:
                $img_extension = 'jpeg';
                break;
            case 3:
                $img_extension = 'png';
                break;
            default:
                $img_extension = 'jpeg';
                break;
        }
        $new_img_size = $this->get_thum_size($img_width, $img_height, $max_width, $max_height);//新的图片尺寸
        $img_func = '';//函数名称
        $img_handle = '';//图片句柄
        $thum_handle = '';//略图图片句柄
        switch ($img_extension) {
            case 'jpg':
                $img_handle = imagecreatefromjpeg($img_name);
                $img_func = 'imagejpeg';
                break;
            case 'jpeg':
                $img_handle = imagecreatefromjpeg($img_name);
                $img_func = 'imagejpeg';
                break;
            case 'png':
                $img_handle = imagecreatefrompng($img_name);
                $img_func = 'imagepng';
                break;
            case 'gif':
                $img_handle = imagecreatefromgif($img_name);
                $img_func = 'imagegif';
                break;
            default:
                $img_handle = imagecreatefromjpeg($img_name);
                $img_func = 'imagejpeg';
                break;
        }
        /****/
        $quality = 100;//图片质量
        if ($img_func === 'imagepng' && (str_replace('.', '', PHP_VERSION) >= 512)) {//针对php版本大于5.12参数变化后的处理情况
            $quality = 9;
        }
        /****/

        $thum_handle = imagecreatetruecolor($new_img_size['height'], $new_img_size['width']);
        if (function_exists('imagecopyresampled')) {
            imagecopyresampled($thum_handle, $img_handle, 0, 0, 0, 0, $new_img_size['height'], $new_img_size['width'], $img_height, $img_width);
        } else {
            imagecopyresized($thum_handle, $img_handle, 0, 0, 0, 0, $new_img_size['height'], $new_img_size['width'], $img_height, $img_width);
        }
        call_user_func_array($img_func, array($thum_handle, $this->get_thum_name($img_name, $suffix), $quality));
        imagedestroy($thum_handle);//清除句柄  
        imagedestroy($img_handle);//清除句柄  
    }

    /**
     * @name get_thum_size 获得缩略图的尺寸
     * @param    $width  图片宽
     * @param    $height 图片高
     * @param    $max_width 最大宽度
     * @param    $max_height 最大高度
     * @return   array $size;
     */
    function get_thum_size($width, $height, $max_width, $max_height)
    {
        $now_width = $width;//现在的宽度
        $now_height = $height;//现在的高度
        $size = array();
        if ($now_width > $max_width) {//如果现在宽度大于最大宽度
            $now_height *= number_format($max_width / $width, 4);
            $now_width = $max_width;
        }
        if ($now_height > $max_height) {//如果现在高度大于最大高度
            $now_width *= number_format($max_height / $now_height, 4);
            $now_height = $max_height;
        }
        $size['width'] = floor($now_width);
        $size['height'] = floor($now_height);
        return $size;
    }

    /**
     *@ name     get_thum_name 获得略图的名称(在大图基础加_x)
     */
    function get_thum_name($img_name, $suffix)
    {
        $str = explode('#', $img_name);
        $str1 = explode('.', $str[1]);
        return $str[0];
    }

    //单文件上传
    public function imguploadapk()
    {
        import("ORG.Net.UploadFile");
        $upload = new \Think\Upload();// 实例化上传类
        $upload->maxSize = 3145728 * 200;// 上传文件大小限制
        $upload->allowExts = array('apk');// 文件后缀名
        $upload->rootPath = "./Public/apk/";// 保存的路径
        $upload->autoSub = false;// 关闭子目录保存上传文件
        $info = $upload->upload();
        if ($info) {
            foreach ($info as $file) {
                $data['img'] = $file['savename'];
            }
            $data['id'] = 1;
            $data['title'] = $data['img'];
        } else {
            $data['img'] = '0';
        }
        $this->ajaxreturn($data);
    }
    //单图片
    public function imgUploadOne()
    {
        import("ORG.Net.UploadFile");
        $upload = new \Think\Upload();// 实例化上传类
        $upload->maxSize = 3145728 * 200;// 上传文件大小限制
        $upload->exts = array('jpg', 'jpeg', 'gif', 'png', 'bit');// 上传文件了类型
        $upload->rootPath = "./Public/images/";// 保存的路径
        $upload->autoSub = false;// 关闭子目录保存上传文件
        $info = $upload->uploadOne($_FILES['file_data']);
        if ($info) {
            $data['file_name'] = $info['savename'];
            $data['status'] = 1;
        } else {
            $data['status'] = 2;
        }
        $this->ajaxreturn($data);
    }
}

?>