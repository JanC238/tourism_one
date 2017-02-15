<?php
/**
 * Created by PhpStorm.
 * User: Jan
 * Date: 2017/2/15
 * Time: 15:48
 */

namespace Home\Controller;


class ContactController extends PublicController
{
    public function index()
    {
        $model = M('ContactUs');
        $row = $model->find(1);
        $this->assign('row', $row);
        $this->display();
    }
}