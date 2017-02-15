<?php
/**
 * Created by PhpStorm.
 * User: Jan
 * Date: 2016/9/8
 * Time: 11:46
 */

namespace Lsfb\Model;


use Think\Model;

class AdUserModel extends Model
{
    //开启批量验证
    protected $patchValidate = true;
    //设置验证规则
    protected $_validate = array(
        array('name', 'require', '名称必填'),
        array('tel', 'require', '电话必填'),
        array('email', 'require', '邮箱必填'),
        array('tel', 'checkTel', '电话号码不合法', self::VALUE_VALIDATE, 'callback'),
        array('email', 'email', '邮箱不合法', self::VALUE_VALIDATE),
    );

    //自动完成
    protected $_auto = array(
        array('reg_time', NOW_TIME, self::MODEL_BOTH),
    );

    /**
     * 添加用户信息，绑定账号
     * @return bool
     */
    public function addUser()
    {
        $this->startTrans();
        //添加用户信息
        $id = $this->add();
        if ($id === false) {
            $this->error = '添加用户信息出错';
            $this->rollback();
            return false;
        }
        //绑定账号信息
        $accountId = I('post.account');
        if ($accountId) {
            $accountModel = M('AdAccount');
            $accountRow = $accountModel->find($accountId);
            if (isset($accountRow) && $accountRow['userid'] == 0) {
                $cond = array(
                    'id' => $accountId,
                    'userid' => $id,
                );
                $res = $accountModel->save($cond);
                if ($res === false) {
                    $this->error = '绑定账号出错';
                    $this->rollback();
                    return false;
                }
            }
        }


        $this->commit();
    }

    /**
     * 修改用户信息，修改绑定信息
     * @param $id
     * @return bool
     */
    public function editUser($id)
    {
        $this->startTrans();
        $data = $this->data;
        $data['id'] = $id;
        //修改用户信息
        $res = $this->save($data);
        if ($res === false) {
            $this->error = '更改用户信息出错';
            $this->rollback();
            return false;
        }
        //修改绑定信息
        $row = M('AdAccount')->where(array('userid' => $id))->find();
        $account = I('post.account');
        if ($row) {
            if ($row['id'] != $account) {
                //先把原账号解除绑定
                $cond = array(
                    'id' => $row['id'],
                    'userid' => 0,
                );
                $res = M('AdAccount')->save($cond);
                if ($res === false) {
                    $this->rollback();
                    return false;
                }
                //绑定新的账号
                $cond1 = array(
                    'id' => $account,
                    'userid' => 0,
                );
                $res = M('AdAccount')->save($cond1);
                if ($res === false) {
                    $this->rollback();
                    return false;
                }
            }
        }
        //之前未绑定账号，直接绑定新的账号
        //判断账号是否已绑定
        $accountRow = M('AdAccount')->where(array('userid' => array('neq', $id), 'id' => $account))->find();
        if ($accountRow['userid']) {
            $this->error = '账号已被绑定';
            $this->rollback();
            return false;
        }
        $data = array(
            'id' => $account,
            'userid' => $id,
        );
        $res = M('AdAccount')->save($data);
        if ($res === false) {
            $this->error = '绑定账号出错';
            $this->rollback();
            return false;
        }
        $this->commit();
    }

    /**
     * 删除用户信息
     * @param $id
     * @return bool
     */
    public function delUser($id)
    {
        $this->startTrans();
        //将账号信息的绑定取消
        $accountModel = M('AdAccount');
        $accountRow = $accountModel->where(array('userid' => $id))->find();
        if ($accountRow) {
            $cond = array(
                'id' => $id,
                'userid' => 0,
            );
            $res = $accountModel->save($cond);
            if ($res === false) {
                $this->error = '绑定账号出错';
                $this->rollback();
                return false;
            }
        }
        $res = $this->delete($id);
        if ($res === false) {
            $this->error = '删除用户信息出错';
            $this->rollback();
            return false;
        }
        $this->commit();
    }

    /**
     * 验证电话号码是否合法
     * @param $tel  电话号码
     * @return bool 验证结果
     */
    public function checkTel($tel)
    {
        $reg = '/^1[3587]\d{9}$/';
        if (preg_match($reg, $tel)) {
            return true;
        } else {
            return false;
        }
    }
}