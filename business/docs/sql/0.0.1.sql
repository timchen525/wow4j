DROP TABLE IF EXISTS user;
CREATE TABLE user
(
    `id` BIGINT UNSIGNED NOT NULL COMMENT '主键 ID',
    `name` VARCHAR(255) NOT NULL COMMENT '姓名',
    `age` TINYINT UNSIGNED COMMENT '年龄',
    `email` VARCHAR(255) DEFAULT NULL COMMENT '邮箱',
    `version` INT UNSIGNED DEFAULT 1 COMMENT '版本号',
    `deleted` TINYINT unsigned DEFAULT 0 COMMENT '逻辑删除 0=>未删除  1=>删除',
    `user_id_update` CHAR(36) COMMENT '更新人 ID',
    `time_update` BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '更新时间戳',
    `user_id_create` CHAR(36) COMMENT '创建人 ID',
    `time_create` bigint UNSIGNED NOT NULL DEFAULT 0 COMMENT '创建时间戳',
    PRIMARY KEY (`id`)
);
INSERT INTO user(`id`, `name`, `age`, `email`) VALUES
(1, 'JONE', 18, 'TEST@baod.com'), (2, 'java', 20, 'ddd@qq.com'), (3, 'dt', 33, 'tte@dd.com')
