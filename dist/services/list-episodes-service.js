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
var list_episodes_service_exports = {};
__export(list_episodes_service_exports, {
  serviceListEpisodes: () => serviceListEpisodes
});
module.exports = __toCommonJS(list_episodes_service_exports);
var import_podcasts_repository = require("../repositories/podcasts-repository");
var import_status_code = require("../utils/status-code");
const serviceListEpisodes = () => __async(null, null, function* () {
  let responseFormat = {
    statusCode: 0,
    body: []
  };
  const data = yield (0, import_podcasts_repository.repositoryPodcast)();
  responseFormat.statusCode = data.length !== 0 ? import_status_code.StatusCode.OK : import_status_code.StatusCode.NoContent;
  responseFormat.body = data;
  return responseFormat;
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  serviceListEpisodes
});
