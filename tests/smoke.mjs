// dsh-client-ui-mobile smoke test: verify the bundle's packaging contract.
// Pure UI plugin — no host routes to drive — so this checks that the package
// is a well-formed DSH bundle and that the client half meets its own
// upgrade-resistance rules (no hashed CSS-module class names, scoped media query).
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

let failures = 0;
const check = (label, cond, extra = "") => {
  console.log((cond ? "PASS" : "FAIL") + "  " + label + (cond ? "" : "  <<< " + extra));
  if (!cond) failures += 1;
};

// 1. package.json manifest
const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
check("name is dsh-client-ui-mobile", pkg.name === "dsh-client-ui-mobile", pkg.name);
check("declares dsh.bundle.patch", pkg.dsh?.bundle?.patch === "./cordis.patch.yml", JSON.stringify(pkg.dsh?.bundle));
check("declares dsh.client (web platform)", pkg.dsh?.client?.platform === "web", JSON.stringify(pkg.dsh?.client));
check("dsh.client inject list is non-empty", Array.isArray(pkg.dsh?.client?.inject) && pkg.dsh.client.inject.length > 0);
check("exports ./client", typeof pkg.exports?.["./client"] === "string", JSON.stringify(pkg.exports));
check("files manifest includes client.js", Array.isArray(pkg.files) && pkg.files.includes("client.js"));
check("files manifest includes cordis.patch.yml", Array.isArray(pkg.files) && pkg.files.includes("cordis.patch.yml"));
check("not private", pkg.private !== true);

// 2. cordis.patch.yml registers the row
const patch = readFileSync(join(root, "cordis.patch.yml"), "utf8");
check("patch has insert layer", patch.includes("- insert:"));
check("patch row id = client-ui-mobile", /-\s*id:\s*client-ui-mobile/.test(patch));
check("patch row name = dsh-client-ui-mobile", /name:\s*dsh-client-ui-mobile/.test(patch));

// 3. host half exports apply
const host = await import(join(root, "index.js"));
check("index.js exports apply as a function", typeof host.apply === "function");

// 4. client half content contract
const client = readFileSync(join(root, "client.js"), "utf8");
check("client.js registers via __ModuleLoader__", client.includes("window.__ModuleLoader__.load"));
check("mobile rules scoped to max-width:820px", client.includes("@media (max-width: 820px)"));
check("targets the shell overlay", client.includes("[data-shell-overlay]"));
check("settings sheet uses :has(>nav) anchor", client.includes(":has(>nav)") || client.includes(":has(> nav)"));
check("prefers-reduced-motion respected", client.includes("prefers-reduced-motion"));

// 5. upgrade-resistance: no hashed CSS-module class names
const hashed = client.match(/\b(VOzbGW_|ydkMvW_|o3BgMG_)\w*/g) ?? [];
check("no hashed CSS-module class names", hashed.length === 0, hashed.join(", "));

console.log(failures === 0 ? "\nALL PASS" : "\n" + failures + " FAILURES");
process.exit(failures === 0 ? 0 : 1);
