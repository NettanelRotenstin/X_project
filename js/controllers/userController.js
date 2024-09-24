var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from 'express';
const router = express.Router();
//register
router.post('/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
//follow
router.post('/follow', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
router.get('/followers', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
export default router;
