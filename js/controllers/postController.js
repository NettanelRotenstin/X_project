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
const postService_1 = __importDefault(require("../services/postService"));
const router = express_1.default.Router();
//get all posts
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield postService_1.default.getAllPosts();
        if (result) {
            res.json({
                err: false,
                result
            });
        }
    }
    catch (_a) {
        res.status(400).json({
            err: true,
            message: `usercontroller register catch`,
            data: null
        });
    }
}));
//create post
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield postService_1.default.createNewPost(req.body);
        if (result) {
            res.json({
                err: false,
                message: "I was too lazy to change the default message",
                data: undefined,
            });
        }
        else {
            throw new Error("Cant Save New post to the file");
        }
    }
    catch (_a) {
        res.status(400).json({
            err: true,
            message: `usercontroller register catch`,
            data: null
        });
    }
}));
//search post
router.get('/search', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield postService_1.default.getBySearch(req.query.content);
        res.json({
            result
        });
    }
    catch (_a) {
        res.status(400).json({
            err: true,
            message: `postcontroller search catch`,
            data: null
        });
    }
}));
//like post
router.patch('/like/:idU/:idP', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield postService_1.default.like(req.params.idU, req.params.idP);
        res.json({
            status: `OK`
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
//get one post
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield postService_1.default.getOnePosts(req.params.id);
        res.json({
            post
        });
    }
    catch (_a) {
        res.status(400).json({
            err: true,
            message: `postcontroller onepost catch`,
            data: null
        });
    }
}));
exports.default = router;
