# Contributing

English | [中文](CONTRIBUTING.zh.md)

Thanks for considering a contribution! This is a small, client-only UI plugin, so the bar for clarity and no-side-effects is high.

## Ground rules

- Plain ESM JavaScript only — no TypeScript, no build step, no install scripts (the [DSH publishing guide](https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/user/develop/basic/publish.md) explains why install-time execution matters).
- This plugin must stay **UI-only**: no host routes, no file access, no network, no settings persistence. Review that `index.js` stays an empty `apply()` and that the browser half only writes DOM + a `<style>` tag via `ctx.effect`.
- Selectors must be upgrade-resistant: prefer stable attributes (`[data-shell-overlay]`, `[role="dialog"][aria-modal="true"]:has(>nav)`) and CSS-module local-name suffixes (`[class*="_options"]`) over hashed class names. `tests/smoke.mjs` fails if a hashed class prefix is introduced.
- All visual changes must be scoped to `@media (max-width: 820px)` and must not alter the desktop layout.

## Development

```sh
node --check index.js client.js tests/smoke.mjs   # syntax
node tests/smoke.mjs                               # packaging integrity
```

## Release

```sh
git tag vX.Y.Z && git push origin vX.Y.Z
```

Users can then pin the tag: `dsh plugin --profile web add github:raomaiping-hash/dsh-client-ui-mobile#vX.Y.Z`.
