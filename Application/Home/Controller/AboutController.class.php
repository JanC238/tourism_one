<?php
/**
 * Created by PhpStorm.
 * User: Jan
 * Date: 2017/2/14
 * Time: 15:03
 */

namespace Home\Controller;


class AboutController extends PublicController
{

    public function index()
    {
        $aboutUsModel = M('AboutUs');
        $aboutUs = $aboutUsModel->find(1);
        $this->assign('aboutUs', $aboutUs);
        //跑马灯
        $aboutUsScrollImgModel = M('AboutUsScrollImg');
        $aboutUsScrollImgs = $aboutUsScrollImgModel->select();
        $this->assign('aboutUsScrollImgs', $aboutUsScrollImgs);
        //图片
        $imgsModel = M('AboutUsImg');
        $imgs = $imgsModel->select();
        $this->assign('imgs', $imgs);
        $this->display();
    }
}