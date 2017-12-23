"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config();
console.log('Hello world! You are running in a ' + process.env.NODE_ENV + ' environment.');
