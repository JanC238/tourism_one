<?php
/**
 * Created by PhpStorm.
 * User: Jan
 * Date: 2017/2/14
 * Time: 11:06
 */

namespace Lsfb\Controller;


class ContactUsController extends PublicController
{

    /**
     * @var \Lsfb\Model\ContactUsModel
     */
    private $_model;

    //等同于构造函数
    protected function _const4control()
    {
        $this->_model = D('ContactUs');
    }

    /**
     *
     */
    public function index()
    {

        if (IS_POST) {
            $sql = 'truncate tp_contact_us';
            $this->_model->execute($sql);
            $data = $this->_model->create();
            if ($data === false) {
                $this->error(getError($this->_model));
            }
            $data['address_img'] = I('post.address_img', '', false);
            $res = $this->_model->add($data);
            if ($res === false) {
                $this->error(getError($this->_model));
            }
            $this->success('设置成功', U('/ContactUs/index'));
        } else {
            $row = $this->_model->find(1);
            $this->assign('row', $row);
            $this->display();
        }
    }

}