<?php
/**
 * Created by PhpStorm.
 * User: Jan
 * Date: 2017/2/14
 * Time: 11:06
 */

namespace Lsfb\Controller;


class HomeContentController extends PublicController
{

    /**
     * @var \Lsfb\Model\HomeContentModel
     */
    private $_model;

    //等同于构造函数
    protected function _const4control()
    {
        $this->_model = D('HomeContent');
    }

    /**
     * 显示角色页面
     */
    public function index()
    {
        $data = setPage($this->_model, [], 15);
        $this->assign($data);
        $this->display();
    }

    public function edit($hid)
    {
        if (IS_POST) {
            $data = $this->_model->create();
            if ($data === false) {
                $this->error(getError($this->_model));
            }
            $data['content'] = I('post.content', '', false);
            $res = $this->_model->save($data);
            if ($res === false) {
                $this->error(getError($this->_model));
            }
            $this->success('修改成功', U('/HomeContent/index'));
        } else {
            $row = $this->_model->find($hid);
            $this->assign('row', $row);
            $this->display();
        }
    }
}