"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerProvider = exports.ContainerContext = void 0;
var react_1 = __importStar(require("react"));
var ContainerBuilder_1 = __importDefault(require("./ContainerBuilder"));
exports.ContainerContext = react_1.createContext(undefined);
var ContainerProvider = function (_a) {
    var config = _a.config, children = _a.children;
    var containerBuilder = new ContainerBuilder_1.default(config);
    var container = containerBuilder.build();
    return react_1.default.createElement(exports.ContainerContext.Provider, { value: container }, children);
};
exports.ContainerProvider = ContainerProvider;
exports.default = exports.ContainerProvider;