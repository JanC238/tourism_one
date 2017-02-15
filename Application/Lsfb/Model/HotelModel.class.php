<?php
/**
 * Created by PhpStorm.
 * User: Jan
 * Date: 2017/2/14
 * Time: 17:14
 */

namespace Lsfb\Model;


use Think\Model;

class HotelModel extends Model
{
    protected $patchValidate = true;
    protected $_validate = [
        ['pid', 'require', '请选择分类'],
        ['name', 'require', '请填写名称'],
        ['image', 'require', '请上传图片'],
    ];
}