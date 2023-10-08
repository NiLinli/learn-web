-- mall.mall_user definition

CREATE TABLE `mall_user` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `username` varchar(32) NOT NULL DEFAULT '' COMMENT '用户名',
  `password` varchar(50) NOT NULL COMMENT '用户密码，MD5加密',
  `personalized_signature` varchar(50) NOT NULL DEFAULT '' COMMENT '个性签名',
  `role` int NOT NULL DEFAULT '1' COMMENT '角色，1-普通用户，2-管理员',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='用户表 ';

INSERT INTO mall_user.mall_user (username,password,personalized_signature,`role`,create_time,update_time) VALUES
	 ('1','1','666',1,'2019-12-16 02:37:33','2020-02-29 14:33:23'),
	 ('xiaomu','AWRuqaxc6iryhHuA4OnFag==','更新了我的签名',2,'2019-12-17 15:11:32','2020-02-10 09:52:12'),
	 ('xiaomu2','AWRuqaxc6iryhHuA4OnFag==','祝你今天好心情',2,'2020-02-09 20:39:47','2020-02-11 00:56:02'),
	 ('mumu','12345678','',1,'2020-02-29 16:53:22','2020-02-29 16:53:22'),
	 ('mumu3','124567474','',1,'2020-02-29 16:56:07','2020-02-29 16:56:07'),
	 ('mumu4','SMRMN9k6YmXAjbsJCMdxrQ==','天气晴朗',1,'2020-02-29 17:25:55','2020-02-29 21:59:02'),
	 ('mumu5','SMRMN9k6YmXAjbsJCMdxrQ==','奋勇向前',2,'2020-02-29 22:09:56','2020-02-29 22:12:11'),
	 ('imooc','SMRMN9k6YmXAjbsJCMdxrQ==','',1,'2020-03-02 22:45:48','2020-03-02 22:45:48'),
	 ('super2','SMRMN9k6YmXAjbsJCMdxrQ==','',1,'2020-03-07 18:09:47','2020-03-07 18:09:47'),
	 ('joeni','gQSLmZNryLslRXFQnL/MpQ==','不跟随',2,'2023-02-07 16:46:38','2023-05-26 15:37:07');
INSERT INTO mall_user.mall_user (username,password,personalized_signature,`role`,create_time,update_time) VALUES
	 ('joeni123','gQSLmZNryLslRXFQnL/MpQ==','不跟随',1,'2023-02-07 17:19:47','2023-05-26 15:40:01');
