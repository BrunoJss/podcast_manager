"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
var app_exports = {};
__export(app_exports, {
  app: () => app
});
module.exports = __toCommonJS(app_exports);
var import_podcasts_controller = require("./controllers/podcasts-controller");
var import_routes = require("./routes/routes");
var import_http_methods = require("./utils/http-methods");
const app = (req, res) => __async(null, null, function* () {
  var _a, _b;
  const baseUrl = (_b = (_a = req.url) == null ? void 0 : _a.split("?")[0]) != null ? _b : [""];
  if (req.method === import_http_methods.HttpMethod.GET && baseUrl === import_routes.Routes.LIST) {
    yield (0, import_podcasts_controller.getListEpisodes)(req, res);
  }
  if (req.method === import_http_methods.HttpMethod.GET && baseUrl === import_routes.Routes.EPISODES) {
    yield (0, import_podcasts_controller.getFilteredEpisodes)(req, res);
  }
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  app
});
