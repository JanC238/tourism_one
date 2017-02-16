<?php
/**
 * Created by PhpStorm.
 * User: Jan
 * Date: 2017/2/14
 * Time: 17:06
 */

namespace Lsfb\Controller;


class HotelController extends PublicController
{
    /**
     * @var \Lsfb\Model\HotelModel
     */
    private $_model;

    //等同于构造函数
    protected function _const4control()
    {
        $this->_model = D('Hotel');

        $classModel = M('Class');
        $clas = $classModel->select();
        $this->assign('clas', $clas);
    }

    /**
     * 显示角色页面
     */
    public function index()
    {
        $data = setPage($this->_model, [], 10);
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
            $data['content'] = I('post.content', '', false);
            $res = $this->_model->add($data);
            if ($res === false) {
                $this->error(getError($this->_model));
            }
            $this->success('上传成功', U('/Hotel/index'));
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
            $data['content'] = I('post.content', '', false);
            $res = $this->_model->save($data);
            if ($res === false) {
                $this->error(getError($this->_model));
            }
            $this->success('上传成功', U('/Hotel/index'));
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

    public function changeStatus($id)
    {
        $row = $this->_model->find($id);
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
        $rows = $this->_model->where(['status' => 1])->select();
        if (count($rows) >= 4 && $data['status'] == 1) {
            $this->ajaxReturn(2);
        }
        $res = $this->_model->save($data);
        if ($res === false) {
            $this->ajaxReturn(1);
        } else {
            $this->ajaxReturn(3);
        }
    }
}