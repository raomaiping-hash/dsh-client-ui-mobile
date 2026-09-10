# dsh-client-ui-mobile

English | [中文](README.zh.md)

[![CI](https://github.com/raomaiping-hash/dsh-client-ui-mobile/actions/workflows/ci.yml/badge.svg)](https://github.com/raomaiping-hash/dsh-client-ui-mobile/actions/workflows/ci.yml)
[![version](https://img.shields.io/github/v/tag/raomaiping-hash/dsh-client-ui-mobile)](https://github.com/raomaiping-hash/dsh-client-ui-mobile/tags)
[![license](https://img.shields.io/github/license/raomaiping-hash/dsh-client-ui-mobile)](LICENSE)

Mobile / small-tablet UI optimizer for the [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) Web GUI.

The stock Web shell is a three-column desktop layout. Under a phone-width viewport the sidebar rail, the 188&nbsp;px settings nav, and the hover-only tool-row controls become cramped or unreachable. This plugin reshapes the shell below a `max-width: 820px` breakpoint **without touching any upstream code** — it is a pure client (browser) plugin: a `<style>` block plus a small React overlay.

## Features

- **Drawer sidebar** — below 820&nbsp;px the sidebar becomes a left drawer. There are two entries: on session pages an in-flow "expand sidebar" button is injected next to the official top-bar "Session log" button (no overlay, no obstruction); on pages without a conversation header (the home screen) a floating action button (FAB) in the top-right corner takes over. The two are mutually exclusive — once the top-bar button exists, the FAB yields. A backdrop (over the conversation only) and Esc close it, and it auto-closes on session switch.
- **Full-screen settings sheet** — the settings dialog (a 188&nbsp;px nav rail + content on desktop) becomes a full-screen sheet with a top title + horizontally scrollable section tabs, an absolute close button, and safe-area insets.
- **Settings entrance animation** — mask fade + panel slide-up; gated by `prefers-reduced-motion`.
- **Details panel as a bottom sheet** — the tool-call details column (hidden on small screens by default) becomes a slide-up bottom sheet driven by the layout's `data-details-collapsed` state.
- **Tool-row "Inspect" button** — revealed (it is hover-only on desktop) and enlarged to a 32&nbsp;px touch target on small screens.
- **Safe areas & touch polish** — `env(safe-area-inset-*)`, 16&nbsp;px input font, `touch-action: manipulation`, denser composer spacing.
- **Upgrade-resistant selectors** — targets stable attributes (`[role="dialog"][aria-modal="true"]:has(>nav)`, `[data-shell-overlay]`) and CSS-module local-name suffixes (`[class*="_options"]`) instead of hashed class names, so it survives DSH frontend rebuilds.

> **Note on the right sidebar:** 0.1.5 removed the details column and introduced the right sidebar. On phone widths this plugin docks that column (`[data-rightbar-col]`) as a bottom sheet, so the official right-sidebar toggle opens it over the chat instead of squeezing the conversation column. The settings and drawer features are fully usable now.

## Compatibility

- Declared target: DSH `0.1.5-rc.2` (`dshTarget` in `package.json`); previously declared `0.1.3-alpha.2`.
- 0.1.5 reworked the AppFrame: the details column is gone and the children are now sidebar / center / rightbar / overlay. Only the rightbar column carries a data attribute (`[data-rightbar-col]`, with `data-rightbar-collapsed` / `data-rightbar-fullscreen` / `data-rightbar-instant` on the frame); the center column has none, so it is matched by its CSS-module suffix `[class*="_centerCol"]`. The previous positional selectors (`*:nth-child(2)` / `*:nth-child(3)`) and the `data-details-collapsed` flag no longer exist.
- `ctx.layout.closeDetails()` was removed upstream and its call was dropped; `ctx.slots`, `ctx.layout.toggleSidebar`, `ctx.timeout`, and `ctx.effect` were re-verified present in the installed `0.1.5-rc.2` runtime.
- Visual behavior still needs a phone-width E2E pass on this exact version.

## Install

Pure ESM, no build step, no install scripts — nothing executes at install time.

```sh
dsh plugin --profile web add github:raomaiping-hash/dsh-client-ui-mobile
# pin a commit for reproducibility:
dsh plugin --profile web add github:raomaiping-hash/dsh-client-ui-mobile#<sha>
```

Then restart your DSH Web process and open the GUI on a phone-width viewport (or resize the browser ≤ 820&nbsp;px).

### Manual / tarball

```sh
dsh plugin --profile web add ./dsh-client-ui-mobile-0.1.0.tgz   # from pnpm pack
```

## Uninstall

```sh
dsh plugin --profile web remove dsh-client-ui-mobile
```

Then restart DSH.

## How it works

- The host half (`index.js`) is an empty `apply()` — it only exists so the loader mounts the package.
- The browser half (`client.js`) is loaded via `package.json`'s `dsh.client` (`exports["./client"]`). It injects one `<style>` tag, registers a `MobileChrome` component into the `shell.overlay` slot (floating entry + backdrop), and a small card into `settings.general.item` (an "installed" notice).
- Everything is scoped to `@media (max-width: 820px)`; the desktop layout is untouched.

## Threat model & scope

- This is a **UI-only** plugin: no host routes, no file access, no network, no settings persistence. It reads `ctx.layout` (sidebar/details toggles) and `ctx.slots`; it writes only DOM nodes and a `<style>` tag, all torn down on stop/update.
- The restricted execution environment is not a security boundary; only install plugins from sources you trust. Pin a commit hash for reproducibility.

## Develop

```sh
git clone https://github.com/raomaiping-hash/dsh-client-ui-mobile
cd dsh-client-ui-mobile
node --check client.js        # syntax
node tests/smoke.mjs          # packaging integrity
```

Because the plugin is plain JS served directly by the DSH client-module host, editing `client.js` in an installed profile and refreshing the page picks up the change via the client-HMR poll — no rebuild needed.

## License

MIT © raomaiping-hash
