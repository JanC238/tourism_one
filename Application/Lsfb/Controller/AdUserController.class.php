<?php
/**
 * Created by PhpStorm.
 * User: Jan
 * Date: 2016/9/8
 * Time: 11:34
 */

namespace Lsfb\Controller;


class AdUserController extends PublicController
{
    /**
     * @var \Lsfb\Model\AdUserModel
     */
    private $_model;

    //等同于构造函数
    protected function _const4control()
    {
        $this->_model = D('AdUser');
    }

    /**
     * 用户信息显示
     */
    public function index()
    {
        //获取数据
        $rows = $this->_model->select();
        $this->assign("rows", $rows);
        //获取登陆账号信息
        $accounts = M('AdAccount')->select();
        $this->assign('accounts', $accounts);
        $this->display();
    }

    /**
     * 添加用户信息
     */
    public function add()
    {
        if (IS_POST) {
            $data = $this->_model->create();
            if ($data === false) {
                $this->error(getError($this->_model));
            }
            $res = $this->_model->addUser();
            if ($res === false) {
                $this->error(getError($this->_model));
            }
            $this->success('添加成功', U('/AdUser/index'));
        } else {
            //获取还未被绑定的账号信息，绑定用
            $accounts = M('AdAccount')->where(array('userid' => array('eq', ''), 'id' => array('neq', 1)))->select();
            $this->assign('accounts', $accounts);
            $this->display('edit');
        }
    }

    /**
     * 修改账号信息
     * @param $uid
     */
    public function edit($uid)
    {
        if (IS_POST) {
            $data = $this->_model->create();

            if ($data === false) {
                $this->error(getError($this->_model));
            }
            $res = $this->_model->editUser($uid);
            if ($res === false) {
                $this->error(getError($this->_model));
            }
            $this->success('修改成功', U('/AdUser/index'));
        } else {
            //获取还未被绑定的账号信息，绑定用
            $accounts = M('AdAccount')->where(array('userid' => array('eq', 0), 'id' => array('neq', 1)))->select();
            //本身的信息
            $row = $this->_model->find($uid);
            //如果有账号已绑定了这个用户
            $accountRow = M('AdAccount')->where(array('userid' => $uid))->find();
            if ($accountRow) {
                $row['accountId'] = $accountRow['id'];
                $accounts[] = $accountRow;
            }

            $this->assign('accounts', $accounts);


            $this->assign('row', $row);
            $this->display();
        }
    }

    /**
     * 删除用户信息
     * @param $id
     */
    public function del($id)
    {
        $res = $this->_model->delUser($id);
        $row = M('AdAccount')->where(array('userid', $id))->find();
        if ($row) {
            $data = array(
                'id' => $row['id'],
                'userid' => 0,
            );
        }
        M('AdAccount')->save($data);
        if ($res === false) {
            $this->ajaxReturn(0);//表示删除失败
        } else {
            $this->ajaxReturn(1);//表示删除成功
        }
    }
}