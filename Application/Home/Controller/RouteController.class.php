<?php
/**
 * Created by PhpStorm.
 * User: Jan
 * Date: 2017/2/15
 * Time: 9:50
 */

namespace Home\Controller;


class RouteController extends PublicController
{
    public function index()
    {
        $model = M("Route");
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

    public function details($id)
    {
        $model = M("Route");

        $row = $model->find($id);
        $classModel = M('Class');
        $classes = $classModel->select();
        $this->assign('classes', $classes);
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
        $this->display();
    }
}