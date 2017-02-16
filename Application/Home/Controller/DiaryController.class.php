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

    public function details($id)
    {
        $model = M('News');
        $row = $model->find($id);
        //上一个
        $last = $model->find(($id - 1));
        if ($last) {
            $row['last'] = $last['name'];
        } else {
            $row['last'] = '没有了';
            $row['last_status'] = 1;
        }
        //下一个
        $next = $model->find(($id + 1));
        if ($next) {
            $row['next'] = $next['name'];
        } else {
            $row['next'] = '没有了';
            $row['next_status'] = 1;
        }
        $this->assign('row', $row);
        $classModel = M('NewsClass');
        $classes = $classModel->select();
        $this->assign('classes', $classes);
        $this->display();
    }
}