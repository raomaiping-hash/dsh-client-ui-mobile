# dsh-client-ui-mobile

![CI](https://github.com/raomaiping-hash/dsh-client-ui-mobile/actions/workflows/ci.yml/badge.svg)
![license](https://img.shields.io/badge/license-MIT-blue.svg)
![version](https://img.shields.io/badge/version-0.1.0-green.svg)

Mobile / small-tablet UI optimizer for the [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) Web GUI.

The stock Web shell is a three-column desktop layout. Under a phone-width viewport the sidebar rail, the 188&nbsp;px settings nav, and the hover-only tool-row controls become cramped or unreachable. This plugin reshapes the shell below a `max-width: 820px` breakpoint **without touching any upstream code** — it is a pure client (browser) plugin: a `<style>` block plus a small React overlay.

## Features

- **Drawer sidebar** — below 820&nbsp;px the sidebar becomes a left drawer; a floating menu button opens it, a backdrop (over the conversation only) and Esc close it, and it auto-closes on session switch.
- **Full-screen settings sheet** — the settings dialog (a 188&nbsp;px nav rail + content on desktop) becomes a full-screen sheet with a top title + horizontally scrollable section tabs, an absolute close button, and safe-area insets.
- **Settings entrance animation** — mask fade + panel slide-up; gated by `prefers-reduced-motion`.
- **Details panel as a bottom sheet** — the tool-call details column (hidden on small screens by default) becomes a slide-up bottom sheet driven by the layout's `data-details-collapsed` state.
- **Tool-row "Inspect" button** — revealed (it is hover-only on desktop) and enlarged to a 32&nbsp;px touch target on small screens.
- **Safe areas & touch polish** — `env(safe-area-inset-*)`, 16&nbsp;px input font, `touch-action: manipulation`, denser composer spacing.
- **Upgrade-resistant selectors** — targets stable attributes (`[role="dialog"][aria-modal="true"]:has(>nav)`, `[data-shell-overlay]`) and CSS-module local-name suffixes (`[class*="_options"]`) instead of hashed class names, so it survives DSH frontend rebuilds.

> **Note on the details panel:** the stock harness does not yet wire an entry point that opens the details column (the upstream `openDetails` action is implemented but uncalled). The bottom-sheet CSS is correct and activates the moment an entry point exists; today it stays off-screen and harmless. The settings and drawer features are fully usable now.

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
- The browser half (`client.js`) is loaded via `package.json`'s `dsh.client` (`exports["./client"]`). It injects one `<style>` tag and registers a `MobileChrome` component into the `shell.overlay` slot (the FAB + backdrop) and a small card into `settings.general.item` (an "installed" notice).
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
