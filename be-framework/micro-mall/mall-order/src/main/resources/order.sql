CREATE DATABASE `mall_order` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;


-- mall_order.mall_cart definition

CREATE TABLE `mall_cart` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '购物车id',
  `product_id` int NOT NULL COMMENT '商品id',
  `user_id` int NOT NULL COMMENT '用户id',
  `quantity` int NOT NULL DEFAULT '1' COMMENT '商品数量',
  `selected` int NOT NULL DEFAULT '1' COMMENT '是否已勾选：0代表未勾选，1代表已勾选',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='购物车';

-- mall_order.mall_order definition

CREATE TABLE `mall_order` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `order_no` varchar(128) NOT NULL DEFAULT '' COMMENT '订单号（非主键id）',
  `user_id` int NOT NULL COMMENT '用户id',
  `total_price` int NOT NULL COMMENT '订单总价格',
  `receiver_name` varchar(32) NOT NULL COMMENT '收货人姓名快照',
  `receiver_mobile` varchar(32) NOT NULL COMMENT '收货人手机号快照',
  `receiver_address` varchar(128) NOT NULL DEFAULT '' COMMENT '收货地址快照',
  `order_status` int NOT NULL DEFAULT '10' COMMENT '订单状态: 0用户已取消，10未付款（初始状态），20已付款，30已发货，40交易完成',
  `postage` int DEFAULT '0' COMMENT '运费，默认为0',
  `payment_type` int NOT NULL DEFAULT '1' COMMENT '支付类型,1-在线支付',
  `delivery_time` timestamp NULL DEFAULT NULL COMMENT '发货时间',
  `pay_time` timestamp NULL DEFAULT NULL COMMENT '支付时间',
  `end_time` timestamp NULL DEFAULT NULL COMMENT '交易完成时间',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='订单表;';

-- mall_order.mall_order_item definition

CREATE TABLE `mall_order_item` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `order_no` varchar(128) NOT NULL DEFAULT '' COMMENT '归属订单id',
  `product_id` int NOT NULL COMMENT '商品id',
  `product_name` varchar(100) NOT NULL DEFAULT '' COMMENT '商品名称',
  `product_img` varchar(128) NOT NULL DEFAULT '' COMMENT '商品图片',
  `unit_price` int NOT NULL COMMENT '单价（下单时的快照）',
  `quantity` int NOT NULL DEFAULT '1' COMMENT '商品数量',
  `total_price` int NOT NULL DEFAULT '0' COMMENT '商品总价',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='订单的商品表 ';