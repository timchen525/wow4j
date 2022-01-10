package com.wow4j.business.util;

import org.apache.commons.lang3.StringUtils;
import sun.net.util.IPAddressUtil;

import javax.servlet.http.HttpServletRequest;
import java.net.InetAddress;
import java.net.NetworkInterface;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.List;

public class IpUtil {

    /**
     * 判断 ip 是否 ipV4
     */
    public static boolean isIPv4LiteralAddress(String ip) {
        return IPAddressUtil.isIPv4LiteralAddress(ip);
    }

    /**
     * 判断 ip 是否 ipV6
     */
    public static boolean isIPv6LiteralAddress(String ip) {
        return IPAddressUtil.isIPv6LiteralAddress(ip);
    }

    /**
     * 获得服务器的IP地址（多网卡）
     */
    public static List<String> getLocalIpList() {
        InetAddress ip = null;
        List<String> ipList = new ArrayList<String>();
        try {
            Enumeration<NetworkInterface> netInterfaces = NetworkInterface
                    .getNetworkInterfaces();
            while (netInterfaces.hasMoreElements()) {
                NetworkInterface ni = netInterfaces
                        .nextElement();
                Enumeration<InetAddress> ips = ni.getInetAddresses();
                while (ips.hasMoreElements()) {
                    ip = ips.nextElement();
                    if (!ip.isLoopbackAddress()
                            && ip.getHostAddress().matches(
                            "(\\d{1,3}\\.){3}\\d{1,3}")) {
                        ipList.add(ip.getHostAddress());
                    }
                }
            }
        } catch (Exception e) {
        }
        return ipList;
    }

    /**
     * 获取服务器的IP地址
     */
    public static String getLocalIp() {
        String sIP = "";
        InetAddress ip = null;
        try {
            boolean bFindIP = false;
            Enumeration<NetworkInterface> netInterfaces = NetworkInterface
                    .getNetworkInterfaces();
            while (netInterfaces.hasMoreElements()) {
                if (bFindIP) {
                    break;
                }
                NetworkInterface ni = netInterfaces
                        .nextElement();
                Enumeration<InetAddress> ips = ni.getInetAddresses();
                while (ips.hasMoreElements()) {
                    ip = ips.nextElement();
                    if (!ip.isLoopbackAddress()
                            && ip.getHostAddress().matches(
                            "(\\d{1,3}\\.){3}\\d{1,3}")) {
                        bFindIP = true;
                        break;
                    }
                }
            }
        } catch (Exception e) {
        }
        if (null != ip) {
            sIP = ip.getHostAddress();
        }
        return sIP;
    }

    /**
     * 获取http请求的客户端的ip地址
     */
    public static String getHttpRequestIp(HttpServletRequest request) {
        if (request == null) {
            return "unknown";
        } else {
            String ip = request.getHeader("X-Real-Forwarded-For");
            if (StringUtils.isEmpty(ip)) {
                ip = request.getHeader("X-Connecting-IP");
            }

            if (StringUtils.isEmpty(ip)) {
                ip = request.getRemoteAddr();
            }

            return ip;
        }
    }
}
