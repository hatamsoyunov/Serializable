"use strict";
/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonObject = void 0;
var Serializable_1 = require("../classes/Serializable");
exports.jsonObject = function (settings, extend) { return function (target) {
    if (extend) {
        Reflect.set(target, "defaultSettings", Serializable_1.Serializable.defaultSettings);
        Reflect.set(target, "fromJSON", Serializable_1.Serializable.fromJSON);
        Reflect.set(target.prototype, "fromJSON", Serializable_1.Serializable.prototype.fromJSON);
        Reflect.set(target.prototype, "deserializeProperty", Serializable_1.Serializable.prototype.deserializeProperty);
        Reflect.set(target.prototype, "getJsonPropertyName", Serializable_1.Serializable.prototype.getJsonPropertyName);
        Reflect.set(target.prototype, "onWrongType", Serializable_1.Serializable.prototype.onWrongType);
        Reflect.set(target.prototype, "toJSON", Serializable_1.Serializable.prototype.toJSON);
        Reflect.defineMetadata("ts-serializable:jsonObjectExtended", true, target);
    }
    if (settings) {
        Reflect.defineMetadata("ts-serializable:jsonObject", settings, target);
    }
}; };
