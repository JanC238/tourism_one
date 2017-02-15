/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50711
Source Host           : 127.0.0.1:3306
Source Database       : tourism_one

Target Server Type    : MYSQL
Target Server Version : 50711
File Encoding         : 65001

Date: 2017-02-15 16:16:35
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for tp_about_us
-- ----------------------------
DROP TABLE IF EXISTS `tp_about_us`;
CREATE TABLE `tp_about_us` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content_1` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tp_about_us
-- ----------------------------
INSERT INTO `tp_about_us` VALUES ('1', '<p><strong><span style=\"margin: 0px; padding: 0px; line-height: 27px; background-color: rgb(255, 255, 255); color: rgb(102, 102, 102); font-family: 微软雅黑; font-size: 15px; letter-spacing: 2px;\">某某旅游有限公司成为一类国际</span></strong><span style=\"margin: 0px; padding: 0px; line-height: 27px; background-color: rgb(255, 255, 255); color: rgb(102, 102, 102); font-family: 微软雅黑; font-size: 15px; letter-spacing: 2px;\">旅游社，主营国内地接、入境接待国内出游、国际出境游、代办签证、修学旅行、商务考察、会务接待等业务项目，公司 经营场所400平方米，在职职工100人，设有管理中心、财务中心、国内地接中心、国内出游中心、国际入境中心、中国公民出境中心、网络信息中心等。企业 规模和经济实力以及经济效益已在xx市同行业排序前列。</span><span style=\"color: rgb(90, 90, 90); font-family: Arial, 宋体, Helvetica, sans-serif, Verdana; font-size: 12px; background-color: rgb(255, 255, 255);\">&nbsp;</span><br style=\"color: rgb(90, 90, 90); font-family: Arial, 宋体, Helvetica, sans-serif, Verdana; font-size: 12px; white-space: normal; background-color: rgb(255, 255, 255); line-height: 16.8px; text-align: justify;\"/><br style=\"color: rgb(90, 90, 90); font-family: Arial, 宋体, Helvetica, sans-serif, Verdana; font-size: 12px; white-space: normal; background-color: rgb(255, 255, 255); line-height: 16.8px; text-align: justify;\"/><span style=\"margin: 0px; padding: 0px; line-height: 27px; background-color: rgb(255, 255, 255); color: rgb(102, 102, 102); font-family: 微软雅黑; font-size: 15px; letter-spacing: 2px;\">&nbsp; &nbsp; &nbsp;&nbsp;公司成立以来，注重质量和信誉，强化内部管理，现已获得良好的品牌效应，诚信服务，规范经营，获得xx市政府多次嘉奖，为xx旅游业争得了荣誉，得到了xx市民和社会各界的好评和认可，在全国旅游界引起了强烈的反响和好评</span><span style=\"color: rgb(90, 90, 90); font-family: Arial, 宋体, Helvetica, sans-serif, Verdana; font-size: 12px; background-color: rgb(255, 255, 255);\">&nbsp;</span><br style=\"color: rgb(90, 90, 90); font-family: Arial, 宋体, Helvetica, sans-serif, Verdana; font-size: 12px; white-space: normal; background-color: rgb(255, 255, 255); line-height: 16.8px; text-align: justify;\"/><br style=\"color: rgb(90, 90, 90); font-family: Arial, 宋体, Helvetica, sans-serif, Verdana; font-size: 12px; white-space: normal; background-color: rgb(255, 255, 255); line-height: 16.8px; text-align: justify;\"/></p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; line-height: 16.8px; color: rgb(90, 90, 90); font-family: Arial, 宋体, Helvetica, sans-serif, Verdana; font-size: 12px; white-space: normal; background-color: rgb(255, 255, 255);\"><span style=\"margin: 0px; padding: 0px; line-height: 27px; color: rgb(102, 102, 102); font-family: 微软雅黑; font-size: 15px; letter-spacing: 2px;\">&nbsp; &nbsp; &nbsp;&nbsp;公司经营场所400平方米，在职职工100人，设有管理中心、财务中心、国内地接中心、国内出游中心、国际入境中心、中国公民出境中心、网络信息中心等。企业规模和经济实力以及经济效益已在xx市同行业排序前列。</span></p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; line-height: 16.8px; color: rgb(90, 90, 90); font-family: Arial, 宋体, Helvetica, sans-serif, Verdana; font-size: 12px; white-space: normal; background-color: rgb(255, 255, 255);\"><br/></p><p style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; line-height: 16.8px; color: rgb(90, 90, 90); font-family: Arial, 宋体, Helvetica, sans-serif, Verdana; font-size: 12px; white-space: normal; background-color: rgb(255, 255, 255);\"><span style=\"margin: 0px; padding: 0px; line-height: 27px; color: rgb(102, 102, 102); font-family: 微软雅黑; font-size: 15px; letter-spacing: 2px;\">&nbsp; &nbsp; &nbsp;&nbsp;公司一直坚持和倡导“</span>&nbsp;<span style=\"margin: 0px; padding: 0px; line-height: 27px; color: rgb(102, 102, 102); font-family: 微软雅黑; font-size: 15px; letter-spacing: 2px;\">尊重客户，理解客户，持续提供超越客户期望的产品与服务，做客户</span><span style=\"margin: 0px; padding: 0px; line-height: 27px; color: rgb(102, 102, 102); font-family: 微软雅黑; font-size: 15px; letter-spacing: 2px;\">们永远的伙伴</span>&nbsp;<span style=\"margin: 0px; padding: 0px; line-height: 27px; color: rgb(102, 102, 102); font-family: 微软雅黑; font-size: 15px; letter-spacing: 2px;\">”的理念。</span><span style=\"margin: 0px; padding: 0px; line-height: 27px; color: rgb(102, 102, 102); font-family: 微软雅黑; font-size: 15px; letter-spacing: 2px;\">诚实守信：讲诚信、讲信誉、得客户心、得市场、得效益。</span>&nbsp;<span style=\"margin: 0px; padding: 0px; line-height: 27px; color: rgb(102, 102, 102); font-family: 微软雅黑; font-size: 15px; letter-spacing: 2px;\">争创一流</span><span style=\"margin: 0px; padding: 0px; line-height: 27px; color: rgb(102, 102, 102); font-family: 微软雅黑; font-size: 15px; letter-spacing: 2px;\">：</span>&nbsp;<span style=\"margin: 0px; padding: 0px; line-height: 27px; color: rgb(102, 102, 102); font-family: 微软雅黑; font-size: 15px; letter-spacing: 2px;\">激励自己，挑战现实创一流企业。</span><span style=\"margin: 0px; padding: 0px; line-height: 27px; color: rgb(102, 102, 102); font-family: 微软雅黑; font-size: 15px; letter-spacing: 2px;\">真诚服务</span>&nbsp;<span style=\"margin: 0px; padding: 0px; line-height: 27px; color: rgb(102, 102, 102); font-family: 微软雅黑; font-size: 15px; letter-spacing: 2px;\">：</span><span style=\"margin: 0px; padding: 0px; line-height: 27px; color: rgb(102, 102, 102); font-family: 微软雅黑; font-size: 15px; letter-spacing: 2px;\">以市场为导向，想客户之所想，急客户之所急。</span>&nbsp;<span style=\"margin: 0px; padding: 0px; line-height: 27px; color: rgb(102, 102, 102); font-family: 微软雅黑; font-size: 15px; letter-spacing: 2px;\"></span></p><p><br/></p>');

-- ----------------------------
-- Table structure for tp_about_us_img
-- ----------------------------
DROP TABLE IF EXISTS `tp_about_us_img`;
CREATE TABLE `tp_about_us_img` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tp_about_us_img
-- ----------------------------
INSERT INTO `tp_about_us_img` VALUES ('1', '20170214161827_1e274b72bb45ada58a2bd531b6950.jpg');
INSERT INTO `tp_about_us_img` VALUES ('2', '20170214161827_1e274b72bb45ada58a2bd531b6950.jpg');
INSERT INTO `tp_about_us_img` VALUES ('3', '20170214161827_1e274b72bb45ada58a2bd531b6950.jpg');
INSERT INTO `tp_about_us_img` VALUES ('4', '20170214161827_1e274b72bb45ada58a2bd531b6950.jpg');
INSERT INTO `tp_about_us_img` VALUES ('5', '20170214161827_1e274b72bb45ada58a2bd531b6950.jpg');
INSERT INTO `tp_about_us_img` VALUES ('7', '20170214164116_8f0624e01b863b458a2c2ac517310.jpg');

-- ----------------------------
-- Table structure for tp_about_us_scroll_img
-- ----------------------------
DROP TABLE IF EXISTS `tp_about_us_scroll_img`;
CREATE TABLE `tp_about_us_scroll_img` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tp_about_us_scroll_img
-- ----------------------------
INSERT INTO `tp_about_us_scroll_img` VALUES ('1', '20170214160224_bdaae759031b13c58a2b9904381d0.jpg');
INSERT INTO `tp_about_us_scroll_img` VALUES ('2', '20170214160231_80ef72fcdd54bc358a2b9971b5270.jpg');
INSERT INTO `tp_about_us_scroll_img` VALUES ('4', '20170214160231_80ef72fcdd54bc358a2b9971b5270.jpg');
INSERT INTO `tp_about_us_scroll_img` VALUES ('5', '20170214160231_80ef72fcdd54bc358a2b9971b5270.jpg');
INSERT INTO `tp_about_us_scroll_img` VALUES ('6', '20170214160231_80ef72fcdd54bc358a2b9971b5270.jpg');
INSERT INTO `tp_about_us_scroll_img` VALUES ('7', '20170214160231_80ef72fcdd54bc358a2b9971b5270.jpg');
INSERT INTO `tp_about_us_scroll_img` VALUES ('8', '20170214160231_80ef72fcdd54bc358a2b9971b5270.jpg');
INSERT INTO `tp_about_us_scroll_img` VALUES ('9', '20170214160231_80ef72fcdd54bc358a2b9971b5270.jpg');
INSERT INTO `tp_about_us_scroll_img` VALUES ('10', '20170214160231_80ef72fcdd54bc358a2b9971b5270.jpg');

-- ----------------------------
-- Table structure for tp_ad_account
-- ----------------------------
DROP TABLE IF EXISTS `tp_ad_account`;
CREATE TABLE `tp_ad_account` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `usrid` smallint(6) NOT NULL DEFAULT '0' COMMENT '用户信息',
  `roleid` smallint(6) NOT NULL DEFAULT '0' COMMENT '??ɫid',
  `account` varchar(20) NOT NULL COMMENT '?˺',
  `password` varchar(50) NOT NULL COMMENT '???',
  `status` smallint(6) NOT NULL DEFAULT '1' COMMENT '??½״̬(1?ɵ?½0δ??¼)',
  `reg_time` int(11) NOT NULL DEFAULT '0' COMMENT '????ʱ?',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tp_ad_account
-- ----------------------------
INSERT INTO `tp_ad_account` VALUES ('1', '1', '0', 'admin', '56397d952c6ba7d29e04e3da5625885cd6d24162', '1', '1487121864');
INSERT INTO `tp_ad_account` VALUES ('2', '0', '1', 'excel', '29a11e7a6fab42c7594b5cde248dac6d70da92ce', '1', '1478684900');

-- ----------------------------
-- Table structure for tp_ad_match
-- ----------------------------
DROP TABLE IF EXISTS `tp_ad_match`;
CREATE TABLE `tp_ad_match` (
  `roleid` int(10) NOT NULL COMMENT '??ɫid',
  `leftid` int(10) NOT NULL COMMENT '??Ŀid',
  `jsons` varchar(255) DEFAULT NULL COMMENT '??ɾ?Ĳ???'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tp_ad_match
-- ----------------------------
INSERT INTO `tp_ad_match` VALUES ('1', '3', null);
INSERT INTO `tp_ad_match` VALUES ('1', '4', null);
INSERT INTO `tp_ad_match` VALUES ('1', '5', null);

-- ----------------------------
-- Table structure for tp_ad_menu
-- ----------------------------
DROP TABLE IF EXISTS `tp_ad_menu`;
CREATE TABLE `tp_ad_menu` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL DEFAULT '' COMMENT '??Ŀ???',
  `url` varchar(100) NOT NULL DEFAULT '' COMMENT '??Ŀ???',
  `pid` smallint(6) NOT NULL DEFAULT '0' COMMENT '?ϼ???Ŀid',
  `tid` smallint(6) NOT NULL DEFAULT '0' COMMENT '????id',
  `set` smallint(6) NOT NULL DEFAULT '0' COMMENT '??Ŀ????(0չʾ1????)',
  `sort` smallint(6) NOT NULL DEFAULT '0' COMMENT '???',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tp_ad_menu
-- ----------------------------
INSERT INTO `tp_ad_menu` VALUES ('1', '基础设置', '', '0', '0', '1', '0');
INSERT INTO `tp_ad_menu` VALUES ('2', '系统设置', '', '0', '1', '1', '99');
INSERT INTO `tp_ad_menu` VALUES ('3', '栏目管理', 'AdMenu/index', '2', '1', '1', '0');
INSERT INTO `tp_ad_menu` VALUES ('4', '账号管理', 'AdAccount/index', '2', '1', '1', '0');
INSERT INTO `tp_ad_menu` VALUES ('5', '角色设置', 'AdRole/index', '2', '1', '1', '0');
INSERT INTO `tp_ad_menu` VALUES ('70', '首页', '', '0', '1', '1', '0');
INSERT INTO `tp_ad_menu` VALUES ('72', '首页内容1左', 'HomeContentLeft/index', '70', '1', '1', '0');
INSERT INTO `tp_ad_menu` VALUES ('73', '首页内容1右', 'HomeContentRight/index', '70', '1', '1', '0');
INSERT INTO `tp_ad_menu` VALUES ('74', '首页内容2左', 'HomeContentTwoLeft/index', '70', '1', '1', '0');
INSERT INTO `tp_ad_menu` VALUES ('75', '首页内容2右', 'HomeContentTwoRight/index', '70', '1', '1', '0');
INSERT INTO `tp_ad_menu` VALUES ('76', '首页内容3', 'HomeContentThree/index', '70', '1', '1', '0');
INSERT INTO `tp_ad_menu` VALUES ('77', '首页内容4', 'HomeContentFour/index', '70', '1', '1', '0');
INSERT INTO `tp_ad_menu` VALUES ('78', '首页内容5', 'HomeContentFive/index', '70', '1', '1', '0');
INSERT INTO `tp_ad_menu` VALUES ('79', '首页内容6', 'HomeContentSix/index', '70', '1', '1', '0');
INSERT INTO `tp_ad_menu` VALUES ('80', '首页内容7', 'HomeContentSeven/index', '70', '1', '1', '0');
INSERT INTO `tp_ad_menu` VALUES ('81', '关于我们', '', '0', '1', '1', '0');
INSERT INTO `tp_ad_menu` VALUES ('82', '关于我们(介绍)', 'AboutUs/index', '81', '1', '1', '0');
INSERT INTO `tp_ad_menu` VALUES ('83', '关于我们(跑马灯)', 'AboutUsScrollImg/index', '81', '1', '1', '0');
INSERT INTO `tp_ad_menu` VALUES ('84', '关于我们(图片)', 'AboutUsImg/index', '81', '1', '1', '0');
INSERT INTO `tp_ad_menu` VALUES ('85', '出行路线', '', '0', '1', '1', '0');
INSERT INTO `tp_ad_menu` VALUES ('86', '分类设置', 'Class/index', '85', '1', '1', '0');
INSERT INTO `tp_ad_menu` VALUES ('87', '品牌图片', 'BrandImg/index', '70', '1', '1', '0');
INSERT INTO `tp_ad_menu` VALUES ('88', '酒店', '', '0', '1', '1', '0');
INSERT INTO `tp_ad_menu` VALUES ('89', '酒店', 'Hotel/index', '88', '1', '1', '0');
INSERT INTO `tp_ad_menu` VALUES ('90', '新闻', '', '0', '1', '1', '0');
INSERT INTO `tp_ad_menu` VALUES ('91', '新闻分类', 'NewsClass/index', '90', '1', '1', '0');
INSERT INTO `tp_ad_menu` VALUES ('92', '新闻', 'News/index', '90', '1', '1', '0');
INSERT INTO `tp_ad_menu` VALUES ('93', '路线', 'Route/index', '85', '1', '1', '0');
INSERT INTO `tp_ad_menu` VALUES ('94', '出行保障', '', '0', '1', '1', '0');
INSERT INTO `tp_ad_menu` VALUES ('95', '出行保障', 'Guarantee/index', '94', '1', '1', '0');
INSERT INTO `tp_ad_menu` VALUES ('96', '出行保障分类', 'GuaranteeClass/index', '94', '1', '1', '0');
INSERT INTO `tp_ad_menu` VALUES ('97', '预定', '', '0', '1', '1', '0');
INSERT INTO `tp_ad_menu` VALUES ('98', '预定', 'Order/index', '97', '1', '1', '0');
INSERT INTO `tp_ad_menu` VALUES ('99', '联系我们', '', '0', '1', '1', '0');
INSERT INTO `tp_ad_menu` VALUES ('100', '联系我们', 'ContactUs/index', '99', '1', '1', '0');

-- ----------------------------
-- Table structure for tp_ad_role
-- ----------------------------
DROP TABLE IF EXISTS `tp_ad_role`;
CREATE TABLE `tp_ad_role` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL DEFAULT '' COMMENT '??ɫ???',
  `bewrite` varchar(255) NOT NULL DEFAULT '' COMMENT '??ɫ???',
  `status` smallint(6) DEFAULT '0' COMMENT '?Ƿ???????Ŀ(0δ????1??????)',
  `reg_time` int(11) NOT NULL DEFAULT '0' COMMENT '????ʱ?',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tp_ad_role
-- ----------------------------
INSERT INTO `tp_ad_role` VALUES ('1', 'excel导出员', '\r\n', '1', '1476686907');

-- ----------------------------
-- Table structure for tp_booking
-- ----------------------------
DROP TABLE IF EXISTS `tp_booking`;
CREATE TABLE `tp_booking` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `starttime` int(11) DEFAULT NULL,
  `endtime` int(11) DEFAULT NULL,
  `name` varchar(32) DEFAULT NULL,
  `remarks` text,
  `tel` varchar(100) DEFAULT NULL,
  `create_time` int(11) DEFAULT NULL,
  `status` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tp_booking
-- ----------------------------
INSERT INTO `tp_booking` VALUES ('4', '1486699260', '1487219520', '123', '123', '123', '1487140938', '0');

-- ----------------------------
-- Table structure for tp_brand_img
-- ----------------------------
DROP TABLE IF EXISTS `tp_brand_img`;
CREATE TABLE `tp_brand_img` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tp_brand_img
-- ----------------------------
INSERT INTO `tp_brand_img` VALUES ('1', '20170214165956_a564e9a3b5cd41258a2c70cb73f70.png');
INSERT INTO `tp_brand_img` VALUES ('2', '20170214165956_a564e9a3b5cd41258a2c70cb73f70.png');
INSERT INTO `tp_brand_img` VALUES ('3', '20170214165956_a564e9a3b5cd41258a2c70cb73f70.png');
INSERT INTO `tp_brand_img` VALUES ('4', '20170214165956_a564e9a3b5cd41258a2c70cb73f70.png');
INSERT INTO `tp_brand_img` VALUES ('5', '20170214165956_a564e9a3b5cd41258a2c70cb73f70.png');

-- ----------------------------
-- Table structure for tp_class
-- ----------------------------
DROP TABLE IF EXISTS `tp_class`;
CREATE TABLE `tp_class` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(32) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tp_class
-- ----------------------------
INSERT INTO `tp_class` VALUES ('1', '推荐路线', '20170214165205_9b882d516e5cc5458a2c535803ad0.jpg');
INSERT INTO `tp_class` VALUES ('2', '最热路线', null);
INSERT INTO `tp_class` VALUES ('3', '国内路线', null);
INSERT INTO `tp_class` VALUES ('4', '国外路线', null);
INSERT INTO `tp_class` VALUES ('5', '自由行路线', null);

-- ----------------------------
-- Table structure for tp_contact_us
-- ----------------------------
DROP TABLE IF EXISTS `tp_contact_us`;
CREATE TABLE `tp_contact_us` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(32) DEFAULT NULL,
  `tel` varchar(32) DEFAULT NULL,
  `fax` varchar(32) DEFAULT NULL,
  `url` varchar(32) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `address_img` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tp_contact_us
-- ----------------------------
INSERT INTO `tp_contact_us` VALUES ('1', '王经理', '0510-12345678', '0510-12345678', 'www.baidu.com', '某某市某某区某某大厦XX楼XX号', '<p><iframe class=\"ueditor_baidumap\" src=\"http://www.jan.com.cn/lsfb/tourism_one/Public/edit/dialogs/map/show.html#center=116.448961,39.929218&zoom=13&width=430&height=240&markers=116.450111,39.927669&markerStyles=l,A\" frameborder=\"0\" width=\"534\" height=\"344\"></iframe></p>');

-- ----------------------------
-- Table structure for tp_guarantee
-- ----------------------------
DROP TABLE IF EXISTS `tp_guarantee`;
CREATE TABLE `tp_guarantee` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `intro` varchar(255) DEFAULT NULL,
  `content` text,
  `time` int(11) DEFAULT NULL,
  `pid` int(11) DEFAULT NULL,
  `status` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tp_guarantee
-- ----------------------------
INSERT INTO `tp_guarantee` VALUES ('31', '目的地指南', '所有商品均贴有入库标签和写有客户姓名的发货标签，收货时请检查此两个标签是否完整，所印信息是否正确。如发货标签上写的不......', '<p class=\"abstract\" style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; display: inline-block; font-family: &quot;Microsoft YaHei&quot;; font-size: 14px; color: rgb(102, 102, 102); line-height: 19.6px; white-space: normal; background-color: rgb(255, 255, 255);\">所有商品均贴有入库标签和写有客户姓名的发货标签，收货时请检查此两个标签是否完整，所印信息是否正确。如发货标签上写的不......</p><p><span style=\"color: rgb(120, 120, 120); font-family: Arial, 宋体, Helvetica, sans-serif, Verdana; font-size: 12px; background-color: rgb(255, 255, 255);\"></span></p><p class=\"abstract\" style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; display: inline-block; font-family: &quot;Microsoft YaHei&quot;; font-size: 14px; color: rgb(102, 102, 102); line-height: 19.6px; white-space: normal; background-color: rgb(255, 255, 255);\"><br/></p>', '1480996800', '3', null);
INSERT INTO `tp_guarantee` VALUES ('32', '目的地指南', '所有商品均贴有入库标签和写有客户姓名的发货标签，收货时请检查此两个标签是否完整，所印信息是否正确。如发货标签上写的不......', '<p class=\"abstract\" style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; display: inline-block; font-family: &quot;Microsoft YaHei&quot;; font-size: 14px; color: rgb(102, 102, 102); line-height: 19.6px; white-space: normal; background-color: rgb(255, 255, 255);\">所有商品均贴有入库标签和写有客户姓名的发货标签，收货时请检查此两个标签是否完整，所印信息是否正确。如发货标签上写的不......</p><p><span style=\"color: rgb(120, 120, 120); font-family: Arial, 宋体, Helvetica, sans-serif, Verdana; font-size: 12px; background-color: rgb(255, 255, 255);\"></span></p><p class=\"abstract\" style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; display: inline-block; font-family: &quot;Microsoft YaHei&quot;; font-size: 14px; color: rgb(102, 102, 102); line-height: 19.6px; white-space: normal; background-color: rgb(255, 255, 255);\"><br/></p>', '1480996800', '3', null);
INSERT INTO `tp_guarantee` VALUES ('33', '目的地指南', '所有商品均贴有入库标签和写有客户姓名的发货标签，收货时请检查此两个标签是否完整，所印信息是否正确。如发货标签上写的不......', '<p class=\"abstract\" style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; display: inline-block; font-family: &quot;Microsoft YaHei&quot;; font-size: 14px; color: rgb(102, 102, 102); line-height: 19.6px; white-space: normal; background-color: rgb(255, 255, 255);\">所有商品均贴有入库标签和写有客户姓名的发货标签，收货时请检查此两个标签是否完整，所印信息是否正确。如发货标签上写的不......</p><p><span style=\"color: rgb(120, 120, 120); font-family: Arial, 宋体, Helvetica, sans-serif, Verdana; font-size: 12px; background-color: rgb(255, 255, 255);\"></span></p><p class=\"abstract\" style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; display: inline-block; font-family: &quot;Microsoft YaHei&quot;; font-size: 14px; color: rgb(102, 102, 102); line-height: 19.6px; white-space: normal; background-color: rgb(255, 255, 255);\"><br/></p>', '1480996800', '3', null);
INSERT INTO `tp_guarantee` VALUES ('34', '目的地指南', '所有商品均贴有入库标签和写有客户姓名的发货标签，收货时请检查此两个标签是否完整，所印信息是否正确。如发货标签上写的不......', '<p class=\"abstract\" style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; display: inline-block; font-family: &quot;Microsoft YaHei&quot;; font-size: 14px; color: rgb(102, 102, 102); line-height: 19.6px; white-space: normal; background-color: rgb(255, 255, 255);\">所有商品均贴有入库标签和写有客户姓名的发货标签，收货时请检查此两个标签是否完整，所印信息是否正确。如发货标签上写的不......</p><p><span style=\"color: rgb(120, 120, 120); font-family: Arial, 宋体, Helvetica, sans-serif, Verdana; font-size: 12px; background-color: rgb(255, 255, 255);\"></span></p><p class=\"abstract\" style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; display: inline-block; font-family: &quot;Microsoft YaHei&quot;; font-size: 14px; color: rgb(102, 102, 102); line-height: 19.6px; white-space: normal; background-color: rgb(255, 255, 255);\"><br/></p>', '1480996800', '3', null);
INSERT INTO `tp_guarantee` VALUES ('35', '目的地指南', '所有商品均贴有入库标签和写有客户姓名的发货标签，收货时请检查此两个标签是否完整，所印信息是否正确。如发货标签上写的不......', '<p class=\"abstract\" style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; display: inline-block; font-family: &quot;Microsoft YaHei&quot;; font-size: 14px; color: rgb(102, 102, 102); line-height: 19.6px; white-space: normal; background-color: rgb(255, 255, 255);\">所有商品均贴有入库标签和写有客户姓名的发货标签，收货时请检查此两个标签是否完整，所印信息是否正确。如发货标签上写的不......</p><p><span style=\"color: rgb(120, 120, 120); font-family: Arial, 宋体, Helvetica, sans-serif, Verdana; font-size: 12px; background-color: rgb(255, 255, 255);\"></span></p><p class=\"abstract\" style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; display: inline-block; font-family: &quot;Microsoft YaHei&quot;; font-size: 14px; color: rgb(102, 102, 102); line-height: 19.6px; white-space: normal; background-color: rgb(255, 255, 255);\"><br/></p>', '1480996800', '3', null);
INSERT INTO `tp_guarantee` VALUES ('36', '目的地指南', '所有商品均贴有入库标签和写有客户姓名的发货标签，收货时请检查此两个标签是否完整，所印信息是否正确。如发货标签上写的不......', '<p class=\"abstract\" style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; display: inline-block; font-family: &quot;Microsoft YaHei&quot;; font-size: 14px; color: rgb(102, 102, 102); line-height: 19.6px; white-space: normal; background-color: rgb(255, 255, 255);\">所有商品均贴有入库标签和写有客户姓名的发货标签，收货时请检查此两个标签是否完整，所印信息是否正确。如发货标签上写的不......</p><p><span style=\"color: rgb(120, 120, 120); font-family: Arial, 宋体, Helvetica, sans-serif, Verdana; font-size: 12px; background-color: rgb(255, 255, 255);\"></span></p><p class=\"abstract\" style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; display: inline-block; font-family: &quot;Microsoft YaHei&quot;; font-size: 14px; color: rgb(102, 102, 102); line-height: 19.6px; white-space: normal; background-color: rgb(255, 255, 255);\"><br/></p>', '1480996800', '3', null);
INSERT INTO `tp_guarantee` VALUES ('37', '目的地指南', '所有商品均贴有入库标签和写有客户姓名的发货标签，收货时请检查此两个标签是否完整，所印信息是否正确。如发货标签上写的不......', '<p class=\"abstract\" style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; display: inline-block; font-family: &quot;Microsoft YaHei&quot;; font-size: 14px; color: rgb(102, 102, 102); line-height: 19.6px; white-space: normal; background-color: rgb(255, 255, 255);\">所有商品均贴有入库标签和写有客户姓名的发货标签，收货时请检查此两个标签是否完整，所印信息是否正确。如发货标签上写的不......</p><p><span style=\"color: rgb(120, 120, 120); font-family: Arial, 宋体, Helvetica, sans-serif, Verdana; font-size: 12px; background-color: rgb(255, 255, 255);\"></span></p><p class=\"abstract\" style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; display: inline-block; font-family: &quot;Microsoft YaHei&quot;; font-size: 14px; color: rgb(102, 102, 102); line-height: 19.6px; white-space: normal; background-color: rgb(255, 255, 255);\"><br/></p>', '1480996800', '3', null);
INSERT INTO `tp_guarantee` VALUES ('38', '目的地指南', '所有商品均贴有入库标签和写有客户姓名的发货标签，收货时请检查此两个标签是否完整，所印信息是否正确。如发货标签上写的不......', '<p class=\"abstract\" style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; display: inline-block; font-family: &quot;Microsoft YaHei&quot;; font-size: 14px; color: rgb(102, 102, 102); line-height: 19.6px; white-space: normal; background-color: rgb(255, 255, 255);\">所有商品均贴有入库标签和写有客户姓名的发货标签，收货时请检查此两个标签是否完整，所印信息是否正确。如发货标签上写的不......</p><p><span style=\"color: rgb(120, 120, 120); font-family: Arial, 宋体, Helvetica, sans-serif, Verdana; font-size: 12px; background-color: rgb(255, 255, 255);\"></span></p><p class=\"abstract\" style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; display: inline-block; font-family: &quot;Microsoft YaHei&quot;; font-size: 14px; color: rgb(102, 102, 102); line-height: 19.6px; white-space: normal; background-color: rgb(255, 255, 255);\"><br/></p>', '1480996800', '5', null);
INSERT INTO `tp_guarantee` VALUES ('39', '目的地指南', '所有商品均贴有入库标签和写有客户姓名的发货标签，收货时请检查此两个标签是否完整，所印信息是否正确。如发货标签上写的不......', '<p class=\"abstract\" style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; display: inline-block; font-family: &quot;Microsoft YaHei&quot;; font-size: 14px; color: rgb(102, 102, 102); line-height: 19.6px; white-space: normal; background-color: rgb(255, 255, 255);\">所有商品均贴有入库标签和写有客户姓名的发货标签，收货时请检查此两个标签是否完整，所印信息是否正确。如发货标签上写的不......</p><p><span style=\"color: rgb(120, 120, 120); font-family: Arial, 宋体, Helvetica, sans-serif, Verdana; font-size: 12px; background-color: rgb(255, 255, 255);\"></span></p><p class=\"abstract\" style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; display: inline-block; font-family: &quot;Microsoft YaHei&quot;; font-size: 14px; color: rgb(102, 102, 102); line-height: 19.6px; white-space: normal; background-color: rgb(255, 255, 255);\"><br/></p>', '1480996800', '5', null);
INSERT INTO `tp_guarantee` VALUES ('40', '目的地指南', '所有商品均贴有入库标签和写有客户姓名的发货标签，收货时请检查此两个标签是否完整，所印信息是否正确。如发货标签上写的不......', '<p class=\"abstract\" style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; display: inline-block; font-family: &quot;Microsoft YaHei&quot;; font-size: 14px; color: rgb(102, 102, 102); line-height: 19.6px; white-space: normal; background-color: rgb(255, 255, 255);\">所有商品均贴有入库标签和写有客户姓名的发货标签，收货时请检查此两个标签是否完整，所印信息是否正确。如发货标签上写的不......</p><p><span style=\"color: rgb(120, 120, 120); font-family: Arial, 宋体, Helvetica, sans-serif, Verdana; font-size: 12px; background-color: rgb(255, 255, 255);\"></span></p><p class=\"abstract\" style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; display: inline-block; font-family: &quot;Microsoft YaHei&quot;; font-size: 14px; color: rgb(102, 102, 102); line-height: 19.6px; white-space: normal; background-color: rgb(255, 255, 255);\"><br/></p>', '1480996800', '5', null);
INSERT INTO `tp_guarantee` VALUES ('41', '目的地指南', '所有商品均贴有入库标签和写有客户姓名的发货标签，收货时请检查此两个标签是否完整，所印信息是否正确。如发货标签上写的不......', '<p class=\"abstract\" style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; display: inline-block; font-family: &quot;Microsoft YaHei&quot;; font-size: 14px; color: rgb(102, 102, 102); line-height: 19.6px; white-space: normal; background-color: rgb(255, 255, 255);\">所有商品均贴有入库标签和写有客户姓名的发货标签，收货时请检查此两个标签是否完整，所印信息是否正确。如发货标签上写的不......</p><p><span style=\"color: rgb(120, 120, 120); font-family: Arial, 宋体, Helvetica, sans-serif, Verdana; font-size: 12px; background-color: rgb(255, 255, 255);\"></span></p><p class=\"abstract\" style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; display: inline-block; font-family: &quot;Microsoft YaHei&quot;; font-size: 14px; color: rgb(102, 102, 102); line-height: 19.6px; white-space: normal; background-color: rgb(255, 255, 255);\"><br/></p>', '1480996800', '5', null);
INSERT INTO `tp_guarantee` VALUES ('42', '目的地指南', '所有商品均贴有入库标签和写有客户姓名的发货标签，收货时请检查此两个标签是否完整，所印信息是否正确。如发货标签上写的不......', '<p class=\"abstract\" style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; display: inline-block; font-family: &quot;Microsoft YaHei&quot;; font-size: 14px; color: rgb(102, 102, 102); line-height: 19.6px; white-space: normal; background-color: rgb(255, 255, 255);\">所有商品均贴有入库标签和写有客户姓名的发货标签，收货时请检查此两个标签是否完整，所印信息是否正确。如发货标签上写的不......</p><p><span style=\"color: rgb(120, 120, 120); font-family: Arial, 宋体, Helvetica, sans-serif, Verdana; font-size: 12px; background-color: rgb(255, 255, 255);\"></span></p><p class=\"abstract\" style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; display: inline-block; font-family: &quot;Microsoft YaHei&quot;; font-size: 14px; color: rgb(102, 102, 102); line-height: 19.6px; white-space: normal; background-color: rgb(255, 255, 255);\"><br/></p>', '1480996800', '5', null);
INSERT INTO `tp_guarantee` VALUES ('43', '目的地指南', '所有商品均贴有入库标签和写有客户姓名的发货标签，收货时请检查此两个标签是否完整，所印信息是否正确。如发货标签上写的不......', '<p class=\"abstract\" style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; display: inline-block; font-family: &quot;Microsoft YaHei&quot;; font-size: 14px; color: rgb(102, 102, 102); line-height: 19.6px; white-space: normal; background-color: rgb(255, 255, 255);\">所有商品均贴有入库标签和写有客户姓名的发货标签，收货时请检查此两个标签是否完整，所印信息是否正确。如发货标签上写的不......</p><p><span style=\"color: rgb(120, 120, 120); font-family: Arial, 宋体, Helvetica, sans-serif, Verdana; font-size: 12px; background-color: rgb(255, 255, 255);\"></span></p><p class=\"abstract\" style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; display: inline-block; font-family: &quot;Microsoft YaHei&quot;; font-size: 14px; color: rgb(102, 102, 102); line-height: 19.6px; white-space: normal; background-color: rgb(255, 255, 255);\"><br/></p>', '1480996800', '5', null);
INSERT INTO `tp_guarantee` VALUES ('44', '目的地指南', '所有商品均贴有入库标签和写有客户姓名的发货标签，收货时请检查此两个标签是否完整，所印信息是否正确。如发货标签上写的不......', '<p class=\"abstract\" style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; display: inline-block; font-family: &quot;Microsoft YaHei&quot;; font-size: 14px; color: rgb(102, 102, 102); line-height: 19.6px; white-space: normal; background-color: rgb(255, 255, 255);\">所有商品均贴有入库标签和写有客户姓名的发货标签，收货时请检查此两个标签是否完整，所印信息是否正确。如发货标签上写的不......</p><p><span style=\"color: rgb(120, 120, 120); font-family: Arial, 宋体, Helvetica, sans-serif, Verdana; font-size: 12px; background-color: rgb(255, 255, 255);\"></span></p><p class=\"abstract\" style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; display: inline-block; font-family: &quot;Microsoft YaHei&quot;; font-size: 14px; color: rgb(102, 102, 102); line-height: 19.6px; white-space: normal; background-color: rgb(255, 255, 255);\"><br/></p>', '1480996800', '5', null);
INSERT INTO `tp_guarantee` VALUES ('45', '目的地指南', '所有商品均贴有入库标签和写有客户姓名的发货标签，收货时请检查此两个标签是否完整，所印信息是否正确。如发货标签上写的不......', '<p class=\"abstract\" style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; display: inline-block; font-family: &quot;Microsoft YaHei&quot;; font-size: 14px; color: rgb(102, 102, 102); line-height: 19.6px; white-space: normal; background-color: rgb(255, 255, 255);\">所有商品均贴有入库标签和写有客户姓名的发货标签，收货时请检查此两个标签是否完整，所印信息是否正确。如发货标签上写的不......</p><p><span style=\"color: rgb(120, 120, 120); font-family: Arial, 宋体, Helvetica, sans-serif, Verdana; font-size: 12px; background-color: rgb(255, 255, 255);\"></span></p><p class=\"abstract\" style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; display: inline-block; font-family: &quot;Microsoft YaHei&quot;; font-size: 14px; color: rgb(102, 102, 102); line-height: 19.6px; white-space: normal; background-color: rgb(255, 255, 255);\"><br/></p>', '1480996800', '4', null);
INSERT INTO `tp_guarantee` VALUES ('46', '目的地指南', '所有商品均贴有入库标签和写有客户姓名的发货标签，收货时请检查此两个标签是否完整，所印信息是否正确。如发货标签上写的不......', '<p class=\"abstract\" style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; display: inline-block; font-family: &quot;Microsoft YaHei&quot;; font-size: 14px; color: rgb(102, 102, 102); line-height: 19.6px; white-space: normal; background-color: rgb(255, 255, 255);\">所有商品均贴有入库标签和写有客户姓名的发货标签，收货时请检查此两个标签是否完整，所印信息是否正确。如发货标签上写的不......</p><p><span style=\"color: rgb(120, 120, 120); font-family: Arial, 宋体, Helvetica, sans-serif, Verdana; font-size: 12px; background-color: rgb(255, 255, 255);\"></span></p><p class=\"abstract\" style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; display: inline-block; font-family: &quot;Microsoft YaHei&quot;; font-size: 14px; color: rgb(102, 102, 102); line-height: 19.6px; white-space: normal; background-color: rgb(255, 255, 255);\"><br/></p>', '1480996800', '4', null);
INSERT INTO `tp_guarantee` VALUES ('47', '目的地指南', '所有商品均贴有入库标签和写有客户姓名的发货标签，收货时请检查此两个标签是否完整，所印信息是否正确。如发货标签上写的不......', '<p class=\"abstract\" style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; display: inline-block; font-family: &quot;Microsoft YaHei&quot;; font-size: 14px; color: rgb(102, 102, 102); line-height: 19.6px; white-space: normal; background-color: rgb(255, 255, 255);\">所有商品均贴有入库标签和写有客户姓名的发货标签，收货时请检查此两个标签是否完整，所印信息是否正确。如发货标签上写的不......</p><p><span style=\"color: rgb(120, 120, 120); font-family: Arial, 宋体, Helvetica, sans-serif, Verdana; font-size: 12px; background-color: rgb(255, 255, 255);\"></span></p><p class=\"abstract\" style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; display: inline-block; font-family: &quot;Microsoft YaHei&quot;; font-size: 14px; color: rgb(102, 102, 102); line-height: 19.6px; white-space: normal; background-color: rgb(255, 255, 255);\"><br/></p>', '1480996800', '4', null);
INSERT INTO `tp_guarantee` VALUES ('48', '目的地指南', '所有商品均贴有入库标签和写有客户姓名的发货标签，收货时请检查此两个标签是否完整，所印信息是否正确。如发货标签上写的不......', '<p class=\"abstract\" style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; display: inline-block; font-family: &quot;Microsoft YaHei&quot;; font-size: 14px; color: rgb(102, 102, 102); line-height: 19.6px; white-space: normal; background-color: rgb(255, 255, 255);\">所有商品均贴有入库标签和写有客户姓名的发货标签，收货时请检查此两个标签是否完整，所印信息是否正确。如发货标签上写的不......</p><p><span style=\"color: rgb(120, 120, 120); font-family: Arial, 宋体, Helvetica, sans-serif, Verdana; font-size: 12px; background-color: rgb(255, 255, 255);\"></span></p><p class=\"abstract\" style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; display: inline-block; font-family: &quot;Microsoft YaHei&quot;; font-size: 14px; color: rgb(102, 102, 102); line-height: 19.6px; white-space: normal; background-color: rgb(255, 255, 255);\"><br/></p>', '1480996800', '4', null);
INSERT INTO `tp_guarantee` VALUES ('49', '目的地指南', '所有商品均贴有入库标签和写有客户姓名的发货标签，收货时请检查此两个标签是否完整，所印信息是否正确。如发货标签上写的不......', '<p class=\"abstract\" style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; display: inline-block; font-family: &quot;Microsoft YaHei&quot;; font-size: 14px; color: rgb(102, 102, 102); line-height: 19.6px; white-space: normal; background-color: rgb(255, 255, 255);\">所有商品均贴有入库标签和写有客户姓名的发货标签，收货时请检查此两个标签是否完整，所印信息是否正确。如发货标签上写的不......</p><p><span style=\"color: rgb(120, 120, 120); font-family: Arial, 宋体, Helvetica, sans-serif, Verdana; font-size: 12px; background-color: rgb(255, 255, 255);\"></span></p><p class=\"abstract\" style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; display: inline-block; font-family: &quot;Microsoft YaHei&quot;; font-size: 14px; color: rgb(102, 102, 102); line-height: 19.6px; white-space: normal; background-color: rgb(255, 255, 255);\"><br/></p>', '1480996800', '4', null);
INSERT INTO `tp_guarantee` VALUES ('50', '目的地指南', '所有商品均贴有入库标签和写有客户姓名的发货标签，收货时请检查此两个标签是否完整，所印信息是否正确。如发货标签上写的不......', '<p class=\"abstract\" style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; display: inline-block; font-family: &quot;Microsoft YaHei&quot;; font-size: 14px; color: rgb(102, 102, 102); line-height: 19.6px; white-space: normal; background-color: rgb(255, 255, 255);\">所有商品均贴有入库标签和写有客户姓名的发货标签，收货时请检查此两个标签是否完整，所印信息是否正确。如发货标签上写的不......</p><p><span style=\"color: rgb(120, 120, 120); font-family: Arial, 宋体, Helvetica, sans-serif, Verdana; font-size: 12px; background-color: rgb(255, 255, 255);\"></span></p><p class=\"abstract\" style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; display: inline-block; font-family: &quot;Microsoft YaHei&quot;; font-size: 14px; color: rgb(102, 102, 102); line-height: 19.6px; white-space: normal; background-color: rgb(255, 255, 255);\"><br/></p>', '1480996800', '4', null);
INSERT INTO `tp_guarantee` VALUES ('51', '目的地指南', '所有商品均贴有入库标签和写有客户姓名的发货标签，收货时请检查此两个标签是否完整，所印信息是否正确。如发货标签上写的不......', '<p class=\"abstract\" style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; display: inline-block; font-family: &quot;Microsoft YaHei&quot;; font-size: 14px; color: rgb(102, 102, 102); line-height: 19.6px; white-space: normal; background-color: rgb(255, 255, 255);\">所有商品均贴有入库标签和写有客户姓名的发货标签，收货时请检查此两个标签是否完整，所印信息是否正确。如发货标签上写的不......</p><p><span style=\"color: rgb(120, 120, 120); font-family: Arial, 宋体, Helvetica, sans-serif, Verdana; font-size: 12px; background-color: rgb(255, 255, 255);\"></span></p><p class=\"abstract\" style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; display: inline-block; font-family: &quot;Microsoft YaHei&quot;; font-size: 14px; color: rgb(102, 102, 102); line-height: 19.6px; white-space: normal; background-color: rgb(255, 255, 255);\"><br/></p>', '1480996800', '4', null);
INSERT INTO `tp_guarantee` VALUES ('52', '目的地指南', '所有商品均贴有入库标签和写有客户姓名的发货标签，收货时请检查此两个标签是否完整，所印信息是否正确。如发货标签上写的不......', '<p class=\"abstract\" style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; display: inline-block; font-family: &quot;Microsoft YaHei&quot;; font-size: 14px; color: rgb(102, 102, 102); line-height: 19.6px; white-space: normal; background-color: rgb(255, 255, 255);\">所有商品均贴有入库标签和写有客户姓名的发货标签，收货时请检查此两个标签是否完整，所印信息是否正确。如发货标签上写的不......</p><p><span style=\"color: rgb(120, 120, 120); font-family: Arial, 宋体, Helvetica, sans-serif, Verdana; font-size: 12px; background-color: rgb(255, 255, 255);\"></span></p><p class=\"abstract\" style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; display: inline-block; font-family: &quot;Microsoft YaHei&quot;; font-size: 14px; color: rgb(102, 102, 102); line-height: 19.6px; white-space: normal; background-color: rgb(255, 255, 255);\"><br/></p>', '1480996800', '3', null);
INSERT INTO `tp_guarantee` VALUES ('53', '目的地指南', '所有商品均贴有入库标签和写有客户姓名的发货标签，收货时请检查此两个标签是否完整，所印信息是否正确。如发货标签上写的不......', '<p class=\"abstract\" style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; display: inline-block; font-family: &quot;Microsoft YaHei&quot;; font-size: 14px; color: rgb(102, 102, 102); line-height: 19.6px; white-space: normal; background-color: rgb(255, 255, 255);\">所有商品均贴有入库标签和写有客户姓名的发货标签，收货时请检查此两个标签是否完整，所印信息是否正确。如发货标签上写的不......</p><p><span style=\"color: rgb(120, 120, 120); font-family: Arial, 宋体, Helvetica, sans-serif, Verdana; font-size: 12px; background-color: rgb(255, 255, 255);\"></span></p><p class=\"abstract\" style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; display: inline-block; font-family: &quot;Microsoft YaHei&quot;; font-size: 14px; color: rgb(102, 102, 102); line-height: 19.6px; white-space: normal; background-color: rgb(255, 255, 255);\"><br/></p>', '1480996800', '3', null);
INSERT INTO `tp_guarantee` VALUES ('54', '目的地指南', '所有商品均贴有入库标签和写有客户姓名的发货标签，收货时请检查此两个标签是否完整，所印信息是否正确。如发货标签上写的不......', '<p class=\"abstract\" style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; display: inline-block; font-family: &quot;Microsoft YaHei&quot;; font-size: 14px; color: rgb(102, 102, 102); line-height: 19.6px; white-space: normal; background-color: rgb(255, 255, 255);\">所有商品均贴有入库标签和写有客户姓名的发货标签，收货时请检查此两个标签是否完整，所印信息是否正确。如发货标签上写的不......</p><p><span style=\"color: rgb(120, 120, 120); font-family: Arial, 宋体, Helvetica, sans-serif, Verdana; font-size: 12px; background-color: rgb(255, 255, 255);\"></span></p><p class=\"abstract\" style=\"margin-top: 0px; margin-bottom: 0px; padding: 0px; display: inline-block; font-family: &quot;Microsoft YaHei&quot;; font-size: 14px; color: rgb(102, 102, 102); line-height: 19.6px; white-space: normal; background-color: rgb(255, 255, 255);\"><br/></p>', '1480996800', '3', null);

-- ----------------------------
-- Table structure for tp_guarantee_class
-- ----------------------------
DROP TABLE IF EXISTS `tp_guarantee_class`;
CREATE TABLE `tp_guarantee_class` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tp_guarantee_class
-- ----------------------------
INSERT INTO `tp_guarantee_class` VALUES ('3', '客户服务');
INSERT INTO `tp_guarantee_class` VALUES ('4', '预订须知');
INSERT INTO `tp_guarantee_class` VALUES ('5', '新手指南');

-- ----------------------------
-- Table structure for tp_home_content
-- ----------------------------
DROP TABLE IF EXISTS `tp_home_content`;
CREATE TABLE `tp_home_content` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title_one` varchar(32) NOT NULL DEFAULT '',
  `title_two` varchar(32) NOT NULL DEFAULT '',
  `content` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tp_home_content
-- ----------------------------
INSERT INTO `tp_home_content` VALUES ('1', '', '', '<p><span style=\"margin: 0px; padding: 0px; line-height: 22.4px; font-size: 16px; font-family: 微软雅黑;\"><span style=\"margin: 0px; padding: 0px; line-height: 21px; color: rgb(129, 197, 55); letter-spacing: 2px; font-size: 15px;\">旅游景点</span>&nbsp;<span style=\"margin: 0px; padding: 0px; line-height: 21px; color: rgb(35, 98, 124); letter-spacing: 2px; font-size: 15px;\">遍布世界各地，总有一款适合你。</span></span></p><p><span style=\"color:#23627c;font-family:微软雅黑\"><span style=\"margin: 0px; padding: 0px; line-height: 22.4px; font-size: 15px; letter-spacing: 2px;\">为您安排好行程中的一切，给你不一样的体验。</span></span></p><p><span style=\"color:#23627c;font-family:微软雅黑\"><span style=\"margin: 0px; padding: 0px; line-height: 22.4px; font-size: 15px; letter-spacing: 2px;\">梦幻之旅从“心”出发。</span></span></p><p><br/></p>');
INSERT INTO `tp_home_content` VALUES ('2', '', '', null);

-- ----------------------------
-- Table structure for tp_home_content_five
-- ----------------------------
DROP TABLE IF EXISTS `tp_home_content_five`;
CREATE TABLE `tp_home_content_five` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(32) DEFAULT NULL,
  `title_2` varchar(32) DEFAULT NULL,
  `content_1` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tp_home_content_five
-- ----------------------------
INSERT INTO `tp_home_content_five` VALUES ('1', '独家', '酒店', '梦幻之游搭配豪华酒店，在这里你可以吃的开心、玩得尽兴、住的舒心。我们为您准备了舒适干净的客房服务、洗浴娱乐，你想要的一应俱全。');

-- ----------------------------
-- Table structure for tp_home_content_four
-- ----------------------------
DROP TABLE IF EXISTS `tp_home_content_four`;
CREATE TABLE `tp_home_content_four` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(32) DEFAULT NULL,
  `content_1` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tp_home_content_four
-- ----------------------------
INSERT INTO `tp_home_content_four` VALUES ('1', '期待和你来一场', '生旅途中，大家都在忙着认识各种人，以为这是在丰富生命。可最有价值的遇见，是在某一瞬间，重遇了自己，那一刻你才会懂：走遍世界，也不过是为了找到一条走回内心的路。');

-- ----------------------------
-- Table structure for tp_home_content_left
-- ----------------------------
DROP TABLE IF EXISTS `tp_home_content_left`;
CREATE TABLE `tp_home_content_left` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(32) DEFAULT NULL,
  `content_1` varchar(255) DEFAULT NULL,
  `content_2` varchar(255) DEFAULT NULL,
  `content_3` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tp_home_content_left
-- ----------------------------
INSERT INTO `tp_home_content_left` VALUES ('1', '旅游景点', '遍布世界各地，总有一款适合你。', '为您安排好行程中的一切，给你不一样的体验。', '梦幻之旅从“1心”出发。');

-- ----------------------------
-- Table structure for tp_home_content_right
-- ----------------------------
DROP TABLE IF EXISTS `tp_home_content_right`;
CREATE TABLE `tp_home_content_right` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(32) DEFAULT NULL,
  `content_1` varchar(255) DEFAULT NULL,
  `content_2` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tp_home_content_right
-- ----------------------------
INSERT INTO `tp_home_content_right` VALUES ('1', '旅 行', '需要的创意', '一场无与伦比的梦幻之旅，一段记忆深刻的瞬间。.');

-- ----------------------------
-- Table structure for tp_home_content_seven
-- ----------------------------
DROP TABLE IF EXISTS `tp_home_content_seven`;
CREATE TABLE `tp_home_content_seven` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(32) DEFAULT NULL,
  `title_2` varchar(32) DEFAULT NULL,
  `content_1` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tp_home_content_seven
-- ----------------------------
INSERT INTO `tp_home_content_seven` VALUES ('1', '咨询', '旅游', '各国最新旅游出行资讯，尽在掌握之中，向您展示最新最全的动态资讯。');

-- ----------------------------
-- Table structure for tp_home_content_six
-- ----------------------------
DROP TABLE IF EXISTS `tp_home_content_six`;
CREATE TABLE `tp_home_content_six` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(32) DEFAULT NULL,
  `title_2` varchar(32) DEFAULT NULL,
  `content_1` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tp_home_content_six
-- ----------------------------
INSERT INTO `tp_home_content_six` VALUES ('1', '行者', 'dafa', '放眼世界精彩&amp;享受异国情怀，这里留有众多行者的旅行感悟。');

-- ----------------------------
-- Table structure for tp_home_content_three
-- ----------------------------
DROP TABLE IF EXISTS `tp_home_content_three`;
CREATE TABLE `tp_home_content_three` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(32) DEFAULT NULL,
  `title_2` varchar(32) DEFAULT NULL,
  `content_1` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tp_home_content_three
-- ----------------------------
INSERT INTO `tp_home_content_three` VALUES ('1', '出行', '路线', '随着人们生活水1平的提高，对外界的渴望越来越强烈，最有效释放这种情感的方式就是旅游。旅游不仅能让人开阔眼界，释放心中压抑许久的情绪，同时愉悦身心，是现代人不可缺少的生活方式之一。');

-- ----------------------------
-- Table structure for tp_home_content_two_left
-- ----------------------------
DROP TABLE IF EXISTS `tp_home_content_two_left`;
CREATE TABLE `tp_home_content_two_left` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content_1` varchar(255) DEFAULT NULL,
  `content_2` varchar(255) DEFAULT NULL,
  `content_3` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tp_home_content_two_left
-- ----------------------------
INSERT INTO `tp_home_content_two_left` VALUES ('1', '诚实守信：讲诚信、讲信誉、得客户心、得市场、得效益。', '争创一流： 激励自己，挑战现实创一流企业。1', '真诚服务 ：以市场为导向，想客户之所想，急客户之所急1。');

-- ----------------------------
-- Table structure for tp_home_content_two_right
-- ----------------------------
DROP TABLE IF EXISTS `tp_home_content_two_right`;
CREATE TABLE `tp_home_content_two_right` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(32) DEFAULT NULL,
  `content_1` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tp_home_content_two_right
-- ----------------------------
INSERT INTO `tp_home_content_two_right` VALUES ('1', '我们的服务', '尊重客户，理解客户，持续提供超越客户期望的产品与服务，做客户 们永远的伙伴。这是我们一直坚持和倡导的服务理念。');

-- ----------------------------
-- Table structure for tp_hotel
-- ----------------------------
DROP TABLE IF EXISTS `tp_hotel`;
CREATE TABLE `tp_hotel` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(32) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `content` text,
  `pid` int(11) DEFAULT NULL,
  `status` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tp_hotel
-- ----------------------------
INSERT INTO `tp_hotel` VALUES ('2', '黑尔玛卡来别墅', '20170214171714_9908d3e8823e05b58a2cb1aa32ab0.jpg', '&lt;p&gt;asdfasdfadsfasdfasdfasdfaaaaxiangcundefenlgimimannidexiang fengwenguodekouhongyugaimizhang achuguniang a a a &amp;nbsp;a a a &amp;nbsp;a a a a a a a a shijiandeleiyansiquwoweizhuang nikejidewonianshaode moyang jinyenihuibuhuizaiyuanfang rangouhuoweiwoshouwang wenroudewanfenga aqingnidaizouwodechouchangba bierangwozhuisuibukeyiqidepanghuang achuguniang &amp;nbsp;a a a cishicikenishenzaihefang nikejidewonianshaodemoyang jinyenihuibuhuizaiyuanfang rangouhuoweiwo shouwangjinyenihuibuhuizaiyuanfangweiwoshouwang&lt;/p&gt;', '2', '1');
INSERT INTO `tp_hotel` VALUES ('3', '黑尔玛卡来别墅', '20170214171714_9908d3e8823e05b58a2cb1aa32ab0.jpg', '&lt;p&gt;asdfasdfadsfasdfasdfasdfaaaaxiangcundefenlgimimannidexiang fengwenguodekouhongyugaimizhang achuguniang a a a &amp;nbsp;a a a &amp;nbsp;a a a a a a a a shijiandeleiyansiquwoweizhuang nikejidewonianshaode moyang jinyenihuibuhuizaiyuanfang rangouhuoweiwoshouwang wenroudewanfenga aqingnidaizouwodechouchangba bierangwozhuisuibukeyiqidepanghuang achuguniang &amp;nbsp;a a a cishicikenishenzaihefang nikejidewonianshaodemoyang jinyenihuibuhuizaiyuanfang rangouhuoweiwo shouwangjinyenihuibuhuizaiyuanfangweiwoshouwang&lt;/p&gt;', '3', '1');
INSERT INTO `tp_hotel` VALUES ('4', '黑尔玛卡来别墅', '20170214171714_9908d3e8823e05b58a2cb1aa32ab0.jpg', '&lt;p&gt;asdfasdfadsfasdfasdfasdfaaaaxiangcundefenlgimimannidexiang fengwenguodekouhongyugaimizhang achuguniang a a a &amp;nbsp;a a a &amp;nbsp;a a a a a a a a shijiandeleiyansiquwoweizhuang nikejidewonianshaode moyang jinyenihuibuhuizaiyuanfang rangouhuoweiwoshouwang wenroudewanfenga aqingnidaizouwodechouchangba bierangwozhuisuibukeyiqidepanghuang achuguniang &amp;nbsp;a a a cishicikenishenzaihefang nikejidewonianshaodemoyang jinyenihuibuhuizaiyuanfang rangouhuoweiwo shouwangjinyenihuibuhuizaiyuanfangweiwoshouwang&lt;/p&gt;', '4', '1');
INSERT INTO `tp_hotel` VALUES ('5', '黑尔玛卡来别墅', '20170214171714_9908d3e8823e05b58a2cb1aa32ab0.jpg', '&lt;p&gt;asdfasdfadsfasdfasdfasdfaaaaxiangcundefenlgimimannidexiang fengwenguodekouhongyugaimizhang achuguniang a a a &amp;nbsp;a a a &amp;nbsp;a a a a a a a a shijiandeleiyansiquwoweizhuang nikejidewonianshaode moyang jinyenihuibuhuizaiyuanfang rangouhuoweiwoshouwang wenroudewanfenga aqingnidaizouwodechouchangba bierangwozhuisuibukeyiqidepanghuang achuguniang &amp;nbsp;a a a cishicikenishenzaihefang nikejidewonianshaodemoyang jinyenihuibuhuizaiyuanfang rangouhuoweiwo shouwangjinyenihuibuhuizaiyuanfangweiwoshouwang&lt;/p&gt;', '1', '1');
INSERT INTO `tp_hotel` VALUES ('6', '黑尔玛卡来别墅', '20170214171714_9908d3e8823e05b58a2cb1aa32ab0.jpg', '&lt;p&gt;asdfasdfadsfasdfasdfasdfaaaaxiangcundefenlgimimannidexiang fengwenguodekouhongyugaimizhang achuguniang a a a &amp;nbsp;a a a &amp;nbsp;a a a a a a a a shijiandeleiyansiquwoweizhuang nikejidewonianshaode moyang jinyenihuibuhuizaiyuanfang rangouhuoweiwoshouwang wenroudewanfenga aqingnidaizouwodechouchangba bierangwozhuisuibukeyiqidepanghuang achuguniang &amp;nbsp;a a a cishicikenishenzaihefang nikejidewonianshaodemoyang jinyenihuibuhuizaiyuanfang rangouhuoweiwo shouwangjinyenihuibuhuizaiyuanfangweiwoshouwang&lt;/p&gt;', '2', '0');
INSERT INTO `tp_hotel` VALUES ('7', '黑尔玛卡来别墅', '20170214171714_9908d3e8823e05b58a2cb1aa32ab0.jpg', '&lt;p&gt;asdfasdfadsfasdfasdfasdfaaaaxiangcundefenlgimimannidexiang fengwenguodekouhongyugaimizhang achuguniang a a a &amp;nbsp;a a a &amp;nbsp;a a a a a a a a shijiandeleiyansiquwoweizhuang nikejidewonianshaode moyang jinyenihuibuhuizaiyuanfang rangouhuoweiwoshouwang wenroudewanfenga aqingnidaizouwodechouchangba bierangwozhuisuibukeyiqidepanghuang achuguniang &amp;nbsp;a a a cishicikenishenzaihefang nikejidewonianshaodemoyang jinyenihuibuhuizaiyuanfang rangouhuoweiwo shouwangjinyenihuibuhuizaiyuanfangweiwoshouwang&lt;/p&gt;', '3', '0');
INSERT INTO `tp_hotel` VALUES ('8', '黑尔玛卡来别墅', '20170214171714_9908d3e8823e05b58a2cb1aa32ab0.jpg', '&lt;p&gt;asdfasdfadsfasdfasdfasdfaaaaxiangcundefenlgimimannidexiang fengwenguodekouhongyugaimizhang achuguniang a a a &amp;nbsp;a a a &amp;nbsp;a a a a a a a a shijiandeleiyansiquwoweizhuang nikejidewonianshaode moyang jinyenihuibuhuizaiyuanfang rangouhuoweiwoshouwang wenroudewanfenga aqingnidaizouwodechouchangba bierangwozhuisuibukeyiqidepanghuang achuguniang &amp;nbsp;a a a cishicikenishenzaihefang nikejidewonianshaodemoyang jinyenihuibuhuizaiyuanfang rangouhuoweiwo shouwangjinyenihuibuhuizaiyuanfangweiwoshouwang&lt;/p&gt;', '4', '0');
INSERT INTO `tp_hotel` VALUES ('9', '黑尔玛卡来别墅', '20170214171714_9908d3e8823e05b58a2cb1aa32ab0.jpg', '&lt;p&gt;asdfasdfadsfasdfasdfasdfaaaaxiangcundefenlgimimannidexiang fengwenguodekouhongyugaimizhang achuguniang a a a &amp;nbsp;a a a &amp;nbsp;a a a a a a a a shijiandeleiyansiquwoweizhuang nikejidewonianshaode moyang jinyenihuibuhuizaiyuanfang rangouhuoweiwoshouwang wenroudewanfenga aqingnidaizouwodechouchangba bierangwozhuisuibukeyiqidepanghuang achuguniang &amp;nbsp;a a a cishicikenishenzaihefang nikejidewonianshaodemoyang jinyenihuibuhuizaiyuanfang rangouhuoweiwo shouwangjinyenihuibuhuizaiyuanfangweiwoshouwang&lt;/p&gt;', '1', '0');
INSERT INTO `tp_hotel` VALUES ('10', '黑尔玛卡来别墅', '20170214171714_9908d3e8823e05b58a2cb1aa32ab0.jpg', '&lt;p&gt;asdfasdfadsfasdfasdfasdfaaaaxiangcundefenlgimimannidexiang fengwenguodekouhongyugaimizhang achuguniang a a a &amp;nbsp;a a a &amp;nbsp;a a a a a a a a shijiandeleiyansiquwoweizhuang nikejidewonianshaode moyang jinyenihuibuhuizaiyuanfang rangouhuoweiwoshouwang wenroudewanfenga aqingnidaizouwodechouchangba bierangwozhuisuibukeyiqidepanghuang achuguniang &amp;nbsp;a a a cishicikenishenzaihefang nikejidewonianshaodemoyang jinyenihuibuhuizaiyuanfang rangouhuoweiwo shouwangjinyenihuibuhuizaiyuanfangweiwoshouwang&lt;/p&gt;', '2', '0');
INSERT INTO `tp_hotel` VALUES ('11', '黑尔玛卡来别墅', '20170214171714_9908d3e8823e05b58a2cb1aa32ab0.jpg', '&lt;p&gt;asdfasdfadsfasdfasdfasdfaaaaxiangcundefenlgimimannidexiang fengwenguodekouhongyugaimizhang achuguniang a a a &amp;nbsp;a a a &amp;nbsp;a a a a a a a a shijiandeleiyansiquwoweizhuang nikejidewonianshaode moyang jinyenihuibuhuizaiyuanfang rangouhuoweiwoshouwang wenroudewanfenga aqingnidaizouwodechouchangba bierangwozhuisuibukeyiqidepanghuang achuguniang &amp;nbsp;a a a cishicikenishenzaihefang nikejidewonianshaodemoyang jinyenihuibuhuizaiyuanfang rangouhuoweiwo shouwangjinyenihuibuhuizaiyuanfangweiwoshouwang&lt;/p&gt;', '3', '0');
INSERT INTO `tp_hotel` VALUES ('12', '黑尔玛卡来别墅', '20170214171714_9908d3e8823e05b58a2cb1aa32ab0.jpg', '&lt;p&gt;asdfasdfadsfasdfasdfasdfaaaaxiangcundefenlgimimannidexiang fengwenguodekouhongyugaimizhang achuguniang a a a &amp;nbsp;a a a &amp;nbsp;a a a a a a a a shijiandeleiyansiquwoweizhuang nikejidewonianshaode moyang jinyenihuibuhuizaiyuanfang rangouhuoweiwoshouwang wenroudewanfenga aqingnidaizouwodechouchangba bierangwozhuisuibukeyiqidepanghuang achuguniang &amp;nbsp;a a a cishicikenishenzaihefang nikejidewonianshaodemoyang jinyenihuibuhuizaiyuanfang rangouhuoweiwo shouwangjinyenihuibuhuizaiyuanfangweiwoshouwang&lt;/p&gt;', '4', '0');

-- ----------------------------
-- Table structure for tp_news
-- ----------------------------
DROP TABLE IF EXISTS `tp_news`;
CREATE TABLE `tp_news` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `intro` varchar(255) DEFAULT NULL,
  `content` text,
  `time` int(11) DEFAULT NULL,
  `pid` int(11) DEFAULT NULL,
  `status` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tp_news
-- ----------------------------
INSERT INTO `tp_news` VALUES ('1', 'adfad', 'adfa', '<p>adfadfasdf</p>', '1486612860', '3', '0');
INSERT INTO `tp_news` VALUES ('2', 'adfad', 'adfa', '<p>adfadfasdf</p>', '1486612860', '3', '0');
INSERT INTO `tp_news` VALUES ('3', 'adfad', 'adfa', '<p>adfadfasdf</p>', '1486612860', '3', '0');
INSERT INTO `tp_news` VALUES ('4', 'adfad', 'adfa', '<p>adfadfasdf</p>', '1486612860', '3', '0');
INSERT INTO `tp_news` VALUES ('5', 'adfad', 'adfa', '<p>adfadfasdf</p>', '1486612860', '3', '0');
INSERT INTO `tp_news` VALUES ('6', 'adfad', 'adfa', '<p>adfadfasdf</p>', '1486612860', '3', '0');
INSERT INTO `tp_news` VALUES ('7', 'adfad', 'adfa', '<p>adfadfasdf</p>', '1486612860', '4', '0');
INSERT INTO `tp_news` VALUES ('8', 'adfad', 'adfa', '<p>adfadfasdf</p>', '1486612860', '4', '0');
INSERT INTO `tp_news` VALUES ('9', 'adfad', 'adfa', '<p>adfadfasdf</p>', '1486612860', '4', '0');
INSERT INTO `tp_news` VALUES ('10', 'adfad', 'adfa', '<p>adfadfasdf</p>', '1486612860', '4', '0');
INSERT INTO `tp_news` VALUES ('11', 'adfad', 'adfa', '<p>adfadfasdf</p>', '1486612860', '4', '0');
INSERT INTO `tp_news` VALUES ('12', 'adfad', 'adfa', '<p>adfadfasdf</p>', '1486612860', '4', '0');
INSERT INTO `tp_news` VALUES ('13', 'adfad', 'adfa', '<p>adfadfasdf</p>', '1486612860', '2', '0');
INSERT INTO `tp_news` VALUES ('14', 'adfad', 'adfa', '<p>adfadfasdf</p>', '1486612860', '2', '0');
INSERT INTO `tp_news` VALUES ('15', 'adfad', 'adfa', '<p>adfadfasdf</p>', '1486612860', '2', '0');
INSERT INTO `tp_news` VALUES ('16', 'adfad', 'adfa', '<p>adfadfasdf</p>', '1486612860', '2', '0');
INSERT INTO `tp_news` VALUES ('17', 'adfad', 'adfa', '<p>adfadfasdf</p>', '1486612860', '2', '0');
INSERT INTO `tp_news` VALUES ('18', 'adfad', 'adfa', '<p>adfadfasdf</p>', '1486612860', '2', '0');
INSERT INTO `tp_news` VALUES ('19', 'adfad', 'adfa', '<p>adfadfasdf</p>', '1486612860', '1', '0');
INSERT INTO `tp_news` VALUES ('20', 'adfad', 'adfa', '<p>adfadfasdf</p>', '1486612860', '1', '0');
INSERT INTO `tp_news` VALUES ('21', 'adfad', 'adfa', '<p>adfadfasdf</p>', '1486612860', '1', '0');
INSERT INTO `tp_news` VALUES ('22', 'adfad', 'adfa', '<p>adfadfasdf</p>', '1486612860', '1', '0');
INSERT INTO `tp_news` VALUES ('23', 'adfad', 'adfa', '<p>adfadfasdf</p>', '1486612860', '1', '0');
INSERT INTO `tp_news` VALUES ('24', 'adfad', 'adfa', '<p>adfadfasdf</p>', '1486612860', '1', '0');
INSERT INTO `tp_news` VALUES ('25', 'adfad', 'adfa', '<p>adfadfasdf</p>', '1486612860', '3', '0');
INSERT INTO `tp_news` VALUES ('26', 'adfad', 'adfa', '<p>adfadfasdf</p>', '1486612860', '3', '0');
INSERT INTO `tp_news` VALUES ('27', 'adfad', 'adfa', '<p>adfadfasdf</p>', '1486612860', '3', '0');
INSERT INTO `tp_news` VALUES ('28', 'adfad', 'adfa', '<p>adfadfasdf</p>', '1486612860', '3', '0');
INSERT INTO `tp_news` VALUES ('29', 'adfad', 'adfa', '<p>adfadfasdf</p>', '1486612860', '3', '0');
INSERT INTO `tp_news` VALUES ('30', 'adfad', 'adfa', '<p>adfadfasdf</p>', '1486612860', '3', '0');

-- ----------------------------
-- Table structure for tp_news_class
-- ----------------------------
DROP TABLE IF EXISTS `tp_news_class`;
CREATE TABLE `tp_news_class` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tp_news_class
-- ----------------------------
INSERT INTO `tp_news_class` VALUES ('1', '公司新闻');
INSERT INTO `tp_news_class` VALUES ('2', '行业动态');
INSERT INTO `tp_news_class` VALUES ('3', '旅游咨询');
INSERT INTO `tp_news_class` VALUES ('4', '出行百科');
INSERT INTO `tp_news_class` VALUES ('5', '行者大话');

-- ----------------------------
-- Table structure for tp_product
-- ----------------------------
DROP TABLE IF EXISTS `tp_product`;
CREATE TABLE `tp_product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(32) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `content` text,
  `hot` tinyint(1) DEFAULT NULL,
  `best` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tp_product
-- ----------------------------

-- ----------------------------
-- Table structure for tp_route
-- ----------------------------
DROP TABLE IF EXISTS `tp_route`;
CREATE TABLE `tp_route` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(32) NOT NULL DEFAULT '',
  `image` varchar(255) DEFAULT NULL,
  `content` text,
  `pid` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tp_route
-- ----------------------------
INSERT INTO `tp_route` VALUES ('1', '法国古堡之旅', '20170215094530_5e23c51c483f66058a3b2ba6af6e0.jpg', '<p>法国古堡之旅</p>', '1');
INSERT INTO `tp_route` VALUES ('2', '法国古堡之旅', '20170215094530_5e23c51c483f66058a3b2ba6af6e0.jpg', '<p>法国古堡之旅</p>', '1');
INSERT INTO `tp_route` VALUES ('3', '法国古堡之旅', '20170215094530_5e23c51c483f66058a3b2ba6af6e0.jpg', '<p>法国古堡之旅</p>', '1');
INSERT INTO `tp_route` VALUES ('4', '法国古堡之旅', '20170215094530_5e23c51c483f66058a3b2ba6af6e0.jpg', '<p>法国古堡之旅</p>', '2');
INSERT INTO `tp_route` VALUES ('5', '法国古堡之旅', '20170215094530_5e23c51c483f66058a3b2ba6af6e0.jpg', '<p>法国古堡之旅</p>', '2');
INSERT INTO `tp_route` VALUES ('6', '法国古堡之旅', '20170215094530_5e23c51c483f66058a3b2ba6af6e0.jpg', '<p>法国古堡之旅</p>', '2');
INSERT INTO `tp_route` VALUES ('7', '法国古堡之旅', '20170215094530_5e23c51c483f66058a3b2ba6af6e0.jpg', '<p>法国古堡之旅</p>', '1');
INSERT INTO `tp_route` VALUES ('8', '法国古堡之旅', '20170215094530_5e23c51c483f66058a3b2ba6af6e0.jpg', '<p>法国古堡之旅</p>', '1');
INSERT INTO `tp_route` VALUES ('9', '法国古堡之旅', '20170215094530_5e23c51c483f66058a3b2ba6af6e0.jpg', '<p>法国古堡之旅</p>', '1');
INSERT INTO `tp_route` VALUES ('10', '法国古堡之旅', '20170215094530_5e23c51c483f66058a3b2ba6af6e0.jpg', '<p>法国古堡之旅</p>', '3');
INSERT INTO `tp_route` VALUES ('11', '法国古堡之旅', '20170215094530_5e23c51c483f66058a3b2ba6af6e0.jpg', '<p>法国古堡之旅</p>', '3');
INSERT INTO `tp_route` VALUES ('12', '法国古堡之旅', '20170215094530_5e23c51c483f66058a3b2ba6af6e0.jpg', '<p>法国古堡之旅</p>', '3');
INSERT INTO `tp_route` VALUES ('13', '法国古堡之旅', '20170215094530_5e23c51c483f66058a3b2ba6af6e0.jpg', '<p>法国古堡之旅</p>', '3');
INSERT INTO `tp_route` VALUES ('14', '法国古堡之旅', '20170215094530_5e23c51c483f66058a3b2ba6af6e0.jpg', '<p>法国古堡之旅</p>', '3');
INSERT INTO `tp_route` VALUES ('15', '法国古堡之旅', '20170215094530_5e23c51c483f66058a3b2ba6af6e0.jpg', '<p>法国古堡之旅</p>', '3');
INSERT INTO `tp_route` VALUES ('16', '法国古堡之旅', '20170215094530_5e23c51c483f66058a3b2ba6af6e0.jpg', '<p>法国古堡之旅</p>', '2');
INSERT INTO `tp_route` VALUES ('17', '法国古堡之旅', '20170215094530_5e23c51c483f66058a3b2ba6af6e0.jpg', '<p>法国古堡之旅</p>', '2');
INSERT INTO `tp_route` VALUES ('18', '法国古堡之旅', '20170215094530_5e23c51c483f66058a3b2ba6af6e0.jpg', '<p>法国古堡之旅</p>', '2');
INSERT INTO `tp_route` VALUES ('19', '法国古堡之旅', '20170215094530_5e23c51c483f66058a3b2ba6af6e0.jpg', '<p>法国古堡之旅</p>', '1');
INSERT INTO `tp_route` VALUES ('20', '法国古堡之旅', '20170215094530_5e23c51c483f66058a3b2ba6af6e0.jpg', '<p>法国古堡之旅</p>', '4');
INSERT INTO `tp_route` VALUES ('21', '法国古堡之旅', '20170215094530_5e23c51c483f66058a3b2ba6af6e0.jpg', '<p>法国古堡之旅</p>', '4');
INSERT INTO `tp_route` VALUES ('22', '法国古堡之旅', '20170215094530_5e23c51c483f66058a3b2ba6af6e0.jpg', '<p>法国古堡之旅</p>', '4');
INSERT INTO `tp_route` VALUES ('23', '法国古堡之旅', '20170215094530_5e23c51c483f66058a3b2ba6af6e0.jpg', '<p>法国古堡之旅</p>', '4');
INSERT INTO `tp_route` VALUES ('24', '法国古堡之旅', '20170215094530_5e23c51c483f66058a3b2ba6af6e0.jpg', '<p>法国古堡之旅</p>', '4');
