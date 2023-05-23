
const fs = require('fs');
const path = require('path');
const http = require('http');
const https = require('https');
const events = require('events');



const _ = require('lodash');
const {
    parse,
    stringify,
    toJSON,
    fromJSON
} = require('flatted');

JSON.prototype.safeStringify = function (json) {
    const getCircularReplacer = () => {
        const seen = new WeakSet();
        return (key, value) => {
            if (typeof value === "object" && value !== null) {
                if (seen.has(value)) {
                    return;
                }
                seen.add(value);
            }
            return value;
        };
    };
    return JSON.stringify(json, getCircularReplacer());
};

String.prototype.replaceAll = function (key, value) {
    return this.split(key).join(value);
};

console.log(JSON.safeStringify({}))
