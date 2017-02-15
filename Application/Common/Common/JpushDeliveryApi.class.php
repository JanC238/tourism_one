<?php
namespace Common\Common;

use Think\Model;

class JpushDeliveryApi extends Model
{
    /***
     * 配送端
     * @param array $telbs 手机设备标识
     * @param string $content :发送的内容
     * @param int $uu :1透传|2通知|3通知与透传一起
     * @param int $dd :1全部|2单个
     * @return mixed
     */
    public static function tui($telbs, $content, $uu, $dd,$messages ,$lang = 0)
    {
        if (!$telbs) return 'ids is null';
        /**消息推送**/
        if($lang == 0 ){
        	$titles = C("jpush_title");
        }else{
        	$titles = C("jpush_titles");
        }
        if ($dd == 1) {
            $aa = self::jpush('"all"', $content, $uu, $titles,$messages);
        } else {
            $aa = self::jpush('{"registration_id":['.$telbs.']}', $content, $uu, $titles,$messages);
        }
        file_put_contents("testsjpush.txt",date("Y-m-d H:i:s")."-->".json_encode($aa)."\r\n", FILE_APPEND);
        return $aa;
    }
    //推送
    static function  request_post($url = "", $param = "", $header = "")
    {
        if (empty($url) || empty($param)) {
            return false;
        }
        $postUrl = $url;
        $curlPost = $param;
        $ch = curl_init();//初始化curl
        curl_setopt($ch, CURLOPT_URL, $postUrl);//抓取指定网页
        curl_setopt($ch, CURLOPT_HEADER, 0);//设置header
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);//要求结果为字符串且输出到屏幕上
        curl_setopt($ch, CURLOPT_POST, 1);//post提交方式
        curl_setopt($ch, CURLOPT_POSTFIELDS, $curlPost);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
        // 增加 HTTP Header（头）里的字段 
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
        // 终止从服务端进行验证
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
        $data = curl_exec($ch);//运行curl

        curl_close($ch);
        return $data;
    }
    //通知与透传
    /**
     * $data:1透传，其他为通知和透传一起来
     * */
    public static function jpush($title, $message, $data, $titles,$messages=null)
    {
        /**
         * alert:这里指定了，则会覆盖上级统一指定的 alert 信息；内容可以为空字符串，则表示不展示到通知栏。
         * builder_id:Android SDK 可设置通知栏样式，这里根据样式 ID 来指定该使用哪套样式。
         * title:如果指定了，则通知里原来展示 App名称的地方，将展示成这个字段。
         *
         * badge:如果不填，表示不改变角标数字；否则把角标数字改为指定的数字；为 0 表示清除。JPush 官方 API Library(SDK) 会默认填充badge值为"+1",详情参考：badge +1(ios)
         *
         * time_to_live:推送当前用户不在线时，为该用户保留多长时间的离线消息，以便其上线时再次推送。默认 86400 （1 天），最长 10 天。
         *                设置为 0 表示不保留离线消息，只有推送当前在线的用户可以收到。(单位秒)
         * apns_production:True 表示推送生产环境，False 表示要推送开发环境；如果不指定则为推送生产环境。JPush 官方 API LIbrary (SDK) 默认设置为推送 “开发环境”。
         * */
        $url = 'https://api.jpush.cn/v3/push';
        $base64 = base64_encode("754867dc66ff8f6c00f7518a:6c54ec2b435014a2d92c0f50");
        $header = array("Authorization:Basic $base64", "Content-Type:application/json");
        if ($data == 1) {
            $param = '{"platform":"all","audience":' . $title . ',"message":{"msg_content":"' . $messages . '","title":"' . $titles . '"},"options" : {"time_to_live" : 60,"apns_production":true}}';
        } elseif ($data == 2) {
            $param = '{"platform":"all","audience":' . $title . ',"notification" : {
	        	"android" : {
		             "alert" : "' . $message . '",
		             "title" : "' . $titles . '",
		             "builder_id" : 2
	        	},
	        	"ios" : {
	                 "alert" : "' . $message . '",
	                 "badge":"+1"
	            }},"options" : {"time_to_live" : 60,"apns_production":true}}';
        } else {
            $param = '{"platform":"all","audience":' . $title . ',"notification" : {
	        	"android" : {
		             "alert" : "' . $message . '",
		             "title" : "' . $titles . '",
		             "builder_id" : 2
	        	},
	        	"ios" : {
	                 "alert" : "' . $message . '",
	                 "badge":"+1"
	            }},"message":{"msg_content":"' . $messages . '","title":"' . $titles . '"},"options" : {"time_to_live" : 60,"apns_production":true}}';
        }
        file_put_contents("testsjpushww.txt",date("Y-m-d H:i:s")."-->".$param."\r\n", FILE_APPEND);
        $res = self::request_post($url, $param, $header);
        $res_arr = json_decode($res, true);
        return $res_arr;
    }
}

?>