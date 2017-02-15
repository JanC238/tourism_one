<?php
/**
 * Created by PhpStorm.
 * User: Jan
 * Date: 2016/9/7
 * Time: 9:50
 */

namespace Lsfb\Model;


use Think\Model;

class AdRoleModel extends Model
{
    //开启批量验证
    protected $patchValidate = true;
    //设置验证规则
    protected $_validate = array(
        array('name', 'require', '用户名必填'),
        array('name', '', '用户名已存在', self::EXISTS_VALIDATE, 'unique'),
        array('sort', 'number', '排序必须为数字')
    );
    protected $_auto = array(
        array('status', 0, self::MODEL_INSERT),
        array('reg_time', NOW_TIME, self::MODEL_BOTH)
    );

    /**
     * 给角色分配权限
     * @param $rid  角色id
     * @return bool 结果
     */
    public function allotPermission($rid)
    {
        $permissions = I('post.permission');

        $adMatchModel = M('ad_match');
        $this->startTrans();
        //先删除该角色拥有的权限
        $res = $adMatchModel->where(array('roleid' => $rid))->delete();
        if ($res === false) {
            $this->error = '更改角色权限的删除操作出现了错误';
            $this->rollback();
            return false;
        }
        //如果权限为空就把状态更改为未分配
        if (!$permissions) {
            $roleData = array(
                'id' => $rid,
                'status' => 0,
            );
            $this->save($roleData);
        }
        foreach ($permissions as $permission) {
            $data = array(
                'roleid' => $rid,
                'leftid' => $permission,
            );
            //添加角色的所有权限
            $res = $adMatchModel->add($data);
            if ($res === false) {
                $this->error = '添加角色权限出现了错误';
                $this->rollback();
                return false;
            }
        }
        //更改角色的分配状态
        if ($permissions) {
            $roleData = array(
                'id' => $rid,
                'status' => 1,
            );
        } else {
            $roleData = array(
                'id' => $rid,
                'status' => 0,
            );
        }

        $res = $this->save($roleData);
        if ($res === false) {
            $this->error = '更改角色的分配状态出现了错误';
            $this->rollback();
            return false;
        }
        $this->commit();
    }
}