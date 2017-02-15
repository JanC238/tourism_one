<?php
/**
 * Created by PhpStorm.
 * User: Jan
 * Date: 2016/9/6
 * Time: 14:22
 */

namespace Lsfb\Model;


use Think\Model;

class AdMenuModel extends Model
{
    //开启批量验证
    protected $patchValidate = true;
    //设置验证规则
    protected $_validate = array(
        array('name', 'require', '名称必填'),
        array('sort', 'number','排序必须为数字')
    );

    //自动完成
    protected $_auto = array(
        array('set', 1, self::MODEL_INSERT),
    );

    /**
     * 添加菜单
     * @return bool 添加的结果
     */
    public function addMenu()
    {
        $data = $this->data;
        unset($data['id']);
        $pid = $data['pid'];
        $row = $this->where(array('id' => $pid))->find();
        //判断计算tid和pid
        if (isset($row)) {
            if ($row['tid'] == 0) {
                $data['tid'] = $row['id'];
                $data['pid'] = 0;
            } else {
                $data['tid'] = $row['tid'];
                $data['pid'] = $row['id'];
            }
        } else {
            $data['tid'] = 0;
        }
        $res = $this->add($data);
        if ($res === false) {
            $this->error('添加菜单出错');
            return false;
        }
    }

    /**
     * @return bool 修改菜单
     */
    public function editMenu()
    {
        $data = $this->data;
        //开始修改
        $pid = $data['pid'];
        $row = $this->where(array('id' => $pid))->find();
        //判断计算tid和pid
        if (isset($row)) {
            if ($row['tid'] == 0) {
                $data['tid'] = $row['id'];
                $data['pid'] = 0;
            } else {
                $data['tid'] = $row['tid'];
                $data['pid'] = $row['id'];
            }
        } else {
            $data['tid'] = 0;
        }
        //判断是否有子类，否则不予修改父级分类
        $id = $data['id'];
        $menu = $this->find($id);
        if ($data['pid'] != $menu['pid'] || $data['tid'] != $menu['tid']) {
            $cond = array(
                'pid' => $id,
                'tid' => $id,
                '_logic' => 'or',
            );
            $row = $this->where($cond)->select();
            if (isset($row)) {
                $this->error = '请先修改该分类的子类';
                return false;
            }
        }
        $res = $this->save($data);
        if ($res === false) {
            $this->error('修改菜单出错');
            return false;
        }
    }

    /**
     * 删除
     * @param $id
     * @return bool
     */
    public function delMenu($id)
    {
        $cond = array(
            'pid' => $id,
            'tid' => $id,
            '_logic' => 'or',
        );
        $row = $this->where($cond)->select();
        if (isset($row)) {
            $this->error = '请先删除他的子类';
            return false;
        }
        $res = $this->delete($id);
        if ($res === false) {
            $this->error = '删除出错';
            return false;
        }
    }
}