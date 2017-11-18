"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const user_1 = require("./../models/user");
const routerX = express.Router();
const UserMX = new user_1.UserModel();
routerX.get('/users', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        let rs = yield UserMX.somsak_getUsers(req.db);
        res.send({ ok: true, rows: rs });
    }
    catch (error) {
        res.send({ ok: false, error: error.message });
    }
}));
exports.default = routerX;
//# sourceMappingURL=somsak_Api.js.map