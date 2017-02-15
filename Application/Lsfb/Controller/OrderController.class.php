<?php
/**
 * Created by PhpStorm.
 * User: Jan
 * Date: 2017/2/15
 * Time: 14:43
 */

namespace Lsfb\Controller;


class OrderController extends PublicController
{

    public function index()
    {
        $model = M('Booking');
        $data = setPage($model, [], 10, 'create_time desc');
        $this->assign($data);
        $this->display();
    }

    public function changeStatus($id)
    {
        $model = M('Booking');

        $row = $model->find($id);
        if ($row['status'] == 1) {
            $data = [
                'id' => $id,
                'status' => 0,
            ];
        } else {
            $data = [
                'id' => $id,
                'status' => 1,
            ];
        }
        $res = $model->save($data);
        if ($res === false) {
            $this->ajaxReturn(1);
        } else {
            $this->ajaxReturn(3);
        }
    }
}