package com.wow4j.business.service.middleware.lettuce;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.google.common.collect.Lists;
import com.wow4j.business.service.middleware.lettuce.exception.RedisLettuceException;
import com.wow4j.business.util.json.fastjson.FastjsonUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.HashOperations;
import org.springframework.data.redis.core.ListOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.SetOperations;
import org.springframework.data.redis.core.ValueOperations;
import org.springframework.stereotype.Component;
import org.springframework.util.CollectionUtils;

import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.TimeUnit;

/**
 * redis lettuce 操作
 */
@Slf4j
@Component
public class RedisLettuceComponent {

    private RedisTemplate<String, Object> redisTemplate;
    private ValueOperations<String, String> redisValueOperations;
    private HashOperations<String, String, Object> redisHashOperations;
    private ListOperations<String, Object> redisListOperations;
    private SetOperations<String, Object> redisSetOperations;

    @Autowired
    public RedisLettuceComponent(RedisTemplate<String, Object> redisTemplate,
                                 ValueOperations<String, String> redisValueOperations,
                                 HashOperations<String, String, Object> redisHashOperations,
                                 ListOperations<String, Object> redisListOperations,
                                 SetOperations<String, Object> redisSetOperations) {
        this.redisTemplate = redisTemplate;
        this.redisValueOperations = redisValueOperations;
        this.redisHashOperations = redisHashOperations;
        this.redisListOperations = redisListOperations;
        this.redisSetOperations = redisSetOperations;
    }

    /**
     * 指定key的缓存失效时间
     */
    public boolean expire(String key, long time, TimeUnit unit) {
        try {
            if (time > 0) {
                redisTemplate.expire(key, time, unit);
            }
            return true;
        } catch (Exception e) {
            log.error("expire error, key:{}, time:{}, unit:{}, error message:{}.", key, time, unit, e.getMessage(), e);
            return false;
        }
    }

    /**
     * 根据 key 获取过期时间
     *
     * 说明：key 键不能为null。 时间返回0代表永久有效
     */
    public long getExpire(String key, TimeUnit unit) {
        return redisTemplate.getExpire(key, unit);
    }

    /**
     * 判断 key 是否存在
     */
    public boolean existKey(String key) {
        try {
            return redisTemplate.hasKey(key);
        } catch (Exception e) {
            log.error("existKey error, key:{}, error message:{}.", key, e.getMessage(), e);
            return false;
        }
    }

    /**
     * 删除缓存
     */
    public void del(String... key) {
        if (key != null && key.length > 0) {
            if (key.length == 1) {
                redisTemplate.delete(key[0]);
            } else {
                redisTemplate.delete(CollectionUtils.arrayToList(key));
            }
        }
    }

    // ======================= String ===========================

    /**
     * 字符串：根据key获取String值
     */
    public String get(String key) {
        return key == null ? null : redisValueOperations.get(key);
    }

    public <T> T getObject(String key, Class<T> clazz) {
        Object json = this.get(key);
        if (json == null) {
            return null;
        }
        T obj = JSON.parseObject(json.toString(), clazz);
        return obj;
    }

    public <T> List<T> getList(String key, Class<T> clazz) {
        Object json = this.get(key);
        if (json == null) {
            return Lists.newArrayList();
        }
        List<T> list = JSONObject.parseArray(json.toString(), clazz);
        return list;
    }

    public boolean set(String key, String value) {
        try {
            redisValueOperations.set(key, value);
            return true;
        } catch (Exception e) {
            log.error("set key:{}, value:{}, error message:{}.", key, value, e.getMessage(), e);
            return false;
        }
    }

    public boolean set(String key, String value, long time, TimeUnit unit) {
        try {
            if (time > 0) {
                redisValueOperations.set(key, value, time, unit);
            } else {
                set(key, value);
            }
            return true;
        } catch (Exception e) {
            log.error("set key:{}, value:{}, time:{}, unit:{}, error message:{}.", key, value, time, unit, e.getMessage(), e);
            return false;
        }
    }

    /**
     * 递增
     */
    public long incr(String key, long delta) {
        if (delta < 0) {
            throw new RedisLettuceException("递增因子必须大于0, key:{}, delta:{}.", key, delta);
        }
        return redisValueOperations.increment(key, delta);
    }

    /**
     * 递减
     */
    public long decr(String key, long delta) {
        if (delta < 0) {
            throw new RedisLettuceException("递减因子必须大于0，key:{}, delta:{}.", key, delta);
        }
        return redisValueOperations.increment(key, - delta);
    }

    // ============================= Map ===============================

    /**
     * HashGet
     */
    public Object hget(String key, String item) {
        return redisHashOperations.get(key, item);
    }

    /**
     * 获取hashKey对应的所有键值
     */
    public Map<String, Object> hmget(String key) {
        return redisHashOperations.entries(key);
    }

    public boolean hmset(String key, Map<String, Object> map) {
        try {
            redisHashOperations.putAll(key, map);
            return true;
        } catch (Exception e) {
            log.error("hmset key:{}, map:{}, error message:{}.", key, FastjsonUtil.to(map), e.getMessage(), e);
            return false;
        }
    }

    /**
     * 向一张 hash 表中放入数据，如果不存在将创建
     */
    public boolean hset(String key, String item, Object value) {
        try {
            redisHashOperations.put(key, item, value);
            return true;
        } catch (Exception e) {
            log.error("hset key:{}, item:{}, value:{}, error message:{}.", key, item, FastjsonUtil.to(value), e.getMessage(), e);
            return false;
        }
    }

    /**
     * 向一张 hash 表中放入数据，如果不存在将创建
     *
     * @param key 键
     * @param item 项
     * @param value 值
     * @param time 时间  注意：如果已存在的 hash 表有时间，这里将会替换原有的时间
     * @param unit 时间单位
     * @return true 成功  false 失败
     */
    public boolean hset(String key, String item, Object value, long time, TimeUnit unit) {
        try {
            redisHashOperations.put(key, item, value);
            if (time > 0) {
                expire(key, time, unit);
            }
            return true;
        } catch (Exception e) {
            log.error("hset key:{}, item, value:{}, time");
            return false;
        }
    }

    /**
     * 删除 hash 表中的值
     *
     * 说明： key 键 不能为null    item 项，可以使多个 不能为null
     */
    public void hdel(String key, Object... item) {
        redisHashOperations.delete(key, item);
    }

    /**
     * 判断 hash 表中是否存在该项的值
     *
     * @param key 键 不能为null
     * @param item 项 不能为null
     * @return true 存在；false 不存在
     */
    public boolean existHashKey(String key, String item) {
        return redisHashOperations.hasKey(key, item);
    }

    /**
     * hash 递增
     *
     * 说明：如果不存在，就会创建一个，并把新增后的值返回
     *
     * @param key 键
     * @param item 项
     * @param delta 要增加几（大于0）
     * @return
     */
    public double hincr(String key, String item, double delta) {
        return redisHashOperations.increment(key, item, delta);
    }

    /**
     * hash 递减
     */
    public double hdesc(String key, String item, double delta) {
        return redisHashOperations.increment(key, item, - delta);
    }

    //=============================== set =============================

    /**
     * 根据 key 获取 Set 中所有的值
     */
    public Set<Object> sGet(String key) {
        try {
            return redisSetOperations.members(key);
        } catch (Exception e) {
            log.error("sGet key:{}, error message:{}.", key, e.getMessage(), e);
            return null;
        }
    }

    /**
     * 根据value从一个set中查询，是否存在
     */
    public boolean sExistKey(String key, Object value) {
        try {
            return redisSetOperations.isMember(key, value);
        } catch (Exception e) {
            log.error("sExistKey key:{}, value:{}, error message:{}.", key, FastjsonUtil.to(value), e.getMessage(), e);
            return false;
        }
    }

    /**
     * 将数据放入 set 缓存
     *
     * @param key 键
     * @param values 值。可以是多个
     * @return 成功个数
     */
    public long sSet(String key, Object... values) {
        try {
            return redisSetOperations.add(key, values);
        } catch (Exception e) {
            log.error("sSet key:{}, values:{}, error message:{}.", key, FastjsonUtil.to(values), e.getMessage(), e);
            return 0;
        }
    }

    /**
     * 将 set 数据放入缓存
     *
     * @param key 键
     * @param time 时间
     * @param unit 时间单位
     * @param values 值。可以是多个
     * @return 成功个数
     */
    public long sSetAndTime(String key, long time, TimeUnit unit, Object... values) {
        try {
            Long count = redisSetOperations.add(key, values);
            if (time > 0) {
                expire(key, time, unit);
            }
            return count;
        } catch (Exception e) {
            log.error("sSetAndTime key:{}, time:{}, unit:{}, values:{}, error message:{}.", key, time, unit, FastjsonUtil.to(values), e.getMessage(), e);
            return 0;
        }
    }

    /**
     * 获取 set 缓存的长度
     */
    public long sGetSetSize(String key) {
        return redisSetOperations.size(key);
    }

    /**
     * 移除 set 中指定key的values
     *
     * @param key
     * @param values
     * @return
     */
    public long setRemove(String key, Object... values) {
        return redisSetOperations.remove(key, values);
    }

    //============================ list ==============================

    /**
     * 获取 list 缓存的内容
     *
     * @param key 键
     * @param start 开始
     * @param end 结束。 0 到 -1 代表所有
     * @return
     */
    public List<Object> lGet(String key, long start, long end) {
        return redisListOperations.range(key, start, end);
    }

    /**
     * 获取 list 缓存的所有内容
     */
    public List<Object> lGetAll(String key) {
        return lGet(key, 0, -1);
    }

    /**
     * 获取 list 缓存的长度
     */
    public long lGetListSize(String key) {
        return redisListOperations.size(key);
    }

    /**
     * 通过索引 获取 list 中的值
     *
     * @param key 键
     * @param index 索引。 index>=0时， 0 表头，1 第二个元素，依次类推；index<0时，-1，表尾，-2倒数第二个元素，依次类推
     * @return
     */
    public Object lGetIndex(String key, long index) {
        return redisListOperations.index(key, index);
    }

    /**
     * 将list放入缓存
     *
     * @param key
     * @param value
     * @return
     */
    public boolean lSet(String key, Object value) {
        try {
            redisListOperations.rightPush(key, value);
            return true;
        } catch (Exception e) {
            log.error("lset key:{}, value:{}, error message:{}.", key, value, e.getMessage(), e);
            return false;
        }
    }

    /**
     * 将 list 放入缓存
     */
    public boolean lSet(String key, Object value, long time, TimeUnit unit) {
        try {
            redisListOperations.rightPush(key, value);
            if (time > 0) {
                expire(key, time, unit);
            }
            return true;
        } catch (Exception e) {
            log.error("lSet key:{}, value:{}, time:{}, unit:{}, error message:{}.", key, value, time, unit, e.getMessage(), e);
            return false;
        }
    }

    /**
     * 将list放入缓存
     *
     * @param key 键
     * @param value 值
     * @return
     */
    public boolean lSet(String key, List<Object> value) {
        try {
            redisListOperations.rightPushAll(key, value);
            return true;
        } catch (Exception e) {
            log.error("", e);
            return false;
        }
    }

    /**
     * 将list放入缓存
     *
     * @param key 键
     * @param value 值
     * @param time 时间
     * @return
     */
    public boolean lSet(String key, List<Object> value, long time, TimeUnit unit) {
        try {
            redisListOperations.rightPushAll(key, value);
            if (time > 0) {
                expire(key, time, unit);
            }
            return true;
        } catch (Exception e) {
            log.error("", e);
            return false;
        }
    }

    /**
     * 根据索引修改list中的某条数据
     *
     * @param key 键
     * @param index 索引
     * @param value 值
     * @return
     */
    public boolean lUpdateIndex(String key, long index, Object value) {
        try {
            redisListOperations.set(key, index, value);
            return true;
        } catch (Exception e) {
            log.error("", e);
            return false;
        }
    }

    /**
     * 移除N个值为value
     *
     * @param key 键
     * @param count 移除多少个
     * @param value 值
     * @return 移除的个数
     */
    public long lRemove(String key, long count, Object value) {
        try {
            Long remove = redisListOperations.remove(key, count, value);
            return remove;
        } catch (Exception e) {
            log.error("", e);
            return 0;
        }
    }
}
