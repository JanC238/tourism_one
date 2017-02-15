<?php
/**
 * Created by PhpStorm.
 * User: Jan
 * Date: 2016/9/6
 * Time: 14:17
 */

namespace Lsfb\Controller;


use Think\Model;

class AdMenuController extends PublicController
{
    /**
     * @var \Lsfb\Model\AdMenuModel
     */
    private $_model;

    //等同于构造函数
    protected function _const4control()
    {
        $this->_model = D('AdMenu');
    }

    /**
     * 显示菜单列表（栏目管理）
     */
    public function index()
    {
        //获取所有栏目数据
//        $list = $this->_model->where("tid=0")->order("sort desc")->select();
//        for ($a = 0; $a < count($list); $a++) {
//            $result[$a] = $this->_model->where("pid=0 and tid=" . $list[$a]['id'])->order("sort desc")->select();
//            for ($i = 0; $i < count($result[$a]); $i++) {
//                $result[$a][$i]['_child'] = $this->_model->where("pid=" . $result[$a][$i]['id'])->order("sort desc")->select();
//            }
//            $list[$a]['_child'] = $result[$a];
//        }
        $list = $this->_model->order('sort desc')->select();
        $this->assign('list', $list);
        $this->display();
    }

    /**
     * 添加菜单
     */
    public function add()
    {
        if (IS_POST) {
            //收集数据并添加
            $data = $this->_model->create();
            if ($data === false) {
                $this->error(getError($this->_model));
            }
            $res = $this->_model->addMenu();
            if ($res === false) {
                $this->error(getError($this->_model));
            }
            $this->success('添加成功', U('/AdMenu/index'));
        } else {
            $result = $this->_model->where("tid=0")->select();
            for ($i = 0; $i < count($result); $i++) {
                $result[$i]['_child'] = $this->_model->where("pid=0 and tid=" . $result[$i]['id'])->order("sort desc")->select();
                foreach ($result[$i]['_child'] as $key => $value) {
                    $result[$i]['_child'][$key]['_child'] = $this->_model->where("pid=" . $result[$i]['_child'][$key]['id'] . " and tid=" . $result[$i]['id'])->order("sort desc")->select();
                }
            }
            $this->assign("vb", $result);
            $this->display();
        }
    }

    /**
     * 修改菜单
     * @param $mid 菜单id
     */
    public function edit($mid)
    {
        if (IS_POST) {
            $data = $this->_model->create();
            if ($data === false) {
                $this->error(getError($this->_model));
            }
            $res = $this->_model->editMenu();
            if ($res === false) {
                $this->error(getError($this->_model));
            }
            $this->success('修改成功', U('/AdMenu/index'));
        } else {
            //分类信息
            $result = $this->_model->where("tid=0")->select();
            for ($i = 0; $i < count($result); $i++) {
                $result[$i]['_child'] = $this->_model->where("pid=0 and tid=" . $result[$i]['id'])->order("sort desc")->select();
                foreach ($result[$i]['_child'] as $key => $value) {
                    $result[$i]['_child'][$key]['_child'] = $this->_model->where("pid=" . $result[$i]['_child'][$key]['id'] . " and tid=" . $result[$i]['id'])->order("sort desc")->select();
                }
            }
            $this->assign("vb", $result);
            //自身数据
            $row = $this->_model->find($mid);
            $this->assign('list', $row);
            $this->display('add');
        }
    }

    /**
     * 删除菜单
     * @param $id
     */
    public function del($id)
    {
        $res = $this->_model->delMenu($id);
        if ($res === false) {
            $return = array(
                'status' => 0,//表示删除出现了错误
                'msg' => $this->_model->getError(),
            );
        } else {
            $return = array(
                'status' => 1,//表示删除成功
                'msg' => '删除成功'
            );
        }
        $this->ajaxReturn($return);
    }

    /**
     * 切换展示状态
     * @param $id
     */
    public function change($id)
    {
        $row = $this->_model->find($id);
        $data = array();
        if ($row['set'] == 0) {
            $data['id'] = $id;
            $data['set'] = 1;
        } else {
            $data['id'] = $id;
            $data['set'] = 0;
        }
        $this->_model->save($data);
    }

}