<?php
/**
 * Created by PhpStorm.
 * User: Jan
 * Date: 2017/2/15
 * Time: 14:14
 */

namespace Home\Controller;


class BookingController extends PublicController
{
    public function index()
    {
        //跑马灯
        $aboutUsScrollImgModel = M('AboutUsScrollImg');
        $aboutUsScrollImgs = $aboutUsScrollImgModel->select();
        $this->assign('aboutUsScrollImgs', $aboutUsScrollImgs);
        $this->display();
    }

    public function add()
    {
        $model = D('Booking');
        $data = $model->create();
        if ($data === false) {
            $data = [
                'status' => 2,
                'msg' => $model->getError(),
            ];
            $this->ajaxReturn($data);
            exit();
        } else {
            $data = [
                'status' => 1,
                'msg' => 0,
            ];
        }
        $res = $model->add();
        if ($res === false) {
            $data = [
                'status' => 2,
                'msg' => $model->getError(),
            ];
        }
        $this->ajaxReturn($data);
    }
}