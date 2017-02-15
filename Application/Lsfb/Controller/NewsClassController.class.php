<?php
/**
 * Created by PhpStorm.
 * User: Jan
 * Date: 2017/2/14
 * Time: 16:38
 */

namespace Lsfb\Controller;


Class NewsClassController extends PublicController
{
    /**
     * @var \Lsfb\Model\NewsClassModel
     */
    private $_model;

    //等同于构造函数
    protected function _const4control()
    {
        $this->_model = D('NewsClass');
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

    public function add()
    {
        if (IS_POST) {
            $data = $this->_model->create();
            if ($data === false) {
                $this->error(getError($this->_model));
            }
            $res = $this->_model->add();
            if ($res === false) {
                $this->error(getError($this->_model));
            }
            $this->success('添加成功', U('/NewsClass/index'));
        } else {
            $this->display('edit');
        }
    }

    public function edit($aid)
    {
        if (IS_POST) {
            $data = $this->_model->create();
            if ($data === false) {
                $this->error(getError($this->_model));
            }
            $data['id'] = $aid;
            $res = $this->_model->save($data);
            if ($res === false) {
                $this->error(getError($this->_model));
            }
            $this->success('修改成功', U('/NewsClass/index'));
        } else {
            $row = $this->_model->find($aid);
            $this->assign('row', $row);
            $this->display('edit');
        }
    }

    public function del($id)
    {
        $res = $this->_model->delete($id);
        if ($res === false) {
            $this->ajaxReturn(0);
        } else {
            $this->ajaxReturn(1);
        }
    }
}