# 贡献指南

[English](CONTRIBUTING.md) | 中文

感谢你考虑参与贡献！这是一个小巧、纯客户端的 UI 插件，因此对「清晰、无副作用」的要求很高。

## 基本规则

- 只使用纯 ESM JavaScript——不要 TypeScript、不要构建步骤、不要安装脚本（[DSH 发布指南](https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/user/develop/basic/publish.zh.md)解释了为什么安装时执行代码关系重大）。
- 本插件必须保持**纯 UI**：无 host 路由、无文件访问、无网络、无设置持久化。请确认 `index.js` 始终是空的 `apply()`，且浏览器半部只通过 `ctx.effect` 写入 DOM 和一个 `<style>` 标签。
- 选择器必须抗升级：优先使用稳定属性（`[data-shell-overlay]`、`[role="dialog"][aria-modal="true"]:has(>nav)`）和 CSS module 局部名后缀（`[class*="_options"]`），而不是哈希类名。一旦引入哈希类名前缀，`tests/smoke.mjs` 就会失败。
- 所有视觉改动必须限定在 `@media (max-width: 820px)` 内，且不得改变桌面布局。

## 开发

```sh
node --check index.js client.js tests/smoke.mjs   # 语法检查
node tests/smoke.mjs                               # 打包完整性
```

## 发布

```sh
git tag vX.Y.Z && git push origin vX.Y.Z
```

用户可以据此锁定标签：`dsh plugin --profile web add github:raomaiping-hash/dsh-client-ui-mobile#vX.Y.Z`。
