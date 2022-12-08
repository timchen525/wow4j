## 基于 Docker 部署的机器
### 1. Docker 部署 Apollo
参考文档：[https://www.apolloconfig.com/#/zh/deployment/quick-start-docker](https://www.apolloconfig.com/#/zh/deployment/quick-start-docker)

> 注意：由于默认 Docker 容器的模式的桥接模式，所以导致本地拉取容器的IP有问题，因此，在本地开发环境无法连接，可以通过配置：
> `-Dapollo.configService=http://config-service的公网IP:端口` 来跳过 meta service 的服务发现。


