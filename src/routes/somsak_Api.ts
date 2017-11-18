import * as express from 'express';
import * as crypto from 'crypto';
import { UserModel, UserTypeModel } from './../models/user';




const routerX = express.Router();
const UserMX = new UserModel();


routerX.get('/users', async (req, res, next) => {

    try {
        let rs = await UserMX.somsak_getUsers(req.db);
        res.send({ ok: true, rows: rs });
    } catch (error) {
        res.send({ ok: false, error: error.message });
    }
})

