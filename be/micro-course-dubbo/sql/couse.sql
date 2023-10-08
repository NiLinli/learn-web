CREATE DATABASE `course` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

-- course.course definition

CREATE TABLE `course` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `course_id` varchar(100) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `valid` tinyint DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


INSERT INTO course.course (course_id,name,valid) VALUES
	 ('aksjdflas','足球',0),
	 ('jkjkxswsc','篮球',1);


-- course.course_price definition
CREATE TABLE `course_price` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `course_id` varchar(100) NOT NULL,
  `price` int DEFAULT NULL COMMENT '分为单位',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO course.course_price (course_id,price) VALUES
	 ('aksjdflas',1000000),
	 ('jkjkxswsc',2078487);




