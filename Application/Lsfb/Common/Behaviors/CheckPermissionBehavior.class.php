<?php
/**
 * Created by PhpStorm.
 * User: zzzzz
 * Date: 2016-07-04
 * Time: 22:19
 */

namespace Lsfb\Common\Behaviors;

use Think\Behavior;

class CheckPermissionBehavior extends Behavior
{
    public function run(&$params)
    {
        if (ACTION_NAME == 'login') {
            return true;
        }
        //>>获取当前的url地址
        $url = CONTROLLER_NAME . '/' . ACTION_NAME;
        //>>配置所有用户都可访问的控制器方法
        $ignore = array(
            'Login/login',
        );
        if (in_array($url, $ignore)) {
            return true;
        }
        $userInfo = session('USER_INFO');
        if (empty($userInfo)) {
            echo '<script type="text/javascript">top.location.href="' . U('/Login/login') . '"</script>';
        } else {
            if ($userInfo['account'] == 'admin') {
                return true;
            }
            //配置登陆用户都可以访问的页面
            $ignore1 = array(
                'AdAccount/logout',
                'Index/index'
            );
            //用户所有的权限
            $permissions = session('PERMISSIONS');
            //登陆用户都可以访问的页面判断
            if (in_array($url, $ignore1)) {
                return true;
            }
            //权限判断
            if (in_array($url, $permissions)) {
                return true;
            }
            echo '<script type="text/javascript">alert("你没有权限进行此操作");top.location.href="' . U('/Index/index') . '"</script>';
        }

    }
}