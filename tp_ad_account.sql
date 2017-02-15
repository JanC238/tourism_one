/*
Navicat MySQL Data Transfer

Source Server         : 127.0.0.1
Source Server Version : 50711
Source Host           : 127.0.0.1:3306
Source Database       : electric

Target Server Type    : MYSQL
Target Server Version : 50711
File Encoding         : 65001

Date: 2017-01-10 15:34:04
*/

SET FOREIGN_KEY_CHECKS=0;

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
-- Table structure for tp_ad_match
-- ----------------------------
DROP TABLE IF EXISTS `tp_ad_match`;
CREATE TABLE `tp_ad_match` (
  `roleid` int(10) NOT NULL COMMENT '??ɫid',
  `leftid` int(10) NOT NULL COMMENT '??Ŀid',
  `jsons` varchar(255) DEFAULT NULL COMMENT '??ɾ?Ĳ???'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
) ENGINE=InnoDB AUTO_INCREMENT=70 DEFAULT CHARSET=utf8;

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
