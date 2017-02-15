<?php
namespace Common;

use NativePay;
use WxPayApi;
use WxPayConfig;
use WxPayNotify;
use WxPayOrderQuery;
use WxPayUnifiedOrder;
use WxPayRefund;

require_once __DIR__ . "/Wxpay/lib/WxPay.Api.php";
require_once __DIR__ . "/Wxpay/lib/WxPay.Config.php";
require_once __DIR__ . "/Wxpay/lib/WxPay.Data.php";
require_once __DIR__ . "/Wxpay/lib/WxPay.Exception.php";
require_once __DIR__ . "/Wxpay/lib/WxPay.Notify.php";
require_once __DIR__ . "/Wxpay/example/WxPay.NativePay.php";


class WeixinPay
{
	
    static $noticfy_url = 'http://lb.coolmoban.com/Pays/wxnotice';
    /**
     * 获得预支付ID等信息
     * @return mixed
     */
    public static function getPayData($body, $money, $oid)
    {
        //todo
        $notify = new WxPayApi();
        $input = new WxPayUnifiedOrder();
        $input->SetBody($body);
        $input->SetAttach("微信购买");
        $input->SetOut_trade_no($oid);
        $input->SetTotal_fee($money);
        $input->SetTime_start(date("YmdHis"));
        $input->SetTime_expire(date("YmdHis", time() + 600));
        $input->SetGoods_tag("test");
        $input->SetNotify_url(self::$noticfy_url);
        $input->SetTrade_type("APP");
        $input->SetProduct_id($oid.'0002'); // 商品id
        $result = $notify->unifiedOrder($input);
        return $result;
    }
    /**
     * 微信退款
     * */
    public static function refunds($transaction_id,$total_fee,$refund_fee){
		$input = new WxPayRefund();
		$input->SetTransaction_id($transaction_id);
		$input->SetTotal_fee($total_fee);
		$input->SetRefund_fee($refund_fee);
		$input->SetOut_refund_no(WxPayConfig::MCHID.date("YmdHis"));
		$input->SetOp_user_id(WxPayConfig::MCHID);
		return WxPayApi::refund($input);
		exit();
    }

    /***
     * 获取二维码URL
     * @param $oid
     * @return string
     */
    public static function getRCodeUrl($oid)
    {
        $notify = new NativePay();
        $re = $notify->GetPrePayUrl($oid);
        return $re;
    }

    public static function Notify()
    {
        $notify = new PayNotifyCallBack();
        $notify->Handle(false);

        return PayNotifyCallBack::$orderInfo;

        //return 'SUCCESS' == $notify->GetReturn_code();
    }
}


class PayNotifyCallBack extends WxPayNotify
{
    public static $orderInfo = null;

    //查询订单
    public function Queryorder($transaction_id)
    {
        $input = new WxPayOrderQuery();
        $input->SetTransaction_id($transaction_id);
        $result = WxPayApi::orderQuery($input);
        if (array_key_exists("return_code", $result)
            && array_key_exists("result_code", $result)
            && $result["return_code"] == "SUCCESS"
            && $result["result_code"] == "SUCCESS"
        ) {
            return $result;
        }
        return false;
    }

    //重写回调处理函数
    public function NotifyProcess($data, &$msg)
    {
        $notfiyOutput = array();

        if (!array_key_exists("transaction_id", $data)) {
            $msg = "输入参数不正确";
            return false;
        }
        //查询订单，判断订单真实性
        $order = $this->Queryorder($data["transaction_id"]);
        if (!$order) {
            $msg = "订单查询失败";
            return false;
        }
        self::$orderInfo = $order;
        return true;
    }
}
