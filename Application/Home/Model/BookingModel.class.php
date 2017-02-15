<?php
/**
 * Created by PhpStorm.
 * User: Jan
 * Date: 2017/2/15
 * Time: 14:33
 */

namespace Home\Model;


use Think\Model;

class BookingModel extends Model
{
    protected $_validate = [
        ['starttime', 'require', '请填写完整的出发时间'],
        ['endtime', 'require', '请填写完整的返程时间'],
        ['name', 'require', '请填写姓名'],
        ['tel', 'require', '联系方式'],
        ['address', 'require', '请填写目的地'],
        ['starttime', 'checkTime', '时间格式错误', self::EXISTS_VALIDATE, 'callback'],
        ['endtime', 'checkTime', '时间格式错误', self::EXISTS_VALIDATE, 'callback'],
    ];

    protected $_auto = [
        ['starttime', 'dealTime', self::MODEL_BOTH,'callback'],
        ['endtime', 'dealTime', self::MODEL_BOTH, 'callback'],
        ['create_time', NOW_TIME, self::MODEL_BOTH],
    ];

    public function dealTime($time)
    {
        return strtotime($time);
    }
    public function checkTime($time)
    {
        $res = strtotime($time);
        if ($res) {
            return true;
        } else {
            return false;
        }
    }
}