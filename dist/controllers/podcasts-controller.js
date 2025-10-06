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
var podcasts_controller_exports = {};
__export(podcasts_controller_exports, {
  getFilteredEpisodes: () => getFilteredEpisodes,
  getListEpisodes: () => getListEpisodes
});
module.exports = __toCommonJS(podcasts_controller_exports);
var import_list_episodes_service = require("../services/list-episodes-service");
var import_filter_episodes_service = require("../services/filter-episodes-service");
var import_content_type = require("../utils/content-type");
const defaultContent = { "content-type": import_content_type.ContentType.JSON };
const getListEpisodes = (req, res) => __async(null, null, function* () {
  const content = yield (0, import_list_episodes_service.serviceListEpisodes)();
  res.writeHead(content.statusCode, defaultContent);
  res.end(JSON.stringify(content.body));
});
const getFilteredEpisodes = (req, res) => __async(null, null, function* () {
  const content = yield (0, import_filter_episodes_service.serviceFilterEpisodes)(req.url);
  res.writeHead(content.statusCode, defaultContent);
  res.end(JSON.stringify(content.body));
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getFilteredEpisodes,
  getListEpisodes
});
