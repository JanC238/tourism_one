<?php
/**
 * Created by PhpStorm.
 * User: Jan
 * Date: 2016/9/6
 * Time: 16:25
 */

namespace Lsfb\Model;


use Think\Model;

class AdAccountModel extends Model
{
    //开启批量验证
    protected $patchValidate = true;
    //设置验证规则
    protected $_validate = array(
        array('account', 'require', '用户名必填'),
        array('account', '', '用户名已存在', self::EXISTS_VALIDATE, 'unique', 'register'),
        array('password', 'require', '密码必填', self::EXISTS_VALIDATE, '', 'register')
    );

    //自动完成
    protected $_auto = array(
        array('status', 1, 'register'),
        array('reg_time', NOW_TIME, 'register'),
    );

    /**
     * 添加账号
     * @return bool
     */
    public function addAccount()
    {
        $data = $this->data;
        $data['password'] = sha1(md5(md5(I('post.password'))));
        $res = $this->add($data);
        if ($res === false) {
            $this->error = '添加出错';
            return false;
        }
    }

    /**
     * 修改账号
     * @param $aid  账号id
     * @return bool 结果
     */
    public function updateAccount($aid)
    {
        $data = $this->data;
        $data['id'] = $aid;
        if (empty($data['password'])) {
            unset($data['password']);
        } else {
            $data['password'] = sha1(md5(md5(I('post.password'))));
        }
        $res = $this->save($data);
        if ($res === false) {
            $this->error = '修改出错';
            return false;
        }
    }

    /**
     * 获取权限
     * @param $id
     * @return mixed
     */
    public function getPermissions($id)
    {
        //select DISTINCT me.url from tp_ad_account as a join tp_ad_match as m on a.roleid = m.roleid join tp_ad_menu as me on me.id = m.leftid where a.id = $id;
        $permissions = $this->distinct(true)
            ->field('me.url')->alias('a')
            ->join('__AD_MATCH__ as m on a.roleid = m.roleid')
            ->join('__AD_MENU__ as me on me.id = m.leftid')
            ->where("a.id = $id")
            ->select();
        foreach ($permissions as $permission) {
            $data[] = $permission['url'];
        }
        return $data;
    }
}