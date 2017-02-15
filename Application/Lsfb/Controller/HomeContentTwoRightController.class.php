<?php
/**
 * Created by PhpStorm.
 * User: Jan
 * Date: 2017/2/14
 * Time: 11:06
 */

namespace Lsfb\Controller;


class HomeContentTwoRightController extends PublicController
{

    /**
     * @var \Lsfb\Model\HomeContentTwoRightModel
     */
    private $_model;

    //等同于构造函数
    protected function _const4control()
    {
        $this->_model = D('HomeContentTwoRight');
    }

    /**
     *
     */
    public function index()
    {

        if (IS_POST) {
            $sql = 'truncate tp_home_content_two_right';
            $this->_model->execute($sql);
            $data = $this->_model->create();
            if ($data === false) {
                $this->error(getError($this->_model));
            }
            $res = $this->_model->add();
            if ($res === false) {
                $this->error(getError($this->_model));
            }
            $this->success('设置成功', U('/HomeContentTwoRight/index'));
        } else {
            $row = $this->_model->find(1);
            $this->assign('row', $row);
            $this->display();
        }
    }

}