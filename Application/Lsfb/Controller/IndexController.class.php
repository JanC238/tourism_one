<?php
namespace Lsfb\Controller;

use Think\Controller;

class IndexController extends PublicController
{
    public function index()
    {

        $this->display();
    }

    /**
     * 获取指定条件的订单数
     * @param $cond 查询条件
     * @return int  订单数
     */
    public function getOrder($cond)
    {
        $userOrderModel = M('UserOrder');
        $orders = $userOrderModel->where($cond)->select();
        return count($orders);
    }

    //退出登录
    public function exits()
    {
        if ($_SESSION['APPuserid']) {
            unset($_SESSION['APPuserid']);
        }
        $this->redirect('/Login/login');
    }
}