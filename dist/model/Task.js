"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var TaskSchema = (0, _mongoose.Schema)({
  title: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  ruc: { type: String, 
    required: true, 
    trim: true, 
    unique: true, 
    minLength: 10 },
  description: {
    type: String,
    trim: true
  },
  razon_social: { type: String, 
    required: true, 
    trim: true },
  done: {
    type: Boolean,
    "default": false
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)("Task", TaskSchema);

exports["default"] = _default;