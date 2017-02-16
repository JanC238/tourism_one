<?php
/**
 * Created by PhpStorm.
 * User: Jan
 * Date: 2017/2/15
 * Time: 16:52
 */

namespace Home\Controller;


class GuaranteeDetailsController extends PublicController
{
    public function index($id)
    {
        $model = M("Guarantee");

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