<?php
/**
 * Created by PhpStorm.
 * User: Jan
 * Date: 2017/2/15
 * Time: 11:07
 */

namespace Home\Controller;


class DiaryController extends PublicController
{
    public function index()
    {
        $classModel = M('NewsClass');
        $classes = $classModel->select();
        $this->assign('classes', $classes);
        $newsModel = M('News');
        $pid = I('get.pid');
        if ($pid) {
            $cond['pid'] = $pid;
        } else {
            $cond['pid'] = $classes[0]['id'];
        }
        $data = setPage($newsModel, $cond, 5);
        $this->assign($data);
        $this->display();
    }
}