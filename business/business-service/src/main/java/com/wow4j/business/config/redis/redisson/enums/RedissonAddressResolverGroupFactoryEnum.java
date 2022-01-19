package com.wow4j.business.config.redis.redisson.enums;

import org.redisson.connection.AddressResolverGroupFactory;
import org.redisson.connection.DnsAddressResolverGroupFactory;
import org.redisson.connection.RoundRobinDnsAddressResolverGroupFactory;

public enum RedissonAddressResolverGroupFactoryEnum {

    /**
     * 默认
     */
    DEFAULT {
        @Override
        public AddressResolverGroupFactory getInstance() {
            return new DnsAddressResolverGroupFactory();
        }
    },

    /**
     * 轮询
     */
    ROUND_ROBIN {
        @Override
        public AddressResolverGroupFactory getInstance() {
            return new RoundRobinDnsAddressResolverGroupFactory();
        }
    };

    public abstract AddressResolverGroupFactory getInstance();
}
