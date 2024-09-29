"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userService_1 = __importDefault(require("../../services/userService"));
const router = express_1.default.Router();
//register
router.post("/register", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield userService_1.default.createNewUser(req.body);
        if (result) {
            res.json({
                err: false,
                message: "I was too lazy to change the default message",
                data: undefined,
            });
        }
        else {
            throw new Error("Cant Save New User to the file");
        }
    }
    catch (err) {
        res.status(404).json({
            err: true,
            message: "I was too lazy to change the default message",
            data: null,
        });
    }
}));
//follow
router.patch('/follow/:iId/:oId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        userService_1.default.follow(req.params.iId, req.params.oId);
        res.json({
            success: true
        });
    }
    catch (_a) {
        res.status(400).json({
            err: true,
            message: `usercontroller follow catch`,
            data: null
        });
    }
}));
//search users
router.get('/search', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json({
            err: false,
            message: `usercontroller register try is ok`,
            data: undefined
        });
    }
    catch (_a) {
        res.status(400).json({
            err: true,
            message: `usercontroller register catch`,
            data: null
        });
    }
}));
//profile
router.get('/profile', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json({
            err: false,
            message: `usercontroller register try is ok`,
            data: undefined
        });
    }
    catch (_a) {
        res.status(400).json({
            err: true,
            message: `usercontroller register catch`,
            data: null
        });
    }
}));
//my followers
router.get('/followers/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const myFollowers = yield userService_1.default.getFollowers(req.params.id);
        res.json({
            soccess: true,
            myFollowers
        });
    }
    catch (_a) {
        res.status(400).json({
            err: true,
            message: `usercontroller followers catch`,
            data: null
        });
    }
}));
//my follows
router.get('/following', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json({
            err: false,
            message: `usercontroller register try is ok`,
            data: undefined
        });
    }
    catch (_a) {
        res.status(400).json({
            err: true,
            message: `usercontroller register catch`,
            data: null
        });
    }
}));
//get one user
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield userService_1.default.getOneUser(req.params.id);
        console.log(user === null || user === void 0 ? void 0 : user.userName);
        res.json({
            soccess: true,
            username: user === null || user === void 0 ? void 0 : user.birthday
        });
    }
    catch (_a) {
        res.status(400).json({
            err: true,
            message: `usercontroller oneuser catch`,
            data: null
        });
    }
}));
exports.default = router;
