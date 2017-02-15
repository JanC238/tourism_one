<?php
namespace Common\Common;

/**
 * JpushMerchantApi:商家推送
 * JpushDeliveryApi:派单推送
 * JpushApi:用户推送
 * */
class NotifyHandle
{
	
	/**
	 * 拒绝订单
	 * rid:会员id
	 * content:拒绝内容
	 * */
	public static function refund_order($params)
	{
		if ($params['rid'] != 0) {
			if($params['lang'] == 1){
            	JpushApi::tui('"' . $params['rid'] . '"', $params['content'], 3, 2, $params['contents'],1);
            }else
            {
            	JpushApi::tui('"' . $params['rid'] . '"', $params['content'], 3, 2, $params['contents']);
            }
        }
	}
	/**
	 * 派单员地址推送
	 * rid:配送rid
     * content:内容
	 * */
	public function addr_post($params)
	{
		if ($params['rid'] != 0) {
            JpushApi::tui('"' . $params['rid'] . '"', '地址推送', 1, 2, $params['content']);
        }
	}
    /**
     * 挤下线操作
     * $params
     * new:新rid
     * old:旧rid
     */
    public static function extrLine($params)
    {
        if ($params['old'] != 0) {
            JpushApi::tui('"' . $params['old'] . '"', '您在另一台设备进行登陆了', 1, 2, '10010');
        }
    }
    //商家端
	public static function extrLinesj($params)
    {
        if ($params['old'] != 0) {
            JpushMerchantApi::tui('"' . $params['old'] . '"', '您在另一台设备进行登陆了', 1, 2, '10011');
        }
    }
    //配送端
	public static function extrLineps($params)
    {
        if ($params['old'] != 0) {
            JpushDeliveryApi::tui('"' . $params['old'] . '"', '您在另一台设备进行登陆了', 1, 2, '10012');
        }
    }
    /**
     * 商家接收订单(商家端)
     * $params
     * rid:商家rid
     * uid:商家id
     * */
    public static function buser_accept($params)
    {
        if ($params['rid'] != 0) {
        	if($params['uid'] ){
            	JpushMerchantApi::tui('"' . $params['rid'] . '"', '您有新的订单', 1, 2, 'refresh,' . $params['uid']);
            	if($params['content']){
            		JpushMerchantApi::tui('"' . $params['rid'] . '"', $params['content'], 2, 2, 'refresh,' . $params['uid'],1);
            	}else
            	{
            		JpushMerchantApi::tui('"' . $params['rid'] . '"', '您有新的订单，请查看', 2, 2, 'refresh,' . $params['uid']);
            	}
        	}
        }
    }

    /**
     * 广播单子已被其他人抢到
     * $params
     * rid:配送rid
     * uid:派单人id
     * oid:订单id
     * */
    public static function grab_order($params)
    {
        if ($params['rid'] != 0) {
            JpushDeliveryApi::tui('"' . $params['rid'] . '"', '订单已被抢', 1, 2, 'rob,' . $params['uid'] . ',' . $params['oid']);
        }
    }

    /**
     * 打印
     * 商家打印订单(更改订单制作中)
     * $params
     * rid:用户rid
     * uid:用户id
     * oid:订单id
     * */
    public static function buser_print($params)
    {
        if ($params['rid'] != 0) {
            $results = JpushApi::tui('"' . $params['rid'] . '"', '您的订单已经开始制作', 1, 2, 'refresh,' . $params['uid'] . ',' . $params['oid']);
        }
    }

    /**
     * 广播到派送端抢单
     * 配送员抢单(支付完成抢当前时间的单子)
     * $params
     * rid:配送用户rid
     * uid:配送员id
     * oid:订单id
     * */
    public static function distr_grab($params)
    {
        if ($params['rid'] != 0) {
            JpushDeliveryApi::tui('"' . $params['rid'] . '"', '您的区域有新的订单', 1, 2, 'rob,' . $params['uid'] . ',' . $params['oid'] );
            if( $params['content'] ){
            	JpushDeliveryApi::tui('"' . $params['rid'] . '"', $params['content'], 2, 2, 'rob,' . $params['uid'] . ',' . $params['oid'],1);
            }else
            {
            	JpushDeliveryApi::tui('"' . $params['rid'] . '"', '您有新的订单需要派送，请查看', 2, 2, 'rob,' . $params['uid'] . ',' . $params['oid'] );
            }
        }
    }

    /**
     * 配送员送单(派单员拿到产品进行配送)
     * $params
     * rid:用户rid
     * uid:用户id
     * oid:订单id
     * */
    public static function distr_clerk($params)
    {
        if ($params['rid'] != 0) {
            $result = JpushApi::tui('"' . $params['rid'] . '"', '您的订单已开始为您配送', 1, 2, 'refresh,' . $params['uid'] . ',' . $params['oid']);
        }
    }
    public static function distr_clerk_tz($params)
    {
        if ($params['rid'] != 0) {
        	if( !empty($params['content']) ){
            	$result = JpushApi::tui('"' . $params['rid'] . '"', $params['content'], 2, 2, $params['oid'],1);
            }else
            {
            	$result = JpushApi::tui('"' . $params['rid'] . '"', '您的订单已开始为您配送', 2, 2, $params['oid']);
            }
        }
    }

    /**
     * 配送员送单送达(给商家回复)
     * $params
     * rid:用户rid
     * uid:用户id
     * oid:订单id
     * rids:商家用户rid
     * uids:商家id
     * oids:商家订单id
     * */
    public static function distr_buser($params)
    {
        if ($params['rid'] != 0) {
            JpushApi::tui('"' . $params['rid'] . '"', '您的订单已送达', 1, 2, 'refresh,' . $params['uid'] . ',' . $params['oid']);
        }
        if ($params['rids'] != 0) {
        	if( !empty($params['content']) ){
            	JpushMerchantApi::tui('"' . $params['rids'] . '"', $params['content'], 2, 2, 'refresh,' . $params['uids'] . ',' . $params['oids'],1);
            }else
            {
            	JpushMerchantApi::tui('"' . $params['rids'] . '"', '您的订单已送达用户', 2, 2, 'refresh,' . $params['uids'] . ',' . $params['oids']);
            }
        }
    }
    /**
     * 用户退款(商家收到回复)
     * $params
     * rid:商家rid
     * uid:商家id
     * oid:订单id
     * */
    public static function back_buser($params)
    {
    	if ($params['rid'] != 0) {
            JpushMerchantApi::tui('"' . $params['rid'] . '"', '订单已退款', 1, 2, 'refresh,' . $params['uid'] . ',' . $params['oid']);
        }
    }
    /**
     * 用户退款(配送员收到回复)
     * $params
     * rid:配送员rid
     * uid:配送员id
     * oid:订单id
     * */
    public static function back_distr($params)
    {
    	if ($params['rid'] != 0) {
            JpushDeliveryApi::tui('"' . $params['rid'] . '"', '派单已退款', 1, 2, 'rob,' . $params['uid'] . ',' . $params['oid']);
        }
    }
}