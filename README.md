# js-plugin-example

### 项目概览
- JS 插件文档库地址：[JS 插件文档库 · 语雀](https://www.yuque.com/pengloo53/web)
- 在线演示代码仓库：[JS 插件文档库示例代码 · GitHub](https://github.com/pengloo53/js-plugin-example)
- 在线预览：[JS 插件在线演示](http://js.90byte.com/page)

### 项目介绍
如今，随着大前端的发展，曾经的霸主：jQuery 也渐渐的陨落，随之一起没落的，也包含基于 jQuery 的一些优秀的插件。这些优秀的插件，让我们在前端的开发中，节省了大量的时间。自己的项目中也使用了大部分基于 jQuery 的前端插件，帮助我实现了很多的功能，节省了大量的开发时间。

所以，我计划发起一个开源项目，整理并收集这些优秀的前端插件的使用方法，并提供示例代码，可供调试和学习。一来为了留个存档，二来也是为了分享出去，帮助到需要的人。

> 该文档起于 jQuery 框架，但不止于 jQuery，希望能整理所有的 Web 前端框架。

期待你的加入，一起维护文档，语雀文档协作[邀请链接](https://www.yuque.com/g/pengloo53/web/collaborator/join?token=rMudjrT0PjYZv8BR)，如果链接过期，请加个人微信号：**P_lu0503**，并备注：**文档协作**。

为了文档的可用性，我希望每一个插件都有一篇独立文档，以及独立在线演示。

### 文档介绍
文档在语雀平台上，期待你的加入进行协作编写，不要求所有的配置项都介绍到，列举一些最常见的即可。文档主要包括以下几个方面的描述：

- 简单介绍：插件的用途，使用场景，以及官方文档链接；
- 开始使用：如何正确的引入库文件到页面中，这一点对于初学者很重要；
- 使用示例（需要代码演示）：
    - 前台 HTML 如何编写
    - 前台 JS 如何调用
    - 后台数据返回的格式（不限后台技术，重点关注返回数据的格式）

### 在线演示
每一个插件都有一个独立的页面可供访问，在线演示原代码在 [GitHub](https://github.com/pengloo53/js-plugin-example) 上，采用 Node 语言编写，可以自行部署在本地，便于调试，尝试插件不同参数的用法。

熟悉 Node + Express 框架的可以直接 fork 项目，并提交 pull requests，如果不熟悉 Node 开发，也没关系，我会定期将文档中新增的插件，做成演示示例，push 到 GitHub 仓库。

另外，也提供了[在线预览](http://js.90byte.com/page)。

### 本地部署步骤
1. 安装 Node 环境
2. 安装 supervisor，安装方法：`npm i -g supervisor`
3. 安装 bower 包管理器，安装方法：`npm i -g bower`
4. 克隆代码到本地，顺便点个 Star
5. 进入项目目录，安装依赖，`npm install` 以及 `bower install`
6. 运行项目，`npm start`
7. 浏览器打开项目：`http://localhost:3030/page`