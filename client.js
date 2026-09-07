window.__ModuleLoader__.load({
  id: "dsh-client-ui-mobile",
  factory: (require) => {
    var module = { exports: {} }
    var exports = module.exports
    Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" })

    var React = require("react")

    var CSS = [
      "/* ===== dsh-client-ui-mobile v1 ===== */",
      ":root {",
      "  --dsh-mobi-drawer: min(90vw, 340px);",
      "  --dsh-mobi-fab: 44px;",
      "  --dsh-mobi-fab-gap: 10px;",
      "  --dsh-mobi-z-fab: 60;",
      "  --dsh-mobi-z-drawer: 50;",
      "  --dsh-mobi-z-backdrop: 40;",
      "  --dsh-mobi-z-cordis: 80;",
      "}",
      "@media (max-width: 820px) {",
      "  html, body, #root, #app {",
      "    height: 100% !important;",
      "    max-height: 100dvh !important;",
      "  }",
      "  body {",
      "    padding-left: env(safe-area-inset-left, 0px);",
      "    padding-right: env(safe-area-inset-right, 0px);",
      "    overscroll-behavior-y: contain;",
      "    -webkit-text-size-adjust: 100%;",
      "    text-size-adjust: 100%;",
      "  }",
      "  * {",
      "    --dsh-chat-content-width: 100% !important;",
      "    --dsh-composer-card-max-width: 100% !important;",
      "    --dsh-composer-side-clearance: 10px !important;",
      "    --dsh-composer-dock-inset: 6px !important;",
      "    --dsh-scrollbar-width: 0px !important;",
      "  }",
      "  :has(> [data-shell-overlay]) {",
      "    grid-template-columns: minmax(0, 1fr) 0px !important;",
      "  }",
      "  :has(> [data-shell-overlay]) > *:first-child {",
      "    position: fixed !important;",
      "    top: 0 !important;",
      "    bottom: 0 !important;",
      "    width: var(--dsh-mobi-drawer) !important;",
      "    max-width: var(--dsh-mobi-drawer) !important;",
      "    z-index: var(--dsh-mobi-z-drawer) !important;",
      "    border-right: 1px solid var(--dsw-alias-border-l1, rgb(0 0 0 / 10%)) !important;",
      "    border-radius: 0 16px 16px 0 !important;",
      "    padding-top: env(safe-area-inset-top, 0px) !important;",
      "    padding-bottom: env(safe-area-inset-bottom, 0px) !important;",
      "    background: var(--dsw-specific-sidebar-fill, var(--dsw-alias-bg-layer-1, #fff)) !important;",
      "    transition: left 200ms cubic-bezier(.2,.8,.2,1), box-shadow 200ms ease !important;",
      "    will-change: left;",
      "    left: calc(-1 * var(--dsh-mobi-drawer) - 12px) !important;",
      "    box-shadow: none !important;",
      "    pointer-events: none !important;",
      "    overflow: visible !important;",
      "    transform: none !important;",
      "  }",
      "  :has(> [data-shell-overlay]):not([data-sidebar-collapsed]) > *:first-child {",
      "    left: 0 !important;",
      "    box-shadow: 12px 0 40px rgb(0 0 0 / 28%) !important;",
      "    pointer-events: auto !important;",
      "  }",
      "  :has(> [data-shell-overlay])[data-sidebar-collapsed] > *:first-child {",
      "    left: calc(-1 * var(--dsh-mobi-drawer) - 12px) !important;",
      "    box-shadow: none !important;",
      "    pointer-events: none !important;",
      "  }",
      "  :has(> [data-shell-overlay])[data-sidebar-collapsed] > *:first-child * {",
      "    visibility: hidden !important;",
      "  }",
      "  :has(> [data-shell-overlay]) > *:nth-child(2) {",
      "    min-width: 0 !important;",
      "    width: 100% !important;",
      "    max-width: 100% !important;",
      "    height: 100% !important;",
      "    padding-bottom: env(safe-area-inset-bottom, 0px);",
      "    scroll-padding-top: calc(var(--dsh-mobi-fab) + var(--dsh-mobi-fab-gap) + 8px);",
      "  }",
      "  :has(> [data-shell-overlay]) > *:nth-child(3) {",
      "    display: flex !important;",
      "    flex-direction: column !important;",
      "    position: fixed !important;",
      "    left: 0 !important;",
      "    right: 0 !important;",
      "    bottom: 0 !important;",
      "    top: auto !important;",
      "    width: 100% !important;",
      "    height: min(74vh, 600px) !important;",
      "    max-height: calc(100dvh - 80px) !important;",
      "    z-index: 70 !important;",
      "    background: var(--dsw-alias-bg-layer-2, #fff) !important;",
      "    border: none !important;",
      "    border-top: 1px solid var(--dsw-alias-border-l2, rgb(0 0 0 / 12%)) !important;",
      "    border-radius: 16px 16px 0 0 !important;",
      "    box-shadow: 0 -12px 40px rgb(0 0 0 / 22%) !important;",
      "    transform: translateY(calc(100% + 24px)) !important;",
      "    transition: transform 240ms cubic-bezier(0.2, 0.8, 0.2, 1) !important;",
      "    will-change: transform;",
      "    pointer-events: none !important;",
      "  }",
      "  :has(> [data-shell-overlay]) > *:nth-child(3) > * {",
      "    flex: 1 1 auto;",
      "    min-height: 0;",
      "  }",
      "  :has(> [data-shell-overlay]) > *:nth-child(3) > * > [class*=\"_root\"] {",
      "    border-left: none !important;",
      "  }",
      "  :has(> [data-shell-overlay]) > *:nth-child(3) [class*=\"_close\"] {",
      "    width: 40px !important;",
      "    height: 40px !important;",
      "  }",
      "  :has(> [data-shell-overlay]):not([data-details-collapsed]) > *:nth-child(3) {",
      "    transform: translateY(0) !important;",
      "    pointer-events: auto !important;",
      "  }",
      "  [data-side=\"sidebar\"],",
      "  [data-side=\"details\"] {",
      "    display: none !important;",
      "  }",
      "  [data-cordis-panel] {",
      "    position: fixed !important;",
      "    left: 10px !important;",
      "    right: auto !important;",
      "    width: calc(var(--dsh-mobi-drawer) - 20px) !important;",
      "    max-width: calc(100vw - 20px) !important;",
      "    bottom: calc(72px + env(safe-area-inset-bottom, 0px)) !important;",
      "    max-height: min(55vh, 420px) !important;",
      "    z-index: var(--dsh-mobi-z-cordis) !important;",
      "    box-shadow: 0 12px 40px rgb(0 0 0 / 22%) !important;",
      "  }",
      "  [data-sidebar-collapsed] [data-cordis-panel] {",
      "    display: none !important;",
      "  }",
      "  button, [role=\"button\"], a {",
      "    touch-action: manipulation;",
      "  }",
      "  input, textarea, select, button {",
      "    font-size: 16px;",
      "  }",
      "  textarea {",
      "    max-height: min(40vh, 220px);",
      "  }",
      "  pre, code {",
      "    max-width: 100%;",
      "    overflow-x: auto;",
      "    -webkit-overflow-scrolling: touch;",
      "  }",
      "  img, video, canvas, svg {",
      "    max-width: 100%;",
      "    height: auto;",
      "  }",
      "  p, li, td, th {",
      "    overflow-wrap: anywhere;",
      "    word-break: break-word;",
      "  }",
      "}",
      "@media (max-width: 420px) {",
      "  :root { --dsh-mobi-drawer: min(92vw, 320px); }",
      "  * { --dsh-composer-side-clearance: 8px !important; }",
      "}",
      ".dsh-mobi-root {",
      "  position: absolute;",
      "  inset: 0;",
      "  pointer-events: none;",
      "  z-index: var(--dsh-mobi-z-fab);",
      "}",
      ".dsh-mobi-backdrop {",
      "  display: none;",
      "  position: absolute;",
      "  top: 0;",
      "  right: 0;",
      "  bottom: 0;",
      "  left: var(--dsh-mobi-drawer);",
      "  border: 0;",
      "  padding: 0;",
      "  margin: 0;",
      "  cursor: pointer;",
      "  pointer-events: none;",
      "  z-index: var(--dsh-mobi-z-backdrop);",
      "  background: rgb(15 18 25 / 45%);",
      "  -webkit-backdrop-filter: blur(3px);",
      "  backdrop-filter: blur(3px);",
      "  opacity: 0;",
      "  transition: opacity 180ms ease;",
      "}",
      ".dsh-mobi-fab {",
      "  display: none;",
      "  pointer-events: auto;",
      "  position: absolute;",
      "  top: calc(var(--dsh-mobi-fab-gap) + env(safe-area-inset-top, 0px));",
      "  right: calc(var(--dsh-mobi-fab-gap) + env(safe-area-inset-right, 0px));",
      "  width: var(--dsh-mobi-fab);",
      "  height: var(--dsh-mobi-fab);",
      "  border-radius: 14px;",
      "  border: 1px solid var(--dsw-alias-border-l2, rgb(0 0 0 / 12%));",
      "  background: color-mix(in srgb, var(--dsw-alias-brand-primary, #3964fe) 8%, var(--dsw-alias-bg-overlay, #fff));",
      "  color: var(--dsw-alias-label-primary, #111);",
      "  box-shadow: 0 8px 24px rgb(0 0 0 / 16%);",
      "  align-items: center;",
      "  justify-content: center;",
      "  cursor: pointer;",
      "  z-index: calc(var(--dsh-mobi-z-fab) + 1);",
      "  -webkit-tap-highlight-color: transparent;",
      "  touch-action: manipulation;",
      "  padding: 0;",
      "}",
      ".dsh-mobi-fab:active { transform: scale(0.96); }",
      ".dsh-mobi-fab:focus-visible {",
      "  outline: 2px solid var(--dsw-alias-brand-primary, #3964fe);",
      "  outline-offset: 2px;",
      "}",
      ".dsh-mobi-fab svg { width: 22px; height: 22px; display: block; }",
      "@media (max-width: 820px) {",
      "  [data-sidebar-collapsed] > [data-shell-overlay] .dsh-mobi-fab {",
      "    display: inline-flex;",
      "  }",
      "  *:not([data-sidebar-collapsed]) > [data-shell-overlay] .dsh-mobi-fab {",
      "    display: none !important;",
      "  }",
      "  *:not([data-sidebar-collapsed]) > [data-shell-overlay] .dsh-mobi-backdrop {",
      "    display: block;",
      "    pointer-events: auto;",
      "    opacity: 1;",
      "  }",
      "}",
      "/* ===== Mobile settings dialog ===== */",
      "/* The settings shell (@deepseek-ai/dsh-client-ui-settings-general) is a",
      "   two-column modal: 188px nav rail + content. On small screens the nav",
      "   stays 188px, squeezing the content to ~150px. Restructure it into a",
      "   full-screen sheet with a top title + horizontally scrollable tabs. */",
      "@media (max-width: 820px) {",
      "  :has(> [role=\"dialog\"][aria-modal=\"true\"]:has(>nav)) {",
      "    align-items: stretch !important;",
      "    justify-content: stretch !important;",
      "  }",
      "  [role=\"dialog\"][aria-modal=\"true\"]:has(>nav) {",
      "    width: 100% !important;",
      "    max-width: 100% !important;",
      "    height: 100vh !important;",
      "    height: 100dvh !important;",
      "    max-height: 100vh !important;",
      "    max-height: 100dvh !important;",
      "    border-radius: 0 !important;",
      "    flex-direction: column !important;",
      "  }",
      "  [role=\"dialog\"][aria-modal=\"true\"]:has(>nav) > nav {",
      "    width: 100% !important;",
      "    flex: none !important;",
      "    flex-direction: column !important;",
      "    gap: 0 !important;",
      "    padding: calc(env(safe-area-inset-top, 0px) + 14px) 0 0 !important;",
      "    border-bottom: 1px solid var(--dsw-alias-border-l1, rgb(0 0 0 / 10%)) !important;",
      "  }",
      "  [role=\"dialog\"][aria-modal=\"true\"]:has(>nav) > nav > [class*=\"_navTitle\"] {",
      "    padding: 0 56px 10px 16px !important;",
      "    font-size: 18px !important;",
      "    font-weight: 600 !important;",
      "    line-height: 26px !important;",
      "  }",
      "  [role=\"dialog\"][aria-modal=\"true\"]:has(>nav) > nav > [class*=\"_navList\"] {",
      "    flex-direction: row !important;",
      "    gap: 6px !important;",
      "    overflow-x: auto !important;",
      "    padding: 0 16px 10px !important;",
      "    scrollbar-width: none !important;",
      "    -webkit-overflow-scrolling: touch !important;",
      "  }",
      "  [role=\"dialog\"][aria-modal=\"true\"]:has(>nav) > nav > [class*=\"_navList\"]::-webkit-scrollbar { display: none !important; }",
      "  [role=\"dialog\"][aria-modal=\"true\"]:has(>nav) > nav [class*=\"_navCell\"] {",
      "    flex: none !important;",
      "    width: auto !important;",
      "    height: 38px !important;",
      "    min-height: 38px !important;",
      "    padding: 8px 14px !important;",
      "    white-space: nowrap !important;",
      "  }",
      "  [role=\"dialog\"][aria-modal=\"true\"]:has(>nav) > nav [class*=\"_navIcon\"] { display: none !important; }",
      "  [role=\"dialog\"][aria-modal=\"true\"]:has(>nav) > nav [class*=\"_navLabel\"] { white-space: nowrap !important; }",
      "  [role=\"dialog\"][aria-modal=\"true\"]:has(>nav) > [class*=\"_content\"] {",
      "    flex: 1 !important;",
      "    min-height: 0 !important;",
      "  }",
      "  [role=\"dialog\"][aria-modal=\"true\"]:has(>nav) > [class*=\"_content\"] > [class*=\"_header\"] {",
      "    height: 0 !important;",
      "    min-height: 0 !important;",
      "    padding: 0 !important;",
      "    overflow: visible !important;",
      "  }",
      "  [role=\"dialog\"][aria-modal=\"true\"]:has(>nav) > [class*=\"_content\"] > [class*=\"_header\"] > [class*=\"_actions\"] {",
      "    display: none !important;",
      "  }",
      "  [role=\"dialog\"][aria-modal=\"true\"]:has(>nav) > [class*=\"_content\"] > [class*=\"_header\"] > [class*=\"_close\"] {",
      "    position: absolute !important;",
      "    top: calc(env(safe-area-inset-top, 0px) + 10px) !important;",
      "    right: 10px !important;",
      "    width: 38px !important;",
      "    height: 38px !important;",
      "    border-radius: 38px !important;",
      "    z-index: 3 !important;",
      "  }",
      "  [role=\"dialog\"][aria-modal=\"true\"]:has(>nav) > [class*=\"_content\"] > [class*=\"_options\"] {",
      "    padding: 0 16px calc(env(safe-area-inset-bottom, 0px) + 20px) !important;",
      "    overflow-y: auto !important;",
      "    -webkit-overflow-scrolling: touch !important;",
      "  }",
      "}",
      "/* Entrance animation for the settings sheet (mount-time only). */",
      "@keyframes dsh-mobi-settings-mask-in {",
      "  from { opacity: 0; }",
      "  to { opacity: 1; }",
      "}",
      "@keyframes dsh-mobi-settings-panel-in {",
      "  from { opacity: 0; transform: translateY(28px); }",
      "  to { opacity: 1; transform: translateY(0); }",
      "}",
      "@media (max-width: 820px) {",
      "  :has(> [role=\"dialog\"][aria-modal=\"true\"]:has(>nav)) > [class*=\"_mask\"] {",
      "    animation: dsh-mobi-settings-mask-in 160ms ease-out;",
      "  }",
      "  [role=\"dialog\"][aria-modal=\"true\"]:has(>nav) {",
      "    animation: dsh-mobi-settings-panel-in 220ms cubic-bezier(0.2, 0.8, 0.2, 1);",
      "  }",
      "}",
      "@media (prefers-reduced-motion: reduce) {",
      "  :has(> [role=\"dialog\"][aria-modal=\"true\"]:has(>nav)) > [class*=\"_mask\"], [role=\"dialog\"][aria-modal=\"true\"]:has(>nav) {",
      "    animation: none !important;",
      "  }",
      "  .dsh-mobi-fab, .dsh-mobi-backdrop {",
      "    transition: none !important;",
      "  }",
      "  :has(> [data-shell-overlay]) > *:first-child {",
      "    transition: none !important;",
      "  }",
      "  :has(> [data-shell-overlay]) > *:nth-child(3) {",
      "    transition: none !important;",
      "  }",
      "}",
      "/* Tool-row \"Inspect\" button is opacity:0 until :hover, so it is invisible",
      "   on touch devices. Reveal it (with a touch-friendly size) on small screens.",
      "   Uses [class*=] because the tool package ships two CSS-module hashes for it. */",
      "@media (max-width: 820px) {",
      "  [class*=\"inspectButton\"] {",
      "    opacity: 1 !important;",
      "    min-height: 32px !important;",
      "    padding: 4px 12px !important;",
      "  }",
      "}",
    ].join("\n")

    var STYLE_ID = "dsh-client-ui-mobile/styles"

    function ensureStyles() {
      if (typeof document === "undefined") return function () {}
      var existing = document.querySelector('style[data-plugin-css="' + STYLE_ID + '"]')
      if (existing) {
        return function () {
          if (existing.parentNode) existing.parentNode.removeChild(existing)
        }
      }
      var tag = document.createElement("style")
      tag.dataset.plugin = "dsh-client-ui-mobile"
      tag.dataset.pluginCss = STYLE_ID
      tag.textContent = CSS
      document.head.appendChild(tag)
      return function () {
        if (tag.parentNode) tag.parentNode.removeChild(tag)
      }
    }

    function isMobileViewport() {
      try {
        return typeof globalThis.innerWidth === "number" && globalThis.innerWidth <= 820
      } catch (e) {
        return false
      }
    }

    function frameEl() {
      try {
        var doc = globalThis.document
        if (!doc) return null
        var overlay = doc.querySelector("[data-shell-overlay]")
        return overlay ? overlay.parentElement : doc.querySelector("[data-sidebar-collapsed], [data-details-collapsed]")
      } catch (e) {
        return null
      }
    }

    function isDrawerOpen() {
      var el = frameEl()
      if (!el) return false
      return !el.hasAttribute("data-sidebar-collapsed")
    }

    function MenuIcon() {
      return React.createElement(
        "svg",
        {
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          "aria-hidden": true,
        },
        React.createElement("rect", { x: "3", y: "4", width: "7", height: "16", rx: "1.5" }),
        React.createElement("path", { d: "M21 12h-9" }),
        React.createElement("path", { d: "M16 8l-4 4 4 4" }),
      )
    }

    function MobileChrome(props) {
      var layout = props.layout
      var timeout = props.timeout

      var useSessions = props.useSessions
      var current =
        typeof useSessions === "function"
          ? useSessions(function (s) {
              return s.current
            })
          : undefined

      var prevCurrent = React.useRef(current)
      var bootstrapped = React.useRef(false)

      function closeDrawer() {
        if (!layout || !isMobileViewport()) return
        if (isDrawerOpen()) {
          try {
            layout.toggleSidebar()
          } catch (e) {}
        }
      }

      function openDrawer() {
        if (!layout || !isMobileViewport()) return
        if (!isDrawerOpen()) {
          try {
            layout.toggleSidebar()
          } catch (e) {}
        }
      }

      React.useEffect(
        function () {
          if (!bootstrapped.current) {
            bootstrapped.current = true
            prevCurrent.current = current
            return
          }
          if (prevCurrent.current !== current) {
            prevCurrent.current = current
            if (typeof timeout === "function") {
              timeout(function () {
                closeDrawer()
              }, 0)
            } else {
              closeDrawer()
            }
          }
        },
        [current],
      )

      React.useEffect(function () {
        var doc = null
        try {
          doc = globalThis.document
        } catch (e) {
          doc = null
        }
        if (!doc) return
        function onKey(ev) {
          if (ev && ev.key === "Escape") closeDrawer()
        }
        doc.addEventListener("keydown", onKey)
        return function () {
          doc.removeEventListener("keydown", onKey)
        }
      }, [])

      return React.createElement(
        "div",
        { className: "dsh-mobi-root", "data-dsh-mobi": "chrome" },
        React.createElement("button", {
          type: "button",
          className: "dsh-mobi-backdrop",
          "aria-label": "关闭侧栏",
          onClick: closeDrawer,
        }),
        React.createElement(
          "button",
          {
            type: "button",
            className: "dsh-mobi-fab",
            "aria-label": "打开菜单",
            title: "菜单",
            onClick: openDrawer,
          },
          React.createElement(MenuIcon),
        ),
      )
    }

    var inject = ["slots", "layout", "timer"]

    function apply(ctx) {
      try {
        ctx.layout.closeDetails()
      } catch (e) {}

      ctx.effect(function () {
        return ensureStyles()
      }, "ui-mobile: styles")

      ctx.slots.inject("shell.overlay", function () {
        return ctx.slots.register(
          {
            name: "shell.overlay",
            id: "dsh-mobi-chrome",
            order: 50,
            label: "Mobile UI",
          },
          function (props) {
            return React.createElement(MobileChrome, {
              useSessions: props.useSessions,
              layout: ctx.layout,
              timeout: function (fn, ms) {
                return ctx.timeout(fn, ms)
              },
            })
          },
        )
      })

      ctx.slots.inject("settings.general.item", function () {
        return ctx.slots.register(
          {
            name: "settings.general.item",
            id: "dsh-mobi-ui",
            order: 80,
            label: "Mobile UI",
          },
          function () {
            return React.createElement(
              "div",
              {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                  padding: "4px 0",
                },
              },
              React.createElement("strong", { style: { fontSize: 13 } }, "Mobile UI Optimizer"),
              React.createElement(
                "span",
                {
                  style: {
                    fontSize: 12,
                    color: "var(--dsw-alias-label-secondary, #61666b)",
                  },
                },
                "已安装：小屏抽屉侧栏、安全区、Cordis 面板、设置面板（全屏 + 顶部标签）与详情面板（底部抽屉）适配。卸载请从 profile 移除 dsh-client-ui-mobile。",
              ),
            )
          },
        )
      })
    }

    exports.apply = apply
    exports.inject = inject
    return module.exports
  },
})
