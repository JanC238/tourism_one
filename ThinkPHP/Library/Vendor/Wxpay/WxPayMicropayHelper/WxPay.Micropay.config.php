<?php
/**
* 	配置账号信息
*/

class WxPayConf_micropay
{
	//=======【基本信息设置】=====================================
	//微信公众号身份的唯一标识。审核通过后，在微信发送的邮件中查看
	const APPID = 'wx9ec0e1e301d699fd';
	//受理商ID，身份标识
	const MCHID = '1226447402';
	//商户支付密钥Key。审核通过后，在微信发送的邮件中查看
	const KEY = 'XTKDXon8JaWvTtyaNlhm186ZZBdq16HU';
		
	//=======【证书路径设置】=====================================
	//证书路径,注意应该填写绝对路径
	const SSLCERT_PATH = '';
	const SSLKEY_PATH = '';
	
	//=======【curl超时设置】===================================
	//本例程通过curl使用HTTP POST方法，此处可修改其超时时间，默认为30秒
	const CURL_TIMEOUT = 30;

}
	
?>