<?php
/**
 * Created by PhpStorm.
 * User: Jan
 * Date: 2017/2/14
 * Time: 11:06
 */

namespace Lsfb\Controller;


class AboutUsController extends PublicController
{

    /**
     * @var \Lsfb\Model\AboutUsModel
     */
    private $_model;

    //等同于构造函数
    protected function _const4control()
    {
        $this->_model = D('AboutUs');
    }

    /**
     * 显示角色页面
     */
    public function index()
    {
        if (IS_POST) {
            $sql = 'truncate tp_about_us';
            $this->_model->execute($sql);
            $data = $this->_model->create();
            if ($data === false) {
                $this->error(getError($this->_model));
            }
            $data['content_1'] = I('post.content_1', '', false);
            $res = $this->_model->add($data);
            if ($res === false) {
                $this->error(getError($this->_model));
            }
            $this->success('修改成功', U('/AboutUs/index'));
        } else {
            $row = $this->_model->find(1);
            $this->assign('row', $row);
            $this->display();
        }
    }

}