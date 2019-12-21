'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var winston = require('winston');
var tripleBeam = _interopDefault(require('triple-beam'));

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function getDevFormat() {
    var colorizer = winston.format.colorize();
    return winston.format.combine(winston.format.timestamp({ format: 'YYYY/MM/DD HH:mm:ss' }), winston.format.printf(function (info) {
        var app = info.app, category = info.category, message = info.message, timestamp = info.timestamp, rest = __rest(info, ["app", "category", "message", "timestamp"]);
        var level = info.level.substr(0, 5).padEnd(5);
        var moniker = colorizer.colorize(info[tripleBeam.LEVEL], level) + " " + timestamp.toString() + " - [" + app + (category ? " (" + category + ")" : '') + "]";
        var fields = Object.keys(rest).reduce(function (acc, k) {
            return acc + "   " + colorizer.colorize(info[tripleBeam.LEVEL], k) + "=" + JSON.stringify(rest[k]);
        }, '');
        return (moniker + " " + message).padEnd(116) + " " + fields;
    }));
}

function getProdFormat() {
    var colorizer = winston.format.colorize();
    return winston.format.combine(winston.format.timestamp({ format: 'YYYY/MM/DD HH:mm:ss' }), winston.format.printf(function (info) {
        var app = info.app, category = info.category, message = info.message, timestamp = info.timestamp, rest = __rest(info, ["app", "category", "message", "timestamp"]);
        var level = info.level.substr(0, 5).padEnd(5);
        var moniker = colorizer.colorize(info[tripleBeam.LEVEL], level) + " " + timestamp.toString() + " - [" + app + (category ? " (" + category + ")" : '') + "]";
        var fields = Object.keys(rest).reduce(function (acc, k) {
            return acc + "   " + colorizer.colorize(info[tripleBeam.LEVEL], k) + "=" + JSON.stringify(rest[k]);
        }, '');
        return (moniker + " " + message).padEnd(116) + " " + fields;
    }));
}

var DryStoolie = (function () {
    function DryStoolie() {
    }
    DryStoolie.prototype.withFields = function () {
        return this;
    };
    DryStoolie.prototype.withField = function () {
        return this;
    };
    DryStoolie.prototype.withError = function () {
        return this;
    };
    DryStoolie.prototype.withType = function () {
        return this;
    };
    DryStoolie.prototype.withCategory = function () {
        return this;
    };
    DryStoolie.prototype.silly = function () {
        return this;
    };
    DryStoolie.prototype.debug = function () {
        return this;
    };
    DryStoolie.prototype.verbose = function () {
        return this;
    };
    DryStoolie.prototype.info = function () {
        return this;
    };
    DryStoolie.prototype.warn = function () {
        return this;
    };
    DryStoolie.prototype.error = function () {
        return this;
    };
    return DryStoolie;
}());

(function (LogLevel) {
    LogLevel["ERROR"] = "error";
    LogLevel["WARN"] = "warn";
    LogLevel["INFO"] = "info";
    LogLevel["VERBOSE"] = "verbose";
    LogLevel["DEBUG"] = "debug";
    LogLevel["SILLY"] = "silly";
})(exports.LogLevel || (exports.LogLevel = {}));
var Logger = (function () {
    function Logger(logger, fields) {
        this.logger = logger;
        this.fields = fields;
    }
    return Logger;
}());

var Stoolie = (function (_super) {
    __extends(Stoolie, _super);
    function Stoolie(logger, fields) {
        return _super.call(this, logger, fields) || this;
    }
    Stoolie.prototype.withFields = function (fields) {
        return new Stoolie(this.logger, __assign(__assign({}, this.fields), fields));
    };
    Stoolie.prototype.withField = function (key, value) {
        var fieldObject = {};
        fieldObject[key] = value;
        return this.withFields(fieldObject);
    };
    Stoolie.prototype.withError = function (err) {
        var error = Object.getOwnPropertyNames(err).reduce(function (acc, key) {
            acc[key] = err[key];
            return acc;
        }, {});
        return this.withFields({ error: error });
    };
    Stoolie.prototype.withCategory = function (category) {
        return this.withFields({ category: category });
    };
    Stoolie.prototype.withType = function (type) {
        return this.withFields({ type: type });
    };
    Stoolie.prototype.silly = function (message) {
        return this.log(exports.LogLevel.SILLY, message);
    };
    Stoolie.prototype.debug = function (message) {
        return this.log(exports.LogLevel.DEBUG, message);
    };
    Stoolie.prototype.verbose = function (message) {
        return this.log(exports.LogLevel.VERBOSE, message);
    };
    Stoolie.prototype.info = function (message) {
        return this.log(exports.LogLevel.INFO, message);
    };
    Stoolie.prototype.warn = function (message) {
        return this.log(exports.LogLevel.WARN, message);
    };
    Stoolie.prototype.error = function (message) {
        return this.log(exports.LogLevel.ERROR, message);
    };
    Stoolie.prototype.log = function (level, message) {
        this.logger.log(__assign(__assign({}, this.fields), { level: level.toString(), message: message }));
        return this;
    };
    return Stoolie;
}(Logger));

var isProduction = function (env) {
    return env.NODE_ENV.toLowerCase() === 'production';
};

var createWinstonLogger = function (options) { return winston.createLogger(options); };
var stoolie = function (level, loggerOptions) {
    if (level === void 0) { level = exports.LogLevel.INFO; }
    var format = getDevFormat();
    if (isProduction(process.env)) {
        format = getProdFormat();
    }
    var options = loggerOptions
        ? loggerOptions
        : {
            transports: [new winston.transports.Console({ format: format })],
        };
    var logger = createWinstonLogger(__assign({ level: level }, options));
    return new Stoolie(logger, {});
};
var NullLog = new DryStoolie();

exports.NullLog = NullLog;
exports.default = stoolie;
