var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};

// build/index.js
var build_exports = {};
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import * as isbotModule from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
import express from "express";
import { createRequestHandler } from "@remix-run/express";
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isBotRequest(request.headers.get("user-agent")) || remixContext.isSpaMode ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function isBotRequest(userAgent) {
  return userAgent ? "isbot" in isbotModule && typeof isbotModule.isbot == "function" ? isbotModule.isbot(userAgent) : "default" in isbotModule && typeof isbotModule.default == "function" ? isbotModule.default(userAgent) : !1 : !1;
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 66,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 116,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function App() {
  return /* @__PURE__ */ jsxDEV2("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 7,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 8,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { children: [
      /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 11,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 12,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 13,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 14,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
var __defProp, __getOwnPropNames2, __esm2, __export, build_exports2, __defProp2, __export2, entry_server_node_exports, ABORT_DELAY, root_exports, assets_manifest_default, mode, assetsBuildDirectory, future, publicPath, entry, routes, init_build2, app, port, init_build = __esm({
  async "build/index.js"() {
    __defProp = Object.defineProperty, __getOwnPropNames2 = Object.getOwnPropertyNames, __esm2 = (fn, res) => function() {
      return fn && (res = (0, fn[__getOwnPropNames2(fn)[0]])(fn = 0)), res;
    }, __export = (target, all) => {
      for (var name in all)
        __defProp(target, name, { get: all[name], enumerable: !0 });
    }, build_exports2 = {};
    __export(build_exports2, {
      assets: () => assets_manifest_default,
      assetsBuildDirectory: () => assetsBuildDirectory,
      entry: () => entry,
      future: () => future,
      mode: () => mode,
      publicPath: () => publicPath,
      routes: () => routes
    });
    init_build2 = __esm2({
      "build/index.js"() {
        __defProp2 = Object.defineProperty, __export2 = (target, all) => {
          for (var name in all)
            __defProp2(target, name, { get: all[name], enumerable: !0 });
        }, entry_server_node_exports = {}, __export2(entry_server_node_exports, {
          default: () => handleRequest
        }), ABORT_DELAY = 5e3, root_exports = {}, __export2(root_exports, {
          default: () => App
        }), assets_manifest_default = { entry: { module: "/build/entry.client-NTA4BUJG.js", imports: ["/build/_shared/chunk-O4BRYNJ4.js", "/build/_shared/chunk-XGOTYLZ5.js", "/build/_shared/chunk-C7KPT4FD.js", "/build/_shared/chunk-U4FRFQSK.js", "/build/_shared/chunk-7M6SC7J5.js", "/build/_shared/chunk-RUSEQYAZ.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-7USEQTTP.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "d037bcc5", hmr: { runtime: "/build/_shared/chunk-RUSEQYAZ.js", timestamp: 1750702925489 }, url: "/build/manifest-D037BCC5.js" }, mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_node_exports }, routes = {
          root: {
            id: "root",
            parentId: void 0,
            path: "",
            index: void 0,
            caseSensitive: void 0,
            module: root_exports
          }
        };
      }
    }), app = express();
    app.use(express.static("public"));
    app.all(
      "*",
      createRequestHandler({
        build: await Promise.resolve().then(() => (init_build2(), build_exports2)),
        mode: "development"
      })
    );
    port = process.env.PORT || 3e3;
    app.listen(port, () => {
      console.log(`\u2705 Server is running at http://localhost:${port}`);
    });
  }
});

// server.js
import express2 from "express";
import { createRequestHandler as createRequestHandler2 } from "@remix-run/express";
var app2 = express2();
app2.use(express2.static("public"));
app2.all(
  "*",
  createRequestHandler2({
    build: await init_build().then(() => build_exports),
    mode: "development"
  })
);
var port2 = process.env.PORT || 3e3;
app2.listen(port2, () => {
  console.log(`\u2705 Server is running at http://localhost:${port2}`);
});
//# sourceMappingURL=index.js.map
