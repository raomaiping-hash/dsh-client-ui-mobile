# dsh-client-ui-mobile

![CI](https://github.com/raomaiping-hash/dsh-client-ui-mobile/actions/workflows/ci.yml/badge.svg)
![license](https://img.shields.io/badge/license-MIT-blue.svg)
![version](https://img.shields.io/badge/version-0.1.0-green.svg)

[English](README.md) | 中文

[DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) Web GUI 的移动端 / 小平板 UI 优化器。

原生 Web 外壳是三栏桌面布局。在手机宽度下，侧边栏导轨、188px 的设置导航、以及仅 hover 才显示的工具行控件会变得拥挤或不可达。本插件在 `max-width: 820px` 断点下重排外壳，**不修改任何上游代码**——它是一个纯客户端（浏览器）插件：一个 `<style>` 块加一个小的 React overlay。

## 功能

- **抽屉式侧栏**——820px 以下侧栏变为左侧抽屉；浮动菜单按钮打开，遮罩（仅覆盖对话区）与 Esc 关闭，会话切换时自动收起。
- **全屏设置面板**——设置弹窗（桌面上是 188px 导航栏 + 内容）变为全屏面板：顶部标题 + 横向可滚动分区标签、绝对定位关闭按钮、安全区留白。
- **设置入场动画**——遮罩淡入 + 面板上滑；受 `prefers-reduced-motion` 约束。
- **详情面板底部抽屉**——工具调用详情列（小屏默认隐藏）变为从底部滑入的抽屉，由布局的 `data-details-collapsed` 状态驱动。
- **工具行「Inspect」按钮**——小屏下显示（桌面端仅 hover 显示）并放大到 32px 触控目标。
- **安全区与触控打磨**——`env(safe-area-inset-*)`、输入框 16px 字号、`touch-action: manipulation`、更紧凑的输入栏间距。
- **抗升级选择器**——用稳定属性（`[role="dialog"][aria-modal="true"]:has(>nav)`、`[data-shell-overlay]`）与 CSS module 局部名后缀（`[class*="_options"]`）而非哈希类名匹配，能在 DSH 前端重构建后继续生效。

> **关于详情面板：** 当前 harness 尚未接通打开详情列的入口（上游的 `openDetails` action 已实现但未被调用）。底部抽屉的 CSS 是正确的，一旦上游补上入口即自动生效；目前它保持离屏、无害。设置与抽屉功能现在已完全可用。

## 安装

纯 ESM，无构建步骤，无安装脚本——安装时不执行任何代码。

```sh
dsh plugin --profile web add github:raomaiping-hash/dsh-client-ui-mobile
# 锁定 commit 以便复现：
dsh plugin --profile web add github:raomaiping-hash/dsh-client-ui-mobile#<sha>
```

然后重启 DSH Web 进程，在手机宽度视口（或将浏览器缩到 ≤820px）打开 GUI。

### 手动 / tarball

```sh
dsh plugin --profile web add ./dsh-client-ui-mobile-0.1.0.tgz   # 来自 pnpm pack
```

## 卸载

```sh
dsh plugin --profile web remove dsh-client-ui-mobile
```

然后重启 DSH。

## 工作原理

- host 半部（`index.js`）是空的 `apply()`——只为让 loader 挂载本包。
- 浏览器半部（`client.js`）通过 `package.json` 的 `dsh.client`（`exports["./client"]`）加载。它注入一个 `<style>` 标签，并把一个 `MobileChrome` 组件注册到 `shell.overlay` 插槽（FAB + 遮罩），再把一张小卡片注册到 `settings.general.item`（"已安装"提示）。
- 全部规则限定在 `@media (max-width: 820px)`；桌面布局不受影响。

## 威胁模型与范围

- 这是**纯 UI** 插件：无 host 路由、无文件访问、无网络、无设置持久化。它读取 `ctx.layout`（侧栏/详情开关）与 `ctx.slots`；只写入 DOM 节点和一个 `<style>` 标签，停止/更新时全部拆除。
- 受限执行环境不是安全边界；只安装可信来源的插件。锁定 commit hash 以便复现。

## 开发

```sh
git clone https://github.com/raomaiping-hash/dsh-client-ui-mobile
cd dsh-client-ui-mobile
node --check client.js        # 语法
node tests/smoke.mjs          # 打包完整性
```

由于本插件是由 DSH client-module host 直接服务的纯 JS，在已安装 profile 里编辑 `client.js` 并刷新页面即可通过 client-HMR 轮询生效——无需重新构建。

## 许可证

MIT © raomaiping-hash
