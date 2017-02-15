<?php
/**
 * Created by PhpStorm.
 * User: Jan
 * Date: 2016/9/7
 * Time: 9:50
 */

namespace Lsfb\Controller;


class AdRoleController extends PublicController
{
    /**
     * @var \Lsfb\Model\AdRoleModel
     */
    private $_model;

    //等同于构造函数
    protected function _const4control()
    {
        $this->_model = D('AdRole');
    }

    /**
     * 显示角色页面
     */
    public function index()
    {
        //获取角色数据
        $rows = $this->_model->select();
        $this->assign('rows', $rows);
        $this->display();
    }

    /**
     * 添加角色
     */
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
            $this->success('添加成功', U('/AdRole/index'));
        } else {
            $this->display('edit');
        }
    }

    /**
     * 修改角色信息
     * @param $rid 角色id
     */
    public function edit($rid)
    {
        if (IS_POST) {
            $data = $this->_model->create();
            if ($data === false) {
                $this->error(getError($this->_model));
            }
            $res = $this->_model->save();
            if ($res === false) {
                $this->error(getError($this->_model));
            }
            $this->success('修改成功', U('/AdRole/index'));
        } else {
            //获取数据
            $row = $this->_model->find($rid);
            $this->assign('row', $row);
            $this->display();
        }
    }

    /**
     * 删除
     * @param $id
     */
    public function del($id)
    {
        $res = $this->_model->delete($id);
        //删除对应的权限信息
        $adMatchModel = M('AdMatch');
        $adMatchModel->where(array('roleid' => $id))->delete();
        if ($res === false) {
            $this->ajaxReturn(0);//表示删除失败
        } else {
            $this->ajaxReturn(1);//表示删除成功
        }
    }

    /**
     * 分配权限
     * @param $rid
     */
    public function allotPermission($rid)
    {
        if (IS_POST) {
            $res = $this->_model->allotPermission($rid);
            if ($res === false) {
                $this->error(getError($this->_model));
            }
            $this->success('分配权限成功', U('/AdRole/index'));
        } else {
            //角色数据
            $row = $this->_model->find($rid);
            $this->assign('row', $row);
            //权限数据
            $list = M('AdMenu')->where(array('set' => 1))->order('sort desc')->select();
            $this->assign('list', $list);
            //当前角色拥有的权限数据
            $rolePermissions = M('AdMatch')->where(array('roleid' => $rid))->select();
            $this->assign('rolePermissions', $rolePermissions);
            $this->display();
        }
    }

}