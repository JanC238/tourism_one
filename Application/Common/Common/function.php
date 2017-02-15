<?php
/**
 * Created by PhpStorm.
 * User: zzzzz
 * Date: 2016-08-17
 * Time: 10:44
 */
/**
 * 加盐加密
 * @param $password 密码
 * @param $salt     盐
 * @return string   加盐加密后的密码
 */
function saltEncrypt($password, $salt)
{
    return md5(md5($password) . $salt);
}

/**
 * 加密
 * @param $password 密码
 * @return string   加密后的密码
 */
function shaEncrypt($password)
{
    return sha1(md5(md5($password)));
}

/**
 * 提示错误信息
 * @param \Think\Model $model
 * @return string
 */
function getError(\Think\Model $model)
{
    $errors = $model->getError();
    //>>如果不是数组，转换成数组，便于html拼接
    if (!is_array($errors)) {
        $errors = [$errors,];
    }
    $html = "<ol>";
    foreach ($errors as $error) {
        $html .= '<li>' . $error . '</li>';
    }
    $html .= '</ol>';
    return $html;
}

/**
 * 分页
 * @param \Think\Model $model model对象
 * @param array               查询条件
 * @param integer $pageSize 分页行数
 * @param string $order 排序方式
 * @return array 查询数据和分页代码
 */
function setPage(\Think\Model $model, array $cond = [], $pageSize = 5, $order = '', $group = '')
{
    //>>获取分页相关配置
    $pageSetting = C("PAGE_SETTING");
    $pageTheme = $pageSetting['PAGE_THEME'];
    //>>获取分页代码
    //>>总行数
    $count = $model->where($cond)->count();
    $page = new \Think\Page($count, $pageSize);
    //>>更改样式
    $page->setConfig('theme', $pageTheme);
    //>>分页html
    $pageHtml = $page->show();
    //>>获取当前页数
    $pageIndex = I('get.p');
    //>>获取最大页数
    $totalPage = $page->totalPages;
    //>>判断当前页数是否为空或不合法数据的情况
    if (empty($pageIndex) || is_nan($pageIndex)) {
        $pageIndex = 1;
    }
    if ($totalPage < $pageIndex) {
        $pageIndex = $totalPage;
    }
    if ($pageIndex <= 0) {
        $pageIndex = 1;
    }
    //>>获取分页数据
    $rows = $model->order($order)->group($group)->where($cond)->page($pageIndex, $pageSize)->select();
    return compact(['rows', 'pageHtml', 'totalPage']);
}

/**
 * 失败返回上一页
 * @param $msg 提示消息
 */
function errorJump($msg)
{
    echo "<script>alert('$msg');history.go(-1);</script>";
    exit;
}

/**
 * 成功跳转
 * @param $msg 提示消息
 * @param $url 跳转到的地址
 */
function successJump($msg, $url)
{
    echo "<script>alert('$msg');location.href='$url';</script>";
    exit;
}

/**
 * 无限极分类递归
 * @param $cate        需要分类的二维数组
 * @param int $pid 父级id
 * @param int $level 层级
 * @param string $html 分辨层级的标识 如 --
 * @return array       分类并排序好的数组
 */
function sortOut($cate, $pid = 0, $level = 0, $html = '--')
{
    $tree = array();
    foreach ($cate as $v) {
        if ($v['id'] == $pid) {
            $v['level'] = $level + 1;
            $v['html'] = str_repeat($html, $level);
            $tree[] = $v;
            $tree = array_merge($tree, sortOut($cate, $v['id'], $level + 1, $html));
        }
    }
    return $tree;
}

/**
 * 获取权限
 * @return array 用户权限的数组
 */
function per()
{
    return session('PERMISSIONS');
}

/**
 * 获取登陆用户信息
 * @return array 用户信息
 */
function user()
{
    return session('USER_INFO');
}

/**
 * 二维数组唯一
 * @param array $data 数组
 * @return array 处理后的数组
 */
function unique($data = array())
{
    $tmp = array();
    foreach ($data as $key => $value) {
        //把一维数组键值与键名组合
        foreach ($value as $key1 => $value1) {
            $value[$key1] = $key1 . '_|_' . $value1;//_|_分隔符复杂点以免冲突
        }
        $tmp[$key] = implode(',|,', $value);//,|,分隔符复杂点以免冲突
    }

    //对降维后的数组去重复处理
    $tmp = array_unique($tmp);

    //重组二维数组
    $newArr = array();
    foreach ($tmp as $k => $tmp_v) {
        $tmp_v2 = explode(',|,', $tmp_v);
        foreach ($tmp_v2 as $k2 => $v2) {
            $v2 = explode('_|_', $v2);
            $tmp_v3[$v2[0]] = $v2[1];
        }
        $newArr[$k] = $tmp_v3;
    }
    return $newArr;
}

/**
 * 获取指定月份的第一天开始和最后一天结束的时间戳
 *
 * @param string $y 年份
 * @param string $m 月份
 * @return array(本月开始时间，本月结束时间)
 */
function mFristAndLast($y = "", $m = "")
{
    if ($y == "") $y = date("Y");
    if ($m == "") $m = date("m");
    $m = sprintf("%02d", intval($m));
    $y = str_pad(intval($y), 4, "0", STR_PAD_RIGHT);

    $m > 12 || $m < 1 ? $m = 1 : $m = $m;
    $firstday = strtotime($y . $m . "01000000");
    $firstdaystr = date("Y-m-01", $firstday);
    $lastday = strtotime(date('Y-m-d 23:59:59', strtotime("$firstdaystr +1 month -1 day")));
    return array("firstday" => $firstday, "lastday" => $lastday);
}

/**
 * 处理空数据，不能为Nul
 * @param $data  参数
 * @return array|int|string 空
 */
function checkNull($data)
{
    if (!$data) {
        if (is_array($data)) {
            $data = [];
        } elseif (is_numeric($data)) {
            $data = 0;
        } else {
            $data = '';
        }
    }
    return $data;
}

/**
 * 小数截取
 * @param $number  数
 * @return string  保留一位小数
 */
function numberIntercept($number)
{
//    return substr(number_format($number, 3, '.', ','), 0, -2);
    return number_format($number, 1, '.', '');
}