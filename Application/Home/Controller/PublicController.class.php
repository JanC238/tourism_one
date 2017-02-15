<?php
/**
 * Created by PhpStorm.
 * User: Jan
 * Date: 2017/2/14
 * Time: 15:02
 */

namespace Home\Controller;


use Think\Controller;

class PublicController extends Controller
{
    public function _initialize()
    {
        //内容1左
        $homeContentLeftModel = M('HomeContentLeft');
        $homeContentLeft = $homeContentLeftModel->find(1);
        $this->assign('homeContentLeft', $homeContentLeft);
        //内容1右
        $homeContentRightModel = M('HomeContentRight');
        $homeContentRight = $homeContentRightModel->find(1);
        $this->assign('homeContentRight', $homeContentRight);
    }
}