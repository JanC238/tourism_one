<?php
/**
 * Created by PhpStorm.
 * User: Jan
 * Date: 2017/2/15
 * Time: 9:50
 */

namespace Home\Controller;


class HotelController extends PublicController
{
    public function index()
    {
        $model = M("Hotel");
        $classModel = M('Class');
        $classes = $classModel->select();
        $pid = I('get.pid');
        if ($pid) {
            $cond['pid'] = $pid;
        } else {
            $cond['pid'] = $classes[0]['id'];
        }
        $data = setPage($model, $cond, 6);
        $this->assign($data);
        $this->assign('classes', $classes);
        $this->display();
    }
}