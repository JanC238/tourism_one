<?php
/**
 * Created by PhpStorm.
 * User: Jan
 * Date: 2017/2/14
 * Time: 15:55
 */

namespace Lsfb\Controller;


class AboutUsImgController extends PublicController
{
    /**
     * @var \Lsfb\Model\AboutUsImgModel
     */
    private $_model;

    //等同于构造函数
    protected function _const4control()
    {
        $this->_model = D('AboutUsImg');
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
        $rows = $this->_model->select();
        if (count($rows) >= 6) {
            $this->error('最多6张');
        }
        if (IS_POST) {
            $data = $this->_model->create();
            if ($data === false) {
                $this->error(getError($this->_model));
            }
            $res = $this->_model->add();
            if ($res === false) {
                $this->error(getError($this->_model));
            }
            $this->success('上传成功', U('/AboutUsImg/index'));
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
            $this->success('上传成功', U('/AboutUsImg/index'));
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