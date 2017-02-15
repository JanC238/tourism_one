<?php
/**
 * Created by PhpStorm.
 * User: Jan
 * Date: 2016/9/6
 * Time: 16:21
 */

namespace Lsfb\Controller;


use Think\Model;

class AdAccountController extends PublicController
{
    /**
     * @var \Lsfb\Model\AdAccountModel
     */
    private $_model;

    //等同于构造函数
    protected function _const4control()
    {
        $this->_model = D('AdAccount');
    }

    /**
     * 登陆
     */
    public function login()
    {
        $cond = array(
            'account' => I('post.name'),
            'password' => sha1(md5(md5($_POST['pwd']))),
        );
        $userInfo = $this->_model->where($cond)->find();
        if (!$userInfo) {
            $return = 2;//表示账号或密码错误
        } else {
            if ($userInfo['status'] != 1) {
                $return = 1;//表示禁止登陆
            }
        }
        //更新登陆时间
        $data = array(
            'reg_time' => NOW_TIME,
            'id' => $userInfo['id'],
        );
        M('AdAccount')->save($data);
        //登陆成功保存用户信息到session
        session('USER_INFO', $userInfo);
        //登陆成功获取用户所拥有的权限并保存到session
        if ($userInfo['account'] != 'admin') {
            $permissions = $this->_model->getPermissions($userInfo['id']);
            session('PERMISSIONS', $permissions);
        }
        $this->ajaxReturn($return);
    }

    /**
     * 退出
     */
    public function logout()
    {
        session('USER_INFO', null);
        session('PERMISSIONS', null);
        $this->success('退出成功', U('/Login/login'));
    }

    /**
     * 账号显示
     */
    public function index()
    {
        //获取数据
        $rows = $this->_model->where(array('account' => array('neq', 'admin')))->select();
        //获取用户信息
        $users = M('AdUser')->select();
        $this->assign('users', $users);
        $this->assign('rows', $rows);
        //获取角色数据
        $roles = M('AdRole')->select();
        $this->assign('roles', $roles);
        $this->display();
    }

    /**
     * 账号添加
     */
    public function add()
    {
        $data = $this->_model->create('', 'register');
        if ($data === false) {
            $this->error(getError($this->_model));
        }
        $res = $this->_model->addAccount();
        if ($res === false) {
            $this->error(getError($this->_model));
        }
        $this->success('添加成功', U('/AdAccount/index'));
    }

    /**
     * 删除账号
     * @param $id
     */
    public function del($id)
    {
        $res = $this->_model->delete($id);
        if ($res === false) {
            $this->ajaxReturn(0);//表示失败
        } else {
            $this->ajaxReturn(1);
        }
    }

    /**
     * 改变账号登陆状态
     * @param $id
     */
    public function change($id)
    {
        $row = $this->_model->find($id);
        if ($row['status'] == 1) {
            $data = array(
                'id' => $id,
                'status' => 0,
            );
        } else {
            $data = array(
                'id' => $id,
                'status' => 1,
            );
        }
        $res = $this->_model->save($data);
        if ($res === false) {
            $this->ajaxReturn(0);//表示失败
        }
    }

    /**
     * 修改账号信息
     * @param $aid
     */
    public function edit($aid)
    {
        if (IS_POST) {
            $data = $this->_model->create();
            if ($data === false) {
                $this->error(getError($this->_model));
            }
            $row = $this->_model->where(array('account' => $data['account'], 'id' => array('neq', $aid)))->find();
            if ($row) {
                $this->error('账号名已存在');
            }
            $res = $this->_model->updateAccount($aid);
            if ($res === false) {
                $this->error(getError($this->_model));
            }
            $this->success('修改成功', U('/AdAccount/index'));
        } else {
            $row = $this->_model->find($aid);
            $this->assign('row', $row);
            $this->display();
        }
    }

    /**
     * 分配角色
     * @param $aid
     */
    public function allotRole($aid)
    {
        if (IS_POST) {
            $roleid = I('post.role');
            $data = array(
                'id' => $aid,
                'roleid' => $roleid,
            );
            $res = $this->_model->save($data);
            if ($res === false) {
                $this->error(getError($this->_model));
            }
            $this->success('分配成功', U('/AdAccount/index'));
        } else {
            $row = $this->_model->find($aid);
            $this->assign('row', $row);
            //获取角色信息
            $roleRows = M('AdRole')->select();
            $this->assign('roleRows', $roleRows);
            $this->display();
        }
    }

}