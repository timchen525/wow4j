package com.wow4j.business.constant;

/**
 * 系统常量
 *
 * @author tim
 */
public class SystemConst {

    /**
     * 项目的根路径
     */
    public static final String BASE_PACKAGES = "com.wow4j.business";

    /**
     * MySQL 中 MyBatis mapper 扫描的根路劲
     */
    public static final String MY_BATIS_MAPPER_SCAN = BASE_PACKAGES + ".dao.mapper";

    /**
     * profile 常量
     */
    public static final class Profile{
        private Profile() {
        }

        /**
         * 开发环境
         */
        public static final String DEV = "dev";

        /**
         * 非开发环境
         */
        public static final String NOT_DEV = "!" + DEV;


        /**
         * 测试环境
         */
        public static final String TEST = "test";

        /**
         * 非测试环境
         */
        public static final String NOT_TEST = "!" + TEST;

        /**
         * 预上线环境
         */
        public static final String STAGE = "stage";

        /**
         * 非预上线环境
         */
        public static final String NOT_STAGE = "!" + STAGE;


        /**
         * 生产环境
         */
        public static final String PROD = "prod";

        /**
         * 非生产环境
         */
        public static final String NOT_PROD = "!" + PROD;
    }
}
